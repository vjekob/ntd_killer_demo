import { Component } from "react";
import { bindComponentToItemState } from "../redux/itemReducer";

export const killerUrls = [];

const images = [
    {
        picture: require("../assets/images/killers/dennis.rader.jpg"),
        name: "Dennis Rader",
        age: 74,
        crime: "Serial killer",
        apprehended: "February 25, 2005",
        sentence: "Ten consecutive life sentences"
    },
    {
        picture: require("../assets/images/killers/jeffrey.dahmer.jpg"),
        name: "Jeffrey Dahmer",
        age: "dead",
        crime: "Serial killer",
        apprehended: "July 22, 1991",
        sentence: "Life sentence"
    },
    {
        picture: require("../assets/images/killers/gary.ridgway.jpg"),
        name: "Gary Ridgway",
        age: 70,
        crime: "Serial killer",
        apprehended: "November 30, 2001",
        sentence: "Life sentence"
    },
    {
        picture: require("../assets/images/killers/charles.manson.jpg"),
        name: "Charles Manson",
        age: "dead",
        crime: "Serial killer",
        apprehended: "November 19, 1969",
        sentence: "Life sentence"
    },
    {
        picture: require("../assets/images/killers/peter.moore.jpg"),
        name: "Peter Moore",
        age: 78,
        crime: "Serial killer",
        apprehended: "November, 1996",
        sentence: "Life sentence"
    },
    {
        picture: require("../assets/images/killers/aileen.wuornos.jpg"),
        name: "Aileen Wuornos",
        age: "dead",
        crime: "Serial killer",
        apprehended: "January 9, 1991",
        sentence: "death"
    },
];

class UnboundItemStateManager extends Component {
    async _defineImages() {
        let index = 0;
        for (i = 0; i < 50; i++) {
            images.forEach(async entry => {
                const { picture, ...rest } = entry;
                const killer = { ...rest, index };
                killerUrls.push(picture);
                this.props.addImage({ index: index, item: killer });
                index++;
            });
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        this._defineImages();
    }

    render() {
        return null;
    }
}

export const ItemStateManager = bindComponentToItemState(UnboundItemStateManager);