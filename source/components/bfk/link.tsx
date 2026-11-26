import type { AnchorHTMLAttributes } from 'react';

// Plain anchor links. The site is a static export, so normal page loads are
// the most reliable navigation; the framework's client-side router fails here.
export default function Link({ href, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return <a href={href} {...rest} />;
}
