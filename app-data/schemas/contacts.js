import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contacts',
  title: 'Important Contacts',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position/office',
      type: 'string',
    }),
    defineField({
        name: 'number',
        title: 'Number',
        type: 'number',
    }),
    defineField({
        name: 'mail',
        title: 'Mail',
        type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    // defineField({
    //   name: 'bio',
    //   title: 'Bio',
    //   type: 'array',
    //   of: [
    //     {
    //       title: 'Block',
    //       type: 'block',
    //       styles: [{title: 'Normal', value: 'normal'}],
    //       lists: [],
    //     },
    //   ],
    // }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
