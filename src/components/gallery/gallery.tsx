import "./gallery.scss";
import { useState } from "react";

export interface GalleryProps {
  handleClose: Function;
  images: string[];
  selectedPhoto: number;
}

export const Gallery = ({
  handleClose,
  images,
  selectedPhoto,
}: GalleryProps) => {
  const [currentPhoto, setCurrentPhoto] = useState(selectedPhoto);

  const goPrev = () => {
    setCurrentPhoto((currentPhoto + images.length - 1) % images.length);
  };

  const goNext = () => {
    setCurrentPhoto((currentPhoto + 1) % images.length);
  };

  return (
    <>
      <div
        className="gallery-background"
        onClick={() => handleClose && handleClose()}
      ></div>
      <div className="gallery-wrapper">
        <div className="gallery-content">
          <div className="gallery-button gallery-back" onClick={goPrev}></div>
          {images.map((img, index) => (
            <img
              key={index}
              alt="gallery"
              src={img}
              className={index === currentPhoto ? "show" : "not-show"}
            />
          ))}

          <div className="gallery-button gallery-next" onClick={goNext}></div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
