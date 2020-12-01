_customTag({
  renderBody(a, b, {
    c
  }) {
    _write(`<div>${_escapeXML(a)} ${_escapeXML(b)} ${_escapeXML(c)}</div>`);
  }

});

import { escapeXML as _escapeXML, write as _write } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";