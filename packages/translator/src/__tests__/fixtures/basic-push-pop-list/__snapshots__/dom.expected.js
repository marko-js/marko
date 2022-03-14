import { queue as _queue, data as _data, setLoopOf as _setLoopOf, write as _write, on as _on, bind as _bind, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_item(_scope, item) {
  if (_write(_scope, 1, item)) _data(_scope, 0, item);
}

function _hydrateWith_id_items(_scope, id = _scope[6], items = _scope[7]) {
  _on(_scope, 4, "click", _scope[8]);
}

function _hydrate_items(_scope, items = _scope[7]) {
  _on(_scope, 5, "click", _scope[9]);
}

const _onclick = function (_scope) {
  const id = _scope[6],
        items = _scope[7];
  // TODO: nested writes ([...items, id++]) don't work
  const nextId = id + 1;

  _queue(_scope, _apply_id, 0, nextId);

  _queue(_scope, _apply_items, 1, [...items, nextId]);
};

function _applyWith_id_items(_scope, id = _scope[6], items = _scope[7]) {
  _write(_scope, 8, _bind(_scope, _onclick));

  _hydrateWith_id_items(_scope);
}

const _onclick2 = function (_scope) {
  const items = _scope[7];

  _queue(_scope, _apply_items, 1, items.slice(0, -1));
};

function _apply_items(_scope, items) {
  if (_write(_scope, 7, items)) {
    _setLoopOf(_scope, 0, items, _for, null, _apply_item);

    _write(_scope, 9, _bind(_scope, _onclick2));

    _hydrate_items(_scope);

    _queue(_scope, _applyWith_id_items, 2);
  }
}

function _apply_id(_scope, id) {
  if (_write(_scope, 6, id)) _queue(_scope, _applyWith_id_items, 2);
}

function _apply(_scope) {
  _apply_id(_scope, 0);

  _apply_items(_scope, []);
}

const _for = _createRenderer("<!>", "%", null);

export const template = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const walks = "D%+b b l";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);