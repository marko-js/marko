_write(`<div${_classAttr(["a", {
  b: c,
  d
}])}></div><div class="a b"></div><div class="a b c"></div>`);

_customTag({
  class: ["a", {
    b: c,
    d
  }]
});

_customTag({
  class: ["a", false, "b"]
});

<${input.test} class=["a", {
  b: c,
  d
}] test={
  class: ["a", {
    b: c,
    d
  }],

  renderBody() {
    _write("Hello");
  }

}/>
import { classAttr as _classAttr, write as _write } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";