import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, attr as _attr, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const arr = [1, 2, 3];
  const obj = {
    a: 1,
    b: 1,
    c: 1
  };
  let _i = 0;
  for (const val of arr) {
    let i = _i++;
    const _scope1_id = _nextScopeId();
    _write(`<div>${_escapeXML(i)}${_markHydrateNode(_scope1_id, "#text/0")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope1_id, "#text/1")}</div><div></div><div></div>`);
    _maybeFlush();
  }
  for (const key in obj) {
    const val = obj[key];
    const _scope2_id = _nextScopeId();
    _write(`<div>${_escapeXML(key)}${_markHydrateNode(_scope2_id, "#text/0")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope2_id, "#text/1")}</div><div></div><div></div>`);
    _maybeFlush();
  }
  for (let _steps = (10 - 0) / 2, _step = 0; _step <= _steps; _step++) {
    const i = 0 + _step * 2;
    const _scope3_id = _nextScopeId();
    _write(`<div>${_escapeXML(i)}${_markHydrateNode(_scope3_id, "#text/0")}</div><div></div><div></div>`);
    _maybeFlush();
  }
  let _i2 = 0;
  for (const val of arr) {
    let i = _i2++;
    const _scope4_id = _nextScopeId();
    _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markHydrateNode(_scope4_id, "#text/1")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope4_id, "#text/2")}</div>${_markHydrateNode(_scope4_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markHydrateNode(_scope4_id, "#div/3")}`);
    _maybeFlush();
  }
  let _i3 = 0;
  const list = arr;
  for (const val of list) {
    let i = _i3++;
    const _scope5_id = _nextScopeId();
    _write(`<div${_attr("key", i)}>${_escapeXML(list.length)}${_markHydrateNode(_scope5_id, "#text/1")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope5_id, "#text/2")}</div>${_markHydrateNode(_scope5_id, "#div/0")}`);
    _maybeFlush();
  }
  for (const key in obj) {
    const val = obj[key];
    const _scope6_id = _nextScopeId();
    _write(`<div${_attr("key", key)}>${_escapeXML(key)}${_markHydrateNode(_scope6_id, "#text/1")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope6_id, "#text/2")}</div>${_markHydrateNode(_scope6_id, "#div/0")}<div></div><div${_attr("key", `other-${key}`)}></div>${_markHydrateNode(_scope6_id, "#div/3")}`);
    _maybeFlush();
  }
  for (let _steps3 = (10 - 0) / 2, _step3 = 0; _step3 <= _steps3; _step3++) {
    const i = 0 + _step3 * 2;
    const _scope7_id = _nextScopeId();
    _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markHydrateNode(_scope7_id, "#text/1")}</div>${_markHydrateNode(_scope7_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markHydrateNode(_scope7_id, "#div/2")}`);
    for (let _steps2 = (10 - 0) / 2, _step2 = 0; _step2 <= _steps2; _step2++) {
      const i = 0 + _step2 * 2;
      const _scope8_id = _nextScopeId();
      _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markHydrateNode(_scope8_id, "#text/1")}</div>${_markHydrateNode(_scope8_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markHydrateNode(_scope8_id, "#div/2")}`);
      _maybeFlush();
    }
    _maybeFlush();
  }
  for (let _steps4 = (0 - 10) / -2, _step4 = 0; _step4 <= _steps4; _step4++) {
    const i = 10 + _step4 * -2;
    const _scope9_id = _nextScopeId();
    _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markHydrateNode(_scope9_id, "#text/1")}</div>${_markHydrateNode(_scope9_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markHydrateNode(_scope9_id, "#div/2")}`);
    _maybeFlush();
  }
  for (let _steps5 = (10 - 0) / 1, _step5 = 0; _step5 <= _steps5; _step5++) {
    const _scope10_id = _nextScopeId();
    _write("Hello");
    _maybeFlush();
  }
  for (let _steps6 = (10 - 0) / 1, _step6 = 0; _step6 <= _steps6; _step6++) {
    const _scope11_id = _nextScopeId();
    _write("Hello");
    _maybeFlush();
  }
}, "packages/translator/src/__tests__/fixtures/for-tag/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);