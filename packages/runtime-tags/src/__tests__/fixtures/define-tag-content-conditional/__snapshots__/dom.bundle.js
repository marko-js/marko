// template.marko
const $Layout_content__walks = "D%l", $Layout_content__template = "<section><!></section>";
const $content_direct = /* @__PURE__ */ _dynamic_tag_content(0);
const $Layout_content2 = /* @__PURE__ */ _content("a1", "shown content", "b");
const $if_content__setup = ($scope) => $content_direct($scope.a, $Layout_content2($scope));
const $if = /* @__PURE__ */ _if(1, /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($Layout_content__template), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($Layout_content__walks), $if_content__setup);
const $show = /* @__PURE__ */ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
