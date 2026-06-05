import { faqData } from './faqData';
import { posts } from './posts';

const entries = [];

// FAQ entries
faqData.forEach((item, i) => {
  const answerText = item.answer || [item.answerIntro, ...(item.answerList || [])].join(' ');
  entries.push({
    id: `faq-${i}`,
    type: 'faq',
    title: item.question,
    content: answerText,
    url: '/expansion/faq',
    label: 'FAQ',
  });
});

// Update posts
posts.forEach((post) => {
  const cleanBody = post.body.replace(/\[IMAGE:[^\]]+\]/g, '').replace(/\*\*/g, '');
  entries.push({
    id: `update-${post.id}`,
    type: 'update',
    title: `${post.date}: ${post.title}`,
    content: cleanBody,
    url: '/expansion/updates',
    label: 'Project Updates',
  });
});

// Expansion page sections
const pageSections = [
  {
    title: 'About the Project',
    content:
      'We are building a multifunctional Community Center. Classrooms to accommodate 130 students. Banquet Hall accommodating up to 250 guests including a stage and a dance floor. Commercial Kitchen. The expansion will enlarge school facilities for growing enrollment and create a multipurpose community events venue for weddings cultural celebrations community gatherings and major events.',
    url: '/expansion',
  },
  {
    title: 'Volunteer Opportunities',
    content:
      'We are striving to minimize the cost of construction by leveraging volunteer help. Community members have pledged HVAC heating cooling system and General Contractor services. Volunteer your time skills or professional services.',
    url: '/expansion/volunteer',
  },
  {
    title: 'Financial Support',
    content:
      'Without broad participation of our community members this project will not be possible. We need approximately 150 families contributing at least $100 monthly. Donate via PayPal. Select Armenian School and Community Center Fund.',
    url: '/expansion/donate',
  },
];

pageSections.forEach((section, i) => {
  entries.push({
    id: `page-${i}`,
    type: 'page',
    title: section.title,
    content: section.content,
    url: section.url,
    label: section.title,
  });
});

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter((w) => w.length > 2);
}

const stopWords = new Set([
  'the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'has',
  'her', 'was', 'one', 'our', 'out', 'this', 'that', 'with', 'have',
  'from', 'they', 'been', 'will', 'what', 'when', 'where', 'how', 'who',
  'which', 'their', 'there', 'about', 'would', 'does', 'into',
]);

export function searchContent(query) {
  const queryTokens = tokenize(query).filter((t) => !stopWords.has(t));
  if (queryTokens.length === 0) return [];

  const scored = entries.map((entry) => {
    const haystack = `${entry.title} ${entry.content}`.toLowerCase();
    let score = 0;
    queryTokens.forEach((token) => {
      const regex = new RegExp(token, 'gi');
      const matches = haystack.match(regex);
      if (matches) score += matches.length;
    });
    return { ...entry, score };
  });

  return scored
    .filter((e) => e.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}
