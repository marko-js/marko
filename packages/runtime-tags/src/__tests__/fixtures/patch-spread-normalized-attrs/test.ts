import type { TestConfig } from "../../main.test";

const attrs = (id: string) => ({
  class: { ["SHOWN_on" + id]: true, ["UNRENDERED_off" + id]: false },
  style: { color: "red", ["--UNRENDERED_var" + id]: false },
  title: "SHOWN_t" + id,
  tabindex: 1,
  "data-x": null,
  hidden: false,
  "aria-label": undefined,
});

// A spread's attribute set ships as it is and renders as a document does:
// class and style objects, nothing for `null`/`false`, a controllable's value.
export const config: TestConfig = {
  patches: true,
  steps: [
    {
      attrs: attrs("1"),
      show: false,
      link: { href: "/SECRET_link1", class: { UNRENDERED_lc1: false } },
      field: { value: "SHOWN_v", "data-secret": false },
    },
    {
      attrs: attrs("2"),
      show: true,
      link: {
        href: "/SHOWN_link2",
        class: { SHOWN_lc2: true, UNRENDERED_lc2: false },
      },
      field: { value: "SHOWN_v", "data-secret": false },
    },
    {
      attrs: attrs("3"),
      show: true,
      link: { href: "/SHOWN_link3", class: ["SHOWN_lc3"] },
      field: { value: "SHOWN_v", "data-secret": false },
    },
  ],
};
