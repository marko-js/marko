export function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Ada Lovelace", role: "Engineer" }), 300);
  });
}
