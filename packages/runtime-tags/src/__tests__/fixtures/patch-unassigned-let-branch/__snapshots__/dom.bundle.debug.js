// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_w = _resumed["__tests__/template.marko_1_input_w#0:4/patch"] = _with_branches(/*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_w", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_w))));
const $if_content__setup = $if_content__input_w;
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $input_show = $show;
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_w($scope, input.w);
};
const $input_w = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_w", $if_content__input_w);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
