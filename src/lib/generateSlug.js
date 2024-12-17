export function generateSlug(title) {
    return title
          .toLowerCase() // Convert the title to lowercase
          .replace(/\s+/g, "-") // Replace spaces with dashes
          .replace(/[^\w\-]+/g, "") // Remove non-word characters except dashes
          .replace(/\-\-+/g, "-") // Replace multiple consecutive dashes with a single dash
          .replace(/^\-+/, "") // Remove dashes from the beginning
          .replace(/\-+$/, "");
  }