/* tslint:disable */

import { CommentWalker } from "../common/types";

export default function (
  id: string,
  doc: Document,
  walker: TreeWalker,
  node: Comment,
  replacementNode: Node,
  targetParent: ParentNode & Node,
  targetNode: Node | null | undefined,
  refNode: Node | null | undefined,
  nextNode: Node | null | undefined,
  runtimePrefix: string
) {
  runtimePrefix = "RUNTIME_ID$";
  id = runtimePrefix + id;
  doc = document;
  walker =
    doc[runtimePrefix + "w"] ||
    (doc[runtimePrefix + "w"] = doc.createTreeWalker(
      doc,
      128 /** NodeFilter.SHOW_COMMENT */,
      function () {
        return 1; /** NodeFilter.FILTER_ACCEPT */
      } as any,
      false
    ) as CommentWalker);
  while ((node = walker.nextNode() as Comment)) {
    if (node.data.indexOf(runtimePrefix) === 0) {
      walker[node.data] = node;
    }
  }

  replacementNode = doc.getElementById(id)!;
  targetNode = walker[id];
  targetParent = targetNode!.parentNode!;

  while ((refNode = replacementNode.firstChild)) {
    targetParent.insertBefore(refNode, targetNode!);
  }

  nextNode = replacementNode.parentNode!;
  nextNode.removeChild(replacementNode.nextSibling!);
  nextNode.removeChild(replacementNode);

  refNode = walker[id + "/"];

  while (
    ((nextNode = targetNode!.nextSibling),
    targetParent.removeChild(targetNode!) !== refNode)
  ) {
    targetNode = nextNode;
  }
}
