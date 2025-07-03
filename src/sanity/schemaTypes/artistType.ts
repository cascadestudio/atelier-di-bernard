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
    defineField({
      name: "externalLink",
      title: "External Link",
      type: "url",
      description: "External website or portfolio link for the artist",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
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
