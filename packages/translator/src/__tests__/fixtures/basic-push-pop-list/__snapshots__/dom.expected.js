import { queue as _queue, data as _data, setLoopOf as _setLoopOf, on as _on, write as _write, register as _register, bind as _bind, queueHydrate as _queueHydrate, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply1_item(_scope, item) {
  if (_write(_scope, 1, item)) _data(_scope[0], item);
}

const _onclick = function (_scope) {
  const id = _scope[6],
        items = _scope[7];
  // TODO: nested writes ([...items, id++]) don't work
  const nextId = id + 1;

  _queue(_scope, _apply_id, 0, nextId);

  _queue(_scope, _apply_items, 1, [...items, nextId]);
};

function _hydrateWith_id_items(_scope, id = _scope[6], items = _scope[7]) {
  _on(_scope[4], "click", _bind(_scope, _onclick));
}

_register("packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_id_items", _hydrateWith_id_items);

const _onclick2 = function (_scope) {
  const items = _scope[7];

  _queue(_scope, _apply_items, 1, items.slice(0, -1));
};

function _hydrate_items(_scope, items = _scope[7]) {
  _on(_scope[5], "click", _bind(_scope, _onclick2));
}

_register("packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_items", _hydrate_items);

function _applyWith_id_items(_scope, id = _scope[6], items = _scope[7]) {
  _queueHydrate(_scope, _hydrateWith_id_items);
}

function _apply_items(_scope, items) {
  if (_write(_scope, 7, items)) {
    _setLoopOf(_scope, 0, items, _for, null, _apply1_item);

    _queueHydrate(_scope, _hydrate_items);

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

export const template = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const walks =
/* next(1), replace, skip(3), over(1), get, over(1), get, out(1) */
"D%+b b l";
export const apply = _apply;

const _for = _createRenderer(" ",
/* get */
" ", null);

export default _createRenderFn(template, walks, apply);