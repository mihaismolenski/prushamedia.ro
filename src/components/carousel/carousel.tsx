import React, {useState, useEffect, ReactElement} from "react";

import "./carousel.scss";

//https://codesandbox.io/s/carousel-fade-effect-wl29r
export const Carousel = ({children}: { children: ReactElement[] }) => {
    const [counter, setCounter] = useState(1);
    const content = children;

    const handleNext = () => {
        if (counter !== content.length) {
            setCounter(counter + 1);
        } else {
            setCounter(1);
        }
    };

    const handlePage = (page: number) => {
        setCounter(page);
    };

    useEffect(() => {
        let interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    });

    return (
        <div className="carousel-wrapper">
            <div className="carousel">
                <div
                    className="slide"
                >
                    {content.map((item, index) => (
                        <div
                            className={counter - 1 === index ? "show" : "not-show"}
                            key={index}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className="page">
                    {content.map((item, index: number) => (
                        <span
                            key={index}
                            className={counter - 1 === index ? "dot active" : "dot"}
                            onClick={() => handlePage(index + 1)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
