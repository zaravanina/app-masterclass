"use client";

import ImageComponent from "@/components/Image/Image";
import { ImagePageProps } from "@/models/page.interface";
import { FunctionComponent, JSX } from "react";

const ImagePage: FunctionComponent<ImagePageProps> = (props): JSX.Element => {
  return (
    <section>
      {props.properties?.blocks?.items?.map((block, index) => {
        const properties = block?.content?.properties;
        const { image: nestedImage } = properties || {};
        const { imageCaption, image, alternative, crop } =
          nestedImage?.items?.[0]?.content?.properties || {};
        return (
          <div key={index} className="mb-8">
            {image && <ImageComponent image={image} />}
          </div>
        );
      })}
    </section>
  );
};

export default ImagePage;
