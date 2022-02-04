const _for = _createRenderer("<div><!>: <!></div><div></div><div></div>", "D%c%", null);

<for|key, val| in=obj/>
<for|i| from=0 to=10 step=2/>

const _for2 = _createRenderer("<div><!>: <!></div><div></div><div></div>", " D%c%lb ", null);

const _for3 = _createRenderer("<div><!>: <!></div>", " D%c%", null);

<for|key, val| in=obj/>
<for|i| from=0 to=10 step=2>
  <for|i| from=0 to=10 step=2/>
</for>
<for|i| from=10 to=0 step=-2/>
<for from=0 to=10/>
<for from=0 to=10/>
import { data as _data, createRenderer as _createRenderer, setLoopOf as _setLoopOf, attr as _attr, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_i7(i) {
  if (_write(3, i)) {
    _attr(0, "key", i);

    _data(1, i);

    _attr(2, "key", `other-${i}`);
  }
}

function _apply_i6(i) {
  if (_write(3, i)) {
    _attr(0, "key", i);

    _data(1, i);

    _attr(2, "key", `other-${i}`);
  }
}

function _apply_i5(i) {
  if (_write(7, i)) {
    _attr(0, "key", i);

    _data(1, i);

    _attr(2, "key", `other-${i}`);
  }
}

function _apply_val5(val) {
  if (_write(5, val)) _data(2, val);
}

function _apply_key2(key) {
  if (_write(4, key)) {
    _attr(0, "key", key);

    _data(1, key);

    _attr(3, "key", `other-${key}`);
  }
}

function _apply_list(list) {
  if (_write(5, list)) _data(1, list.length);
}

function _apply_i4(i) {
  if (_write(4, i)) _attr(0, "key", i);
}

function _apply_val4(val) {
  if (_write(3, val)) _data(2, val);
}

function _apply_i3(i) {
  if (_write(5, i)) {
    _attr(0, "key", i);

    _data(1, i);

    _attr(3, "key", `other-${i}`);
  }
}

function _apply_val3(val) {
  if (_write(4, val)) _data(2, val);
}

function _apply_i2(i) {
  if (_write(1, i)) _data(0, i);
}

function _apply_val2(val) {
  if (_write(3, val)) _data(1, val);
}

function _apply_key(key) {
  if (_write(2, key)) _data(0, key);
}

function _apply_i(i) {
  if (_write(3, i)) _data(0, i);
}

function _apply_val(val) {
  if (_write(2, val)) _data(1, val);
}

function _apply_obj(obj) {
  if (_write(41, obj)) {}
}

function _apply_arr(arr) {
  if (_write(40, arr)) {
    _setLoopOf(0, arr, _for, null, _apply_val);

    _setLoopOf(12, arr, _for2, null, _apply_val3);

    _setLoopOf(16, arr, _for3, null, _apply_val4);
  }
}

function _apply() {
  _apply_arr([1, 2, 3]);

  _apply_obj({
    a: 1,
    b: 1,
    c: 1
  });
}

export const template = "<!><!><!><!><!><!><!><!><!><!>";
export const walks = "%+b%+b%+b%+b%+b%+b%+b%+b%+b%+";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);