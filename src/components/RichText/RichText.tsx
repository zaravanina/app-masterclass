"use client";

import { FunctionComponent, JSX, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { RichTextType } from "@/models/page.interface";

const RichText: FunctionComponent<RichTextType> = (props): JSX.Element => {
  const { markup } = props;
  const [hydrated, setHydrated] = useState(false);
  const path = usePathname();

  const processMarkup = (markup: string) => {
    if (!markup) return "";

    return markup.replace(
      /<a\s+([^>]*?)href="([^"]*?)"([^>]*?)>/g,
      (match, beforeHref, url, afterHref) => {
        const dataAnchorMatch = match.match(/data-anchor="([^"]+)"/);
        const anchor = dataAnchorMatch ? dataAnchorMatch[1] : "";

        // Trim only trailing slash from URL
        const normalizedUrl = url.replace(/\/$/, "");
        const normalizedPath = path.replace(/\/$/, "");

        // If the link points to the same page, make it just an anchor
        if (normalizedUrl === normalizedPath && anchor) {
          return `<a ${beforeHref}href="${anchor}" onClick="document.getElementById('${anchor}')?.scrollIntoView({ behavior: 'smooth' });"${afterHref}>`;
        }

        return `<a ${beforeHref}href="${url}${
          anchor ? anchor : ""
        }"${afterHref}>`;
      }
    );
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated ? (
    <>
      {markup ? (
        <div dangerouslySetInnerHTML={{ __html: processMarkup(markup) }} />
      ) : null}
    </>
  ) : (
    <></>
  );
};

export default RichText;
