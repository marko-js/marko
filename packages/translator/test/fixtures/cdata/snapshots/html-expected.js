import { write as _write } from "@marko/runtime-fluurt/src/html";

_write("<div>Here is a CDATA section: <![CDATA[ < > & ]]> with all kinds of unescaped text.</div>");