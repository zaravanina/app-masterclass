import { Dispatch, SetStateAction } from "react";
/*import { getPlaiceholder } from "plaiceholder";*/

const useImagePlaceholder = (placeholderUrl: string, setImagePlaceholder: Dispatch<SetStateAction<string>>) => {
    /* useEffect(() => {
        console.log("herere");
        if (typeof window === "undefined") {
            return;
        }

        const fetchPlaceholder = async () => {
            try {
                const buffer = await fetch(placeholderUrl).then(async (res) => Buffer.from(await res.arrayBuffer()));
                const { base64 } = await getPlaiceholder(buffer);
                setImagePlaceholder(base64);
            } catch (error) {
                console.error("Error generating image placeholder:", error);
                setImagePlaceholder(placeholderUrl);
            }
        };

        if (placeholderUrl && typeof window !== "undefined") {
            fetchPlaceholder();
        }
    }, [placeholderUrl, setImagePlaceholder]);*/
    // TODO just TODO... stuck with dynamic placeholder - either renedered more hooks or hydration issue
};

export default useImagePlaceholder;
