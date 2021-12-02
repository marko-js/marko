_attr("onclick", function () {
  clickCount++;
});

import { data as _data, attr as _attr, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_clickCount() {
  "write clickCount";

  _apply_y(clickCount + 1);

  "queue _applyWith_clickCount_y";
}

function _apply() {
  _apply_clickCount(0);

  _data(new Date());
}

function _apply_y() {
  "write y";
  "queue _applyWith_clickCount_y";
}

function _applyWith_clickCount_y() {
  "read clickCount";
  "read y";

  _data(clickCount + y);
}

export const template = "<span><!></span><button><!></button>";
export const walks = "D%l D%l";
export const apply = _apply;
export default _createRenderFn(template, walks, [], apply);