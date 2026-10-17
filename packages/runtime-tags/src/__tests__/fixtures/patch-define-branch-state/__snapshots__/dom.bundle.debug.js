// template.marko
const $Counter_content__walks = "E%c%l l";
const $Counter_content__template = "<div class=counter><span><!>: <!></span><button class=inc>+</button></div>";
const $template = "<main></main>";
const $walks = " b";
const $setup = ($_) => {};
const $Counter_content__n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill2", "n/7", ($scope) => _text($scope["#text/1"], $scope.n));
const $Counter_content__input_start = $Counter_content__n;
const $Counter_content__input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $Counter_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/2"], "click", function() {
	$Counter_content__n($scope, +$scope.n + 1);
}));
const $Counter_content__setup = $Counter_content__setup__script;
const $Counter_content__$params = ($scope, $params2) => $Counter_content__input($scope, $params2[0]);
const $Counter_content__input = ($scope, input) => {
	$Counter_content__input_start($scope, input.start);
	$Counter_content__input_label($scope, input.label);
};
const $if_content__input_title = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_title", /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $Counter_content__input_label($scope["#childScope/0"], $scope._.input_title)));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__input_start._($scope);
	$Counter_content__setup($scope["#childScope/0"]);
};
const $if_content__input_start = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_start", /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $Counter_content__input_start($scope["#childScope/0"], $scope._.input_start)));
const $if = /*@__PURE__*/ _if("#main/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Counter_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Counter_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_title($scope, input.title);
	$input_start($scope, input.start);
};
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_title", $if_content__input_title);
const $input_start = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_start", $if_content__input_start);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
