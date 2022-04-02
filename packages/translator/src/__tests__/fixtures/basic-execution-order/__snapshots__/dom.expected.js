import { queue as _queue, on as _on, data as _data, setConditionalRenderer as _setConditionalRenderer, queueInBranch as _queueInBranch, register as _register, bind as _bind, queueHydrate as _queueHydrate, write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_message2(_scope, message = _scope._[5]) {
  _data(_scope, 0, message.text);
}

function _apply2(_scope) {
  _queue(_scope, _apply_message2, 0);
}

const _temp2 = function (_scope) {
  _queue(_scope, _apply_message, 0, null);

  _queue(_scope, _apply_show, 1, false);
};

function _hydrate(_scope) {
  _on(_scope, 0, "click", _bind(_scope, _temp2));
}

_register("packages/translator/src/__tests__/fixtures/basic-execution-order/template.marko_0_0", _hydrate);

function _apply_show(_scope, show) {
  if (_write(_scope, 6, show)) _setConditionalRenderer(_scope, 1, show ? _if : null);
}

function _apply_message(_scope, message) {
  if (_write(_scope, 5, message)) _queueInBranch(_scope, 1, _if, _apply_message2, 0, 1);
}

function _apply(_scope) {
  _apply_message(_scope, {
    text: "hi"
  });

  _apply_show(_scope, true);

  _queueHydrate(_scope, _hydrate);
}

const _if = _createRenderer("<!>",
/* replace */
"%", _apply2);

export const template = "<button>hide</button><!>";
export const walks =
/* get, over(1), replace, skip(3), over(1) */
" b%+b";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);