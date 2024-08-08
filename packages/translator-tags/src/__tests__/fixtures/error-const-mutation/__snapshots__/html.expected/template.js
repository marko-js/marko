import { escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const user = {
    firstName: "George",
    middleName: "R.R.",
    lastName: "Martin"
  };
  const fullName = user.fullName = `${user.firstName} ${user.middleName} ${user.lastName}`;
  _write(`<p>${_escapeXML(fullName)}</p>`);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/error-const-mutation/template.marko");