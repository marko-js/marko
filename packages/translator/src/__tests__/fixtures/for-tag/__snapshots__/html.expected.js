import { markHydrateNode as _markHydrateNode, write as _write, escapeXML as _escapeXML, attr as _attr, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  const arr = [1, 2, 3];
  const obj = {
    a: 1,
    b: 1,
    c: 1
  };

  _write(`${_markHydrateNode(_scope, 0)}`);

  let _i = 0;

  for (const val of arr) {
    let i = _i++;

    _write(`<div>${_markHydrateNode(_scope, 0)}${_escapeXML(i)}: ${_markHydrateNode(_scope, 1)}${_escapeXML(val)}</div><div></div><div></div>`);
  }

  _write(`${_markHydrateNode(_scope, 4)}`);

  for (const key in obj) {
    const val = obj[key];

    _write(`<div>${_markHydrateNode(_scope, 0)}${_escapeXML(key)}: ${_markHydrateNode(_scope, 1)}${_escapeXML(val)}</div><div></div><div></div>`);
  }

  _write(`${_markHydrateNode(_scope, 8)}`);

  for (let _steps = (10 - 0) / 2, _step = 0; _step <= _steps; _step++) {
    const i = 0 + _step * 2;

    _write(`<div>${_markHydrateNode(_scope, 0)}${_escapeXML(i)}</div><div></div><div></div>`);
  }

  _write(`${_markHydrateNode(_scope, 12)}`);

  let _i2 = 0;

  for (const val of arr) {
    let i = _i2++;

    _write(`${_markHydrateNode(_scope, 0)}<div${_attr("key", i)}>${_markHydrateNode(_scope, 1)}${_escapeXML(i)}: ${_markHydrateNode(_scope, 2)}${_escapeXML(val)}</div><div></div>${_markHydrateNode(_scope, 3)}<div${_attr("key", `other-${i}`)}></div>`);
  }

  _write(`${_markHydrateNode(_scope, 16)}`);

  let _i3 = 0;
  const list = arr;

  for (const val of list) {
    let i = _i3++;

    _write(`${_markHydrateNode(_scope, 0)}<div${_attr("key", i)}>${_markHydrateNode(_scope, 1)}${_escapeXML(list.length)}: ${_markHydrateNode(_scope, 2)}${_escapeXML(val)}</div>`);
  }

  _write(`${_markHydrateNode(_scope, 20)}`);

  for (const key in obj) {
    const val = obj[key];

    _write(`${_markHydrateNode(_scope, 0)}<div${_attr("key", key)}>${_markHydrateNode(_scope, 1)}${_escapeXML(key)}: ${_markHydrateNode(_scope, 2)}${_escapeXML(val)}</div><div></div>${_markHydrateNode(_scope, 3)}<div${_attr("key", `other-${key}`)}></div>`);
  }

  _write(`${_markHydrateNode(_scope, 24)}`);

  for (let _steps3 = (10 - 0) / 2, _step3 = 0; _step3 <= _steps3; _step3++) {
    const i = 0 + _step3 * 2;

    _write(`${_markHydrateNode(_scope, 0)}<div${_attr("key", i)}>${_markHydrateNode(_scope, 1)}${_escapeXML(i)}</div><div></div>${_markHydrateNode(_scope, 2)}<div${_attr("key", `other-${i}`)}></div>${_markHydrateNode(_scope, 3)}`);

    for (let _steps2 = (10 - 0) / 2, _step2 = 0; _step2 <= _steps2; _step2++) {
      const i = 0 + _step2 * 2;

      _write(`${_markHydrateNode(_scope, 0)}<div${_attr("key", i)}>${_markHydrateNode(_scope, 1)}${_escapeXML(i)}</div><div></div>${_markHydrateNode(_scope, 2)}<div${_attr("key", `other-${i}`)}></div>`);
    }
  }

  _write(`${_markHydrateNode(_scope, 28)}`);

  for (let _steps4 = (0 - 10) / -2, _step4 = 0; _step4 <= _steps4; _step4++) {
    const i = 10 + _step4 * -2;

    _write(`${_markHydrateNode(_scope, 0)}<div${_attr("key", i)}>${_markHydrateNode(_scope, 1)}${_escapeXML(i)}</div><div></div>${_markHydrateNode(_scope, 2)}<div${_attr("key", `other-${i}`)}></div>`);
  }

  _write(`${_markHydrateNode(_scope, 32)}`);

  for (let _steps5 = (10 - 0) / 1, _step5 = 0; _step5 <= _steps5; _step5++) {
    _write("Hello");
  }

  _write(`${_markHydrateNode(_scope, 36)}`);

  for (let _steps6 = (10 - 0) / 1, _step6 = 0; _step6 <= _steps6; _step6++) {
    _write("Hello");
  }
};

export default _renderer;
export const render = _createRenderer(_renderer);