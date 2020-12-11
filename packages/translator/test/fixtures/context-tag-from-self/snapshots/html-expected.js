_write("<div>");

_pushContext("packages/translator/test/fixtures/context-tag-from-self/template.marko", 1);

_write("<span>");

const x = _getInContext("packages/translator/test/fixtures/context-tag-from-self/template.marko");

_write(`${_escapeXML(x)}</span>`);

_popContext();

import { write as _write, pushContext as _pushContext, getInContext as _getInContext, escapeXML as _escapeXML, popContext as _popContext } from "@marko/runtime-fluurt/src/html";

_write("</div>");