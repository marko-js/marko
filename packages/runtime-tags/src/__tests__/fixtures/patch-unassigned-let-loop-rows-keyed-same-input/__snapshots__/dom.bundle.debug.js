// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__x = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_x#0:5/init", /*@__PURE__*/ _for_closure("#text/0", ($scope) => _text($scope["#text/0"], $scope._.x)));
const $for_content__setup = ($scope) => {
	$for_content__x._($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
};
const $x = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _let("x/5", $for_content__x));
const $input_v = $x;
const $for = /*@__PURE__*/ _for_of("#text/0", "<p><!><!></p>", "D%b%", $for_content__setup);
const $input_items = ($scope, input_items) => $for($scope, [input_items, (i) => i]);
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
