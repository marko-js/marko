export function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}
