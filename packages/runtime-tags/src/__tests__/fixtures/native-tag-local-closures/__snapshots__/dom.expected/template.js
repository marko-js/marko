const $Child_content__walks = /* over(1), replace, over(2) */"b%c",
  $Child_content__template = "<!><!><!>";
export const $template = `<!>${$Child_content__template}<button>Add</button>`;
export const $walks = /* over(1), <Child>, get, over(1) */`b/${$Child_content__walks}& b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $item_content = /* @__PURE__ */_._content_closures(_._content_resume("__tests__/template.marko_3_content", " ", /* get, over(1) */" b"), {
  i($scope) {
    _._text($scope["#text/0"], $scope.i);
  }
});
const $for_content__item__script = _._script("__tests__/template.marko_2_item", $scope => _._attrs_script($scope, "#div/0"));
const $for_content__item = /* @__PURE__ */_._const("item", $scope => {
  _._attrs_content($scope, "#div/0", $scope.item);
  $for_content__item__script($scope);
});
const $for_content__$params = ($scope, $params3) => $for_content__item($scope, $params3[0]);
const $Child_content__for = /* @__PURE__ */_._for_of("#text/0", "<div></div>", /* get, over(1) */" b", 0, $for_content__$params);
const $Child_content__input_item = ($scope, input_item) => $Child_content__for($scope, [input_item]);
const $Child_content__$params = ($scope, $params2) => $Child_content__input($scope, $params2[0]);
const $Child_content__input = ($scope, input) => $Child_content__input_item($scope, input.item);
const $size__script = _._script("__tests__/template.marko_0_size", $scope => _._on($scope["#button/1"], "click", function () {
  $size($scope, $scope.size + 1);
}));
const $size = /* @__PURE__ */_._let("size/2", $scope => {
  let $item;
  _.forUntil($scope.size, 0, 1, i => {
    $item = _.attrTags($item, {
      content: $item_content($scope, {
        i
      })
    });
  });
  $Child_content__input_item($scope["#childScope/0"], $item);
  $size__script($scope);
});
export function $setup($scope) {
  $size($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);