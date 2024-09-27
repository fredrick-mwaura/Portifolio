import Image from "next/image";

const Images = ({ src, alt, width, height, className }) => {
    return (
        <Image
            src={src}
            alt={alt || "image"}
            width={width}
            height={height}
            className={className}
        />
    );
};

export default Images;