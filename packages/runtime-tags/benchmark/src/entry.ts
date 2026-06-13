import content from "./tags/content/content.marko";

// Mount the keyed js-framework-benchmark app into the document. The element
// ids rendered by `content.marko` (#run, #runlots, #add, #update, #clear,
// #swaprows, the `.test-data` table, etc.) are what the official
// js-framework-benchmark driver scripts interact with.
const main = document.getElementById("main");
if (main) {
  content.mount({}, main);
}
