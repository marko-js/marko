import type { TestConfig } from "../../main.test";
import { after, flush, wait } from "../../utils/resolve";

// The first write supersedes the await while the server is still streaming
// its first load; the content chunk then arrives (held, placeholder still
// up) and a second write lands before the superseding promise resolves.
// The reveal must still happen exactly once: the newest promise's
// resolution releases the placeholder and commits every held update
// atomically.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, after(1), flush, after(3), wait, wait],
};
