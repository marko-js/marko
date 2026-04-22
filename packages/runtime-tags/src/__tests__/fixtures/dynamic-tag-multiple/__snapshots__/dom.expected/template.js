export const $template = /*@__PURE__*/((_w0, _w1, _w2, _w3) => `<div>${_w0}</div><div>${_w1}</div><div>${_w2}</div><div>${_w3}</div>`)(_wrapper_template, _wrapper_template, _wrapper_template, _wrapper_template);
export const $walks =
/*@__PURE__*/
/* next(1), <wrapper>, out(1), next(1), <wrapper>, out(1), next(1), <wrapper>, out(1), next(1), <wrapper>, out(1) */
((_w0, _w1, _w2, _w3) => `D/${_w0}&lD/${_w1}&lD/${_w2}&lD/${_w3}&l`)(_wrapper_walks, _wrapper_walks, _wrapper_walks, _wrapper_walks);
import { $setup as _wrapper, $inputAs as _wrapper_input_as, $htmlInput as _wrapper_input_$rest, $template as _wrapper_template, $walks as _wrapper_walks } from "./tags/wrapper.marko";
export function $setup($scope) {
  _wrapper($scope["#childScope/0"]);
  _wrapper_input_as($scope["#childScope/0"]);
  _wrapper_input_$rest($scope["#childScope/0"], {});
  _wrapper($scope["#childScope/1"]);
  _wrapper_input_as($scope["#childScope/1"]);
  _wrapper_input_$rest($scope["#childScope/1"], {});
  _wrapper($scope["#childScope/2"]);
  _wrapper_input_as($scope["#childScope/2"]);
  _wrapper_input_$rest($scope["#childScope/2"], {});
  _wrapper($scope["#childScope/3"]);
  _wrapper_input_as($scope["#childScope/3"]);
  _wrapper_input_$rest($scope["#childScope/3"], {});
}
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);