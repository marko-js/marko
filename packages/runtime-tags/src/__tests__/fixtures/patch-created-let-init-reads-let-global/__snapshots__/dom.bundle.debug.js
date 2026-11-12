// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__y__script = _script("__tests__/template.marko_1_y#5", ($scope) => _el_read($scope["#span/0"]).dataset.y = String($scope.y));
const $if_content__y = _let("y/5", $if_content__y__script);
const $global_n_key = /*@__PURE__*/ _global_key("$global_n/5", "n");
const $if_content__$global_n = /*@__PURE__*/ _global_closure("__tests__/template.marko_1_$global_n#0:7/subscribe", $global_n_key);
const $if_content__$global_n__OR__x = /*@__PURE__*/ _global_or(4, ($scope) => $if_content__y($scope, $scope.x + _global_read($scope.$global, "n")), $if_content__$global_n);
const $if_content__x = /*@__PURE__*/ _fill_let("__tests__/template.marko_1_x#3/fill", "x/3", ($scope) => {
	_text($scope["#text/2"], $scope.x);
	$if_content__$global_n__OR__x($scope);
});
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__x($scope, +$scope.x + 1);
	_el_read($scope["#span/0"]).title = String($scope.y);
}));
const $if_content__setup = ($scope) => {
	$if_content__setup__script($scope);
	$if_content__x($scope, 1);
};
const $if = /*@__PURE__*/ _if("#text/0", "<span></span><button> </button>", " b D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
