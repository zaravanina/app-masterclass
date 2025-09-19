import { UmbracoImageCrop } from "../models/image.interface";

const getImageAspectRatio = (crop: UmbracoImageCrop | undefined, imageWidth?: string, imageHeight?: string): any => {
    if (crop) {
        return {
            aspectRatioX: crop.width,
            aspectRatioY: crop.height,
        };
    } else if (imageWidth && Number(imageWidth) > 0 && imageHeight && Number(imageHeight) > 0) {
        return {
            aspectRatioX: imageWidth,
            aspectRatioY: imageHeight,
        };
    } else {
        return {
            aspectRatioX: 9,
            aspectRatioY: 16,
        };
    }
};

export default getImageAspectRatio;
