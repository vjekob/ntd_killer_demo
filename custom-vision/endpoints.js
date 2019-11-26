const PROJECT_ID = "e116de8c-224a-4853-b569-2cec5932fbac";
const TRAINING_KEY = "3d089c169e944c848644194b246d6559";

const API_ENDPOINT = "https://westeurope.api.cognitive.microsoft.com";
const API_ROOT = `/customvision/v3.0/training/projects/${PROJECT_ID}`;
const BASE_URL = `${API_ENDPOINT}${API_ROOT}`

const METHOD = {
    GET: "GET",
    POST: "POST"
}

const ENDPOINTS = {
    TAG: "/tags",
    IMAGE_TAG: "/images/tags"
}

const getAuthorization = () => ({
    "Training-Key": TRAINING_KEY
});

const getJsonHeaders = headers => () => {
    const json = {
        "Content-Type": "application/json"
    };
    const otherHeaders = headers || {};
    return { ...json, ...otherHeaders };
};

const getImageTagBody = (imageId, tagId) => ({ tags: [{ imageId, tagId }] });
//const getImageTagQuery = (imageId, tagId) => () => `imageIds=${imageId}&tagIds=${tagId}`;

const getUrl = (endpoint, queryString) => `${BASE_URL}${endpoint}${queryString ? `?${queryString}` : ""}`;

const invokeApi = async (method, endpoint, getQuery, getHeaders, getBody) => {
    const queryString = getQuery ? getQuery() : "";
    const customHeaders = getHeaders ? getHeaders() : {};
    const headers = { ...getAuthorization(), ...customHeaders };
    const body = getBody ? getBody() : undefined;
    const request = { method, headers };
    if (body)
        request.body = JSON.stringify(body);

    const response = await fetch(getUrl(endpoint, queryString), request);

    const json = await response.json();
    return json;
}

export const CustomVisionAPI = {
    getTags: () => invokeApi(METHOD.GET, ENDPOINTS.TAG),
    createTag: tag => invokeApi(METHOD.POST, ENDPOINTS.TAG, () => `name=like_${tag}&description=Custom%20user%20tag%20for%20${tag}`, getJsonHeaders()),
    likeImage: async (imageId, tagId) => await invokeApi(METHOD.POST, ENDPOINTS.IMAGE_TAG, null, getJsonHeaders(), () => getImageTagBody(imageId, tagId)),
}
