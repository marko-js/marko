// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $else_content__input_error = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_error", /*@__PURE__*/ _if_closure("#text/0", 1));
const $else_content__setup = $else_content__input_error;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%/&", 0, "<!><!><!>", "b%/&", $else_content__setup);
const $input_page = ($scope, input_page) => $if($scope, input_page === 1 ? 0 : 1);
const $input = ($scope, input) => {
	$input_page($scope, input.page);
	$input_error($scope, input.error);
};
const $input_error = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_error", $else_content__input_error);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// page1.marko
const $template = "<button> </button>";
const $walks = " D l";
const $n = /*@__PURE__*/ _fill_let("__tests__/page1.marko_fill0", "n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/page1.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
var page1_default = /*@__PURE__*/ _template("__tests__/page1.marko", $template, $walks, $setup);

// page2.marko
const $template = "<h1> </h1>";
const $walks = "D l";
const $setup = () => {};
const $input_error_message = ($scope, input_error_message) => _text($scope["#text/0"], input_error_message);
const $input = ($scope, input) => $input_error($scope, input.error);
const $input_error = ($scope, input_error) => $input_error_message($scope, input_error?.message);
var page2_default = /*@__PURE__*/ _template("__tests__/page2.marko", $template, "D l", 0, $input);
