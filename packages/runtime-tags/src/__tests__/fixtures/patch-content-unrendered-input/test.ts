import type { TestConfig } from "../../main.test";

// Content a child renders only when its param says: the page writes none of
// the values it reads while the child withholds it, nor a rendered one's
// unread fields.
export const config: TestConfig = {
  patches: true,
  steps: [
    {
      admin: false,
      rows: [{ name: "SECRET_r1", ssn: "SECRET_ssn1" }],
      guestText: "SHOWN_g1",
      showBody: false,
      bodyText: "SECRET_body1",
    },
    {
      admin: true,
      rows: [{ name: "SHOWN_r2", ssn: "SECRET_ssn2" }],
      guestText: "SECRET_g2",
      showBody: true,
      bodyText: "SHOWN_body2",
    },
    {
      admin: false,
      rows: [{ name: "SECRET_r3", ssn: "SECRET_ssn3" }],
      guestText: "SHOWN_g3",
      showBody: false,
      bodyText: "SECRET_body3",
    },
  ],
};
