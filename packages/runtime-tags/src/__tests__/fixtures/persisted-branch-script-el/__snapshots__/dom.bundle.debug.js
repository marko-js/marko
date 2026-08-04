// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $setup = () => {};
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/1"], $scope._.input_label));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _el_read($scope["#span/0"]).dataset.seen = _el_read($scope["#span/0"]).textContent);
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__setup__script($scope);
};
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $if = /*@__PURE__*/ _if("#text/1", "<span> </span>", " D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
