// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content2__y__script = _script("__tests__/template.marko_2_y#2", ($scope) => _el_read($scope["#span/0"]).dataset.y = String($scope.y));
const $if_content2__y = _let("y/2", $if_content2__y__script);
const $if_content2__x = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_2_x#1:3/setup", "#text/2", 0, ($scope) => $if_content2__y($scope, $scope._.x));
const $if_content2__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/1"], "click", function() {
	_el_read($scope["#span/0"]).title = String($scope.y);
}));
const $if_content2__setup = ($scope) => {
	$if_content2__x._($scope);
	$if_content2__setup__script($scope);
};
const $if_content__if = /*@__PURE__*/ _if("#text/2", "<span></span><button class=y>go</button>", " b ", $if_content2__setup);
const $if_content__input_show = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_show#0:4/setup", "#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_show ? 0 : 1));
const $if_content__x = /*@__PURE__*/ _fill_let("__tests__/template.marko_1_x#3/fill", "x/3", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$if_content2__x($scope);
});
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__x($scope, +$scope.x + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_show._($scope);
	$if_content__setup__script($scope);
	$if_content__x($scope, 1);
};
const $if = /*@__PURE__*/ _if("#text/0", "<button class=x> </button><!><!>", " D l%", $if_content__setup);
const $input_outer = ($scope, input_outer) => $if($scope, input_outer ? 0 : 1);
const $input = ($scope, input) => {
	$input_outer($scope, input.outer);
	$input_show($scope, input.show);
};
const $input_show = /*@__PURE__*/ _const("input_show", $if_content__input_show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
