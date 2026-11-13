// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_name = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_name#0:4/setup", "#text/0", 0, ($scope) => _text($scope["#text/1"], $scope._.input_name));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => console.log("comment", _el_read($scope["#comment/0"]).data));
const $if_content__setup = ($scope) => {
	$if_content__input_name._($scope);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<!--hello--><p> </p>", " bD ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_name($scope, input.name);
};
const $input_name = /*@__PURE__*/ _const("input_name", $if_content__input_name);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
