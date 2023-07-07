import "./gallery.scss";
import { useEffect, useState } from "react";

export interface GalleryProps {
  handleClose: Function;
  images: string[];
  selectedPhoto: number;
  autoplay: boolean;
}

export const Gallery = ({
  handleClose,
  images,
  selectedPhoto,
  autoplay,
}: GalleryProps) => {
  const [currentPhoto, setCurrentPhoto] = useState(selectedPhoto);

  const goPrev = () => {
    setCurrentPhoto((currentPhoto + images.length - 1) % images.length);
  };

  const goNext = () => {
    setCurrentPhoto((currentPhoto + 1) % images.length);
  };

  useEffect(() => {
    if (!autoplay) return;

    let interval = setInterval(() => {
      goNext();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div
        className="gallery-background"
        onClick={() => handleClose && handleClose()}
      ></div>
      <div className="gallery-wrapper">
        <div className="gallery-content">
          {!autoplay && (
            <div className="gallery-button gallery-back" onClick={goPrev}></div>
          )}
          {images.map((img, index) => (
            <img
              key={index}
              alt="gallery"
              src={img}
              className={index === currentPhoto ? "show" : "not-show"}
            />
          ))}

          {!autoplay && (
            <div className="gallery-button gallery-next" onClick={goNext}></div>
          )}
          <img
            className="gallery-exit-full-screen"
            src="/images/exit-fullscreen.png"
            alt="exit-fullscreen"
            onClick={() => handleClose()}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
