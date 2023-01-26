import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, attr as _attr, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const arr = [1, 2, 3];
  const obj = {
    a: 1,
    b: 1,
    c: 1
  };
  let _i = 0;
  for (const val of arr) {
    let i = _i++;
    const _scope1_ = _nextScopeId();
    _write(`<div>${_escapeXML(i)}${_markHydrateNode(_scope1_, "#text/0")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope1_, "#text/1")}</div><div></div><div></div>`);
    _maybeFlush();
  }
  for (const key in obj) {
    const val = obj[key];
    const _scope2_ = _nextScopeId();
    _write(`<div>${_escapeXML(key)}${_markHydrateNode(_scope2_, "#text/0")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope2_, "#text/1")}</div><div></div><div></div>`);
    _maybeFlush();
  }
  for (let _steps = (10 - 0) / 2, _step = 0; _step <= _steps; _step++) {
    const i = 0 + _step * 2;
    const _scope3_ = _nextScopeId();
    _write(`<div>${_escapeXML(i)}${_markHydrateNode(_scope3_, "#text/0")}</div><div></div><div></div>`);
    _maybeFlush();
  }
  let _i2 = 0;
  for (const val of arr) {
    let i = _i2++;
    const _scope4_ = _nextScopeId();
    _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markHydrateNode(_scope4_, "#text/1")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope4_, "#text/2")}</div>${_markHydrateNode(_scope4_, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markHydrateNode(_scope4_, "#div/3")}`);
    _maybeFlush();
  }
  let _i3 = 0;
  const list = arr;
  for (const val of list) {
    let i = _i3++;
    const _scope5_ = _nextScopeId();
    _write(`<div${_attr("key", i)}>${_escapeXML(list.length)}${_markHydrateNode(_scope5_, "#text/1")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope5_, "#text/2")}</div>${_markHydrateNode(_scope5_, "#div/0")}`);
    _maybeFlush();
  }
  for (const key in obj) {
    const val = obj[key];
    const _scope6_ = _nextScopeId();
    _write(`<div${_attr("key", key)}>${_escapeXML(key)}${_markHydrateNode(_scope6_, "#text/1")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope6_, "#text/2")}</div>${_markHydrateNode(_scope6_, "#div/0")}<div></div><div${_attr("key", `other-${key}`)}></div>${_markHydrateNode(_scope6_, "#div/3")}`);
    _maybeFlush();
  }
  for (let _steps3 = (10 - 0) / 2, _step3 = 0; _step3 <= _steps3; _step3++) {
    const i = 0 + _step3 * 2;
    const _scope7_ = _nextScopeId();
    _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markHydrateNode(_scope7_, "#text/1")}</div>${_markHydrateNode(_scope7_, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markHydrateNode(_scope7_, "#div/2")}`);
    for (let _steps2 = (10 - 0) / 2, _step2 = 0; _step2 <= _steps2; _step2++) {
      const i = 0 + _step2 * 2;
      const _scope8_ = _nextScopeId();
      _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markHydrateNode(_scope8_, "#text/1")}</div>${_markHydrateNode(_scope8_, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markHydrateNode(_scope8_, "#div/2")}`);
      _maybeFlush();
    }
    _maybeFlush();
  }
  for (let _steps4 = (0 - 10) / -2, _step4 = 0; _step4 <= _steps4; _step4++) {
    const i = 10 + _step4 * -2;
    const _scope9_ = _nextScopeId();
    _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markHydrateNode(_scope9_, "#text/1")}</div>${_markHydrateNode(_scope9_, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markHydrateNode(_scope9_, "#div/2")}`);
    _maybeFlush();
  }
  for (let _steps5 = (10 - 0) / 1, _step5 = 0; _step5 <= _steps5; _step5++) {
    const _scope10_ = _nextScopeId();
    _write("Hello");
    _maybeFlush();
  }
  for (let _steps6 = (10 - 0) / 1, _step6 = 0; _step6 <= _steps6; _step6++) {
    const _scope11_ = _nextScopeId();
    _write("Hello");
    _maybeFlush();
  }
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);