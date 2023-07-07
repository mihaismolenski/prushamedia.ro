import "./gallery.scss";

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
  return (
    <>
      <div
        className="gallery-background"
        onClick={() => handleClose && handleClose()}
      ></div>
      <div className="gallery-wrapper">
        <div className="gallery-content">
          <img alt="gallery" src={images[selectedPhoto]} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
