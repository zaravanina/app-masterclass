import { CROP_TYPE } from "@/components/Image/models/crop.types";
import { UmbracoImage } from "@/components/Image/models/image.interface";

export default interface PageData {
  contentType: string;
  id: string;
  name: string;
  createDate?: string;
  updateDate?: string;
  route: Culture;
  properties: PageProperties;

  cultures: {
    [key: string]: Culture;
  };
}

export interface PageProperties {
  blocks?: {
    items?: any[];
  };
}

export interface TextPageProps extends PageData {
  properties: {
    blocks?: {
      items?: TextBlockProps[];
    };
  };
}

export interface TextColumnsPageProps extends PageData {
  properties: {
    blocks?: {
      items?: TextColumnsBlockProps[];
    };
  };
}

export interface ImagePageProps extends PageData {
  properties: {
    blocks?: {
      items?: ImageBlockProps[];
    };
  };
}

export interface Culture {
  path: string | undefined;
  startItem: {
    id: string;
    path: string;
  };
}

export interface TextBlockProps {
  content: {
    contentType: "blockText";
    id: string;
    properties: {
      backgroundColor?: string;
      bodyText?: RichTextType;
      headline?: string;
      tagline?: string;
    };
  };
}

export interface TextColumnsBlockProps {
  content: {
    contentType: "blockTextColumns";
    id: string;
    properties: {
      backgroundColor?: string;
      textColumns?: { items: TextColumnType[] };
    };
  };
}

export interface ImageBlockProps {
  content: {
    contentType: "blockImage";
    id: string;
    properties: {
      backgroundColor?: string;
      image?: { items: ImageInnerType[] };
      altText?: string;
    };
  };
}

export type RichTextType = {
  markup: string;
};

export interface ImageInnerType {
  content: {
    contentType: "blockImageNestedImage";
    id: string;
    properties: {
      image?: UmbracoImage[];
      alternative?: string;
      crop?: CROP_TYPE;
      imageCaption?: string;
    };
  };
}

export interface TextColumnType {
  content: {
    contentType: "blockTextColumnsNestedTextEntry";
    id: string;
    properties: {
      tagline?: string;
      headline?: string;
      bodyText?: RichTextType;
    };
  };
}
