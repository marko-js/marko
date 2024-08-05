import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, attr as _attr, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const arr = [1, 2, 3];
  const obj = {
    a: 1,
    b: 1,
    c: 1
  };
  let _i = 0;
  for (const val of arr) {
    const _scope1_id = _nextScopeId();
    let i = _i++;
    _write(`<div>${_escapeXML(i)}${_markResumeNode(_scope1_id, "#text/0")}: <!>${_escapeXML(val)}${_markResumeNode(_scope1_id, "#text/1")}</div><div></div><div></div>`);
  }
  for (const key in obj) {
    const _scope2_id = _nextScopeId();
    const val = obj[key];
    _write(`<div>${_escapeXML(key)}${_markResumeNode(_scope2_id, "#text/0")}: <!>${_escapeXML(val)}${_markResumeNode(_scope2_id, "#text/1")}</div><div></div><div></div>`);
  }
  for (let _from = 0 ?? 0, _step = 2 ?? 1, _steps = (10 - _from) / _step, _i2 = 0; _i2 <= _steps; _i2++) {
    const _scope3_id = _nextScopeId();
    const i = _from + _i2 * _step;
    _write(`<div>${_escapeXML(i)}${_markResumeNode(_scope3_id, "#text/0")}</div><div></div><div></div>`);
  }
  let _i3 = 0;
  for (const val of arr) {
    const _scope4_id = _nextScopeId();
    let i = _i3++;
    _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markResumeNode(_scope4_id, "#text/1")}: <!>${_escapeXML(val)}${_markResumeNode(_scope4_id, "#text/2")}</div>${_markResumeNode(_scope4_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markResumeNode(_scope4_id, "#div/3")}`);
  }
  let _i4 = 0;
  const list = arr;
  for (const val of list) {
    const _scope5_id = _nextScopeId();
    let i = _i4++;
    _write(`<div${_attr("key", i)}>${_escapeXML(list.length)}${_markResumeNode(_scope5_id, "#text/1")}: <!>${_escapeXML(val)}${_markResumeNode(_scope5_id, "#text/2")}</div>${_markResumeNode(_scope5_id, "#div/0")}`);
  }
  for (const key in obj) {
    const _scope6_id = _nextScopeId();
    const val = obj[key];
    _write(`<div${_attr("key", key)}>${_escapeXML(key)}${_markResumeNode(_scope6_id, "#text/1")}: <!>${_escapeXML(val)}${_markResumeNode(_scope6_id, "#text/2")}</div>${_markResumeNode(_scope6_id, "#div/0")}<div></div><div${_attr("key", `other-${key}`)}></div>${_markResumeNode(_scope6_id, "#div/3")}`);
  }
  for (let _from3 = 0 ?? 0, _step3 = 2 ?? 1, _steps3 = (10 - _from3) / _step3, _i6 = 0; _i6 <= _steps3; _i6++) {
    const _scope7_id = _nextScopeId();
    const i = _from3 + _i6 * _step3;
    _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markResumeNode(_scope7_id, "#text/1")}</div>${_markResumeNode(_scope7_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markResumeNode(_scope7_id, "#div/2")}`);
    for (let _from2 = 0 ?? 0, _step2 = 2 ?? 1, _steps2 = (10 - _from2) / _step2, _i5 = 0; _i5 <= _steps2; _i5++) {
      const _scope8_id = _nextScopeId();
      const i = _from2 + _i5 * _step2;
      _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markResumeNode(_scope8_id, "#text/1")}</div>${_markResumeNode(_scope8_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markResumeNode(_scope8_id, "#div/2")}`);
    }
  }
  for (let _from4 = 10 ?? 0, _step4 = -2 ?? 1, _steps4 = (0 - _from4) / _step4, _i7 = 0; _i7 <= _steps4; _i7++) {
    const _scope9_id = _nextScopeId();
    const i = _from4 + _i7 * _step4;
    _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markResumeNode(_scope9_id, "#text/1")}</div>${_markResumeNode(_scope9_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markResumeNode(_scope9_id, "#div/2")}`);
  }
  for (let _from5 = 0 ?? 0, _step5 = 1 ?? 1, _steps5 = (10 - _from5) / _step5, _i8 = 0; _i8 <= _steps5; _i8++) {
    const _scope10_id = _nextScopeId();
    _write("Hello");
  }
  for (let _from6 = 0 ?? 0, _step6 = 1 ?? 1, _steps6 = (10 - _from6) / _step6, _i9 = 0; _i9 <= _steps6; _i9++) {
    const _scope11_id = _nextScopeId();
    _write("Hello");
  }
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/for-tag/template.marko");