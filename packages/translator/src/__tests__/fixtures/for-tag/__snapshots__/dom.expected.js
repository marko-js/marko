<for|key, val| in=obj/>
<for|i| from=0 to=10 step=2/>
<for|key, val| in=obj/>
<for|i| from=0 to=10 step=2>
  <for|i| from=0 to=10 step=2/>
</for>
<for|i| from=10 to=0 step=-2/>
<for from=0 to=10/>
<for from=0 to=10/>
import { data as _data, setLoopOf as _setLoopOf, attr as _attr, write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply9_i(_scope, i) {
  if (_write(_scope, 3, i)) {
    _attr(_scope[0], "key", i);

    _data(_scope[1], i);

    _attr(_scope[2], "key", `other-${i}`);
  }
}

function _apply8_i(_scope, i) {
  if (_write(_scope, 3, i)) {
    _attr(_scope[0], "key", i);

    _data(_scope[1], i);

    _attr(_scope[2], "key", `other-${i}`);
  }
}

function _apply7_i(_scope, i) {
  if (_write(_scope, 7, i)) {
    _attr(_scope[0], "key", i);

    _data(_scope[1], i);

    _attr(_scope[2], "key", `other-${i}`);
  }
}

function _apply6_val(_scope, val) {
  if (_write(_scope, 5, val)) _data(_scope[2], val);
}

function _apply6_key(_scope, key) {
  if (_write(_scope, 4, key)) {
    _attr(_scope[0], "key", key);

    _data(_scope[1], key);

    _attr(_scope[3], "key", `other-${key}`);
  }
}

function _apply5_list(_scope, list) {
  if (_write(_scope, 5, list)) _data(_scope[1], list.length);
}

function _apply5_i(_scope, i) {
  if (_write(_scope, 4, i)) _attr(_scope[0], "key", i);
}

function _apply5_val(_scope, val) {
  if (_write(_scope, 3, val)) _data(_scope[2], val);
}

function _apply4_i(_scope, i) {
  if (_write(_scope, 5, i)) {
    _attr(_scope[0], "key", i);

    _data(_scope[1], i);

    _attr(_scope[3], "key", `other-${i}`);
  }
}

function _apply4_val(_scope, val) {
  if (_write(_scope, 4, val)) _data(_scope[2], val);
}

function _apply3_i(_scope, i) {
  if (_write(_scope, 1, i)) _data(_scope[0], i);
}

function _apply2_val(_scope, val) {
  if (_write(_scope, 3, val)) _data(_scope[1], val);
}

function _apply2_key(_scope, key) {
  if (_write(_scope, 2, key)) _data(_scope[0], key);
}

function _apply1_i(_scope, i) {
  if (_write(_scope, 3, i)) _data(_scope[0], i);
}

function _apply1_val(_scope, val) {
  if (_write(_scope, 2, val)) _data(_scope[1], val);
}

function _apply_obj(_scope, obj) {
  if (_write(_scope, 41, obj)) {}
}

function _apply_arr(_scope, arr) {
  if (_write(_scope, 40, arr)) {
    _setLoopOf(_scope, 0, arr, _for, null, _apply1_val);

    _setLoopOf(_scope, 12, arr, _for2, null, _apply4_val);

    _setLoopOf(_scope, 16, arr, _for3, null, _apply5_val);
  }
}

function _apply(_scope) {
  _apply_arr(_scope, [1, 2, 3]);

  _apply_obj(_scope, {
    a: 1,
    b: 1,
    c: 1
  });
}

export const template = "<!><!><!><!><!><!><!><!><!><!>";
export const walks =
/* replace, skip(3), over(1), replace, skip(3), over(1), replace, skip(3), over(1), replace, skip(3), over(1), replace, skip(3), over(1), replace, skip(3), over(1), replace, skip(3), over(1), replace, skip(3), over(1), replace, skip(3), over(1), replace, skip(3), over(1) */
"%+b%+b%+b%+b%+b%+b%+b%+b%+b%+b";
export const apply = _apply;

const _for = _createRenderer("<div><!>: <!></div><div></div><div></div>",
/* next(1), replace, over(2), replace */
"D%c%", null),
      _temp4 = _createRenderer("<div><!>: <!></div><div></div><div></div>",
/* next(1), replace, over(2), replace */
"D%c%", null),
      _temp5 = _createRenderer("<div> </div><div></div><div></div>",
/* next(1), get */
"D ", null),
      _for2 = _createRenderer("<div><!>: <!></div><div></div><div></div>",
/* get, next(1), replace, over(2), replace, out(1), over(1), get */
" D%c%lb ", null),
      _for3 = _createRenderer("<div><!>: <!></div>",
/* get, next(1), replace, over(2), replace */
" D%c%", null),
      _temp6 = _createRenderer("<div><!>: <!></div><div></div><div></div>",
/* get, next(1), replace, over(2), replace, out(1), over(1), get */
" D%c%lb ", null),
      _temp7 = _createRenderer("<div> </div><div></div><div></div><!>",
/* get, next(1), get, out(1), over(1), get, over(1), replace, skip(3) */
" D lb b%+", null),
      _temp8 = _createRenderer("<div> </div><div></div><div></div>",
/* get, next(1), get, out(1), over(1), get */
" D lb ", null),
      _temp9 = _createRenderer("<div> </div><div></div><div></div>",
/* get, next(1), get, out(1), over(1), get */
" D lb ", null),
      _temp10 = _createRenderer("Hello", "", null),
      _temp11 = _createRenderer("Hello", "", null);

export default _createRenderFn(template, walks, apply);