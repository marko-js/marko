// tags/test.marko
const $Tag_content__walks = "b%c", $Tag_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Tag_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Tag_content__walks);
const $if_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._._.count), ($scope) => $scope._._);
const $if_content__setup$1 = $if_content__count;
const $Tag_content__if = /*@__PURE__*/ _if("#text/0", "<div> </div>", "D l", $if_content__setup$1);
const $Tag_content__input_x = ($scope, input_x) => $Tag_content__if($scope, input_x ? 0 : 1);
const $Tag_content__$params = ($scope, $params2) => $Tag_content__input($scope, $params2[0]);
const $Tag_content__input = ($scope, input) => $Tag_content__input_x($scope, input.x);
const $count = /*@__PURE__*/ _const("count");
function $setup$1($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Tag_content__input_x($scope["#childScope/0"], 1);
	$count($scope, 123);
}
var test_default = /*@__PURE__*/ _template("__tests__/tags/test.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<div><!></div>";
const $walks = "D%l";
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1), $if_content__setup);
const $m = /*@__PURE__*/ _let("m/1", ($scope) => $if($scope, $scope.m ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => $m($scope, 1));
function $setup($scope) {
	$m($scope, undefined);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup);
