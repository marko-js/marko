import { write as _write } from "@marko/runtime-fluurt/src/html";

_write("Hello John &amp; Suzy Invalid Entity: &b ; Valid Numeric Entity: &#34; Valid Hexadecimal Entity: &#x00A2;");