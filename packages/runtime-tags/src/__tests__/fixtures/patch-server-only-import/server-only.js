// Evaluating this module in a browser is the failure the fixture guards.
if (typeof window !== "undefined") throw new Error("server-only module loaded in the browser");
export const config = { hosts: "a,b" };
