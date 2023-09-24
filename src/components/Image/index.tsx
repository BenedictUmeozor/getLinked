type PropTypes = {
  src: string;
  alt: string;
  className?: string;
};

const Image = ({ src, alt, className }: PropTypes) => {

  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default Image;
