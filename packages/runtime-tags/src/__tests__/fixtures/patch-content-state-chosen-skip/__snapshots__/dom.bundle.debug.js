// template.marko
const $template = "<button>toggle</button><section></section><section></section><section id=partial></section>";
const $walks = " b b b b";
let contentRenders = 0;
function rendering() {
	contentRenders++;
	return "";
}
function takeRenders() {
	const renders = contentRenders;
	contentRenders = 0;
	return renders;
}
const $two_content__input_b = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_b#0:6/subscribe", "input_b/14", ($scope) => _text($scope["#text/0"], $scope._.input_b), 0, "__tests__/template.marko_0_input_b#6/subscribers", 1);
const $two_content__setup = ($scope) => {
	$two_content__input_b($scope);
	_text($scope["#text/1"], rendering());
};
const $two_content = _content("__tests__/template.marko_2*content", "<strong>two <!><!></strong>", "Db%b%", $two_content__setup);
const $one_content__input_b = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_b#0:6/subscribe", "input_b/14", ($scope) => _text($scope["#text/0"], $scope._.input_b), 0, "__tests__/template.marko_0_input_b#6/subscribers", 0);
const $one_content__setup = ($scope) => {
	$one_content__input_b($scope);
	_text($scope["#text/1"], rendering());
};
const $one_content = _content("__tests__/template.marko_1*content", "<em>one <!><!></em>", "Db%b%", $one_content__setup);
const $mode__OR__one__OR__two = /*@__PURE__*/ _or(10, ($scope) => _attr_content($scope, "#section/1", $scope.mode ? $scope.one : $scope.two), 2);
const $attrs__script = _script_patch("__tests__/template.marko_0_attrs#12 input_b", ($scope) => {
	_attrs_script($scope, "#section/2");
	_attrs_script($scope, "#section/3");
});
const $attrs = /*@__PURE__*/ _const("attrs", ($scope) => {
	_attrs_content($scope, "#section/2", $scope.attrs);
	_attrs_partial_content($scope, "#section/3", $scope.attrs, { id: 1 });
	$attrs__script($scope);
});
const $input_b__OR__mode__OR__one__OR__two = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_b#6_mode#7_one#8_two#9/setup", 11, ($scope) => $attrs($scope, {
	class: $scope.input_b,
	content: $scope.mode ? $scope.one : $scope.two
}), 3);
const $mode = _let("mode/7", ($scope) => {
	$mode__OR__one__OR__two($scope);
	$input_b__OR__mode__OR__one__OR__two($scope);
});
const $one = /*@__PURE__*/ _const("one", ($scope) => {
	$mode__OR__one__OR__two($scope);
	$input_b__OR__mode__OR__one__OR__two($scope);
});
const $two = /*@__PURE__*/ _const("two", ($scope) => {
	$mode__OR__one__OR__two($scope);
	$input_b__OR__mode__OR__one__OR__two($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$mode($scope, !$scope.mode);
}));
function $setup($scope) {
	$mode($scope, false);
	$one($scope, { content: $one_content($scope) });
	$two($scope, { content: $two_content($scope) });
	$setup__script($scope);
}
const $status__script = _script_patch("__tests__/template.marko_0_status#13 status", ($scope) => console.log($scope.status));
const $status = /*@__PURE__*/ _const("status", $status__script);
const $input_b__closure = /*@__PURE__*/ _closure($one_content__input_b, $two_content__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", ($scope) => {
	$input_b__OR__mode__OR__one__OR__two($scope);
	$input_b__closure($scope);
	$status($scope, `${$scope.input_b}: ${takeRenders()} content renders`);
});
const $input = ($scope, input) => $input_b($scope, input.b);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
