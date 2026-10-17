import type { ImageMetadata } from 'astro';
import { photoNotes } from '../data/photos';

export interface Photo {
  id: string;
  src: ImageMetadata;
  alt: string;
  focus: string;
}

const files = import.meta.glob<ImageMetadata>('../assets/work/*/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

const folderNames: Record<string, string> = {
  hair: 'Hair Studio',
  beauty: 'Beauty Studio',
  bridal: 'Bridal Studio',
  creative: 'Creative Studio',
  'on-set': 'On-set',
};

const photos: Photo[] = Object.entries(files)
  .map(([path, src]) => {
    const id = path.replace('../assets/work/', '').replace(/\.\w+$/, '');
    const note = photoNotes[id];
    if (!note) console.warn(`[photos] Add alt text for "${id}" in src/data/photos.ts`);
    const folder = id.split('/')[0];
    return {
      id,
      src,
      alt: note?.alt ?? `${folderNames[folder] ?? 'Studio'} work by Haus of Shades Studio`,
      focus: note?.focus ?? '50% 50%',
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

export function photo(id: string): Photo {
  const found = photos.find((p) => p.id === id);
  if (!found) throw new Error(`No photo "${id}" in src/assets/work`);
  return found;
}

/** All photos in a folder, in file-name order, minus any ids in `except`. */
export function photosIn(folder: string, except: string[] = []): Photo[] {
  return photos.filter((p) => p.id.startsWith(`${folder}/`) && !except.includes(p.id));
}
