import { Visitor } from "@marko/babel-types";
import * as Program from "./program";
import * as ImportDeclaration from "./import-declaration";
import MarkoDocumentType from "./document-type";
import MarkoDeclaration from "./declaration";
import MarkoCDATA from "./cdata";
import MarkoText from "./text";
import * as MarkoTag from "./tag";
import MarkoPlaceholder from "./placeholder";
import MarkoComment from "./comment";

export const taglibs = [
  [require.resolve("./core/marko.json"), require("./core/marko.json")]
];

export { default as analyze } from "./analyze";

export const translate: Visitor = {
  Program,
  ImportDeclaration,
  MarkoDocumentType,
  MarkoDeclaration,
  MarkoCDATA,
  MarkoText,
  MarkoTag,
  MarkoPlaceholder,
  MarkoComment
};
