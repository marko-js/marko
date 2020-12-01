let _item;

if (input.x) _item = {
  renderBody(y) {
    _write(`${_escapeXML(y)}`);
  }

};

_hello({
  item: _item
});

import { escapeXML as _escapeXML, write as _write } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";