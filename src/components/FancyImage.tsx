import { prominent } from "color.js";
import { useEffect, useState } from "react";

type Props = {
  src: string;
};

/**
 * like a normal image, but sets a fancy bg color
 * based on the contents of the image! (shown through padding)
 */
export const FancyImage = ({ src }: Props) => {
  const [bgColor, setBgColor] = useState<string | undefined>(undefined);
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const prominent_color = await prominent(src, { amount: 1 });
      if (Array.isArray(prominent_color)) {
        console.log(prominent_color);
        setBgColor(`rgb(${prominent_color.join(",")})`);
      }
      console.log("color.js calculate color from image...");
    })();
  }, [imgLoaded]);

  return (
    <div className="flex rounded-xl p-10 w-[200px] h-[200px]" style={{ backgroundColor: bgColor }}>
      <img
        src={src}
        className="flex-initial object-contain"
        onLoad={() => {
          setImgLoaded(true);
        }}
      />
    </div>
  );
};
