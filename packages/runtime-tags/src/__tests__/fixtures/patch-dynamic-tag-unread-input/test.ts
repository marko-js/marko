import type { TestConfig } from "../../main.test";

const user = (id: string) => ({
  name: "SHOWN_name" + id,
  passwordHash: "SECRET_hash" + id,
});

// A dynamic tag's input, whatever renders it (a template, a `<define>`, a
// native tag, nothing): the page writes none of it.
export const config: TestConfig = {
  patches: true,
  steps: [
    {
      which: true,
      user: user("1"),
      alt: false,
      user2: user("1b"),
      tag: "section",
      cls: { SHOWN_on1: true, UNRENDERED_off1: false },
      title: "SHOWN_t1",
      none: false,
      hidden: { secret: "SECRET_hidden1" },
    },
    {
      which: false,
      user: user("2"),
      alt: true,
      user2: user("2b"),
      tag: "article",
      cls: { SHOWN_on2: true, UNRENDERED_off2: false },
      title: "SHOWN_t2",
      none: false,
      hidden: { secret: "SECRET_hidden2" },
    },
  ],
};
