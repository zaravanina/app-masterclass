import { FunctionComponent } from "react";
import getImageAspectRatio from "./helpers/getImageAspectRatio";
import getImageCrop from "./helpers/getImageCrop";
import getImageHeight from "./helpers/getImageHeight";
import Image from "next/image";
import getImageSources from "./helpers/getImageSources";
import getCropAlias from "./helpers/getCropAlias";
import ImageRequiredProps from "@/components/Image/models/image.interface";

const ImageComponent: FunctionComponent<ImageRequiredProps> = (props) => {
  const { image, crop, alternativeText, alt, width, loadingPriority } = props;

  const selectedCrop = crop && crop !== "Original" ? crop : null;
  const isImg = image && image.length > 0 ? image[0] : null;
  const preferredCrop = getCropAlias(selectedCrop || "Original");
  const imageCrop = isImg ? getImageCrop(isImg.crops, preferredCrop) : null;

  const coordinates = imageCrop?.coordinates
    ? imageCrop.coordinates
    : { x1: 0, y1: 0, x2: 0, y2: 0 };

  const aspectRatio = getImageAspectRatio(
    imageCrop,
    isImg?.width,
    isImg?.height
  );

  const imgWidth = isImg?.width ? Number(isImg?.width) : 800;
  const imgHeight = getImageHeight(
    imgWidth,
    aspectRatio.aspectRatioX,
    aspectRatio.aspectRatioY
  );

  const desktopWidth = width && width.desktop ? width.desktop + "px" : "1920px";
  const tabletWidth = width && width.tablet ? width.tablet + "px" : "1280px";
  const mobileWidth = width && width.mobile ? width.mobile + "px" : "400px";

  const imageSrc =
    (process.env.NEXT_PUBLIC_UMBRACO_URL ?? "") + (isImg?.url ?? "");

  return (
    <div className="relative bg-cover">
      <div className="absolute inset-0 bg-[rgba(255,255,255,0)] backdrop-blur-[13.6px]"></div>
      {isImg && (
        <Image
          loader={({ width }) =>
            getImageSources({
              src: imageSrc,
              width,
              coordinates,
              aspectRatio,
              format: isImg.extension === "svg" ? "svg" : "webp",
            })
          }
          width={imgWidth}
          height={imgHeight}
          src={imageSrc}
          alt={alternativeText ?? alt ?? ""}
          className="relative z-20 w-full h-full object-cover"
          priority={loadingPriority ?? false}
          placeholder="empty"
          sizes={`(max-width: 768px) ${mobileWidth}, (max-width: 1280px) ${tabletWidth}, ${desktopWidth}`}
        />
      )}
    </div>
  );
};

export default ImageComponent;
