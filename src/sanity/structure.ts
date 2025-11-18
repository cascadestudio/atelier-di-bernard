import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("event").title("Events"),
      S.documentTypeListItem("artist").title("Artists"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["event", "artist"].includes(item.getId()!)
      ),
    ]);
