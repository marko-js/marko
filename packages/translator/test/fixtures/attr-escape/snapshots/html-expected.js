import { classAttr as _classAttr, attr as _attr, write as _write } from "@marko/runtime-fluurt/src/html";

_write(`<div${_classAttr(input.className)}${_attr("foo", 'a' + input.foo + 'b')}${_attr("bar", `a ${input.foo} b`)}></div>`);