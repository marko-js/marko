import {
  assertNoAttributeTags,
  assertNoAttributes,
  assertNoParams,
  assertNoVar,
  Tag,
} from "@marko/babel-utils";
import * as writer from "../util/writer";
import * as walks from "../util/walks";

export default {
  analyze() {
    // skip default custom tag analysis
  },
  translate: {
    enter(tag) {
      walks.enter(tag);
      writer.writeTo(tag)`<!--`;
      // TODO: for the DOM side this needs to normalize placeholders and text content into a string.
      // This should also error if other tags are discovered, including control flow probably.
    },
    exit(tag) {
      assertNoVar(tag);
      assertNoParams(tag);
      assertNoAttributes(tag);
      assertNoAttributeTags(tag);
      walks.exit(tag);
      writer.writeTo(tag)`-->`;
      tag.remove();
    },
  },
  parseOptions: {
    state: "parsed-text",
  },
  attributes: {},
  autocomplete: [
    {
      description:
        "Use to create an html comment that is not stripped from the output.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#html-comment",
    },
  ],
} as Tag;
