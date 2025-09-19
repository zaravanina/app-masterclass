import { CROP_TYPE } from "../models/crop.types";

const getCropAlias = (crop: CROP_TYPE) => {
    switch (crop) {
        case "Fullscreen (4:3)":
            return "fullscreen";
        case "Widescreen (16:9)":
            return "widescreen";
        case "Square (1:1)":
            return "square";
        case "Vertical (9:16)":
            return "vertical";
        case "Portrait (3:4)":
            return "portrait";
        case "Ultrawide (32:9)":
            return "ultrawide";
        case "Superwide (54:9)":
            return "superwide";
        case "Original":
            return "Original";
        default:
            return "Original";
    }
};

export default getCropAlias;