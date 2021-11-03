import type { types as t } from "@marko/compiler";
import Program from "./program";
import ImportDeclaration from "./import-declaration";
import MarkoDocumentType from "./document-type";
import MarkoDeclaration from "./declaration";
import MarkoCDATA from "./cdata";
import MarkoText from "./text";
import MarkoTag from "./tag";
import MarkoPlaceholder from "./placeholder";
import MarkoComment from "./comment";
import coreTagLib from "./core";

export const taglibs = [[__dirname, coreTagLib]];

export { default as analyze } from "./analyze";

export const translate: t.Visitor = {
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
