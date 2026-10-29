// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__input_w__OR__y = /*@__PURE__*/ _fill_join_for("__tests__/template.marko_fill1", "input_w", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_w#0:5_y#4/init", 6, ($scope) => _text($scope["#text/1"], $scope.y + $scope._.input_w)), "#text/0");
const $for_content__y = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill2", "y/4", $for_content__input_w__OR__y);
const $for_content__x__OR__g = /*@__PURE__*/ _or_resume("__tests__/template.marko_1_x#2_g#10/init", 5, ($scope) => $for_content__y($scope, $scope.f($scope.x)));
const $for_content__x = /*@__PURE__*/ _let("x/2", $for_content__x__OR__g);
const $for_content__input_v = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_v#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_v", /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__x($scope, $scope._.input_v))));
const $for_content__f = /*@__PURE__*/ _const("f", $for_content__x__OR__g);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$for_content__y($scope, "click");
}));
const $for_content__setup = ($scope) => {
	$for_content__input_v._($scope);
	$for_content__input_w._($scope);
	$for_content__f($scope, $f);
	$for_content__setup__script($scope);
};
const $for_content__input_w = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_w__OR__y);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button>set</button><p> </p>", " bD ", $for_content__setup);
const $input_show = ($scope, input_show) => $for($scope, [input_show ? [1, 2] : []]);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
const $input_v = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_v", $for_content__input_v);
const $input_w = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_w", $for_content__input_w);
function $f(v) {
	return v;
}
_resumed["__tests__/template.marko_1/f"] = $f;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
