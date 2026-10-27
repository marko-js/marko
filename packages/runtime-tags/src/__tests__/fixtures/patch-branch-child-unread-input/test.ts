import type { TestConfig } from "../../main.test";

const user = (id: string) => ({
  name: "SHOWN_name" + id,
  bio: "BIO_" + id,
  passwordHash: "SECRET_hash" + id,
});

// Inputs a branch passes its children: the page writes only what a client
// render of the branch reads, whether the branch rendered or not.
export const config: TestConfig = {
  patches: true,
  steps: [
    {
      admin: false,
      adminData: { title: "SECRET_title1", rows: ["SECRET_row1"] },
      user: user("1"),
      more: false,
      props: { user: user("1p") },
      other: user("1o"),
    },
    {
      admin: true,
      adminData: { title: "SHOWN_title2", rows: ["SECRET_row2"] },
      user: user("2"),
      more: true,
      props: { user: user("2p") },
      other: user("2o"),
    },
    {
      admin: false,
      adminData: { title: "SECRET_title3", rows: ["SECRET_row3"] },
      user: user("3"),
      more: false,
      props: { user: user("3p") },
      other: user("3o"),
    },
  ],
};
