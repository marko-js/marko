// template.marko
const $Label_content__walks = "D l%c";
const $Label_content__template = "<p> </p><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<pre id=log></pre>${_w0}<button>toggle</button>`)($Label_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Label_content__walks);
const $if_content__text = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_2_text#1:4/setup", "#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.text));
const $if_content__setup = $if_content__text;
const $Label_content__if = /*@__PURE__*/ _if("#text/1", "<span> </span>", "D ", $if_content__setup);
const $Label_content__open = /*@__PURE__*/ _closure_get("open/3", ($scope) => $Label_content__if($scope, $scope._.open ? 0 : 1), 0, "__tests__/template.marko_1_open#0:2/subscribe");
const $Label_content__setup = $Label_content__open;
const $Label_content__text__script = _script_patch("__tests__/template.marko_1_text#4 text", ($scope) => document.getElementById("log").textContent = $scope.text);
const $Label_content__text = /*@__PURE__*/ _const("text", ($scope) => {
	$if_content__text($scope);
	_text($scope["#text/0"], $scope.text);
	$Label_content__text__script($scope);
});
const $Label_content__$params = ($scope, $params2) => $Label_content__$temp($scope, $params2[0]);
const $Label_content__$temp = ($scope, $temp) => $Label_content__text($scope, $temp.text);
const $open__closure = /*@__PURE__*/ _closure($Label_content__open);
const $open = _let("open/2", $open__closure);
const $global_text_key = /*@__PURE__*/ _global_key("$global_text/5", "text");
const $global_text = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_text#12/subscribe", $global_text_key, ($scope) => $Label_content__text($scope["#childScope/0"], $scope.$global.text));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Label_content__setup($scope["#childScope/0"]);
	$open($scope, false);
	$setup__script($scope);
	$global_text($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
