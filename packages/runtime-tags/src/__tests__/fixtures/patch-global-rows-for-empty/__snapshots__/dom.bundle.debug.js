// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $global_x_key = /*@__PURE__*/ _global_key("x");
const $for_content2__$global_x = /*@__PURE__*/ _global_for($global_x_key, "#text/1", "__tests__/template.marko_2_$global_x#0:12/subscribe", ($scope) => _text($scope["#text/0"], $scope.$global.x));
const $for_content2__setup = $for_content2__$global_x;
const $for_content__for = /*@__PURE__*/ _for_until_unkeyed("#text/1", "<b> </b>", "D ", $for_content2__setup);
const $for_content__n = /*@__PURE__*/ _fill_let("__tests__/template.marko_1_n#3/fill", "n/3", ($scope) => $for_content__for($scope, [$scope.n]));
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$for_content__n($scope, +$scope.n + 1);
}));
const $for_content__setup = ($scope) => {
	$for_content__setup__script($scope);
	$for_content__n($scope, $scope["#LoopKey"] === 1 ? 1 : 0);
};
const $for = /*@__PURE__*/ _for_until_unkeyed("#ul/0", "<li><button>t</button><!></li>", "D b%", $for_content__setup);
function $setup($scope) {
	$for($scope, [3]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
