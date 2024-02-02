import { data as _data, attr as _attr, createRenderer as _createRenderer, value as _value, loopTo as _loopTo, loopIn as _loopIn, loopOf as _loopOf, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _forBody11 = /* @__PURE__ */_createRenderer("Hello", "");
const _forBody10 = /* @__PURE__ */_createRenderer("Hello", "");
const _i$forBody7 = /* @__PURE__ */_value("i", (_scope, i) => {
  _attr(_scope["#div/0"], "key", i);
  _data(_scope["#text/1"], i);
  _attr(_scope["#div/2"], "key", `other-${i}`);
});
const _forBody9 = /* @__PURE__ */_createRenderer("<div> </div><div></div><div></div>", /* get, next(1), get, out(1), over(1), get */" D lb ", void 0, void 0, void 0, void 0, void 0, void 0, (_scope, _destructure, _clean) => {
  let i;
  if (!_clean) [i] = _destructure;
  _i$forBody7(_scope, i, _clean);
});
const _i$forBody6 = /* @__PURE__ */_value("i", (_scope, i) => {
  _attr(_scope["#div/0"], "key", i);
  _data(_scope["#text/1"], i);
  _attr(_scope["#div/2"], "key", `other-${i}`);
});
const _forBody8 = /* @__PURE__ */_createRenderer("<div> </div><div></div><div></div>", /* get, next(1), get, out(1), over(1), get */" D lb ", void 0, void 0, void 0, void 0, void 0, void 0, (_scope, _destructure2, _clean) => {
  let i;
  if (!_clean) [i] = _destructure2;
  _i$forBody6(_scope, i, _clean);
});
const _for8$forBody = /* @__PURE__ */_loopTo("#text/3", _forBody8);
const _i$forBody5 = /* @__PURE__ */_value("i", (_scope, i) => {
  _attr(_scope["#div/0"], "key", i);
  _data(_scope["#text/1"], i);
  _attr(_scope["#div/2"], "key", `other-${i}`);
});
const _setup$forBody = _scope => {
  _for8$forBody(_scope, [10, 0, 2]);
};
const _forBody7 = /* @__PURE__ */_createRenderer("<div> </div><div></div><div></div><!>", /* get, next(1), get, out(1), over(1), get, over(1), replace */" D lb b%", _setup$forBody, void 0, void 0, void 0, void 0, void 0, (_scope, _destructure3, _clean) => {
  let i;
  if (!_clean) [i] = _destructure3;
  _i$forBody5(_scope, i, _clean);
});
const _val$forBody5 = /* @__PURE__ */_value("val", (_scope, val) => _data(_scope["#text/2"], val));
const _key$forBody2 = /* @__PURE__ */_value("key", (_scope, key) => {
  _attr(_scope["#div/0"], "key", key);
  _data(_scope["#text/1"], key);
  _attr(_scope["#div/3"], "key", `other-${key}`);
});
const _forBody6 = /* @__PURE__ */_createRenderer("<div><!>: <!></div><div></div><div></div>", /* get, next(1), replace, over(2), replace, out(1), over(1), get */" D%c%lb ", void 0, void 0, void 0, void 0, void 0, void 0, (_scope, _destructure4, _clean) => {
  let key, val;
  if (!_clean) [key, val] = _destructure4;
  _key$forBody2(_scope, key, _clean);
  _val$forBody5(_scope, val, _clean);
});
const _list$forBody = /* @__PURE__ */_value("list", (_scope, list) => _data(_scope["#text/1"], list.length));
const _i$forBody4 = /* @__PURE__ */_value("i", (_scope, i) => _attr(_scope["#div/0"], "key", i));
const _val$forBody4 = /* @__PURE__ */_value("val", (_scope, val) => _data(_scope["#text/2"], val));
const _forBody5 = /* @__PURE__ */_createRenderer("<div><!>: <!></div>", /* get, next(1), replace, over(2), replace */" D%c%", void 0, void 0, void 0, void 0, void 0, void 0, (_scope, _destructure5, _clean) => {
  let val, i, list;
  if (!_clean) [val, i, list] = _destructure5;
  _val$forBody4(_scope, val, _clean);
  _i$forBody4(_scope, i, _clean);
  _list$forBody(_scope, list, _clean);
});
const _i$forBody3 = /* @__PURE__ */_value("i", (_scope, i) => {
  _attr(_scope["#div/0"], "key", i);
  _data(_scope["#text/1"], i);
  _attr(_scope["#div/3"], "key", `other-${i}`);
});
const _val$forBody3 = /* @__PURE__ */_value("val", (_scope, val) => _data(_scope["#text/2"], val));
const _forBody4 = /* @__PURE__ */_createRenderer("<div><!>: <!></div><div></div><div></div>", /* get, next(1), replace, over(2), replace, out(1), over(1), get */" D%c%lb ", void 0, void 0, void 0, void 0, void 0, void 0, (_scope, _destructure6, _clean) => {
  let val, i;
  if (!_clean) [val, i] = _destructure6;
  _val$forBody3(_scope, val, _clean);
  _i$forBody3(_scope, i, _clean);
});
const _i$forBody2 = /* @__PURE__ */_value("i", (_scope, i) => _data(_scope["#text/0"], i));
const _forBody3 = /* @__PURE__ */_createRenderer("<div> </div><div></div><div></div>", /* next(1), get */"D ", void 0, void 0, void 0, void 0, void 0, void 0, (_scope, _destructure7, _clean) => {
  let i;
  if (!_clean) [i] = _destructure7;
  _i$forBody2(_scope, i, _clean);
});
const _val$forBody2 = /* @__PURE__ */_value("val", (_scope, val) => _data(_scope["#text/1"], val));
const _key$forBody = /* @__PURE__ */_value("key", (_scope, key) => _data(_scope["#text/0"], key));
const _forBody2 = /* @__PURE__ */_createRenderer("<div><!>: <!></div><div></div><div></div>", /* next(1), replace, over(2), replace */"D%c%", void 0, void 0, void 0, void 0, void 0, void 0, (_scope, _destructure8, _clean) => {
  let key, val;
  if (!_clean) [key, val] = _destructure8;
  _key$forBody(_scope, key, _clean);
  _val$forBody2(_scope, val, _clean);
});
const _i$forBody = /* @__PURE__ */_value("i", (_scope, i) => _data(_scope["#text/0"], i));
const _val$forBody = /* @__PURE__ */_value("val", (_scope, val) => _data(_scope["#text/1"], val));
const _forBody = /* @__PURE__ */_createRenderer("<div><!>: <!></div><div></div><div></div>", /* next(1), replace, over(2), replace */"D%c%", void 0, void 0, void 0, void 0, void 0, void 0, (_scope, _destructure9, _clean) => {
  let val, i;
  if (!_clean) [val, i] = _destructure9;
  _val$forBody(_scope, val, _clean);
  _i$forBody(_scope, i, _clean);
});
const _for10 = /* @__PURE__ */_loopTo("#text/9", _forBody11);
const _for9 = /* @__PURE__ */_loopTo("#text/8", _forBody10);
const _for8 = /* @__PURE__ */_loopTo("#text/7", _forBody9);
const _for7 = /* @__PURE__ */_loopTo("#text/6", _forBody7);
const _for6 = /* @__PURE__ */_loopIn("#text/5", _forBody6);
const _for5 = /* @__PURE__ */_loopOf("#text/4", _forBody5);
const _for4 = /* @__PURE__ */_loopOf("#text/3", _forBody4);
const _for3 = /* @__PURE__ */_loopTo("#text/2", _forBody3);
const _for2 = /* @__PURE__ */_loopIn("#text/1", _forBody2);
const _for = /* @__PURE__ */_loopOf("#text/0", _forBody);
const _obj = /* @__PURE__ */_value("obj", (_scope, obj) => {
  _for2(_scope, [obj]);
  _for6(_scope, [obj]);
});
const _arr = /* @__PURE__ */_value("arr", (_scope, arr) => {
  _for(_scope, [arr]);
  _for4(_scope, [arr]);
  _for5(_scope, [arr]);
});
const _setup = _scope => {
  _arr(_scope, [1, 2, 3]);
  _obj(_scope, {
    a: 1,
    b: 1,
    c: 1
  });
  _for3(_scope, [10, 0, 2]);
  _for7(_scope, [10, 0, 2]);
  _for8(_scope, [0, 10, -2]);
  _for9(_scope, [10, 0, 1]);
  _for10(_scope, [10, 0, 1]);
};
export const template = "<!><!><!><!><!><!><!><!><!><!>";
export const walks = /* replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1) */"%b%b%b%b%b%b%b%b%b%b";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/for-tag/template.marko");