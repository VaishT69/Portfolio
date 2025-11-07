import {defineField, defineType} from 'sanity'

export const imgCarouselType = defineType({
  name: 'imgcarousel',
  title: 'ImgCarousel',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'imgCarousel'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
    }),
  ],
})
