import assert from "node:assert/strict";

import { resolveCursorPosition } from "../dom/resolve-cursor-position";

describe("resolveCursorPosition", () => {
  [
    {
      initial: "ABy|C",
      updated: "ABY|C",
    },
    {
      initial: "(540|",
      updated: "(540|) ",
      inputType: "deleteBackwards",
    },
    {
      initial: "(540|",
      updated: "(540) |",
    },
    {
      initial: "(540|8) 109-227",
      updated: "(540|) 810-9227",
    },
    {
      initial: "(5405|) 810-9227 1",
      updated: "(540) 5|81-0922 71",
    },
    {
      initial: "Sell on ebay|",
      updated: "Sell on eBay|",
    },
    {
      initial: "search g|oogle",
      updated: "search G|OOGLE",
    },
    {
      initial: "(540|8) 109-2279",
      updated: "(540|) 810-9227",
    },
    {
      initial: "(5405|) 810-9227",
      updated: "(540) 5|81-0922",
    },
    {
      initial: "(540)5| 810-9227",
      updated: "(540) 5|81-0922",
    },
    {
      initial: "(540) | 810-9227",
      updated: "(540) |810-9227",
    },
    {
      initial: "366-47|928",
      updated: "(366) 47|9-28",
    },
    {
      initial: "3669|-7928",
      updated: "(366) 9|79-28",
    },
    {
      initial: "(366) |79-28",
      updated: "366|-7928",
      inputType: "deleteBackwards",
    },
    {
      initial: "(540)|810-9227",
      updated: "(540)| 810-9227",
      inputType: "deleteBackwards",
    },
  ].forEach(({ initial, updated, inputType }) => {
    it(initial + " → " + updated, () => {
      const initialPosition = initial.indexOf("|");
      const expectedPosition = updated.indexOf("|");
      const updatedValue = updated.replace("|", "");
      let actualPosition = resolveCursorPosition(
        inputType || "",
        initialPosition,
        initial.replace("|", ""),
        updated.replace("|", ""),
      );

      if (actualPosition === -1) {
        actualPosition = updatedValue.length;
      }

      if (actualPosition !== expectedPosition) {
        const before = updatedValue.slice(0, actualPosition);
        const after = updatedValue.slice(actualPosition);
        const actual = before + "|" + after;
        assert.equal(actual, updated);
      }
    });
  });
});
