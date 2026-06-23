// tags/custom-tag.marko
const $template$1 = "<div></div><!><!>";
const $walks$1 = " b%c";
const $setup$1 = () => {};
const $if_content__input_test_class = /* @__PURE__ */ _if_closure("#text/1", 0, ($scope) => _attr_class($scope["#div/0"], $scope._.input_test_class));
const $if_content__setup = ($scope) => {
	$if_content__input_test_class._($scope);
	$if_content__input_test_content._($scope);
};
const $if_content__dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/1");
const $if_content__input_test_content = /* @__PURE__ */ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_test_content));
const $input_class = ($scope, input_class) => _attr_class($scope["#div/0"], input_class);
const $if = /* @__PURE__ */ _if("#text/1", "<div id=test><!></div>", " D%l", $if_content__setup);
const $input_test = ($scope, input_test) => {
	$input_test_class($scope, input_test?.class);
	$input_test_content($scope, input_test?.content);
	$if($scope, input_test ? 0 : 1);
};
const $input$1 = ($scope, input) => {
	$input_class($scope, input.class);
	$input_test($scope, input.test);
};
const $input_test_class = /* @__PURE__ */ _const("input_test_class", $if_content__input_test_class);
const $input_test_content = /* @__PURE__ */ _const("input_test_content", $if_content__input_test_content);
var custom_tag_default = /* @__PURE__ */ _template("__tests__/tags/custom-tag.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0, _w1) => `<div class=a></div><div class="a b"></div><div class="a b c"></div>${_w0}${_w1}<!><!>`)($template$1, $template$1);
const $walks = /* @__PURE__ */ ((_w0, _w1) => ` d/${_w0}&/${_w1}&%c`)($walks$1, $walks$1);
const TestTag = custom_tag_default;
const $test_content = _content_resume("__tests__/template.marko_1_content", "Hello", "b");
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/3");
const $input_c__OR__input_d = /* @__PURE__ */ _or(8, ($scope) => {
	_attr_class_items($scope["#div/0"], {
		b: $scope.c,
		d: $scope.d
	});
	$input_class($scope["#childScope/1"], ["a", {
		b: $scope.c,
		d: $scope.d
	}]);
	$dynamicTag($scope, TestTag, () => ({
		class: ["a", {
			b: $scope.c,
			d: $scope.d
		}],
		test: attrTag({
			class: ["a", {
				b: $scope.c,
				d: $scope.d
			}],
			content: $test_content($scope)
		})
	}));
});
const $c = /* @__PURE__ */ _const("c", $input_c__OR__input_d);
const $d = /* @__PURE__ */ _const("d", $input_c__OR__input_d);
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$input_test($scope["#childScope/1"]);
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$input_class($scope["#childScope/2"], [
		"a",
		false,
		"b"
	]);
	$input_test($scope["#childScope/2"]);
}
const $input = ($scope, input) => {
	$c($scope, input.c);
	$d($scope, input.d);
};
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
