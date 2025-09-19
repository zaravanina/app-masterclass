import { CROP_NAME_TYPE, CROP_TYPE } from "./crop.types";

export interface UmbracoImage {
    id: number;
    crops: UmbracoImageCrop[];
    extension: string;
    focalPoint?: UmbracoImageFocalPoint;
    height?: string;
    width?: string;
    url: string;
    name: string;
    altText: string;
    copyright: string;
}

export interface UmbracoImageCrop {
    label: CROP_TYPE;
    alias: CROP_NAME_TYPE;
    coordinates?: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    };
    height: number;
    width: number;
}

export default interface ImageRequiredProps {
    wrapperClass?: string;
    imageClass?: string;

    alt?: string;
    alternativeText?: string;

    width?: { desktop: number; tablet: number; mobile: number };

    crop?: CROP_TYPE | null;
    image?: UmbracoImage[];
    src?: string;

    loadingPriority?: boolean;
}

export interface UmbracoFile {
    _contentType: "File";
    umbracoFile: string;
    umbracoExtension: string;
}

export interface VideoBlockList {
    content: {
        contentType: "blockVideoNestedYouTube" | "blockVideoNestedLocal";
        video?: UmbracoFile;
        videoUrl?: string;
        videoAutoplay?: boolean;
        videoLoop?: boolean;
        videoCrop?: CROP_TYPE;
    };
}

export interface UmbracoImageFile {
    crops?: UmbracoImageCrop[];
    focalPoint?: UmbracoImageFocalPoint;
    src: string;
}

export interface UmbracoImageFocalPoint {
    left: number;
    top: number;
}
