import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, markResumeScopeStart as _markResumeScopeStart, serializedScope as _serializedScope, markResumeControlEnd as _markResumeControlEnd, write as _write, writeScope as _writeScope, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, attr as _attr, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
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
    _write(`${_markResumeScopeStart(_scope1_id)}<div>${_escapeXML(i)}${_markResumeNode(_scope1_id, "#text/0")}: <!>${_escapeXML(val)}${_markResumeNode(_scope1_id, "#text/1")}</div><div></div><div></div>`);
    _writeScope(_scope1_id, (_s => (_scope1_.set(i, _s), _s))({
      "_": _serializedScope(_scope0_id)
    }));
    _maybeFlush();
  }
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}`);
  const _scope2_ = new Map();
  for (const key in obj) {
    const _scope2_id = _nextScopeId();
    const val = obj[key];
    _write(`${_markResumeScopeStart(_scope2_id)}<div>${_escapeXML(key)}${_markResumeNode(_scope2_id, "#text/0")}: <!>${_escapeXML(val)}${_markResumeNode(_scope2_id, "#text/1")}</div><div></div><div></div>`);
    _writeScope(_scope2_id, (_s2 => (_scope2_.set(key, _s2), _s2))({
      "_": _serializedScope(_scope0_id)
    }));
    _maybeFlush();
  }
  _write(`${_markResumeControlEnd(_scope0_id, "#text/1")}`);
  for (let _from = 0 ?? 0, _step = 2 ?? 1, _steps = (10 - _from) / _step, _i2 = 0; _i2 <= _steps; _i2++) {
    const _scope3_id = _nextScopeId();
    const i = _from + _i2 * _step;
    _write(`<div>${_escapeXML(i)}${_markResumeNode(_scope3_id, "#text/0")}</div><div></div><div></div>`);
    _maybeFlush();
  }
  const _scope4_ = new Map();
  let _i3 = 0;
  for (const val of arr) {
    const _scope4_id = _nextScopeId();
    let i = _i3++;
    _write(`${_markResumeScopeStart(_scope4_id)}<div${_attr("key", i)}>${_escapeXML(i)}${_markResumeNode(_scope4_id, "#text/1")}: <!>${_escapeXML(val)}${_markResumeNode(_scope4_id, "#text/2")}</div>${_markResumeNode(_scope4_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markResumeNode(_scope4_id, "#div/3")}`);
    _writeScope(_scope4_id, (_s3 => (_scope4_.set(i, _s3), _s3))({
      "_": _serializedScope(_scope0_id)
    }));
    _maybeFlush();
  }
  _write(`${_markResumeControlEnd(_scope0_id, "#text/3")}`);
  const _forScopeIds4 = [],
    _scope5_ = new Map();
  let _i4 = 0;
  const list = arr;
  for (const val of list) {
    const _scope5_id = _nextScopeId();
    let i = _i4++;
    _forScopeIds4.push(_scope5_id);
    _write(`<div${_attr("key", i)}>${_escapeXML(list.length)}${_markResumeNode(_scope5_id, "#text/1")}: <!>${_escapeXML(val)}${_markResumeNode(_scope5_id, "#text/2")}</div>${_markResumeNode(_scope5_id, "#div/0")}`);
    _writeScope(_scope5_id, (_s4 => (_scope5_.set(i, _s4), _s4))({
      "_": _serializedScope(_scope0_id)
    }));
    _maybeFlush();
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/4", _forScopeIds4)}`);
  const _scope6_ = new Map();
  for (const key in obj) {
    const _scope6_id = _nextScopeId();
    const val = obj[key];
    _write(`${_markResumeScopeStart(_scope6_id)}<div${_attr("key", key)}>${_escapeXML(key)}${_markResumeNode(_scope6_id, "#text/1")}: <!>${_escapeXML(val)}${_markResumeNode(_scope6_id, "#text/2")}</div>${_markResumeNode(_scope6_id, "#div/0")}<div></div><div${_attr("key", `other-${key}`)}></div>${_markResumeNode(_scope6_id, "#div/3")}`);
    _writeScope(_scope6_id, (_s5 => (_scope6_.set(key, _s5), _s5))({
      "_": _serializedScope(_scope0_id)
    }));
    _maybeFlush();
  }
  _write(`${_markResumeControlEnd(_scope0_id, "#text/5")}`);
  for (let _from3 = 0 ?? 0, _step3 = 2 ?? 1, _steps3 = (10 - _from3) / _step3, _i6 = 0; _i6 <= _steps3; _i6++) {
    const _scope7_id = _nextScopeId();
    const i = _from3 + _i6 * _step3;
    _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markResumeNode(_scope7_id, "#text/1")}</div>${_markResumeNode(_scope7_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markResumeNode(_scope7_id, "#div/2")}`);
    for (let _from2 = 0 ?? 0, _step2 = 2 ?? 1, _steps2 = (10 - _from2) / _step2, _i5 = 0; _i5 <= _steps2; _i5++) {
      const _scope8_id = _nextScopeId();
      const i = _from2 + _i5 * _step2;
      _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markResumeNode(_scope8_id, "#text/1")}</div>${_markResumeNode(_scope8_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markResumeNode(_scope8_id, "#div/2")}`);
      _maybeFlush();
    }
    _maybeFlush();
  }
  for (let _from4 = 10 ?? 0, _step4 = -2 ?? 1, _steps4 = (0 - _from4) / _step4, _i7 = 0; _i7 <= _steps4; _i7++) {
    const _scope9_id = _nextScopeId();
    const i = _from4 + _i7 * _step4;
    _write(`<div${_attr("key", i)}>${_escapeXML(i)}${_markResumeNode(_scope9_id, "#text/1")}</div>${_markResumeNode(_scope9_id, "#div/0")}<div></div><div${_attr("key", `other-${i}`)}></div>${_markResumeNode(_scope9_id, "#div/2")}`);
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
  _writeScope(_scope0_id, {
    "#text/0(": _scope1_.size ? _scope1_ : undefined,
    "#text/1(": _scope2_.size ? _scope2_ : undefined,
    "#text/3(": _scope4_.size ? _scope4_ : undefined,
    "#text/4(": _scope5_.size ? _scope5_ : undefined,
    "#text/5(": _scope6_.size ? _scope6_ : undefined
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/for-tag/template.marko");