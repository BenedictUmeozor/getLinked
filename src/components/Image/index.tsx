import { useRef, useEffect, useState } from "react";

type PropTypes = {
  src: string;
  alt: string;
  className?: string;
};

const Image = ({ src, alt, className }: PropTypes) => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    const currentImgRef = imgRef.current;

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : ""}
      alt={alt}
      className={className}
    />
  );
};

export default Image;
