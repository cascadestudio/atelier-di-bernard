// Event queries
export const eventsQuery = `*[_type == "event"] | order(_createdAt desc) {
  _id,
  title,
  artist,
  date,
  image,
  url
}`;
