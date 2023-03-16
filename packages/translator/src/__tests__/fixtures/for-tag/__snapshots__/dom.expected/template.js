import { data as _data, computeLoopIn as _computeLoopIn, computeLoopToFrom as _computeLoopToFrom, attr as _attr, createRenderer as _createRenderer, source as _source, setSource as _setSource, loop as _loop, notifySignal as _notifySignal, derivation as _derivation, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _forBody11 = /* @__PURE__ */_createRenderer("Hello", "");
const _forBody10 = /* @__PURE__ */_createRenderer("Hello", "");
const _i$forBody7 = /* @__PURE__ */_source("i", [], (_scope, i) => {
  _attr(_scope["#div/0"], "key", i);
  _data(_scope["#text/1"], i);
  _attr(_scope["#div/2"], "key", `other-${i}`);
});
const _forBody9 = /* @__PURE__ */_createRenderer("<div> </div><div></div><div></div>", /* get, next(1), get, out(1), over(1), get */" D lb ");
const _i$forBody6 = /* @__PURE__ */_source("i", [], (_scope, i) => {
  _attr(_scope["#div/0"], "key", i);
  _data(_scope["#text/1"], i);
  _attr(_scope["#div/2"], "key", `other-${i}`);
});
const _forBody8 = /* @__PURE__ */_createRenderer("<div> </div><div></div><div></div>", /* get, next(1), get, out(1), over(1), get */" D lb ");
const _for$forBody = /* @__PURE__ */_loop("#text/3", 1, _forBody8, [_i$forBody6], (_scope, [i]) => _setSource(_scope, _i$forBody6, i), _scope => _computeLoopToFrom(10, 0, 2));
const _i$forBody5 = /* @__PURE__ */_source("i", [], (_scope, i) => {
  _attr(_scope["#div/0"], "key", i);
  _data(_scope["#text/1"], i);
  _attr(_scope["#div/2"], "key", `other-${i}`);
});
const _setup$forBody = _scope => {
  _notifySignal(_scope, _for$forBody);
};
const _forBody7 = /* @__PURE__ */_createRenderer("<div> </div><div></div><div></div><!>", /* get, next(1), get, out(1), over(1), get, over(1), replace */" D lb b%", _setup$forBody);
const _val$forBody5 = /* @__PURE__ */_source("val", [], (_scope, val) => _data(_scope["#text/2"], val));
const _key$forBody2 = /* @__PURE__ */_source("key", [], (_scope, key) => {
  _attr(_scope["#div/0"], "key", key);
  _data(_scope["#text/1"], key);
  _attr(_scope["#div/3"], "key", `other-${key}`);
});
const _forBody6 = /* @__PURE__ */_createRenderer("<div><!>: <!></div><div></div><div></div>", /* get, next(1), replace, over(2), replace, out(1), over(1), get */" D%c%lb ");
const _list$forBody = /* @__PURE__ */_source("list", [], (_scope, list) => _data(_scope["#text/1"], list.length));
const _i$forBody4 = /* @__PURE__ */_source("i", [], (_scope, i) => _attr(_scope["#div/0"], "key", i));
const _val$forBody4 = /* @__PURE__ */_source("val", [], (_scope, val) => _data(_scope["#text/2"], val));
const _forBody5 = /* @__PURE__ */_createRenderer("<div><!>: <!></div>", /* get, next(1), replace, over(2), replace */" D%c%");
const _i$forBody3 = /* @__PURE__ */_source("i", [], (_scope, i) => {
  _attr(_scope["#div/0"], "key", i);
  _data(_scope["#text/1"], i);
  _attr(_scope["#div/3"], "key", `other-${i}`);
});
const _val$forBody3 = /* @__PURE__ */_source("val", [], (_scope, val) => _data(_scope["#text/2"], val));
const _forBody4 = /* @__PURE__ */_createRenderer("<div><!>: <!></div><div></div><div></div>", /* get, next(1), replace, over(2), replace, out(1), over(1), get */" D%c%lb ");
const _i$forBody2 = /* @__PURE__ */_source("i", [], (_scope, i) => _data(_scope["#text/0"], i));
const _forBody3 = /* @__PURE__ */_createRenderer("<div> </div><div></div><div></div>", /* next(1), get */"D ");
const _val$forBody2 = /* @__PURE__ */_source("val", [], (_scope, val) => _data(_scope["#text/1"], val));
const _key$forBody = /* @__PURE__ */_source("key", [], (_scope, key) => _data(_scope["#text/0"], key));
const _forBody2 = /* @__PURE__ */_createRenderer("<div><!>: <!></div><div></div><div></div>", /* next(1), replace, over(2), replace */"D%c%");
const _i$forBody = /* @__PURE__ */_source("i", [], (_scope, i) => _data(_scope["#text/0"], i));
const _val$forBody = /* @__PURE__ */_source("val", [], (_scope, val) => _data(_scope["#text/1"], val));
const _forBody = /* @__PURE__ */_createRenderer("<div><!>: <!></div><div></div><div></div>", /* next(1), replace, over(2), replace */"D%c%");
const _for10 = /* @__PURE__ */_loop("#text/9", 1, _forBody11, [], null, _scope => _computeLoopToFrom(10, 0, 1));
const _for9 = /* @__PURE__ */_loop("#text/8", 1, _forBody10, [], null, _scope => _computeLoopToFrom(10, 0, 1));
const _for8 = /* @__PURE__ */_loop("#text/7", 1, _forBody9, [_i$forBody7], (_scope, [i]) => _setSource(_scope, _i$forBody7, i), _scope => _computeLoopToFrom(0, 10, -2));
const _for7 = /* @__PURE__ */_loop("#text/6", 1, _forBody7, [_i$forBody5], (_scope, [i]) => _setSource(_scope, _i$forBody5, i), _scope => _computeLoopToFrom(10, 0, 2));
const _for6 = /* @__PURE__ */_loop("#text/5", 1, _forBody6, [_key$forBody2, _val$forBody5], (_scope, [[key, val]]) => {
  _setSource(_scope, _key$forBody2, key);
  _setSource(_scope, _val$forBody5, val);
}, (_scope, obj = _scope["obj"]) => _computeLoopIn(obj));
const _for5 = /* @__PURE__ */_loop("#text/4", 1, _forBody5, [_val$forBody4, _i$forBody4, _list$forBody], (_scope, [val, i, list]) => {
  _setSource(_scope, _val$forBody4, val);
  _setSource(_scope, _i$forBody4, i);
  _setSource(_scope, _list$forBody, list);
}, (_scope, arr = _scope["arr"]) => [arr, null]);
const _for4 = /* @__PURE__ */_loop("#text/3", 1, _forBody4, [_val$forBody3, _i$forBody3], (_scope, [val, i]) => {
  _setSource(_scope, _val$forBody3, val);
  _setSource(_scope, _i$forBody3, i);
}, (_scope, arr = _scope["arr"]) => [arr, null]);
const _for3 = /* @__PURE__ */_loop("#text/2", 1, _forBody3, [_i$forBody2], (_scope, [i]) => _setSource(_scope, _i$forBody2, i), _scope => _computeLoopToFrom(10, 0, 2));
const _for2 = /* @__PURE__ */_loop("#text/1", 1, _forBody2, [_key$forBody, _val$forBody2], (_scope, [[key, val]]) => {
  _setSource(_scope, _key$forBody, key);
  _setSource(_scope, _val$forBody2, val);
}, (_scope, obj = _scope["obj"]) => _computeLoopIn(obj));
const _for = /* @__PURE__ */_loop("#text/0", 1, _forBody, [_val$forBody, _i$forBody], (_scope, [val, i]) => {
  _setSource(_scope, _val$forBody, val);
  _setSource(_scope, _i$forBody, i);
}, (_scope, arr = _scope["arr"]) => [arr, null]);
const _obj = /* @__PURE__ */_derivation("obj", 1, [_for2, _for6], _scope => ({
  a: 1,
  b: 1,
  c: 1
}));
const _arr = /* @__PURE__ */_derivation("arr", 1, [_for, _for4, _for5], _scope => [1, 2, 3]);
const _setup = _scope => {
  _notifySignal(_scope, _arr);
  _notifySignal(_scope, _obj);
  _notifySignal(_scope, _for3);
  _notifySignal(_scope, _for7);
  _notifySignal(_scope, _for8);
  _notifySignal(_scope, _for9);
  _notifySignal(_scope, _for10);
};
export const template = "<!><!><!><!><!><!><!><!><!><!>";
export const walks = /* replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1) */"%b%b%b%b%b%b%b%b%b%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/for-tag/template.marko");