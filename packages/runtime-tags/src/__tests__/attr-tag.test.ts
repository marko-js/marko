import * as assert from "assert/strict";

import type {} from "../../index";
import { attrTag, attrTags } from "../common/attr-tag";

interface Option {
  value: string;
  label: string;
}

// The types are the point of this file: `tsc` (pnpm run build:types, part of
// @ci:build) reads these annotations, so a builder that stops accepting or
// stops returning the public tag type fails the build, not just a review.
describe("runtime-tags/common/attr-tag", () => {
  it("builds the tag a template reads, singular or looped", () => {
    const tags: Marko.AttrTag<Option> = attrTag({ value: "us", label: "US" });
    assert.equal(tags.value, "us");
    assert.deepEqual(
      [...tags].map((option) => option.value),
      ["us"],
    );
  });

  it("adds to the tag it was given without replacing it", () => {
    const first: Marko.AttrTag<Option> = attrTag({ value: "us", label: "US" });
    const tags: Marko.AttrTag<Option> = attrTags(first, {
      value: "gb",
      label: "GB",
    });
    assert.equal(tags, first);
    assert.equal(tags.value, "us");
    assert.deepEqual(
      [...tags].map((option) => option.value),
      ["us", "gb"],
    );
  });

  it("starts a list from the absent prop a component declares", () => {
    const declared: Marko.AttrTag<Option> | undefined = undefined;
    const tags: Marko.AttrTag<Option> = attrTags(declared, {
      value: "us",
      label: "US",
    });
    assert.deepEqual([...tags], [tags]);
  });

  it("keeps iterating from the first tag after each addition", () => {
    let tags: Marko.AttrTag<Option> | undefined;
    for (const value of ["us", "gb", "fr"]) {
      tags = attrTags(tags, { value, label: value.toUpperCase() });
    }
    assert.deepEqual(
      [...tags!].map((option) => option.value),
      ["us", "gb", "fr"],
    );
    assert.equal(tags!.value, "us");
  });

  it("does not accept a plain array of attrs", () => {
    // An array iterates, but `input.option.value` is undefined on it, so it
    // renders a different shape than the template reads. Use the builders.
    // @ts-expect-error an array is not a Marko.AttrTag
    const array: Marko.AttrTag<Option> = [{ value: "us", label: "US" }];
    assert.equal(array.value, undefined);
  });

  it("shares one object between the tag and its first item", () => {
    const option = { value: "us", label: "US" };
    const tags = attrTag(option);
    assert.equal([...tags][0], option);
    assert.equal(tags.label, "US");
  });
});
