// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__b__$global_g = /*@__PURE__*/ _fill_global_join("__tests__/template.marko_1_$global_g#0:7_b#2", ($scope) => _text($scope["#text/0"], _global_read($scope.$global, "g") + $scope.b), "g");
const $if_content__b = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "b/2", $if_content__b__$global_g);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__b($scope, +$scope.b + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__b($scope, 1);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<span> </span><button class=b>b</button>", "D l ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
