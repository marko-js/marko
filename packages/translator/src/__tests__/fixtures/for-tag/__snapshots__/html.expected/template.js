import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, markHydrateScopeStart as _markHydrateScopeStart, SYMBOL_OWNER as _SYMBOL_OWNER, write as _write, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, maybeFlush as _maybeFlush, markHydrateControlEnd as _markHydrateControlEnd, attr as _attr, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const arr = [1, 2, 3];
  const obj = {
    a: 1,
    b: 1,
    c: 1
  };
  const _scope1_ = [];
  let _i = 0;
  for (const val of arr) {
    let i = _i++;
    const _scope1_id = _nextScopeId();
    _write(`${_markHydrateScopeStart(_scope1_id)}<div>${_escapeXML(i)}${_markHydrateNode(_scope1_id, "#text/0")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope1_id, "#text/1")}</div><div></div><div></div>`);
    _writeHydrateScope(_scope1_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope1_);
    _maybeFlush();
  }
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/0")}`);
  const _scope2_ = [];
  for (const key in obj) {
    const val = obj[key];
    const _scope2_id = _nextScopeId();
    _write(`${_markHydrateScopeStart(_scope2_id)}<div>${_escapeXML(key)}${_markHydrateNode(_scope2_id, "#text/0")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope2_id, "#text/1")}</div><div></div><div></div>`);
    _writeHydrateScope(_scope2_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope2_);
    _maybeFlush();
  }
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/1")}`);
  for (let _from = 0 ?? 0, _step = 2 ?? 1, _steps = (10 - _from) / _step, _i2 = 0; _i2 <= _steps; _i2++) {
    const i = _from + _i2 * _step;
    const _scope3_id = _nextScopeId();
    _write(`<div>${_escapeXML(i)}${_markHydrateNode(_scope3_id, "#text/0")}</div><div></div><div></div>`);
    _maybeFlush();
  }
  const _scope4_ = [];
  let _i3 = 0;
  for (const val of arr) {
    let i = _i3++;
    const _scope4_id = _nextScopeId();
    _write(`${_markHydrateScopeStart(_scope4_id)}<div${_attr("key", i)}>${_escapeXML(i)}${_markHydrateNode(_scope4_id, "#text/1")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope4_id, "#text/2")}</div>${_markHydrateNode(_scope4_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markHydrateNode(_scope4_id, "#div/3")}`);
    _writeHydrateScope(_scope4_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope4_);
    _maybeFlush();
  }
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/3")}`);
  let _forScopeIds4 = [];
  const _scope5_ = [];
  let _i4 = 0;
  const list = arr;
  for (const val of list) {
    let i = _i4++;
    const _scope5_id = _nextScopeId();
    _write(`<div${_attr("key", i)}>${_escapeXML(list.length)}${_markHydrateNode(_scope5_id, "#text/1")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope5_id, "#text/2")}</div>${_markHydrateNode(_scope5_id, "#div/0")}`);
    _writeHydrateScope(_scope5_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope5_);
    _maybeFlush();
    _forScopeIds4.push(_scope5_id);
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/4", _forScopeIds4)}`);
  const _scope6_ = [];
  for (const key in obj) {
    const val = obj[key];
    const _scope6_id = _nextScopeId();
    _write(`${_markHydrateScopeStart(_scope6_id)}<div${_attr("key", key)}>${_escapeXML(key)}${_markHydrateNode(_scope6_id, "#text/1")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope6_id, "#text/2")}</div>${_markHydrateNode(_scope6_id, "#div/0")}<div></div><div${_attr("key", `other-${key}`)}></div>${_markHydrateNode(_scope6_id, "#div/3")}`);
    _writeHydrateScope(_scope6_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope6_);
    _maybeFlush();
  }
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/5")}`);
  for (let _from3 = 0 ?? 0, _step3 = 2 ?? 1, _steps3 = (10 - _from3) / _step3, _i6 = 0; _i6 <= _steps3; _i6++) {
    const i = _from3 + _i6 * _step3;
    const _scope7_id = _nextScopeId();
    _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markHydrateNode(_scope7_id, "#text/1")}</div>${_markHydrateNode(_scope7_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markHydrateNode(_scope7_id, "#div/2")}`);
    for (let _from2 = 0 ?? 0, _step2 = 2 ?? 1, _steps2 = (10 - _from2) / _step2, _i5 = 0; _i5 <= _steps2; _i5++) {
      const i = _from2 + _i5 * _step2;
      const _scope8_id = _nextScopeId();
      _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markHydrateNode(_scope8_id, "#text/1")}</div>${_markHydrateNode(_scope8_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markHydrateNode(_scope8_id, "#div/2")}`);
      _maybeFlush();
    }
    _maybeFlush();
  }
  for (let _from4 = 10 ?? 0, _step4 = -2 ?? 1, _steps4 = (0 - _from4) / _step4, _i7 = 0; _i7 <= _steps4; _i7++) {
    const i = _from4 + _i7 * _step4;
    const _scope9_id = _nextScopeId();
    _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markHydrateNode(_scope9_id, "#text/1")}</div>${_markHydrateNode(_scope9_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markHydrateNode(_scope9_id, "#div/2")}`);
    _maybeFlush();
  }
  for (let _from5 = 0 ?? 0, _step5 = 1 ?? 1, _steps5 = (10 - _from5) / _step5, _i8 = 0; _i8 <= _steps5; _i8++) {
    const _scope10_id = _nextScopeId();
    _write("Hello");
    _maybeFlush();
  }
  for (let _from6 = 0 ?? 0, _step6 = 1 ?? 1, _steps6 = (10 - _from6) / _step6, _i9 = 0; _i9 <= _steps6; _i9++) {
    const _scope11_id = _nextScopeId();
    _write("Hello");
    _maybeFlush();
  }
}, "packages/translator/src/__tests__/fixtures/for-tag/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);