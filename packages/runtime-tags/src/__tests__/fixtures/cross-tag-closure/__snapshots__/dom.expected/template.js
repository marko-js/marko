export const $template = `<!>${_myLet_template}${_myTag_template}<!>`;
export const $walks = /* beginChildWithVar, _myLet_walks, endChild, beginChild, _myTag_walks, endChild */`D0${_myLet_walks}&/${_myTag_walks}&D`;
import { $setup as _myLet, $input_value as _myLet_input_value, $template as _myLet_template, $walks as _myLet_walks } from "./tags/my-let.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _myTag, $input_content as _myTag_input_content, $template as _myTag_template, $walks as _myTag_walks } from "./tags/my-tag.marko";
const $count$mytag$content_effect = _$.effect("__tests__/template.marko_1_count", ($scope, {
  _: {
    count
  }
}) => _$.on($scope["#button/0"], "click", function () {
  _$.tagVarSignalChange($scope._["#childScope/0"], count + 1), count;
}));
const $count$mytag$content = /* @__PURE__ */_$.dynamicClosureRead("count", ($scope, count) => {
  _$.data($scope["#text/1"], count);
  $count$mytag$content_effect($scope);
});
const $mytag_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", "<button> </button>", /* get, next(1), get */" D ", 0, 0, $count$mytag$content);
const $count_closure = /* @__PURE__ */_$.dynamicClosure($count$mytag$content);
const $count = _$.registerBoundSignal("__tests__/template.marko_0_count/var", /* @__PURE__ */_$.value("count", $count_closure));
export function $setup($scope) {
  _$.setTagVar($scope, "#childScope/0", $count);
  _myLet($scope["#childScope/0"]);
  _myLet_input_value($scope["#childScope/0"], 0);
  _myTag($scope["#childScope/2"]);
  _myTag_input_content($scope["#childScope/2"], $mytag_content($scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);