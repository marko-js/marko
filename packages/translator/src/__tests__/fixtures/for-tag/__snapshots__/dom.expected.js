<for|key, val| in=obj/>
<for|i| from=0 to=10 step=2/>
<for|key, val| in=obj/>
<for|i| from=0 to=10 step=2>
  <for|i| from=0 to=10 step=2/>
</for>
<for|i| from=10 to=0 step=-2/>
<for from=0 to=10/>
<for from=0 to=10/>
import { data as _data, attr as _attr, createRenderer as _createRenderer, source as _source, setSource as _setSource, loop as _loop, derivation as _derivation, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _forBody11 = _createRenderer("Hello", "");

const _forBody10 = _createRenderer("Hello", "");

const _i$forBody7 = "SIGNAL NOT INITIALIZED";

const _forBody9 = _createRenderer("<div> </div><div></div><div></div>",
/* get, next(1), get, out(1), over(1), get */
" D lb ");

const _i$forBody6 = "SIGNAL NOT INITIALIZED";

const _forBody8 = _createRenderer("<div> </div><div></div><div></div>",
/* get, next(1), get, out(1), over(1), get */
" D lb ");

const _i$forBody5 = "SIGNAL NOT INITIALIZED";

const _forBody7 = _createRenderer("<div> </div><div></div><div></div><!>",
/* get, next(1), get, out(1), over(1), get, over(1), replace, skip(6) */
" D lb b%.");

const _val$forBody5 = "SIGNAL NOT INITIALIZED";
const _key$forBody2 = "SIGNAL NOT INITIALIZED";

const _forBody6 = _createRenderer("<div><!>: <!></div><div></div><div></div>",
/* get, next(1), replace, over(2), replace, out(1), over(1), get */
" D%c%lb ");

const _list$forBody = _source(5, [], (_scope, list) => _data(_scope[1], list.length));

const _i$forBody4 = _source(4, [], (_scope, i) => _attr(_scope[0], "key", i));

const _val$forBody4 = _source(3, [], (_scope, val) => _data(_scope[2], val));

const _forBody5 = _createRenderer("<div><!>: <!></div>",
/* get, next(1), replace, over(2), replace */
" D%c%");

const _i$forBody3 = _source(5, [], (_scope, i) => {
  _attr(_scope[0], "key", i);

  _data(_scope[1], i);

  _attr(_scope[3], "key", `other-${i}`);
});

const _val$forBody3 = _source(4, [], (_scope, val) => _data(_scope[2], val));

const _forBody4 = _createRenderer("<div><!>: <!></div><div></div><div></div>",
/* get, next(1), replace, over(2), replace, out(1), over(1), get */
" D%c%lb ");

const _i$forBody2 = "SIGNAL NOT INITIALIZED";

const _forBody3 = _createRenderer("<div> </div><div></div><div></div>",
/* next(1), get */
"D ");

const _val$forBody2 = "SIGNAL NOT INITIALIZED";
const _key$forBody = "SIGNAL NOT INITIALIZED";

const _forBody2 = _createRenderer("<div><!>: <!></div><div></div><div></div>",
/* next(1), replace, over(2), replace */
"D%c%");

const _i$forBody = _source(3, [], (_scope, i) => _data(_scope[0], i));

const _val$forBody = _source(2, [], (_scope, val) => _data(_scope[1], val));

const _forBody = _createRenderer("<div><!>: <!></div><div></div><div></div>",
/* next(1), replace, over(2), replace */
"D%c%");

const _for3 = _loop(28, 1, _forBody5, [_val$forBody4, _i$forBody4, _list$forBody], (_scope, [val, i, list]) => {
  _setSource(_scope, _val$forBody4, val);

  _setSource(_scope, _i$forBody4, i);

  _setSource(_scope, _list$forBody, list);
}, (_scope, arr = _scope[70]) => [arr, null]);

const _for2 = _loop(21, 1, _forBody4, [_val$forBody3, _i$forBody3], (_scope, [val, i]) => {
  _setSource(_scope, _val$forBody3, val);

  _setSource(_scope, _i$forBody3, i);
}, (_scope, arr = _scope[70]) => [arr, null]);

const _for = _loop(0, 1, _forBody, [_val$forBody, _i$forBody], (_scope, [val, i]) => {
  _setSource(_scope, _val$forBody, val);

  _setSource(_scope, _i$forBody, i);
}, (_scope, arr = _scope[70]) => [arr, null]);

const _obj = _derivation(71, 1, [], _scope => ({
  a: 1,
  b: 1,
  c: 1
}));

const _arr = _derivation(70, 1, [_for, _for2, _for3], _scope => [1, 2, 3]);

const _setup = _scope => {
  _notifySignal(_scope, _arr);

  _notifySignal(_scope, _obj);
};

export const template = "<!><!><!><!><!><!><!><!><!><!>";
export const walks =
/* replace, skip(6), over(1), replace, skip(6), over(1), replace, skip(6), over(1), replace, skip(6), over(1), replace, skip(6), over(1), replace, skip(6), over(1), replace, skip(6), over(1), replace, skip(6), over(1), replace, skip(6), over(1), replace, skip(6), over(1) */
"%.b%.b%.b%.b%.b%.b%.b%.b%.b%.b";
export const setup = _setup;
export default _createRenderFn(template, walks, setup);