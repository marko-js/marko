// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__y__script = _script("__tests__/template.marko_1_y#4", ($scope) => _el_read($scope["#span/0"]).dataset.y = String($scope.y));
const $if_content__y = _fill_let_resume("__tests__/template.marko_1_y#4/fill", "y/4", $if_content__y__script);
const $if_content__x = _let("x/3", ($scope) => {
	$if_content__y($scope, $scope.x);
	_text($scope["#text/1"], $scope.x);
});
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/2"], "click", function() {
	_el_read($scope["#span/0"]).title = String($scope.y);
}));
const $if_content__setup = ($scope) => {
	$if_content__x($scope, 1);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<span> </span><button>go</button>", " D l ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
