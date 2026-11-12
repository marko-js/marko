// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $global_x_key = /*@__PURE__*/ _global_key("x");
const $if_content__$global_x = /*@__PURE__*/ _global_if($global_x_key, "#text/1", 0, "__tests__/template.marko_1_$global_x#0:7/subscribe", ($scope) => _text($scope["#text/0"], $scope.$global.x));
const $if_content__$global_x__script = _global_script("__tests__/template.marko_1_$global_x#0:7", ($scope) => document.body.dataset.x = $scope.$global.x, /*@__PURE__*/ _global_closure($global_x_key));
const $if_content__setup = ($scope) => {
	$if_content__$global_x__script($scope);
	$if_content__$global_x($scope);
};
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $show = _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
