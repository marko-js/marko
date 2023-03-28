import { data as _data, computeLoopIn as _computeLoopIn, computeLoopToFrom as _computeLoopToFrom, attr as _attr, createRenderer as _createRenderer, value as _value, loop as _loop, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _forBody11 = /* @__PURE__ */_createRenderer("Hello", "");
const _forBody10 = /* @__PURE__ */_createRenderer("Hello", "");
const _i$forBody7 = /* @__PURE__ */_value("i", (_scope, i) => {
  _attr(_scope["#div/0"], "key", i);
  _data(_scope["#text/1"], i);
  _attr(_scope["#div/2"], "key", `other-${i}`);
});
const _forBody9 = /* @__PURE__ */_createRenderer("<div> </div><div></div><div></div>", /* get, next(1), get, out(1), over(1), get */" D lb ");
const _i$forBody6 = /* @__PURE__ */_value("i", (_scope, i) => {
  _attr(_scope["#div/0"], "key", i);
  _data(_scope["#text/1"], i);
  _attr(_scope["#div/2"], "key", `other-${i}`);
});
const _forBody8 = /* @__PURE__ */_createRenderer("<div> </div><div></div><div></div>", /* get, next(1), get, out(1), over(1), get */" D lb ");
const _for$forBody = /* @__PURE__ */_loop("#text/3", _forBody8, (_scope, _destructure7, _dirty = true) => {
  let i;
  if (_dirty) [i] = _destructure7;
  _i$forBody6(_scope, i, _dirty);
});
const _i$forBody5 = /* @__PURE__ */_value("i", (_scope, i) => {
  _attr(_scope["#div/0"], "key", i);
  _data(_scope["#text/1"], i);
  _attr(_scope["#div/2"], "key", `other-${i}`);
});
const _setup$forBody = _scope => {
  _for$forBody(_scope, _computeLoopToFrom(10, 0, 2));
};
const _forBody7 = /* @__PURE__ */_createRenderer("<div> </div><div></div><div></div><!>", /* get, next(1), get, out(1), over(1), get, over(1), replace */" D lb b%", _setup$forBody);
const _val$forBody5 = /* @__PURE__ */_value("val", (_scope, val) => _data(_scope["#text/2"], val));
const _key$forBody2 = /* @__PURE__ */_value("key", (_scope, key) => {
  _attr(_scope["#div/0"], "key", key);
  _data(_scope["#text/1"], key);
  _attr(_scope["#div/3"], "key", `other-${key}`);
});
const _forBody6 = /* @__PURE__ */_createRenderer("<div><!>: <!></div><div></div><div></div>", /* get, next(1), replace, over(2), replace, out(1), over(1), get */" D%c%lb ");
const _list$forBody = /* @__PURE__ */_value("list", (_scope, list) => _data(_scope["#text/1"], list.length));
const _i$forBody4 = /* @__PURE__ */_value("i", (_scope, i) => _attr(_scope["#div/0"], "key", i));
const _val$forBody4 = /* @__PURE__ */_value("val", (_scope, val) => _data(_scope["#text/2"], val));
const _forBody5 = /* @__PURE__ */_createRenderer("<div><!>: <!></div>", /* get, next(1), replace, over(2), replace */" D%c%");
const _i$forBody3 = /* @__PURE__ */_value("i", (_scope, i) => {
  _attr(_scope["#div/0"], "key", i);
  _data(_scope["#text/1"], i);
  _attr(_scope["#div/3"], "key", `other-${i}`);
});
const _val$forBody3 = /* @__PURE__ */_value("val", (_scope, val) => _data(_scope["#text/2"], val));
const _forBody4 = /* @__PURE__ */_createRenderer("<div><!>: <!></div><div></div><div></div>", /* get, next(1), replace, over(2), replace, out(1), over(1), get */" D%c%lb ");
const _i$forBody2 = /* @__PURE__ */_value("i", (_scope, i) => _data(_scope["#text/0"], i));
const _forBody3 = /* @__PURE__ */_createRenderer("<div> </div><div></div><div></div>", /* next(1), get */"D ");
const _val$forBody2 = /* @__PURE__ */_value("val", (_scope, val) => _data(_scope["#text/1"], val));
const _key$forBody = /* @__PURE__ */_value("key", (_scope, key) => _data(_scope["#text/0"], key));
const _forBody2 = /* @__PURE__ */_createRenderer("<div><!>: <!></div><div></div><div></div>", /* next(1), replace, over(2), replace */"D%c%");
const _i$forBody = /* @__PURE__ */_value("i", (_scope, i) => _data(_scope["#text/0"], i));
const _val$forBody = /* @__PURE__ */_value("val", (_scope, val) => _data(_scope["#text/1"], val));
const _forBody = /* @__PURE__ */_createRenderer("<div><!>: <!></div><div></div><div></div>", /* next(1), replace, over(2), replace */"D%c%");
const _for10 = /* @__PURE__ */_loop("#text/9", _forBody11);
const _for9 = /* @__PURE__ */_loop("#text/8", _forBody10);
const _for8 = /* @__PURE__ */_loop("#text/7", _forBody9, (_scope, _destructure9, _dirty = true) => {
  let i;
  if (_dirty) [i] = _destructure9;
  _i$forBody7(_scope, i, _dirty);
});
const _for7 = /* @__PURE__ */_loop("#text/6", _forBody7, (_scope, _destructure8, _dirty = true) => {
  let i;
  if (_dirty) [i] = _destructure8;
  _i$forBody5(_scope, i, _dirty);
});
const _for6 = /* @__PURE__ */_loop("#text/5", _forBody6, (_scope, _destructure6, _dirty = true) => {
  let key, val;
  if (_dirty) [[key, val]] = _destructure6;
  _key$forBody2(_scope, key, _dirty);
  _val$forBody5(_scope, val, _dirty);
});
const _for5 = /* @__PURE__ */_loop("#text/4", _forBody5, (_scope, _destructure5, _dirty = true) => {
  let val, i, list;
  if (_dirty) [val, i, list] = _destructure5;
  _val$forBody4(_scope, val, _dirty);
  _i$forBody4(_scope, i, _dirty);
  _list$forBody(_scope, list, _dirty);
});
const _for4 = /* @__PURE__ */_loop("#text/3", _forBody4, (_scope, _destructure4, _dirty = true) => {
  let val, i;
  if (_dirty) [val, i] = _destructure4;
  _val$forBody3(_scope, val, _dirty);
  _i$forBody3(_scope, i, _dirty);
});
const _for3 = /* @__PURE__ */_loop("#text/2", _forBody3, (_scope, _destructure3, _dirty = true) => {
  let i;
  if (_dirty) [i] = _destructure3;
  _i$forBody2(_scope, i, _dirty);
});
const _for2 = /* @__PURE__ */_loop("#text/1", _forBody2, (_scope, _destructure2, _dirty = true) => {
  let key, val;
  if (_dirty) [[key, val]] = _destructure2;
  _key$forBody(_scope, key, _dirty);
  _val$forBody2(_scope, val, _dirty);
});
const _for = /* @__PURE__ */_loop("#text/0", _forBody, (_scope, _destructure, _dirty = true) => {
  let val, i;
  if (_dirty) [val, i] = _destructure;
  _val$forBody(_scope, val, _dirty);
  _i$forBody(_scope, i, _dirty);
});
const _obj = /* @__PURE__ */_value("obj", (_scope, obj) => {
  _for2(_scope, _computeLoopIn(obj));
  _for6(_scope, _computeLoopIn(obj));
});
const _arr = /* @__PURE__ */_value("arr", (_scope, arr) => {
  _for(_scope, [arr, null]);
  _for4(_scope, [arr, null]);
  _for5(_scope, [arr, null]);
});
const _setup = _scope => {
  _arr(_scope, [1, 2, 3]);
  _obj(_scope, {
    a: 1,
    b: 1,
    c: 1
  });
  _for3(_scope, _computeLoopToFrom(10, 0, 2));
  _for7(_scope, _computeLoopToFrom(10, 0, 2));
  _for8(_scope, _computeLoopToFrom(0, 10, -2));
  _for9(_scope, _computeLoopToFrom(10, 0, 1));
  _for10(_scope, _computeLoopToFrom(10, 0, 1));
};
export const template = "<!><!><!><!><!><!><!><!><!><!>";
export const walks = /* replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1) */"%b%b%b%b%b%b%b%b%b%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/for-tag/template.marko");