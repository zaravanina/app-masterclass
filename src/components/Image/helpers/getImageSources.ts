import getImageHeight from "./getImageHeight";

interface ImageSourcesProps {
  src: string;
  width: number;

  coordinates?: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };

  aspectRatio?: {
    aspectRatioX: number;
    aspectRatioY: number;
  };

  format?: string;
}

const getImageSources = ({
  src,
  width,
  coordinates,
  aspectRatio,
  format,
}: ImageSourcesProps) => {
  const imageUrl = src;
  const params = new URLSearchParams();

  if (coordinates) {
    params.set(
      "cc",
      `${coordinates.x1},${coordinates.y1},${coordinates.x2},${coordinates.y2}`
    );
  } else {
    params.set("rxy", `${0.5},${0.5}`);
  }
  params.set("quality", "85");
  if (format === "webp") {
    params.set("format", "webp");
  }
  params.set("width", `${width}`);

  const defaultCoordinates =
    coordinates &&
    coordinates.x1 == 0 &&
    coordinates.y1 == 0 &&
    coordinates.x2 == 0 &&
    coordinates.y2 == 0;

  if (aspectRatio && defaultCoordinates) {
    const imageHeight = getImageHeight(
      width,
      aspectRatio.aspectRatioX,
      aspectRatio.aspectRatioY
    );
    params.set("height", `${imageHeight}`);
  }

  const querySeparator = imageUrl.toString().indexOf("?") > 0 ? "&" : "?";
  const finalUrl = `${imageUrl}${querySeparator}${params.toString()}`;
  return finalUrl;
};

export default getImageSources;
