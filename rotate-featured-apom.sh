#!/bin/bash

# This BASH script should be called from a scheduled cron job, for example:

# #Run APOM rotation every minute:
# * * * * * /path/to/featured-apom-rotate.sh

SECOND=$(date +%S)
MINUTE=$(date +%M)

TIMER=$MINUTE

IMAGES_DIR=/path/to/website/images
FEATURED_IMAGES=$IMAGES_DIR/featured
if [ ! -d $FEATURED_IMAGES ]; then
  mkdir $FEATURED_IMAGES
fi
FEATURED_ASTRO_FILENAME="featured-astro.jpg"
FEATURED_ASTRO_CAPTION="featured-astro.txt"
FEATURED_ASTRO_CAPTION_DEFAULT="featured-astro-default.txt"
if [ ! -f $FEATURED_ASTRO_CAPTION_DEFAULT ]; then
  echo "" > $FEATURED_ASTRO_CAPTION_DEFAULT
fi

find "${FEATURED_IMAGES}" -name "${TIMER}-*.jpg" | while read FILE; do
  FILENAME=${FILE##*/}
  BASE=${FILENAME%.*}
  ln -f -s $FILE $IMAGES_DIR/$FEATURED_ASTRO_FILENAME
  if [ -f ${FEATURED_IMAGES}/${BASE}.txt ]; then
    ln -f -s ${FEATURED_IMAGES}/${BASE}.txt $IMAGES_DIR/$FEATURED_ASTRO_CAPTION
  else
    ln -f -s $IMAGES_DIR/$FEATURED_ASTRO_CAPTION_DEFAULT $IMAGES_DIR/$FEATURED_ASTRO_CAPTION
  fi
done

