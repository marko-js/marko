/* tslint:disable */

export default function(id: string) {
  var replacementNode = document!.getElementById(id);
  var currentNode: Node | null = replacementNode;
  var startNode: Node | null = null;
  var endNode: Node | null = null;
  while (currentNode) {
    if (currentNode.nodeType === 8 /* comment */) {
      if (currentNode.nodeValue === "/" + id) {
        endNode = currentNode;
      } else if (currentNode.nodeValue === id) {
        startNode = currentNode;
        break;
      }
    }
    currentNode = currentNode.previousSibling || currentNode.parentNode;
  }
  if (startNode && endNode && replacementNode) {
    var targetParent = startNode.parentNode!;
    while (replacementNode.firstChild) {
      targetParent.insertBefore(replacementNode.firstChild, startNode);
    }
    replacementNode.remove();
    currentNode = startNode;
    do {
      targetParent.removeChild(currentNode!);
      currentNode = currentNode!.nextSibling;
    } while (currentNode !== endNode);
  } else {
    console.error("Unable to replace content for " + id);
  }
}
