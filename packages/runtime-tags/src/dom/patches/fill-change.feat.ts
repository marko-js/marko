import { installFillChange, markFillChanged } from "./signals";

// Linked where an entry depends on a value a join's fill sets: the fill marks
// its change as a write marks it.
installFillChange(markFillChanged);
