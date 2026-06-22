// tags/render-input.marko
const $template = "<!><!><!>";
const $setup = () => {};
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(0);
const $input_data_content = $dynamicTag;
const $input_data = ($scope, input_data) => $input_data_content($scope, input_data?.content);

// tags/my-box.marko
const $if_content__input = /* @__PURE__ */ _if_closure(2, 0, ($scope) => $input_data($scope.a, $scope._.e));
const $if_content__setup = ($scope) => {
	$if_content__input._($scope);
	/* @__PURE__ */ $setup($scope.a);
};
const $if = /* @__PURE__ */ _if(2, /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $show__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.f);
}));
const $show = /* @__PURE__ */ _let(5, ($scope) => {
	$if($scope, $scope.f ? 0 : 1);
	$show__script($scope);
});
const $input__script = _script("b1", ($scope) => _attrs_script($scope, "a"));

// template.marko
const $mybox_content = _content_resume("a0", "Body Content", "b");
