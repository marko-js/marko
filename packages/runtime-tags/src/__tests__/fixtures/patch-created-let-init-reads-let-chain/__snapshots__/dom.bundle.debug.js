// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__z__script = _script("__tests__/template.marko_1_z#5", ($scope) => _el_read($scope["#span/0"]).dataset.z = String($scope.z));
const $if_content__z = _let("z/5", $if_content__z__script);
const $if_content__y = _let("y/4", ($scope) => $if_content__z($scope, $scope.y));
const $if_content__x = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "x/3", ($scope) => {
	_text($scope["#text/2"], $scope.x);
	$if_content__y($scope, $scope.x);
});
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__x($scope, +$scope.x + 1);
	_el_read($scope["#span/0"]).title = String($scope.z);
}));
const $if_content__setup = ($scope) => {
	$if_content__setup__script($scope);
	$if_content__x($scope, 1);
};
const $if = /*@__PURE__*/ _if("#text/0", "<span></span><button> </button>", " b D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
