function _random(max) {
  return Math.round(Math.random() * 1000) % max;
}

const adjectives = [
  "pretty",
  "large",
  "big",
  "small",
  "tall",
  "short",
  "long",
  "handsome",
  "plain",
  "quaint",
  "clean",
  "elegant",
  "easy",
  "angry",
  "crazy",
  "helpful",
  "mushy",
  "odd",
  "unsightly",
  "adorable",
  "important",
  "inexpensive",
  "cheap",
  "expensive",
  "fancy",
];

const colours = [
  "red",
  "yellow",
  "blue",
  "green",
  "pink",
  "brown",
  "purple",
  "brown",
  "white",
  "black",
  "orange",
];

const nouns = [
  "table",
  "chair",
  "house",
  "bbq",
  "desk",
  "car",
  "pony",
  "cookie",
  "sandwich",
  "burger",
  "pizza",
  "mouse",
  "keyboard",
];

let id = 1;

export function buildData(count) {
  const data = Array.from({ length: count }, () => ({
    id: id++,
    label:
      adjectives[_random(adjectives.length)] +
      " " +
      colours[_random(colours.length)] +
      " " +
      nouns[_random(nouns.length)],
  }));
  return data;
}
