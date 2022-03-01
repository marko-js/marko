const _if = _createRenderer("<button><!></button>", " D%", null);

import { queueInOwner as _queueInOwner, write as _write, read as _read, on as _on, data as _data, createRenderer as _createRenderer, setConditionalRenderer as _setConditionalRenderer, readInOwner as _readInOwner, queueInBranch as _queueInBranch, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate_clickCount(clickCount = _readInOwner(4)) {
  _on(0, "click", _read(2));
}

const _onclick = function () {
  const clickCount = _readInOwner(4);

  _queueInOwner(_apply_clickCount, 0, clickCount + 1);
};

function _apply_clickCount2(clickCount = _readInOwner(4)) {
  _write(2, _bind(_onclick));

  _data(1, clickCount);

  _hydrate_clickCount();
}

function _apply_clickCount(clickCount) {
  if (_write(4, clickCount)) {
    _setConditionalRenderer(0, clickCount < 3 ? _if : null);

    _queueInBranch(0, _if, _apply_clickCount2, 0);
  }
}

function _apply() {
  _apply_clickCount(0);
}

export const template = "<div><!></div>";
export const walks = "D%+l";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);