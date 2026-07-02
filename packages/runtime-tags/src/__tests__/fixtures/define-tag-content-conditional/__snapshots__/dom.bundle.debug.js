// template.marko
const $Layout_content__walks = "D%l", $Layout_content__template = "<section><!></section>";
const $template = "<button id=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $content_direct = /* @__PURE__ */ _dynamic_tag_content("#text/0");
const $Layout_content2 = /* @__PURE__ */ _content("__tests__/template.marko_3_content", "shown content", "b");
const $if_content__setup = ($scope) => $content_direct($scope["#childScope/0"], $Layout_content2($scope));
const $Layout_content__dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0");
const $Layout_content__content = $Layout_content__dynamicTag;
const $Layout_content__$params = ($scope, $params2) => $Layout_content__$temp($scope, $params2?.[0]);
const $Layout_content__$temp = ($scope, $temp) => $Layout_content__content($scope, $temp.content);
const $if = /* @__PURE__ */ _if("#text/1", /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($Layout_content__template), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($Layout_content__walks), $if_content__setup);
const $show = /* @__PURE__ */ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
