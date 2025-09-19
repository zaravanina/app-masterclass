"use client";

import RichText from "@/components/RichText/RichText";
import { TextPageProps } from "@/models/page.interface";
import { FunctionComponent, JSX } from "react";

const TextPage: FunctionComponent<TextPageProps> = (props): JSX.Element => {
  return (
    <section>
      {props.properties?.blocks?.items?.map((block, index) => {
        const properties = block?.content?.properties;
        const { headline, bodyText } = properties || {};
        return (
          <div key={index} className="mb-8">
            {headline && <h2>{headline}</h2>}
            {bodyText && <RichText {...bodyText}></RichText>}
          </div>
        );
      })}
    </section>
  );
};

export default TextPage;
