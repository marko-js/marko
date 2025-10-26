export const $template = `<!>${_letBatch_template}<!><!>`;
export const $walks = /* over(1), beginChildWithVar, _letBatch_walks, endChild, replace, over(2) */`b0${_letBatch_walks}&%c`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _letBatch, $input_valueChange as _letBatch_input_valueChange, $template as _letBatch_template, $walks as _letBatch_walks } from "./tags/let-batch.marko";
import { $setup as _child, $input_valueChange as _child_input_valueChange, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $if_content__setup = $scope => {
  _child($scope["#childScope/0"]);
  $if_content__setter._($scope);
};
const $if_content__setter = /* @__PURE__ */_._if_closure("setter", "#text/2", 0, ($scope, setter) => _child_input_valueChange($scope["#childScope/0"], $valueChange2($scope)));
const $if_content = /* @__PURE__ */_._content_branch(_child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, $if_content__setup);
const $if = /* @__PURE__ */_._if("#text/2", $if_content);
export function $setup($scope) {
  _._var($scope, "#childScope/0", $setter);
  _letBatch($scope["#childScope/0"]);
  _letBatch_input_valueChange($scope["#childScope/0"], $valueChange($scope));
  /* value */0;
  $if($scope, true ? 0 : 1);
}
const $setter = _._var_resume("__tests__/template.marko_0_setter/var", /* @__PURE__ */_._const("setter"));
function $valueChange2({
  _: {
    setter
  }
}) {
  return function () {
    setter();
  };
}
function $valueChange($scope) {
  return _new_value => {
    /* value */_new_value;
  };
}
_._resume("__tests__/template.marko_1/valueChange2", $valueChange2);
_._resume("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);