export default function withPreviousLocation(newNode, originalNode) {
  const { start, end, loc } = originalNode;
  return Object.assign(newNode, { start, end, loc });
}
