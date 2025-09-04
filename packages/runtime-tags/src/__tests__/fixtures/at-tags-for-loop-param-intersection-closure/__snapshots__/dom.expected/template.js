export const $template = `<!>${_list_template}<button>Multiplier: <!></button>`;
export const $walks = /* over(1), beginChild, _list_walks, endChild, get, next(1), over(1), replace, out(1) */`b/${_list_walks}& Db%l`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _list, $input_item as _list_input_item, $template as _list_template, $walks as _list_walks } from "./tags/list/index.marko";
const $item_content__mult__OR__item = /* @__PURE__ */_._or(1, $scope => {
  let {
    _: {
      mult
    },
    item
  } = $scope;
  _._text($scope["#text/0"], item * mult);
});
const $item_content__mult = /* @__PURE__ */_._closure_get("mult", $item_content__mult__OR__item);
const $item_content__setup = $item_content__mult;
const $item_content = _._content_closures(_._content_resume("__tests__/template.marko_1_content", " ", /* get, over(1) */" b", $item_content__setup), {
  item: $item_content__mult__OR__item
});
const $mult__closure = /* @__PURE__ */_._closure($item_content__mult);
const $mult__script = _._script("__tests__/template.marko_0_mult", ($scope, {
  mult
}) => _._on($scope["#button/1"], "click", function () {
  $mult($scope, ++mult)
}));
const $mult = /* @__PURE__ */_._let("mult/3", ($scope, mult) => {
  _._text($scope["#text/2"], mult);
  $mult__closure($scope);
  $mult__script($scope);
});
export function $setup($scope) {
  _list($scope["#childScope/0"]);
  let $item;
  _.forOf([1, 2, 3], item => {
    $item = _.attrTags($item, {
      content: $item_content($scope, {
        item
      })
    });
  });
  _list_input_item($scope["#childScope/0"], $item);
  $mult($scope, 2);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);