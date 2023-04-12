import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, markHydrateScopeStart as _markHydrateScopeStart, SYMBOL_OWNER as _SYMBOL_OWNER, markHydrateControlEnd as _markHydrateControlEnd, write as _write, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, maybeFlush as _maybeFlush, attr as _attr, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const arr = [1, 2, 3];
  const obj = {
    a: 1,
    b: 1,
    c: 1
  };
  const _scope1_ = new Map();
  let _i = 0;
  for (const val of arr) {
    const _scope1_id = _nextScopeId();
    let i = _i++;
    _write(`${_markHydrateScopeStart(_scope1_id)}<div>${_escapeXML(i)}${_markHydrateNode(_scope1_id, "#text/0")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope1_id, "#text/1")}</div><div></div><div></div>`);
    _writeHydrateScope(_scope1_id, (_s => (_scope1_.set(i, _s), _s))({
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/0")}`);
  const _scope2_ = new Map();
  for (const key in obj) {
    const _scope2_id = _nextScopeId();
    const val = obj[key];
    _write(`${_markHydrateScopeStart(_scope2_id)}<div>${_escapeXML(key)}${_markHydrateNode(_scope2_id, "#text/0")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope2_id, "#text/1")}</div><div></div><div></div>`);
    _writeHydrateScope(_scope2_id, (_s2 => (_scope2_.set(key, _s2), _s2))({
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/1")}`);
  const _scope3_ = new Map();
  for (let _from = 0 ?? 0, _step = 2 ?? 1, _steps = (10 - _from) / _step, _i2 = 0; _i2 <= _steps; _i2++) {
    const _scope3_id = _nextScopeId();
    const i = _from + _i2 * _step;
    _write(`${_markHydrateScopeStart(_scope3_id)}<div>${_escapeXML(i)}${_markHydrateNode(_scope3_id, "#text/0")}</div><div></div><div></div>`);
    _writeHydrateScope(_scope3_id, (_s3 => (_scope3_.set(i, _s3), _s3))({
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/2")}`);
  const _scope4_ = new Map();
  let _i3 = 0;
  for (const val of arr) {
    const _scope4_id = _nextScopeId();
    let i = _i3++;
    _write(`${_markHydrateScopeStart(_scope4_id)}<div${_attr("key", i)}>${_escapeXML(i)}${_markHydrateNode(_scope4_id, "#text/1")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope4_id, "#text/2")}</div>${_markHydrateNode(_scope4_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markHydrateNode(_scope4_id, "#div/3")}`);
    _writeHydrateScope(_scope4_id, (_s4 => (_scope4_.set(i, _s4), _s4))({
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/3")}`);
  const _forScopeIds5 = [],
    _scope5_ = new Map();
  let _i4 = 0;
  const list = arr;
  for (const val of list) {
    const _scope5_id = _nextScopeId();
    let i = _i4++;
    _forScopeIds5.push(_scope5_id);
    _write(`<div${_attr("key", i)}>${_escapeXML(list.length)}${_markHydrateNode(_scope5_id, "#text/1")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope5_id, "#text/2")}</div>${_markHydrateNode(_scope5_id, "#div/0")}`);
    _writeHydrateScope(_scope5_id, (_s5 => (_scope5_.set(i, _s5), _s5))({
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/4", _forScopeIds5)}`);
  const _scope6_ = new Map();
  for (const key in obj) {
    const _scope6_id = _nextScopeId();
    const val = obj[key];
    _write(`${_markHydrateScopeStart(_scope6_id)}<div${_attr("key", key)}>${_escapeXML(key)}${_markHydrateNode(_scope6_id, "#text/1")}: <!>${_escapeXML(val)}${_markHydrateNode(_scope6_id, "#text/2")}</div>${_markHydrateNode(_scope6_id, "#div/0")}<div></div><div${_attr("key", `other-${key}`)}></div>${_markHydrateNode(_scope6_id, "#div/3")}`);
    _writeHydrateScope(_scope6_id, (_s6 => (_scope6_.set(key, _s6), _s6))({
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/5")}`);
  const _scope7_ = new Map();
  for (let _from3 = 0 ?? 0, _step3 = 2 ?? 1, _steps3 = (10 - _from3) / _step3, _i6 = 0; _i6 <= _steps3; _i6++) {
    const _scope7_id = _nextScopeId();
    const i = _from3 + _i6 * _step3;
    _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markHydrateNode(_scope7_id, "#text/1")}</div>${_markHydrateNode(_scope7_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markHydrateNode(_scope7_id, "#div/2")}`);
    const _scope8_ = new Map();
    for (let _from2 = 0 ?? 0, _step2 = 2 ?? 1, _steps2 = (10 - _from2) / _step2, _i5 = 0; _i5 <= _steps2; _i5++) {
      const _scope8_id = _nextScopeId();
      const i = _from2 + _i5 * _step2;
      _write(`${_markHydrateScopeStart(_scope8_id)}<div${_attr("key", i)}>${_escapeXML(i)}${_markHydrateNode(_scope8_id, "#text/1")}</div>${_markHydrateNode(_scope8_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markHydrateNode(_scope8_id, "#div/2")}`);
      _writeHydrateScope(_scope8_id, (_s7 => (_scope8_.set(i, _s7), _s7))({
        [_SYMBOL_OWNER]: _scope7_id
      }));
      _maybeFlush();
    }
    _write(`${_markHydrateScopeStart(_scope7_id)}${_markHydrateControlEnd(_scope7_id, "#text/3")}`);
    _writeHydrateScope(_scope7_id, (_s8 => (_scope7_.set(i, _s8), _s8))({
      "#text/3(": _scope8_.size ? _scope8_ : undefined,
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/6")}`);
  const _scope9_ = new Map();
  for (let _from4 = 10 ?? 0, _step4 = -2 ?? 1, _steps4 = (0 - _from4) / _step4, _i7 = 0; _i7 <= _steps4; _i7++) {
    const _scope9_id = _nextScopeId();
    const i = _from4 + _i7 * _step4;
    _write(`${_markHydrateScopeStart(_scope9_id)}<div${_attr("key", i)}>${_escapeXML(i)}${_markHydrateNode(_scope9_id, "#text/1")}</div>${_markHydrateNode(_scope9_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markHydrateNode(_scope9_id, "#div/2")}`);
    _writeHydrateScope(_scope9_id, (_s9 => (_scope9_.set(i, _s9), _s9))({
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/7")}`);
  const _forScopeIds10 = [],
    _scope10_ = new Map();
  for (let _from5 = 0 ?? 0, _step5 = 1 ?? 1, _steps5 = (10 - _from5) / _step5, _i8 = 0; _i8 <= _steps5; _i8++) {
    const _scope10_id = _nextScopeId();
    const _i9 = _from5 + _i8 * _step5;
    _forScopeIds10.push(_scope10_id);
    _write("Hello");
    _writeHydrateScope(_scope10_id, (_s10 => (_scope10_.set(_i9, _s10), _s10))({
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/8", _forScopeIds10)}`);
  const _forScopeIds11 = [],
    _scope11_ = new Map();
  for (let _from6 = 0 ?? 0, _step6 = 1 ?? 1, _steps6 = (10 - _from6) / _step6, _i10 = 0; _i10 <= _steps6; _i10++) {
    const _scope11_id = _nextScopeId();
    const _i11 = _from6 + _i10 * _step6;
    _forScopeIds11.push(_scope11_id);
    _write("Hello");
    _writeHydrateScope(_scope11_id, (_s11 => (_scope11_.set(_i11, _s11), _s11))({
      [_SYMBOL_OWNER]: _scope0_id
    }));
    _maybeFlush();
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope0_id, "#text/9", _forScopeIds11)}`);
  _writeHydrateScope(_scope0_id, {
    "#text/0(": _scope1_.size ? _scope1_ : undefined,
    "#text/1(": _scope2_.size ? _scope2_ : undefined,
    "#text/2(": _scope3_.size ? _scope3_ : undefined,
    "#text/3(": _scope4_.size ? _scope4_ : undefined,
    "#text/4(": _scope5_.size ? _scope5_ : undefined,
    "#text/5(": _scope6_.size ? _scope6_ : undefined,
    "#text/6(": _scope7_.size ? _scope7_ : undefined,
    "#text/7(": _scope9_.size ? _scope9_ : undefined,
    "#text/8(": _scope10_.size ? _scope10_ : undefined,
    "#text/9(": _scope11_.size ? _scope11_ : undefined
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/for-tag/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);