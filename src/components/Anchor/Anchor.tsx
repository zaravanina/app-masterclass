import { FunctionComponent } from "react";
import Link from "next/link";
import { LinkModel } from "@/models/settings.interface";

export const cleanLink = (url: string) => url.replace(/^\/+/, "");

interface AnchorProps extends LinkModel {
  newTab?: boolean;
  draggable?: boolean;
  className?: string;
  queryString?: string;
  children: React.ReactNode;
}
const Anchor: FunctionComponent<AnchorProps> = (props) => {
  const { newTab, draggable, className, route, queryString, children } = props;

  const finalLink = route?.path ? cleanLink(route.path) : "/";
  let target = "_self";

  if (newTab) {
    target = "_blank";
  }
  const finalUrl = finalLink + (queryString || "");

  return (
    <Link
      aria-label={"Navigate to " + finalLink}
      href={finalUrl ?? ""}
      draggable={draggable ?? true}
      passHref
      className={`flex items-center no-underline hover:underline focus:underline ${
        className ? " " + className : ""
      }`}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
};

export default Anchor;
