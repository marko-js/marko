export const $template = `<!>${_list_template}<button>Multiplier: <!></button>`;
export const $walks = /* beginChild, _list_walks, endChild, get, next(1), over(1), replace, out(1) */`D/${_list_walks}& Db%l`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _list, $input_item as _list_input_item, $template as _list_template, $walks as _list_walks } from "./tags/list/index.marko";
const $expr_mult_item$item$content = /* @__PURE__ */_$.intersection(1, $scope => {
  const {
    _: {
      mult
    },
    item
  } = $scope;
  _$.data($scope["#text/0"], item * mult);
});
const $mult$item$content = /* @__PURE__ */_$.dynamicClosureRead("mult", $expr_mult_item$item$content);
const $setup$item$content = $mult$item$content;
const $item_content = _$.localClosures(_$.registerContent("__tests__/template.marko_1_renderer", " ", /* get */" ", $setup$item$content), {
  item: $expr_mult_item$item$content
});
const $mult_closure = /* @__PURE__ */_$.dynamicClosure($mult$item$content);
const $mult_effect = _$.effect("__tests__/template.marko_0_mult", ($scope, {
  mult
}) => _$.on($scope["#button/1"], "click", function () {
  $mult($scope, mult + 1), mult;
}));
const $mult = /* @__PURE__ */_$.state("mult/3", ($scope, mult) => {
  _$.data($scope["#text/2"], mult);
  $mult_closure($scope);
  $mult_effect($scope);
});
export function $setup($scope) {
  _list($scope["#childScope/0"]);
  let $item;
  _$.forOf([1, 2, 3], item => {
    $item = _$.attrTags($item, {
      content: $item_content($scope, {
        item
      })
    });
  });
  _list_input_item($scope["#childScope/0"], $item);
  $mult($scope, 2);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);