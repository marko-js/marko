const headlines = [
  { id: 1, title: "Local otter learns to juggle" },
  { id: 2, title: "Harbor bridge repainted overnight" },
  { id: 3, title: "Rare comet visible this weekend" },
];

export function loadHeadlines() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(headlines), 120);
  });
}
