// The four studios. Each one owns a shade from the brand palette, used as the
// ground colour of its section on the home page and of its own page.

export type StudioSlug = 'hair' | 'beauty' | 'bridal' | 'creative';
export type Shade = 'mauve' | 'blush' | 'sand' | 'deep';

export interface Studio {
  slug: StudioSlug;
  name: string;
  shade: Shade;
  /** Short line printed under the studio's pan, like a shade name. */
  line: string;
  /** Photo id shown in the studio's pan. */
  pan: string;
  description: string;
  intro: string;
  services: string[];
  /** Hair and beauty appointments can be booked straight on Fresha. */
  bookable: boolean;
  enquiryLabel: string;
  /** Heading and line for the band at the end of the studio page. */
  close: { title: string; copy: string };
}

export const studios: Studio[] = [
  {
    slug: 'hair',
    name: 'Hair Studio',
    shade: 'mauve',
    line: 'Cuts, colour and styling',
    pan: 'hair/01-hollywood-waves',
    description:
      'Cuts, colour, foils, smoothing treatments and event styling at the Haus of Shades studio in Doreen, Melbourne. Book online on Fresha.',
    intro:
      'Cuts, colour, foils and smoothing treatments at the Doreen studio, with styling for events and shoots. Not sure what you need? Start with a consultation.',
    services: [
      'Consultations',
      'Cuts for women and girls',
      'Colour, regrowth tint and toner',
      'Foils and highlights',
      'Smoothing treatments',
      'Hair and scalp spa',
      'Styling for events and shoots',
    ],
    bookable: true,
    enquiryLabel: 'Send an enquiry',
    close: { title: 'Book the Hair Studio', copy: 'Pick a time on Fresha, or send an enquiry if you’d like to talk it through first.' },
  },
  {
    slug: 'beauty',
    name: 'Beauty Studio',
    shade: 'blush',
    line: 'Makeup for events',
    pan: 'beauty/01-red-lip-portrait',
    description:
      'Makeup for formals, parties and cultural celebrations, from soft glam to full glam, at the Haus of Shades studio in Doreen, Melbourne.',
    intro:
      'Makeup for formals, parties and cultural celebrations, from soft and natural to full glam. Add hair styling to finish the look.',
    services: [
      'Event and party makeup',
      'Formal and graduation makeup',
      'Cultural and festive looks',
      'Soft glam and full glam',
      'Makeup with hair styling',
    ],
    bookable: true,
    enquiryLabel: 'Send an enquiry',
    close: { title: 'Book the Beauty Studio', copy: 'Pick a time on Fresha, or send an enquiry if you’d like to talk it through first.' },
  },
  {
    slug: 'bridal',
    name: 'Bridal Studio',
    shade: 'sand',
    line: 'Brides and bridal parties',
    pan: 'bridal/01-garden-bench',
    description:
      'Wedding hair and makeup for brides and bridal parties, with a trial at the Doreen studio and the team at your venue anywhere in Victoria.',
    intro:
      'Hair and makeup for brides, bridal parties and family. Your look starts with a trial at the Doreen studio, then the team comes to you on the day, anywhere in Victoria.',
    services: [
      'Bridal hair and makeup',
      'Bridesmaids and bridal party',
      'Mothers of the bride and groom',
      'Trials before the day',
    ],
    bookable: false,
    enquiryLabel: 'Send a bridal enquiry',
    close: {
      title: 'Check your wedding date',
      copy: 'Send your date and venue, and the team will reply by email or phone.',
    },
  },
  {
    slug: 'creative',
    name: 'Creative Studio',
    shade: 'deep',
    line: 'Shoots, campaigns and runway',
    pan: 'creative/01-gold-leaf',
    description:
      'Editorial, campaign and runway hair and makeup, and on-set teams for agencies and fashion houses across Victoria.',
    intro:
      'Concept-led hair and makeup for editorials, campaigns, lookbooks and runway. Gold leaf, graphic liner, sculpted hair: bring a mood board and the team will build the look with you.',
    services: [
      'Editorial and campaign shoots',
      'Lookbooks and brand content',
      'Runway and backstage teams',
      'Conceptual and avant-garde looks',
    ],
    bookable: false,
    enquiryLabel: 'Send a creative enquiry',
    close: {
      title: 'Brief the Creative Studio',
      copy: 'Send the shoot date, location and mood board, and the team will reply by email or phone.',
    },
  },
];

export const studio = (slug: StudioSlug) => studios.find((s) => s.slug === slug)!;

/** What an agency should send, shown on the home and Creative Studio pages. */
export const callSheet = [
  { term: 'Date and call time', detail: 'When the team needs to be ready to start.' },
  { term: 'Location', detail: 'Studio, venue or backstage address.' },
  { term: 'Talent and looks', detail: 'How many people, and how many looks each.' },
  { term: 'Mood board', detail: 'A link to the brief or references.' },
  { term: 'Hair, makeup or both', detail: 'And whether you need touch-ups through the day.' },
];
