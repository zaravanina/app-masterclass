const getImageCrop = (crops: any[] | undefined, preferredCrop?: string): any => {
    let imageCrop = undefined;

    if (crops && crops.length > 0) {
        imageCrop = crops.find((crop) => {
            if (preferredCrop) {
                return crop.alias === preferredCrop;
            } else {
                return crop.alias === "Original";
            }
        });
    }

    return imageCrop;
};

export default getImageCrop;
