import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const artistType = defineType({
  name: "artist",
  title: "Artist",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "practice",
      title: "Practice",
      type: "string",
      description:
        "The artist's practice or medium (e.g., painting, sculpture, photography)",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "practice",
      media: "image",
    },
  },
});
