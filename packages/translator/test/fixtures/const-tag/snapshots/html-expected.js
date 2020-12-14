const x = 1;
const y = 1;
import { escapeXML as _escapeXML, write as _write } from "@marko/runtime-fluurt/src/html";

_write(`<div>1</div>${_escapeXML(y)}`);