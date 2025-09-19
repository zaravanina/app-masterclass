const getImageHeight = (imageWidth: number, aspectRatioX?: number, aspectRatioY?: number): number => {
    if (aspectRatioX && aspectRatioY) {
        return Math.round(imageWidth * (aspectRatioY / aspectRatioX));
    } else {
        return Math.round(imageWidth * (3 / 4));
    }
};

export default getImageHeight;
