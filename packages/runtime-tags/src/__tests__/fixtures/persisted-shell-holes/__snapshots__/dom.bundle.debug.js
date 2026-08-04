// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $setup = () => {};
const $if_content__input_href = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _attr($scope["#a/0"], "href", $scope._.input_href));
const $if_content__setup = ($scope) => {
	$if_content__input_href._($scope);
	$if_content__input_hidden._($scope);
	$if_content__input_label._($scope);
};
const $if_content__input_hidden = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _attr($scope["#a/0"], "hidden", $scope._.input_hidden));
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/1"], $scope._.input_label));
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $if = /*@__PURE__*/ _if("#text/1", "<a> </a>", " D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
	$input_href($scope, input.href);
	$input_hidden($scope, input.hidden);
	$input_label($scope, input.label);
};
const $input_href = /*@__PURE__*/ _const("input_href", $if_content__input_href);
const $input_hidden = /*@__PURE__*/ _const("input_hidden", $if_content__input_hidden);
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
