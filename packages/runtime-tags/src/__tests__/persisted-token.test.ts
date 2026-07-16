import assert from "node:assert/strict";

import type { PersistedDescriptor, PersistedPossession } from "../common/types";
import {
  decodePersistedPossession,
  encodePersistedPossession,
} from "../html/persisted-token";

const descriptor: PersistedDescriptor = [
  ["outer", "inner"],
  ["PanelA", "PanelB"],
];

describe("persisted possession token", () => {
  it("represents an explicit empty replacement", () => {
    assert.equal(encodePersistedPossession({}, descriptor), "PA");
    assert.deepEqual(decodePersistedPossession("PA", descriptor), {});
  });

  it("packs a scalar known-site fact", () => {
    assert.equal(
      encodePersistedPossession({ "i5:outer": "PanelA" }, descriptor),
      "SA",
    );
    assert.equal(
      encodePersistedPossession({ "i5:outer": "PanelB" }, descriptor),
      "SB",
    );
    assert.equal(
      encodePersistedPossession({ "!i5:outer": "1" }, descriptor),
      "BA",
    );
    assert.deepEqual(decodePersistedPossession("SB", descriptor), {
      "i5:outer": "PanelB",
    });
  });

  it("uses descriptor ordinals and direct tchar output", () => {
    const possession: PersistedPossession = {
      "i5:outer": "PanelA",
      "!i5:inner=s9:two words": "1",
      "i8:raw/site=n7": "native element",
    };
    const token = encodePersistedPossession(possession, descriptor);

    assert.equal(
      token,
      "PDBBIBT~JdHdvIHdvcmRzS.B1NBIAXRANBS~IcmF3L3NpdGUIOS~ObmF0aXZlIGVsZW1lbnQ",
    );
    assert.match(token, /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/);
    assert.ok(token.length < JSON.stringify(possession).length);
    assert.deepEqual(decodePersistedPossession(token, descriptor), possession);
  });

  it("is independent of possession insertion order", () => {
    const first: PersistedPossession = {
      "i5:outer=n2": "PanelA",
      "!i5:inner=s1:a": "1",
    };
    const second: PersistedPossession = {
      "!i5:inner=s1:a": "1",
      "i5:outer=n2": "PanelA",
    };

    assert.equal(
      encodePersistedPossession(first, descriptor),
      encodePersistedPossession(second, descriptor),
    );
  });

  it("groups dense numeric and string presence keys", () => {
    const possession: PersistedPossession = {};
    for (let i = 0; i < 42; i++) possession[`!i5:outer=n${i}`] = "1";
    for (const key of ["alpha", "two words", "雪"]) {
      possession[`!i5:inner=s${key.length}:${key}`] = "1";
    }
    const token = encodePersistedPossession(possession, descriptor);

    assert.ok(token.length < JSON.stringify(possession).length / 4);
    assert.deepEqual(decodePersistedPossession(token, descriptor), possession);
  });

  it("interns repeated nested string keys", () => {
    const sites = ["outer"];
    const possession: PersistedPossession = {};
    for (let siteIndex = 0; siteIndex < 12; siteIndex++) {
      const site = `child-${siteIndex}`;
      sites.push(site);
      for (let key = 0; key < 4; key++) {
        possession[
          `!i5:outer=s18:parent-beta-marker/i${site.length}:${site}=n${key}`
        ] = "1";
      }
    }
    const nestedDescriptor: PersistedDescriptor = [sites, []];
    const token = encodePersistedPossession(possession, nestedDescriptor);

    assert.equal(token.split("parent-beta-marker").length - 1, 1);
    assert.ok(token.length < JSON.stringify(possession).length / 4);
    assert.deepEqual(
      decodePersistedPossession(token, nestedDescriptor),
      possession,
    );
  });

  it("rejects malformed and noncanonical tokens", () => {
    const token = encodePersistedPossession(
      { "i5:outer": "PanelA" },
      descriptor,
    );

    assert.equal(decodePersistedPossession(token + "A", descriptor), undefined);
    assert.equal(decodePersistedPossession("ShA", descriptor), undefined);
    assert.equal(decodePersistedPossession("P ", descriptor), undefined);
    assert.equal(
      decodePersistedPossession("P!C.Bx.BxA", descriptor),
      undefined,
    );
    assert.equal(
      decodePersistedPossession("P" + "A".repeat(4096), descriptor),
      undefined,
    );
  });

  it("omits tokens beyond the header budget", () => {
    assert.equal(
      encodePersistedPossession({ "i5:outer": "x".repeat(5000) }, descriptor),
      "",
    );
    assert.equal(encodePersistedPossession({ invalid: "1" }, descriptor), "");
  });
});
