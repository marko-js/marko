const data = _child();

import _child from "./components/child/index.marko";
import { escapeXML as _escapeXML, write as _write } from "@marko/runtime-fluurt/src/html";

_write(`${_escapeXML(data)}`);