#!/usr/bin/env bash
# Copies the curated photos from media/ into src/assets/work/, resized to a
# 2000px long edge, converted to sRGB and stripped of metadata (incl. GPS).
# Needs ImageMagick 7 (`brew install imagemagick`). Run: npm run photos
set -euo pipefail
cd "$(dirname "$0")/.."

SRGB="/System/Library/ColorSync/Profiles/sRGB Profile.icc"
OUT=src/assets/work

prep() { # prep <source> <studio>/<name> [trim | shave:<px>]
  local src="media/$1" dest="$OUT/$2.jpg"
  mkdir -p "$(dirname "$dest")"
  local profile=() trim=()
  [[ -f "$SRGB" ]] && profile=(-profile "$SRGB")
  # Remove the frame around a before/after collage: 'trim' for a flat colour,
  # 'shave:<px>' for a fixed width.
  case "${3:-}" in
    trim) trim=(-fuzz 12% -trim +repage) ;;
    shave:*) trim=(-shave "${3#shave:}x${3#shave:}" +repage) ;;
  esac
  magick "$src[0]" -auto-orient ${profile[@]+"${profile[@]}"} ${trim[@]+"${trim[@]}"} -strip -resize '2000x2000>' \
    -sampling-factor 4:2:0 -interlace JPEG -quality 82 "$dest"
  echo "$dest"
}

prep "Hair Studio/RGT_3208.jpg"                          hair/01-hollywood-waves
prep "Hair Studio/_63A0290.jpg"                          hair/02-heart-braid-crown
prep "Hair Studio/20250506_155014.jpg"                   hair/03-smoothing-before-after trim
prep "Hair Studio/20250516_172716.heic"                  hair/04-blended-highlights
prep "Hair Studio/20260709_181313.jpg"                   hair/05-curls-to-sleek shave:50
prep "Hair Studio/016A6294.jpg"                          hair/06-styling-session
prep "Hair Studio/016A6301.jpg"                          hair/07-sectioning-long-hair

prep "Beauty Studio/Secret Garden Jemma (64).jpg"        beauty/01-red-lip-portrait
prep "Beauty Studio/Secret Garden Jemma (252).jpg"       beauty/02-emerald-garden
prep "Beauty Studio/Secret Garden Jemma (328).jpg"       beauty/03-bold-eye-red-lip
prep "Beauty Studio/WhatsApp Image 2026-06-30 at 16.44.26 (2).jpeg" beauty/04-ivory-satin-glam
prep "Beauty Studio/RGT_3195.jpg"                        beauty/05-smoky-waves
prep "Beauty Studio/2026-05-22 12_53_04.738+1000.jpg"    beauty/06-bronze-eyes
prep "Beauty Studio/WhatsApp Image 2026-06-30 at 16.44.27 (2).jpeg" beauty/07-soft-curls
prep "Beauty Studio/2026-06-04 15_17_35.226+1000.jpg"    beauty/08-festive-glam
prep "Beauty Studio/Novatra by Jas-18.jpg"               beauty/09-beaded-veil
prep "Beauty Studio/2026-06-17 13_20_24.140+1000.jpg"    beauty/10-lilac-eyes
prep "Beauty Studio/Secret Garden Jemma (263).jpg"       beauty/11-emerald-portrait
prep "Beauty Studio/WhatsApp Image 2026-06-30 at 16.44.27 (1).jpeg" beauty/12-voluminous-waves
prep "Beauty Studio/SecretGarden-LR-55.jpg"              beauty/13-red-tulle-garden
prep "Beauty Studio/_MG_6980-Edit-1.jpg"                 beauty/14-striped-blouse
prep "Beauty Studio/773099004_17960601684173610_4074244420158735627_n.jpeg" beauty/15-natural-curls
prep "Beauty Studio/814493837_17966392047173610_643052095074250792_n.jpeg" beauty/16-silver-jhumkas
prep "Beauty Studio/835748685_17968826502173610_8276693334600641143_n.jpg" beauty/17-sequinned-ivory
prep "Beauty Studio/843141935_17969694192173610_3349221108845580318_n.jpeg" beauty/18-highlighted-waves

prep "Bridal Studio/RachWhitePhotography_Lily+Nelson-139.jpg" bridal/01-garden-bench
prep "Bridal Studio/RachWhitePhotography_Lily+Nelson-29.jpg"  bridal/02-garden-walk
prep "Bridal Studio/DSC_0123.jpg"                        bridal/03-lounge-portrait

prep "Creative Studio/20260823-20260823-SOA03994.JPG"    creative/01-gold-leaf
prep "Creative Studio/20260823-20260823-SOA04234.JPG"    creative/02-gold-leaf-braids
prep "Creative Studio/20260702-20260702-SOA06357.JPG"    creative/03-feathered-blue
prep "Creative Studio/IMG_0002_FullRes.jpg"              creative/04-white-mask
prep "Creative Studio/Secret Garden Jemma (300).jpg"     creative/05-sunflower
prep "Creative Studio/DEP_9133.jpg"                      creative/06-mirror-ball
prep "Creative Studio/DSC07071.jpg"                      creative/07-graphic-liner
prep "Creative Studio/kpopeditorial (6 of 43).jpg"       creative/08-space-buns
prep "Creative Studio/kpopeditorial (20 of 43).jpg"      creative/09-rotary-phone
prep "Creative Studio/©Lux_nubium_CourtCouture-14.jpg"   creative/10-court-couture
prep "Creative Studio/Secret Garden Jemma (52).jpg"      creative/11-chains
prep "Creative Studio/snakes shoes bags belts shoot (44).jpg" creative/12-vintage-car
prep "Creative Studio/686279712_17946637476173610_8515147101188735479_n.jpeg" creative/13-cut-out-bodice
prep "Creative Studio/686953753_17946572841173610_3745668132842523721_n.jpeg" creative/14-skeleton-cape
prep "Creative Studio/704824421_17948806791173610_3717805429732605943_n.jpeg" creative/15-runway-brocade
prep "Creative Studio/837396363_17968729479173610_3960782064614547761_n.jpg" creative/16-satin-gowns
prep "Creative Studio/IMG_8145001.jpg"                   creative/17-certificate-group

prep "Working Pictures/BTS RGTphotography-75.jpg"        on-set/01-runway-team
prep "Working Pictures/BTS RGTphotography-142.jpg"       on-set/02-graphic-eye
prep "Working Pictures/20260823-20260823-SOA03938.JPG"   on-set/03-gold-leaf-application
prep "Working Pictures/DEP_8480.jpg"                     on-set/04-hair-on-set
prep "Working Pictures/DSC_0048.jpg"                     on-set/05-lining-eyes
prep "Working Pictures/IMG_0023.jpg"                     on-set/06-lip-application
prep "Working Pictures/BTS RGTphotography-47.jpg"        on-set/07-backstage-stations
prep "Creative Studio/016A6311.jpg"                      on-set/08-shoot-prep
prep "Working Pictures/016A6514.jpg"                     on-set/09-workstation
prep "Working Pictures/016A6724.jpg"                     on-set/10-four-artists
prep "Working Pictures/016A6698.jpg"                     on-set/11-team-room
prep "Working Pictures/IMG-20260808-WA0064.jpg"          on-set/12-team-studio

prep "Saba/016A6382.jpg"                                 saba/saba-mughal
