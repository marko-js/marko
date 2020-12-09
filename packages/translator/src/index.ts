import { Visitor } from "@marko/babel-types";
import { isOutputHTML } from "./util/marko-config";
import { flushInto } from "./util/html-flush";
import MarkoDocumentType from "./document-type";
import MarkoDeclaration from "./declaration";
import MarkoCDATA from "./cdata";
import MarkoText from "./text";
import * as MarkoTag from "./tag";
import MarkoPlaceholder from "./placeholder";
import MarkoComment from "./comment";
import * as ImportDeclaration from "./import-declaration";

export const taglibs = [
  [require.resolve("./core/marko.json"), require("./core/marko.json")]
];

export const visitor: Visitor = {
  Program: {
    enter(path) {
      path.state = {};
    },
    exit(path) {
      if (isOutputHTML(path)) {
        flushInto(path);
      }
    }
  },
  MarkoDocumentType,
  MarkoDeclaration,
  MarkoCDATA,
  MarkoText,
  MarkoTag,
  MarkoPlaceholder,
  MarkoComment,
  ImportDeclaration
};
