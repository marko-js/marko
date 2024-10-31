import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, forOf as _forOf, forIn as _forIn, forTo as _forTo, attr as _attr, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const arr = [1, 2, 3];
  const obj = {
    a: 1,
    b: 1,
    c: 1
  };
  _forOf(arr, (val, i) => {
    const _scope1_id = _nextScopeId();
    _write(`<div>${_escapeXML(i)}${_markResumeNode(_scope1_id, "#text/0")}: <!>${_escapeXML(val)}${_markResumeNode(_scope1_id, "#text/1")}</div><div></div><div></div>`);
  });
  _forIn(obj, (key, val) => {
    const _scope2_id = _nextScopeId();
    _write(`<div>${_escapeXML(key)}${_markResumeNode(_scope2_id, "#text/0")}: <!>${_escapeXML(val)}${_markResumeNode(_scope2_id, "#text/1")}</div><div></div><div></div>`);
  });
  _forTo(10, 0, 2, i => {
    const _scope3_id = _nextScopeId();
    _write(`<div>${_escapeXML(i)}${_markResumeNode(_scope3_id, "#text/0")}</div><div></div><div></div>`);
  });
  _forOf(arr, (val, i) => {
    const _scope4_id = _nextScopeId();
    _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markResumeNode(_scope4_id, "#text/1")}: <!>${_escapeXML(val)}${_markResumeNode(_scope4_id, "#text/2")}</div>${_markResumeNode(_scope4_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markResumeNode(_scope4_id, "#div/3")}`);
  });
  _forIn(obj, (key, val) => {
    const _scope5_id = _nextScopeId();
    _write(`<div${_attr("key", key)}>${_escapeXML(key)}${_markResumeNode(_scope5_id, "#text/1")}: <!>${_escapeXML(val)}${_markResumeNode(_scope5_id, "#text/2")}</div>${_markResumeNode(_scope5_id, "#div/0")}<div></div><div${_attr("key", `other-${key}`)}></div>${_markResumeNode(_scope5_id, "#div/3")}`);
  });
  _forTo(10, 0, 2, i => {
    const _scope6_id = _nextScopeId();
    _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markResumeNode(_scope6_id, "#text/1")}</div>${_markResumeNode(_scope6_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markResumeNode(_scope6_id, "#div/2")}`);
    _forTo(10, 0, 2, i => {
      const _scope7_id = _nextScopeId();
      _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markResumeNode(_scope7_id, "#text/1")}</div>${_markResumeNode(_scope7_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markResumeNode(_scope7_id, "#div/2")}`);
    });
  });
  _forTo(0, 10, -2, i => {
    const _scope8_id = _nextScopeId();
    _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markResumeNode(_scope8_id, "#text/1")}</div>${_markResumeNode(_scope8_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markResumeNode(_scope8_id, "#div/2")}`);
  });
  _forTo(10, 0, 1, () => {
    const _scope9_id = _nextScopeId();
    _write("Hello");
  });
  _forTo(10, 0, 1, () => {
    const _scope10_id = _nextScopeId();
    _write("Hello");
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/for-tag/template.marko");