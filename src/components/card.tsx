interface Images{
  alt: string,
  src: srcImage
}

type srcImage = {
  medium: string,
} 

type Props = {
  img: Images;
};

export const Card = ({ img }: Props) => {
  return (
    <>
      <div>
        <img alt={img.alt} src={img.src.medium} />
      </div>
    </>
  );
};