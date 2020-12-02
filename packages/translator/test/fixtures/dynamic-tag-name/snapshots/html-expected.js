const tagConstB = input.show ? "div" : null;
if (tagConstB) _write(`<${tagConstB} class="a b"${_attr("other", input.other)}></${tagConstB}>`);
import { attr as _attr, write as _write } from "@marko/runtime-fluurt/src/html";