import { withLazy } from "./resume";

// Injected by an entry that reaches lazy tags, so resume retains their visits
// until the lazy module that walks them loads.
withLazy();
