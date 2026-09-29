// helper.ts
function stamp() {
	return "stamp";
}

// tags/mid/tags/leaf/index.marko
const $template$2 = "<pre> </pre>";
const $walks$2 = "D l";
const $setup$2 = () => {};
const $input_stamp = ($scope, input_stamp) => _text($scope["#text/0"], input_stamp);
const $input = ($scope, input) => $input_stamp($scope, input.stamp);
var leaf_default = /*@__PURE__*/ _template("__tests__/tags/mid/tags/leaf/index.marko", $template$2, "D l", 0, $input);

// tags/mid/index.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
function $setup$1($scope) {
	$input_stamp($scope["#childScope/0"], stamp());
}
var mid_default = /*@__PURE__*/ _template("__tests__/tags/mid/index.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
