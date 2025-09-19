// return statement solution

/*  return (
    <section>
      {props.properties?.blocks?.items?.map((block, index) => {
        const properties = block?.content?.properties;
        const { textColumns } = properties || {};
        return (
          <div key={index} className="mb-8">
            {textColumns?.items.map((column) => {
              const { headline, bodyText, tagline } = column.content.properties;
              return (
                <div key={column.content.id}>
                  {headline && <h1>{headline}</h1>}
                  {bodyText && <RichText {...bodyText}></RichText>}
                  {tagline && <h2>{tagline}</h2>}
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  ); */
