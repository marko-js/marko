if (a + b) _write("Hello");
if (a, b) _write("World");

_write("<div>");

if (x) _write("A");else if (y) _write("B");else _write("C");
import { write as _write } from "@marko/runtime-fluurt/src/html";

_write("</div>");