import { queue as _queue, write as _write, read as _read, on as _on, data as _data, setConditionalRenderer as _setConditionalRenderer, readInOwner as _readInOwner, queueInBranch as _queueInBranch, bind as _bind, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_message2(message = _readInOwner(5)) {
  _data(0, message.text);
}

function _apply2() {
  _queue(_apply_message2, 0);
}

function _hydrate() {
  _on(0, "click", _read(7));
}

function _apply_show(show) {
  if (_write(6, show)) _setConditionalRenderer(1, show ? _if : null);
}

function _apply_message(message) {
  if (_write(5, message)) _queueInBranch(1, _if, _apply_message2, 0, 1);
}

const _temp2 = function () {
  _queue(_apply_message, 0, null);

  _queue(_apply_show, 1, false);
};

function _apply() {
  _apply_message({
    text: "hi"
  });

  _apply_show(true);

  _write(7, _bind(_temp2));

  _hydrate();
}

const _if = _createRenderer("<!>", "%", _apply2);

export const template = "<button>hide</button><!>";
export const walks = " b%+b";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);