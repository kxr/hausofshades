// Alt text and crop focus for every photo in src/assets/work/<folder>/.
// Keys are '<folder>/<file name without extension>'. Galleries list a folder's
// photos in file-name order, so a new photo only needs a file and an entry here.
// `focus` is a CSS object-position, used where a photo is cropped (pans, strips).

export interface PhotoNote {
  alt: string;
  focus?: string;
}

export const photoNotes: Record<string, PhotoNote> = {
  // Hair Studio
  'hair/01-hollywood-waves': {
    alt: 'Model with long brunette Hollywood waves and smoky bronze makeup against a grey backdrop',
    focus: '50% 28%',
  },
  'hair/02-heart-braid-crown': {
    alt: 'Young girl with a braided crown of heart-shaped loops set with pearls, smiling beside a woman',
    focus: '30% 40%',
  },
  'hair/03-smoothing-before-after': {
    alt: 'Before and after a smoothing treatment: frizzy dark hair on the left, sleek glossy hair on the right',
  },
  'hair/04-blended-highlights': {
    alt: 'Long hair with soft, blended blonde highlights, seen from the side in the salon',
    focus: '50% 45%',
  },
  'hair/05-curls-to-sleek': {
    alt: 'Before and after: dark curly hair on the left, sleek straight hair on the right',
  },
  'hair/06-styling-session': {
    alt: 'Two stylists working on a seated model’s hair',
    focus: '50% 30%',
  },
  'hair/07-sectioning-long-hair': {
    alt: 'Stylist sectioning a model’s long hair; the model wears dark lipstick',
    focus: '50% 30%',
  },

  // Beauty Studio
  'beauty/01-red-lip-portrait': {
    alt: 'Model with a deep red lip and soft winged liner, face resting in both hands',
    focus: '52% 38%',
  },
  'beauty/02-emerald-garden': {
    alt: 'Model in an emerald satin corset with a red lip, posed against painted tropical leaves',
    focus: '50% 25%',
  },
  'beauty/03-bold-eye-red-lip': {
    alt: 'Model with dark curls, lined eyes and a red lip, in a white off-the-shoulder dress',
    focus: '45% 25%',
  },
  'beauty/04-ivory-satin-glam': {
    alt: 'Model with glossy dark curls, bronze eyes and a diamond necklace, in an ivory satin gown',
    focus: '50% 30%',
  },
  'beauty/05-smoky-waves': {
    alt: 'Model with brunette waves and a smoky eye against a black backdrop',
    focus: '50% 35%',
  },
  'beauty/06-bronze-eyes': {
    alt: 'Close-up of closed eyes with warm bronze shadow and glowing skin',
    focus: '50% 35%',
  },
  'beauty/07-soft-curls': {
    alt: 'Model with soft blonde curls and rosy eye makeup, looking down',
    focus: '50% 30%',
  },
  'beauty/08-festive-glam': {
    alt: 'Model with long waves, gold jhumka earrings and a maroon embroidered outfit',
    focus: '50% 30%',
  },
  'beauty/09-beaded-veil': {
    alt: 'Model with berry lips and a beaded black net veil over an embroidered outfit',
    focus: '50% 22%',
  },
  'beauty/10-lilac-eyes': {
    alt: 'Model with blonde curls, lilac eyeshadow and pink lips, one arm raised over the head',
    focus: '50% 35%',
  },
  'beauty/11-emerald-portrait': {
    alt: 'Model with slicked-back hair and a red lip in an emerald corset, in front of painted leaves',
    focus: '50% 25%',
  },
  'beauty/12-voluminous-waves': {
    alt: 'Model with voluminous brunette waves and a smoky eye',
    focus: '50% 30%',
  },
  'beauty/13-red-tulle-garden': {
    alt: 'Model in a red tulle gown sitting on a patterned garden bench surrounded by greenery',
  },
  'beauty/14-striped-blouse': {
    alt: 'Model with long dark curls in a striped blouse, seated on a stool',
    focus: '50% 20%',
  },
  'beauty/15-natural-curls': {
    alt: 'Model with long dark curls and fresh, natural makeup in a white strapless top',
    focus: '45% 30%',
  },
  'beauty/16-silver-jhumkas': {
    alt: 'Model with glossy dark hair, soft smoky eyes and silver jhumka earrings, in a white embroidered kurta',
    focus: '50% 30%',
  },
  'beauty/17-sequinned-ivory': {
    alt: 'Model with a curled updo and pink eyeshadow in a sequinned ivory outfit, one hand raised to the ear',
    focus: '50% 30%',
  },
  'beauty/18-highlighted-waves': {
    alt: 'Smiling model with long, highlighted waves in a black dress',
    focus: '50% 25%',
  },

  // Bridal Studio
  'bridal/01-garden-bench': {
    alt: 'Bride in a white broderie dress smiling beside the groom on a garden bench',
    focus: '55% 18%',
  },
  'bridal/02-garden-walk': {
    alt: 'Bride and groom walking hand in hand across a sunny lawn',
    focus: '50% 40%',
  },
  'bridal/03-lounge-portrait': {
    alt: 'Couple on a leather sofa in front of a brick wall, the groom in a cream dinner jacket',
  },

  // Creative Studio
  'creative/01-gold-leaf': {
    alt: 'Close-up of a face with gold leaf across the brow and cheek, against black',
    focus: '50% 38%',
  },
  'creative/02-gold-leaf-braids': {
    alt: 'Model covering one eye with a hand, gold leaf woven through braided hair and over the shoulders',
    focus: '50% 30%',
  },
  'creative/03-feathered-blue': {
    alt: 'Model with a feathered hair ornament and porcelain skin, hand across the forehead, against pale blue',
    focus: '50% 30%',
  },
  'creative/04-white-mask': {
    alt: 'Model with sculpted curls and closed eyes, holding a white mask to one cheek',
    focus: '50% 30%',
  },
  'creative/05-sunflower': {
    alt: 'Model with a red lip holding a sunflower over one eye',
    focus: '50% 35%',
  },
  'creative/06-mirror-ball': {
    alt: 'Model holding a mirror ball against a warm orange backdrop',
    focus: '50% 30%',
  },
  'creative/07-graphic-liner': {
    alt: 'Model with smudged graphic liner and slicked hair held with clips, wearing a woven scarf',
    focus: '50% 30%',
  },
  'creative/08-space-buns': {
    alt: 'Model with space buns lying on a reflective floor in front of a starry blue backdrop',
    focus: '45% 40%',
  },
  'creative/09-rotary-phone': {
    alt: 'Model in a black beret and glasses holding a vintage rotary phone',
    focus: '50% 30%',
  },
  'creative/10-court-couture': {
    alt: 'Couple in formal wear on a tennis court: braided hair and a lace gown beside a tuxedo',
  },
  'creative/11-chains': {
    alt: 'Model in a red dress with both arms raised in chains, long waves and berry lips',
    focus: '50% 35%',
  },
  'creative/12-vintage-car': {
    alt: 'Model in a white lace dress holding a croc-embossed clutch beside a vintage red car',
  },
  'creative/13-cut-out-bodice': {
    alt: 'Model with slicked-back hair and black lipstick in a white bodice with buttoned cut-outs',
    focus: '50% 25%',
  },
  'creative/14-skeleton-cape': {
    alt: 'Model with black lipstick and a paper headpiece, wearing a cape printed with a skeleton',
    focus: '45% 30%',
  },
  'creative/15-runway-brocade': {
    alt: 'Model walking the runway in a gold embroidered jacket over a bronze gown, with the audience behind',
  },
  'creative/16-satin-gowns': {
    alt: 'Four models in pink, magenta, blush and champagne satin gowns posing on set',
  },
  'creative/17-certificate-group': {
    alt: 'Group photo with a certificate, including a young girl wearing a braided crown',
  },

  // On set
  'on-set/01-runway-team': {
    alt: 'A large hair and makeup team dressed in black, gathered in front of a fashion exhibition screen',
  },
  'on-set/02-graphic-eye': {
    alt: 'Artist painting a graphic blue eye on a model backstage',
  },
  'on-set/03-gold-leaf-application': {
    alt: 'Artist pressing gold leaf onto a model’s collarbone on a dark set',
  },
  'on-set/04-hair-on-set': {
    alt: 'Artist styling a model’s hair on a white studio set',
  },
  'on-set/05-lining-eyes': {
    alt: 'Artist lining the eyes of a smiling model',
  },
  'on-set/06-lip-application': {
    alt: 'Artist applying lipstick to a model in a lace blouse',
  },
  'on-set/07-backstage-stations': {
    alt: 'Artists working on models at a row of makeup stations',
  },
  'on-set/08-shoot-prep': {
    alt: 'Artist applying makeup to a young model while another person looks on',
  },
  'on-set/09-workstation': {
    alt: 'Artist doing a model’s makeup at a busy workstation full of brushes and products',
  },
  'on-set/10-four-artists': {
    alt: 'Four artists dressed in black, smiling together',
  },
  'on-set/11-team-room': {
    alt: 'Group of artists in a room set up with makeup palettes and kits',
  },
  'on-set/12-team-studio': {
    alt: 'Large group of artists in a studio',
  },

  // About
  'saba/saba-mughal': {
    alt: 'Saba Mughal, founder of Haus of Shades Studio, dressed in black against a pale pink backdrop',
    focus: '50% 20%',
  },
};
