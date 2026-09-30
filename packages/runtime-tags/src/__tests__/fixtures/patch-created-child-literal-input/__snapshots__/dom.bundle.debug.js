// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/demo-card.marko
const $template$1 = "<span class=title><!> <!></span>";
const $walks$1 = "D%c%l";
const $setup$1 = () => {};
const $input_name = ($scope, input_name) => _text($scope["#text/0"], input_name);
const $input_progress = ($scope, input_progress) => _text($scope["#text/1"], input_progress);
const $input = ($scope, input) => {
	$input_name($scope, input.name);
	$input_progress($scope, input.progress);
};
var demo_card_default = /*@__PURE__*/ _template("__tests__/tags/demo-card.marko", $template$1, $walks$1, 0, $input);

// tags/page-b.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)($walks$1);
const $progress = /*@__PURE__*/ _fill_let("__tests__/tags/page-b.marko_fill0", "progress/3", ($scope) => {
	_text($scope["#text/1"], $scope.progress);
	$input_progress($scope["#childScope/2"], $scope.progress);
});
const $setup__script = _script("__tests__/tags/page-b.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$progress($scope, +$scope.progress + 1);
}));
function $setup($scope) {
	$input_name($scope["#childScope/2"], "Switch");
	$setup__script($scope);
	$progress($scope, 0);
}
var page_b_default = /*@__PURE__*/ _template("__tests__/tags/page-b.marko", $template, $walks, $setup);
