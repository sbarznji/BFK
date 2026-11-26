import type { Metadata } from 'next';
import Link from '@/components/bfk/link';
import { PageIntro, EventList, ContactInvitation } from '@/components/bfk/content';
export const metadata: Metadata = {alternates:{canonical:'/events'},title:'Events',description:'Meetings, roundtables, briefings and cultural programmes bringing people together through British Friends of Kurdistan.'};
export default function Events() {return <main id="main-content"><PageIntro title="Room for a conversation." description="Roundtables, briefings, cultural programmes and exchanges that bring the relationship to life."/><section className="section container"><div className="section-heading"><h2>Upcoming events</h2><Link href="/contact" className="text-link">Discuss a future event</Link></div><EventList/></section><ContactInvitation/></main>;}
