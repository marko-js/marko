const _for = _createRenderer("<!>", "%", null);

import { queue as _queue, data as _data, createRenderer as _createRenderer, setLoopOf as _setLoopOf, write as _write, read as _read, on as _on, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_item(item) {
  if (_write(1, item)) _data(0, item);
}

function _hydrateWith_items_id(items = _read(7), id = _read(6)) {
  _on(4, "click", _read(8));
}

function _hydrate_items(items = _read(7)) {
  _on(5, "click", _read(9));
}

const _onclick = function () {
  const items = _read(7),
        id = _read(6);

  // TODO: nested writes ([...items, id++]) don't work
  const nextId = id + 1;

  _queue(_apply_id, 6, nextId);

  _queue(_apply_items, 7, [...items, nextId]);
};

function _applyWith_items_id(items = _read(7), id = _read(6)) {
  _write(8, _bind(_onclick));

  _hydrateWith_items_id();
}

const _onclick2 = function () {
  const items = _read(7);

  _queue(_apply_items, 7, items.slice(0, -1));
};

function _apply_items(items) {
  if (_write(7, items)) {
    _setLoopOf(0, items, _for, null, _apply_item);

    _write(9, _bind(_onclick2));

    _hydrate_items();

    _queue(_applyWith_items_id, 7);
  }
}

function _apply_id(id) {
  if (_write(6, id)) _queue(_applyWith_items_id, 6);
}

function _apply() {
  _apply_id(0);

  _apply_items([]);
}

export const template = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const walks = "D%+b b ";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);