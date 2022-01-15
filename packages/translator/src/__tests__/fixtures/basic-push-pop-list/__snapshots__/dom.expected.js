for (const item of items) {}

import { queue as _queue, data as _data, write as _write, read as _read, on as _on, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_item(item) {
  if (_write(1, item)) _data(0, item);
}

function _apply() {
  _apply_id(0);

  _apply_items([]);
}

function _apply_id(id) {
  if (_write(2, id)) {
    _queue(_applyWith_items_id, 2);

    _hydrate_id();
  }
}

const _onclick = function () {
  const items = _read(3);

  _queue(_apply_items, 3, items.slice(0, -1));
};

function _apply_items(items) {
  if (_write(3, items)) {
    _queue(_applyWith_items_id, 3);

    _hydrate_items();

    _write(6, _bind(_onclick));
  }
}

const _onclick2 = function () {
  const items = _read(3),
        id = _read(2);

  _queue(_apply_items, 3, _queue(_apply_id, 2, id + 1));
};

function _applyWith_items_id(items = _read(3), id = _read(2)) {
  _write(5, _bind(_onclick2));

  _hydrateWith_items_id();
}

function _hydrate_id(id = _read(2)) {
  _queue(_hydrateWith_items_id, 2);
}

function _hydrate_items(items = _read(3)) {
  _queue(_hydrateWith_items_id, 3);

  _on(1, "click", _read(6));
}

function _hydrateWith_items_id(items = _read(3), id = _read(2)) {
  _on(0, "click", _read(5));
}

export const template = "<div><button>Add</button><button>Remove</button></div>";
export const walks = "D b ";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);