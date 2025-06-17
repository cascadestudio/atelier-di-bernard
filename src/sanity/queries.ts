// Event queries
export const eventsQuery = `*[_type == "event"] | order(_createdAt desc) {
  _id,
  title,
  artist,
  date,
  image,
  url
}`;

// Artist queries
export const artistsQuery = `*[_type == "artist"] | order(_createdAt desc) {
  _id,
  name,
  practice,
  image
}`;
