/* tslint:disable */

export default function(
  id: string,
  doc: Document,
  replacementNode: Element,
  targetParent: ParentNode & Node,
  targetNode: Node | null | undefined,
  refNode: Node | null | undefined,
  nextNode: Node | null | undefined,
  elId: "getElementById"
) {
  doc = document!;
  elId = "getElementById";
  replacementNode = doc[elId](id)!;
  targetNode = doc[elId]("^" + id)!;
  targetParent = targetNode.parentNode!;

  while ((refNode = replacementNode.firstChild)) {
    targetParent.insertBefore(refNode, targetNode);
  }
  replacementNode.parentNode!.removeChild(replacementNode);

  refNode = doc[elId]("/" + id)!;
  do {
    nextNode = targetNode!.nextSibling;
    targetParent.removeChild(targetNode!);
    targetNode = nextNode;
  } while (targetNode !== refNode);
}
