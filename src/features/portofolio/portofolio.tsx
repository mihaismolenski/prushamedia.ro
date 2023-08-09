import { useCallback, useEffect, useState } from "react";

import "./portofolio.scss";
import story1Img from "../../gallery/stories/story1.jpeg";
import story2Img from "../../gallery/stories/story2.jpeg";
import story3Img from "../../gallery/stories/story3.jpeg";
import story4Img from "../../gallery/stories/story4.jpeg";
import { Gallery, GoToTop } from "../../components";

export const Portofolio = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [noColumns, setNoColumns] = useState(5);
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  useEffect(() => {
    document.body.style.overflow = !showGallery ? "unset" : "hidden";
    //if body has scrollbar visible
    if (document.body.scrollHeight > document.body.clientHeight) {
      document.body.style.borderRight = !showGallery
        ? "unset"
        : "0.25rem solid #0f0f0f";
    }
  }, [showGallery]);

  const resizeListener = useCallback(() => {
    const width = window.innerWidth;
    if (width > 1500) {
      setNoColumns(5);
    }
    if (width > 1200 && width <= 1500) {
      setNoColumns(4);
    }
    if (width > 900 && width <= 1200) {
      setNoColumns(3);
    }
    if (width > 600 && width <= 900) {
      setNoColumns(2);
    }
  }, [setNoColumns]);

  useEffect(() => {
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [resizeListener]);

  const photos: string[] = [
    story1Img,
    story2Img,
    story3Img,
    story4Img,
    story2Img,
    story3Img,
    story4Img,
    story2Img,
    story1Img,
    story3Img,
    story4Img,
    story2Img,
    story1Img,
    story3Img,
    story3Img,
    story3Img,
    story3Img,
    story1Img,
  ];

  const remainingPhotosNo = photos.length % noColumns;

  return (
    <div className="portofolio">
      <div className="portofolio-content">
        {Array.from(Array(noColumns)).map((value, colIndex) => {
          let count = Math.trunc(
            colIndex < remainingPhotosNo
              ? (photos.length + noColumns - 1) / noColumns
              : photos.length / noColumns
          );
          let startIndex =
            colIndex < remainingPhotosNo
              ? colIndex * count
              : remainingPhotosNo * (count + 1) +
                (colIndex - remainingPhotosNo) * count;

          return (
            <div className="column" key={`column-${colIndex}`}>
              {photos
                .slice(startIndex, startIndex + count)
                .map((value, photoIndex) => {
                  return (
                    <div key={`photo-${photoIndex}`}>
                      <img
                        src={value}
                        alt="gallery"
                        onClick={() => {
                          setShowGallery(true);
                          setSelectedPhoto(startIndex + photoIndex);
                        }}
                      />
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
      {showGallery && (
        <Gallery
          handleClose={() => setShowGallery(false)}
          images={photos}
          selectedPhoto={selectedPhoto}
          autoplay={false}
        />
      )}
      <GoToTop />
    </div>
  );
};
export default Portofolio;
