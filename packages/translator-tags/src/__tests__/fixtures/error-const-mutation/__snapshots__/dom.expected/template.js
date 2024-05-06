import { data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _fullName = /* @__PURE__ */_value("fullName", (_scope, fullName) => _data(_scope["#text/0"], fullName));
const _user = (_scope, user) => {};
const _setup = _scope => {
  _user(_scope, {
    firstName: "George",
    middleName: "R.R.",
    lastName: "Martin"
  });
  _fullName(_scope, user.fullName = `${user.firstName} ${user.middleName} ${user.lastName}`);
};
export const _template_ = "<p> </p>";
export const _walks_ = /* next(1), get, out(1) */"D l";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/error-const-mutation/template.marko");