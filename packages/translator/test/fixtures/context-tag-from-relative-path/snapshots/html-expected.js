_write("<span>");

const x = _getInContext("packages/translator/test/fixtures/context-tag-from-relative-path/template.marko/other.marko");

import { write as _write, getInContext as _getInContext, escapeXML as _escapeXML } from "@marko/runtime-fluurt/src/html";

_write(`${_escapeXML(x)}</span>`);