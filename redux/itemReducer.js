import { connect } from "react-redux";

const INITIAL_STATE = {
    images: [],
    currentImagesIndex: 0,
    startAt: 1
};

const ACTION_ADDIMAGE = "item.ACTION_ADDIMAGE";
const ACTION_SWIPE = "item.ACTION_SWIPE";
const ACTION_STARTAT = "item.ACTION_STARTAT";

const actionHandlers = {
    [ACTION_ADDIMAGE]: (state, payload) => {
        const result = { ...state };
        result.images = [...result.images, payload];
        if (result.currentImagesIndex === -1)
            result.currentImagesIndex = 0;
        return result;
    },

    [ACTION_SWIPE]: (state) => {
        const result = { ...state };
        result.currentImagesIndex++;
        return result;
    },

    [ACTION_STARTAT]: (state, startAt) => ({ ...state, startAt })
};

const getTinderState = state => {
    const { images, currentImagesIndex } = state;

    const result = {
        currentItem: null,
        nextItem: null
    };

    if (currentImagesIndex < images.length)
        result.currentItem = images[currentImagesIndex];
    if (currentImagesIndex < images.length - 1)
        result.nextItem = images[currentImagesIndex + 1];

    return result;
};

const mapStateToImageSource = state => getTinderState(state.item);

const mapStateToProps = state => ({ itemState: state.item });

const mapDispatchToProps = dispatch => ({
    addImage: image => dispatch({ type: ACTION_ADDIMAGE, payload: image }),
    swipe: () => dispatch({ type: ACTION_SWIPE }),
    startAt: startAt => dispatch({ type: ACTION_STARTAT, payload: startAt })
});

export const itemReducer = (state = INITIAL_STATE, action) =>
    actionHandlers.hasOwnProperty(action.type)
        ? actionHandlers[action.type](state, action.payload)
        : state;

export const bindComponentToImageSource = component => connect(mapStateToImageSource, mapDispatchToProps)(component);
export const bindComponentToItemState = component => connect(mapStateToProps, mapDispatchToProps)(component);
export const bindComponentToItemDispatch = component => connect(null, mapDispatchToProps)(component);