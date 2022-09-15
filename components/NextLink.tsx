import Link from "next/link"

type NextLinkProps = {
  href: string;
  locale?: string | false;
  className?: string;
  'aria-label'?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const NextLink: React.FC<NextLinkProps> = ({
  href,
  locale,
  children,
  ...rest
}: NextLinkProps) => {
  return (
    <Link href={href} locale={locale}>
      <a {...rest}>{children}</a>
    </Link>
  )
}

export default NextLink;