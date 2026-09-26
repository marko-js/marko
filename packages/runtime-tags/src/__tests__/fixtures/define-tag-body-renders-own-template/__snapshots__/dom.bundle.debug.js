// tags/countdown.marko
const $Level_content__walks = /*@__PURE__*/ ((_w0) => `D l/${_w0}&b`)("b%c"), $Level_content__template = /*@__PURE__*/ ((_w0) => `<span> </span>${_w0}<!>`)($template$1);
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $Level_content__depth = ($scope, depth) => {
	_text($scope["#text/0"], depth);
	$input_depth($scope["#childScope/1"], depth - 1);
};
const $Level_content__$params = ($scope, $params2) => $Level_content__$temp($scope, $params2?.[0]);
const $Level_content__$temp = ($scope, $temp) => $Level_content__depth($scope, $temp.depth);
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Level_content__depth($scope["#childScope/0"], $scope._.input_depth));
const $if_content__setup = $if_content__input_depth;
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Level_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Level_content__walks), $if_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	$if($scope, $scope.input_depth ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input = ($scope, input) => $input_depth($scope, input.depth);
var countdown_default = /*@__PURE__*/ _template("__tests__/tags/countdown.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$1, $template$2);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)("b%c", $walks$2);
function $setup($scope) {
	$input_depth($scope["#childScope/0"], 2);
	$setup$2($scope["#childScope/1"]);
	$input_depth$1($scope["#childScope/1"], 2);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/countdown-buttons.marko
const $Level_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks), $Level_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template);
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $Level_content__setup = /*@__PURE__*/ _child_setup(($scope) => $setup($scope["#childScope/0"]));
const $Level_content__depth = ($scope, depth) => $input_depth($scope["#childScope/0"], depth - 1);
const $Level_content__$params = ($scope, $params2) => $Level_content__$temp($scope, $params2?.[0]);
const $Level_content__$temp = ($scope, $temp) => $Level_content__depth($scope, $temp.depth);
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $Level_content__depth($scope["#childScope/0"], $scope._.input_depth));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$Level_content__setup._($scope["#childScope/0"], $scope._);
};
const $if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Level_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Level_content__walks), $if_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	_text($scope["#text/1"], $scope.input_depth);
	$if($scope, $scope.input_depth ? 0 : 1);
	$if_content__input_depth($scope);
});
const $setup__script = _script("__tests__/tags/countdown-buttons.marko_0", ($scope) => _on($scope["#button/0"], "click", function(e) {
	e.target.textContent = "clicked";
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_depth($scope, input.depth);
var countdown_buttons_default = /*@__PURE__*/ _template("__tests__/tags/countdown-buttons.marko", $template, $walks, $setup, $input);
