import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const arr = [1, 2, 3];
  const obj = {
    a: 1,
    b: 1,
    c: 1
  };
  _$.forOf(arr, (val, i) => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<div>${_$.escapeXML(i)}${_$.markResumeNode(_scope1_id, "#text/0")}: <!>${_$.escapeXML(val)}${_$.markResumeNode(_scope1_id, "#text/1")}</div><div></div><div></div>`);
  });
  _$.forIn(obj, (key, val) => {
    const _scope2_id = _$.nextScopeId();
    _$.write(`<div>${_$.escapeXML(key)}${_$.markResumeNode(_scope2_id, "#text/0")}: <!>${_$.escapeXML(val)}${_$.markResumeNode(_scope2_id, "#text/1")}</div><div></div><div></div>`);
  });
  _$.forTo(10, 0, 2, i => {
    const _scope3_id = _$.nextScopeId();
    _$.write(`<div>${_$.escapeXML(i)}${_$.markResumeNode(_scope3_id, "#text/0")}</div><div></div><div></div>`);
  });
  _$.forOf(arr, (val, i) => {
    const _scope4_id = _$.nextScopeId();
    _$.write(`<div${_$.attr("key", i)}>${_$.escapeXML(i)}${_$.markResumeNode(_scope4_id, "#text/1")}: <!>${_$.escapeXML(val)}${_$.markResumeNode(_scope4_id, "#text/2")}</div>${_$.markResumeNode(_scope4_id, "#div/0")}<div></div><div${_$.attr("key", `other-${i}`)}></div>${_$.markResumeNode(_scope4_id, "#div/3")}`);
  });
  _$.forIn(obj, (key, val) => {
    const _scope5_id = _$.nextScopeId();
    _$.write(`<div${_$.attr("key", key)}>${_$.escapeXML(key)}${_$.markResumeNode(_scope5_id, "#text/1")}: <!>${_$.escapeXML(val)}${_$.markResumeNode(_scope5_id, "#text/2")}</div>${_$.markResumeNode(_scope5_id, "#div/0")}<div></div><div${_$.attr("key", `other-${key}`)}></div>${_$.markResumeNode(_scope5_id, "#div/3")}`);
  });
  _$.forTo(10, 0, 2, i => {
    const _scope6_id = _$.nextScopeId();
    _$.write(`<div${_$.attr("key", i)}>${_$.escapeXML(i)}${_$.markResumeNode(_scope6_id, "#text/1")}</div>${_$.markResumeNode(_scope6_id, "#div/0")}<div></div><div${_$.attr("key", `other-${i}`)}></div>${_$.markResumeNode(_scope6_id, "#div/2")}`);
    _$.forTo(10, 0, 2, i => {
      const _scope7_id = _$.nextScopeId();
      _$.write(`<div${_$.attr("key", i)}>${_$.escapeXML(i)}${_$.markResumeNode(_scope7_id, "#text/1")}</div>${_$.markResumeNode(_scope7_id, "#div/0")}<div></div><div${_$.attr("key", `other-${i}`)}></div>${_$.markResumeNode(_scope7_id, "#div/2")}`);
    });
  });
  _$.forTo(0, 10, -2, i => {
    const _scope8_id = _$.nextScopeId();
    _$.write(`<div${_$.attr("key", i)}>${_$.escapeXML(i)}${_$.markResumeNode(_scope8_id, "#text/1")}</div>${_$.markResumeNode(_scope8_id, "#div/0")}<div></div><div${_$.attr("key", `other-${i}`)}></div>${_$.markResumeNode(_scope8_id, "#div/2")}`);
  });
  _$.forTo(10, 0, 1, () => {
    const _scope9_id = _$.nextScopeId();
    _$.write("Hello");
  });
  _$.forTo(10, 0, 1, () => {
    const _scope10_id = _$.nextScopeId();
    _$.write("Hello");
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);