const $Child_content__walks = /* over(1), replace, over(2) */"b%c",
  $Child_content__template = "<!><!><!>";
export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $item_content = /* @__PURE__ */_._content_closures(/* @__PURE__ */_._content("__tests__/template.marko_4_content", " ", /* get, over(1) */" b"), {
  item_text($scope) {
    _._text($scope["#text/0"], $scope.item_text);
  }
});
const $for_content2__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
const $for_content2__item = ($scope, item) => $for_content2__dynamicTag($scope, item);
const $for_content2__$params = ($scope, $params3) => $for_content2__item($scope, $params3[0]);
const $for_content__texts = /* @__PURE__ */_._const("texts", $scope => {
  let $item;
  _.forOf($scope.texts, item => {
    $item = _.attrTags($item, {
      content: $item_content($scope, {
        item_text: item?.text
      })
    });
  });
  $Child_content__items($scope["#childScope/0"], $item);
});
const $for_content__$params = ($scope, $params4) => $for_content__texts($scope, $params4[0]);
const $Child_content__for = /* @__PURE__ */_._for_of("#text/0", "<!><!><!>", /* over(1), replace, over(2) */"b%c", 0, $for_content2__$params);
const $Child_content__items = ($scope, items) => $Child_content__for($scope, [items]);
const $Child_content__$params = ($scope, $params2) => $Child_content__$temp($scope, $params2?.[0]);
const $Child_content__$temp = ($scope, $temp) => $Child_content__items($scope, $temp.item);
const $for = /* @__PURE__ */_._for_of("#text/0", /*@__PURE__*/(_w0 => `<!>${_w0}<!>`)($Child_content__template),
/*@__PURE__*/
/* over(1), <Child>, over(1) */
(_w0 => `b/${_w0}&b`)($Child_content__walks), 0, $for_content__$params);
export function $setup($scope) {
  $for($scope, [[[{
    text: "hello"
  }, {
    text: "world"
  }]]]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);