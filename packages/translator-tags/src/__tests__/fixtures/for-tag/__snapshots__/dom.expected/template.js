export const _template_ = "<!><!><!><!><!><!><!><!><!><!><!>";
export const _walks_ = /* replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1) */"D%b%b%b%b%b%b%b%b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _forBody10 = /* @__PURE__ */_$.createRenderer("Hello", "");
const _forBody9 = /* @__PURE__ */_$.createRenderer("Hello", "");
const _i$forBody6 = /* @__PURE__ */_$.value("i", (_scope, i) => {
  _$.attr(_scope["#div/0"], "key", i);
  _$.data(_scope["#text/1"], i);
  _$.attr(_scope["#div/2"], "key", `other-${i}`);
});
const _params_9$forBody = /* @__PURE__ */_$.value("_params_9", (_scope, _params_9) => _i$forBody6(_scope, _params_9[0]));
const _forBody8 = /* @__PURE__ */_$.createRenderer("<div> </div><div></div><div></div>", /* get, next(1), get, out(1), over(1), get */" D lb ", void 0, void 0, () => _params_9$forBody);
const _i$forBody5 = /* @__PURE__ */_$.value("i", (_scope, i) => {
  _$.attr(_scope["#div/0"], "key", i);
  _$.data(_scope["#text/1"], i);
  _$.attr(_scope["#div/2"], "key", `other-${i}`);
});
const _params_8$forBody = /* @__PURE__ */_$.value("_params_8", (_scope, _params_8) => _i$forBody5(_scope, _params_8[0]));
const _forBody7 = /* @__PURE__ */_$.createRenderer("<div> </div><div></div><div></div>", /* get, next(1), get, out(1), over(1), get */" D lb ", void 0, void 0, () => _params_8$forBody);
const _for$forBody = /* @__PURE__ */_$.loopTo("#text/3", _forBody7);
const _i$forBody4 = /* @__PURE__ */_$.value("i", (_scope, i) => {
  _$.attr(_scope["#div/0"], "key", i);
  _$.data(_scope["#text/1"], i);
  _$.attr(_scope["#div/2"], "key", `other-${i}`);
});
const _params_7$forBody = /* @__PURE__ */_$.value("_params_7", (_scope, _params_7) => _i$forBody4(_scope, _params_7[0]));
const _setup$forBody = _scope => {
  _for$forBody(_scope, [10, 0, 2]);
};
const _forBody6 = /* @__PURE__ */_$.createRenderer("<div> </div><div></div><div></div><!><!>", /* get, next(1), get, out(1), over(1), get, over(1), replace */" D lb b%D", _setup$forBody, void 0, () => _params_7$forBody);
const _val$forBody4 = /* @__PURE__ */_$.value("val", (_scope, val) => _$.data(_scope["#text/2"], val));
const _key$forBody2 = /* @__PURE__ */_$.value("key", (_scope, key) => {
  _$.attr(_scope["#div/0"], "key", key);
  _$.data(_scope["#text/1"], key);
  _$.attr(_scope["#div/3"], "key", `other-${key}`);
});
const _params_6$forBody = /* @__PURE__ */_$.value("_params_6", (_scope, _params_6) => {
  _key$forBody2(_scope, _params_6[0]);
  _val$forBody4(_scope, _params_6[1]);
});
const _forBody5 = /* @__PURE__ */_$.createRenderer("<div><!>: <!></div><div></div><div></div>", /* get, next(1), replace, over(2), replace, out(1), over(1), get */" D%c%lb ", void 0, void 0, () => _params_6$forBody);
const _i$forBody3 = /* @__PURE__ */_$.value("i", (_scope, i) => {
  _$.attr(_scope["#div/0"], "key", i);
  _$.data(_scope["#text/1"], i);
  _$.attr(_scope["#div/3"], "key", `other-${i}`);
});
const _val$forBody3 = /* @__PURE__ */_$.value("val", (_scope, val) => _$.data(_scope["#text/2"], val));
const _params_5$forBody = /* @__PURE__ */_$.value("_params_5", (_scope, _params_5) => {
  _val$forBody3(_scope, _params_5[0]);
  _i$forBody3(_scope, _params_5[1]);
});
const _forBody4 = /* @__PURE__ */_$.createRenderer("<div><!>: <!></div><div></div><div></div>", /* get, next(1), replace, over(2), replace, out(1), over(1), get */" D%c%lb ", void 0, void 0, () => _params_5$forBody);
const _i$forBody2 = /* @__PURE__ */_$.value("i", (_scope, i) => _$.data(_scope["#text/0"], i));
const _params_4$forBody = /* @__PURE__ */_$.value("_params_4", (_scope, _params_4) => _i$forBody2(_scope, _params_4[0]));
const _forBody3 = /* @__PURE__ */_$.createRenderer("<div> </div><div></div><div></div>", /* next(1), get */"D ", void 0, void 0, () => _params_4$forBody);
const _val$forBody2 = /* @__PURE__ */_$.value("val", (_scope, val) => _$.data(_scope["#text/1"], val));
const _key$forBody = /* @__PURE__ */_$.value("key", (_scope, key) => _$.data(_scope["#text/0"], key));
const _params_3$forBody = /* @__PURE__ */_$.value("_params_3", (_scope, _params_3) => {
  _key$forBody(_scope, _params_3[0]);
  _val$forBody2(_scope, _params_3[1]);
});
const _forBody2 = /* @__PURE__ */_$.createRenderer("<div><!>: <!></div><div></div><div></div>", /* next(1), replace, over(2), replace */"D%c%", void 0, void 0, () => _params_3$forBody);
const _i$forBody = /* @__PURE__ */_$.value("i", (_scope, i) => _$.data(_scope["#text/0"], i));
const _val$forBody = /* @__PURE__ */_$.value("val", (_scope, val) => _$.data(_scope["#text/1"], val));
const _params_2$forBody = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => {
  _val$forBody(_scope, _params_2[0]);
  _i$forBody(_scope, _params_2[1]);
});
const _forBody = /* @__PURE__ */_$.createRenderer("<div><!>: <!></div><div></div><div></div>", /* next(1), replace, over(2), replace */"D%c%", void 0, void 0, () => _params_2$forBody);
const _for9 = /* @__PURE__ */_$.loopTo("#text/8", _forBody10);
const _for8 = /* @__PURE__ */_$.loopTo("#text/7", _forBody9);
const _for7 = /* @__PURE__ */_$.loopTo("#text/6", _forBody8);
const _for6 = /* @__PURE__ */_$.loopTo("#text/5", _forBody6);
const _for5 = /* @__PURE__ */_$.loopIn("#text/4", _forBody5);
const _for4 = /* @__PURE__ */_$.loopOf("#text/3", _forBody4);
const _for3 = /* @__PURE__ */_$.loopTo("#text/2", _forBody3);
const _for2 = /* @__PURE__ */_$.loopIn("#text/1", _forBody2);
const _for = /* @__PURE__ */_$.loopOf("#text/0", _forBody);
const _obj = /* @__PURE__ */_$.value("obj", (_scope, obj) => {
  _for2(_scope, [obj]);
  _for5(_scope, [obj]);
});
const _arr = /* @__PURE__ */_$.value("arr", (_scope, arr) => {
  _for(_scope, [arr]);
  _for4(_scope, [arr]);
});
export function _setup_(_scope) {
  _arr(_scope, [1, 2, 3]);
  _obj(_scope, {
    a: 1,
    b: 1,
    c: 1
  });
  _for3(_scope, [10, 0, 2]);
  _for6(_scope, [10, 0, 2]);
  _for7(_scope, [0, 10, -2]);
  _for8(_scope, [10, 0, 1]);
  _for9(_scope, [10, 0, 1]);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/for-tag/template.marko", _template_, _walks_, _setup_);