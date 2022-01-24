const _for = _createRenderer("<!>", "%", null);

import { queue as _queue, data as _data, write as _write, createRenderer as _createRenderer, setLoopOf as _setLoopOf, read as _read, on as _on, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_item(item) {
  if (_write(8, item)) _data(0, item);
}

function _apply() {
  _apply_id(0);

  _apply_items([]);
}

function _apply_id(id) {
  if (_write(6, id)) {
    _queue(_applyWith_items_id, 6);

    _hydrate_id();
  }
}

const _onclick = function () {
  const items = _read(7);

  _queue(_apply_items, 7, items.slice(0, -1));
};

function _apply_items(items) {
  if (_write(7, items)) {
    _setLoopOf(0, items, _for, null, _apply_item);

    _queue(_applyWith_items_id, 7);

    _hydrate_items();

    _write(10, _bind(_onclick));
  }
}

const _onclick2 = function () {
  const items = _read(7),
        id = _read(6);

  // TODO: nested writes ([...items, id++]) don't work
  const nextId = id + 1;

  _queue(_apply_id, 6, nextId);

  _queue(_apply_items, 7, [...items, nextId]);
};

function _applyWith_items_id(items = _read(7), id = _read(6)) {
  _write(9, _bind(_onclick2));

  _hydrateWith_items_id();
}

function _hydrate_id(id = _read(6)) {
  _queue(_hydrateWith_items_id, 6);
}

function _hydrate_items(items = _read(7)) {
  _queue(_hydrateWith_items_id, 7);

  _on(5, "click", _read(10));
}

function _hydrateWith_items_id(items = _read(7), id = _read(6)) {
  _on(4, "click", _read(9));
}

export const template = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const walks = "D%+b b ";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);