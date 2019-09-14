import { getSetters, valueSetter } from "../../../src";

export const inputs = [
  {
    value: "[if IE 7]"
  },
  {
    value: "[if IE 8]"
  },
  {
    value: "[if IE 9]"
  }
];

export default (parent: Node & ParentNode | Text, input: { value: string }) => {
  const [setComment] = getSetters(parent, main_content);
  setComment(input.value);
};

const main_content = [
  (document: Document) => {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(document.createComment("[if IE 6]"));
    fragment.appendChild(document.createComment(""));
    return fragment;
  },
  (fragment: DocumentFragment) =>
    [valueSetter(fragment.firstChild.nextSibling)] as const
] as const;
