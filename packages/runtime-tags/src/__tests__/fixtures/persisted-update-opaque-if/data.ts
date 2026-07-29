// A live module read with no call in the template expression: the value
// the server renders with can change between navigations, and this
// compile cannot see that.
export const view = {
  get current() {
    return typeof process === "undefined"
      ? "primary"
      : process.env.MARKO_OPAQUE_IF_VIEW || "primary";
  },
};
