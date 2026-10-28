// tags/path-child.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup__$global_o = /*@__PURE__*/ _fill_global_path_join("__tests__/tags/path-child.marko_0_$global_o#4", ($scope) => _text($scope["#text/0"], $scope.$global.o.x), "o", "x");
const $setup$1 = $setup__$global_o;
var path_child_default = /*@__PURE__*/ _template("__tests__/tags/path-child.marko", $template$1, "D l", $setup$1);

// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $if_content__setup__$global_k = /*@__PURE__*/ _fill_global_join("__tests__/template.marko_1_$global_k#0:7", ($scope) => _text($scope["#text/0"], $scope.$global.k), "k");
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/1"]);
	$if_content__setup__$global_k($scope);
};
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<b> </b>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `D l/${_w0}&`)("D l"), $if_content__setup);
const $open = /*@__PURE__*/ _let("open/2", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
