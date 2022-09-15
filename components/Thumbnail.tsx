import Image from 'next/image'
import Link from 'next/link'

type ThumbnailProps = {
  title: string;
  src: string;
  slug?: string;
  layoutType?: 'fixed';
}

const Thumbnail: React.FC<ThumbnailProps> = ({title, layoutType, src, slug}: ThumbnailProps) => {
  const image = (
    <Image
      src={src}
      alt={`Cover image for ${title}`}
      width={2400}
      height={1600}
      layout={layoutType? layoutType: "responsive" }
      object-fit="cover"
    />
  );

  return (
    <>
      {slug ? (
        <Link href={`/blog/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  )
}

export default Thumbnail;