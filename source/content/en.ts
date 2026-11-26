// English content is isolated for a future /ku locale. Localise routes and set lang/dir per locale at launch.
export const locales = { en: { lang: 'en-GB', dir: 'ltr' }, ku: { lang: 'ckb', dir: 'rtl' } } as const;
export const copy = {
  hero: {title: 'Strengthening Relations Through Informed Diplomatic and Policy Dialogue',subtitle: 'An independent platform advancing dialogue, cultural exchange, and commercial engagement between the United Kingdom and Kurdistan.'},
  introduction: 'BFK is formed to act as a vital bridge for the United Kingdom and Kurdistan partnership, helping cultivate deeper cultural, educational, and diplomatic connectivity directly in the heart of the UK capital. We bring together MPs, peers, and supporters dedicated to promoting a strong bilateral relationship and supporting peace in the Middle East.',
  focus: [
    { id: 'dialogue', title: 'Diplomatic and policy dialogue', text: 'Hosting roundtables, briefings, and strategic discussions on the key issues shaping the relationship between the UK and Kurdistan.', activities: ['Roundtables', 'Parliamentary briefings', 'Delegations'] },
    { id: 'exchange', title: 'Culture, education and exchange', text: 'Deepening mutual understanding by connecting artists, academics, and students from both nations.', activities: ['Cultural programmes', 'Academic exchange', 'Institutional connections'] },
    { id: 'trade', title: 'Trade and investment engagement', text: 'Unlocking new economic opportunities and building robust commercial ties between British and Kurdish markets.', activities: ['Trade introductions', 'Business discussions', 'Commercial delegations'] },
  ],
};
