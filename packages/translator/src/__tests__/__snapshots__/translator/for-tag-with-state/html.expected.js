import { escapeXML as _escapeXML, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";

const _renderer = _register("/rMZ+rK0", input => {
  const arrA = [1, 2, 3];
  let _i = 0;

  for (const val of arrA) {
    let i = _i++;

    _write(`<div>${_escapeXML(i)}: ${_escapeXML(val)}</div>`);
  }

  const arrB = [1, 2, 3];
  let _i2 = 0;

  for (const val of arrB) {
    let i = _i2++;

    _write(`<div>${_escapeXML(i)}: ${_escapeXML(val)}</div>`);
  }
});

export default _renderer;
export const render = _createRenderer(_renderer);