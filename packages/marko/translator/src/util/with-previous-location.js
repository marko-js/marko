export default function withPreviousLocation(newNode, originalNode) {
  newNode.start = originalNode.start;
  newNode.loc = originalNode.loc;
  newNode.end = originalNode.end;
  return newNode;
}
