/* return (
    <section>
      {props.properties?.blocks?.items?.map((block, index) => {
        const properties = block?.content?.properties;
        const { image: nestedImage } = properties || {};
        const { imageCaption, image, alternative, crop } =
          nestedImage?.items?.[0]?.content?.properties || {};
        return (
          <div key={index} className="mb-8">
            {image && <ImageComponent image={image} crop={crop} alt={alternative} />}
            {imageCaption && <p>{imageCaption}</p>}
          </div>
        );
      })}
    </section>
  ); */
