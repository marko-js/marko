import { markScopeOffset as _markScopeOffset, escapeXML as _escapeXML, write as _write, attr as _attr, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/for-tag/template.marko", input => {
  const arr = [1, 2, 3];
  const obj = {
    a: 1,
    b: 1,
    c: 1
  };
  let _i = 0;

  for (const val of arr) {
    let i = _i++;

    _write(`<div>${_markScopeOffset(0)}${_escapeXML(i)}: ${_markScopeOffset(1)}${_escapeXML(val)}</div><div></div><div></div>`);
  }

  for (const key in obj) {
    const val = obj[key];

    _write(`<div>${_markScopeOffset(0)}${_escapeXML(key)}: ${_markScopeOffset(1)}${_escapeXML(val)}</div><div></div><div></div>`);
  }

  for (let _steps = (10 - 0) / 2, _step = 0; _step <= _steps; _step++) {
    const i = 0 + _step * 2;

    _write(`<div>${_markScopeOffset(0)}${_escapeXML(i)}</div><div></div><div></div>`);
  }

  let _i2 = 0;

  for (const val of arr) {
    let i = _i2++;

    _write(`${_markScopeOffset(0)}<div${_attr("key", i)}>${_markScopeOffset(1)}${_escapeXML(i)}: ${_markScopeOffset(2)}${_escapeXML(val)}</div><div></div>${_markScopeOffset(3)}<div${_attr("key", `other-${i}`)}></div>`);
  }

  let _i3 = 0;
  const list = arr;

  for (const val of list) {
    let i = _i3++;

    _write(`${_markScopeOffset(0)}<div${_attr("key", i)}>${_markScopeOffset(1)}${_escapeXML(list.length)}: ${_markScopeOffset(2)}${_escapeXML(val)}</div>`);
  }

  for (const key in obj) {
    const val = obj[key];

    _write(`${_markScopeOffset(0)}<div${_attr("key", key)}>${_markScopeOffset(1)}${_escapeXML(key)}: ${_markScopeOffset(2)}${_escapeXML(val)}</div><div></div>${_markScopeOffset(3)}<div${_attr("key", `other-${key}`)}></div>`);
  }

  for (let _steps3 = (10 - 0) / 2, _step3 = 0; _step3 <= _steps3; _step3++) {
    const i = 0 + _step3 * 2;

    _write(`${_markScopeOffset(0)}<div${_attr("key", i)}>${_markScopeOffset(1)}${_escapeXML(i)}</div><div></div>${_markScopeOffset(2)}<div${_attr("key", `other-${i}`)}></div>`);

    for (let _steps2 = (10 - 0) / 2, _step2 = 0; _step2 <= _steps2; _step2++) {
      const i = 0 + _step2 * 2;

      _write(`${_markScopeOffset(0)}<div${_attr("key", i)}>${_markScopeOffset(1)}${_escapeXML(i)}</div><div></div>${_markScopeOffset(2)}<div${_attr("key", `other-${i}`)}></div>`);
    }
  }

  for (let _steps4 = (0 - 10) / -2, _step4 = 0; _step4 <= _steps4; _step4++) {
    const i = 10 + _step4 * -2;

    _write(`${_markScopeOffset(0)}<div${_attr("key", i)}>${_markScopeOffset(1)}${_escapeXML(i)}</div><div></div>${_markScopeOffset(2)}<div${_attr("key", `other-${i}`)}></div>`);
  }

  for (let _steps5 = (10 - 0) / 1, _step5 = 0; _step5 <= _steps5; _step5++) {
    _write("Hello");
  }

  for (let _steps6 = (10 - 0) / 1, _step6 = 0; _step6 <= _steps6; _step6++) {
    _write("Hello");
  }
});

export default _renderer;
export const render = _createRenderer(_renderer);