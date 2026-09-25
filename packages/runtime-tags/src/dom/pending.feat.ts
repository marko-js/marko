import { withPending } from "../common/helpers";

// Injected into a page entry that loads templates lazily: an `<await>` in a
// lazy chunk may show a `@placeholder` registered before that chunk runs.
withPending();
