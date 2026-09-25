// tags/child.marko
const $template$1 = "<div><!></div>";
const $walks$1 = " D%l";
const $setup$1 = () => {};
const $input__script = _script("__tests__/tags/child.marko_0_input#3", ($scope) => _attrs_script($scope, "#div/0"));
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	_attrs($scope, "#div/0", $scope.input);
	$input_content($scope, $scope.input.content);
	$input__script($scope);
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = "<button>Toggle</button><!><!>";
const $walks = " b%c";
const $child_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "Hello");
const $if_content__setup = ($scope) => $input($scope["#childScope/0"], { content: $child_content($scope) });
const $if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
