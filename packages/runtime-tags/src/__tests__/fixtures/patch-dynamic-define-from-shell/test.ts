import type { TestConfig } from "../../main.test";

const user = (n: string) => ({
  name: n,
  passwordHash: "SECRET_hash_" + n,
  address: { city: "City" + n, street: "SECRET_street_" + n },
});
const pick = (container: Document) => {
  container.querySelector<HTMLButtonElement>(".pick")!.click();
};

// A `<define>` a server-chosen dynamic tag renders, passing a member of its
// input to a child: a patch creates it from its shell plus fills and writes
// what its handler reads, never shipping its input (or any secret in it).
export const config: TestConfig = {
  patches: true,
  steps: [
    { useA: false, user: user("ONE") },
    { useA: true, user: user("TWO") },
    pick,
    { useA: true, user: user("THREE") },
    pick,
  ],
};
