/*return (
    <section>
      {props.properties?.blocks?.items?.map((block, index) => {
        const properties = block?.content?.properties;
        const { headline, bodyText, tagline } = properties || {};
        return (
          <div key={index} className="mb-8">
            {tagline && <h1>{tagline}</h1>}
            {headline && <h1>{headline}</h1>}
            {bodyText && <RichText {...bodyText}></RichText>}
          </div>
        );
      })}
    </section>
  );*/
