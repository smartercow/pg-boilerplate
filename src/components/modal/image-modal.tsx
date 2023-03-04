import { HeroIcon } from "@components/ui/icons/hero-icon";
import { ImageModalState } from "@lib/state/image-state";
import Image from "next/image";
import { useRecoilState } from "recoil";
import Modal from "./modal";
import cn from "clsx";
import { useState } from "react";

export default function ImageModal(): JSX.Element {
  const [imageModalState, setImageModalState] = useRecoilState(ImageModalState);
  const [isLoading, setLoading] = useState(true);

  return (
    <Modal
      open={imageModalState.open}
      closeModal={() => setImageModalState({ open: false })}
      className="mx-auto grid h-full w-full max-w-lg place-items-center md:max-w-2xl"
    >
      <div className="h-full">
        <div className="grid w-full place-items-end">
          <>
            <button
              className="hover-animation cursor-pointer hover:text-primary"
              onClick={() => setImageModalState({ open: false })}
            >
              <HeroIcon iconName="XCircleIcon" className="h-10 w-10" />
            </button>
          </>
        </div>
        <div className="relative -mt-1 px-7">
          <Image
            alt={imageModalState.name ?? "Sexuzy"}
            src={
              imageModalState.source ?? "/assets/sexuzy/images/placeholder.svg"
            }
            width={500}
            height={600}
            className={cn(
              "max-h-[80vh] w-full rounded-sm object-contain duration-700 ease-in-out",
              isLoading
                ? "scale-105 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            )}
            onLoadingComplete={() => setLoading(false)}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 opacity-0"></div>
        </div>
      </div>
    </Modal>
  );
}
