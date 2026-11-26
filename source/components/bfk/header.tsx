'use client';
import Link from '@/components/bfk/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetClose } from '@/components/ui/sheet';
const links = [{href:'/', label:'Home'}, {href:'/about', label:'About BFK'}, {href:'/our-work', label:'Our work'}, {href:'/events', label:'Events'}, {href:'/contact', label:'Get in touch'}];
// Display the supplied artwork unchanged, framing only its excess white margins with CSS.
export function Wordmark() { return <span className="official-logo"><img src="/images/bfk-logo.webp" width="480" height="269" alt="British Friends of Kurdistan — BFK" /></span>; }
export default function Header() {
  const pathname = usePathname(); const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 8); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  return <header className={'site-header'+(scrolled?' is-scrolled':'')}><div className="container header-inner"><Link href="/" aria-label="British Friends of Kurdistan home" className="brand"><Wordmark /></Link><nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined} className={link.href==='/contact'?'nav-contact':''}>{link.label}</Link>)}</nav><div className="mobile-menu"><Sheet open={open} onOpenChange={setOpen}><SheetTrigger asChild><button className="menu-button" aria-label="Open navigation"><Menu size={24} /><span>Menu</span></button></SheetTrigger><SheetContent className="bfk-drawer"><SheetTitle className="drawer-title">British Friends of Kurdistan</SheetTitle><SheetDescription>Explore BFK</SheetDescription><nav className="drawer-nav" aria-label="Mobile navigation">{links.map(link => <SheetClose asChild key={link.href}><Link href={link.href} aria-current={pathname===link.href?'page':undefined}>{link.label}</Link></SheetClose>)}</nav><p className="drawer-note">An independent London-based organisation connecting the United Kingdom and Kurdistan.</p></SheetContent></Sheet></div></div></header>;
}
