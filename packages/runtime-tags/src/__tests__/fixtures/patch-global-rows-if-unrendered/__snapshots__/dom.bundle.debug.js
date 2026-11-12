// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $global_x_key = /*@__PURE__*/ _global_key("x");
const $if_content__$global_x = /*@__PURE__*/ _global_if($global_x_key, "#text/1", 0, "__tests__/template.marko_2_$global_x#0:10/subscribe", ($scope) => _text($scope["#text/0"], $scope.$global.x));
const $if_content__setup = $if_content__$global_x;
const $for_content__if = /*@__PURE__*/ _if("#text/1", "<b> </b>", "D ", $if_content__setup);
const $for_content__show = /*@__PURE__*/ _fill_let("__tests__/template.marko_1_show#3/fill", "show/3", ($scope) => $for_content__if($scope, $scope.show ? 0 : 1));
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$for_content__show($scope, !$scope.show);
}));
const $for_content__setup = ($scope) => {
	$for_content__setup__script($scope);
	$for_content__show($scope, $scope["#LoopKey"] === 1);
};
const $for = /*@__PURE__*/ _for_until_unkeyed("#ul/0", "<li><button>t</button><!></li>", "D b%", $for_content__setup);
function $setup($scope) {
	$for($scope, [3]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
