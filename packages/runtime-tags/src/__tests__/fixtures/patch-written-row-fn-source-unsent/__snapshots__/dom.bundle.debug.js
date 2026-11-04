// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)($walks$1);
const $if_content__g = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_2_g#1:5/setup", "#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.g()));
const $if_content__setup = $if_content__g;
const $for_content__g = /*@__PURE__*/ _const("g", $if_content__g);
const $for_content__v = /*@__PURE__*/ _const("v", ($scope) => $for_content__g($scope, $g($scope)));
const $for_content__input_a__OR__item = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input_a#0:5_item#2/setup", 3, ($scope) => $for_content__v($scope, $scope._.input_a + $scope.item));
const $for_content__input_a = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_1_input_a#0:5/setup", "#text/0", $for_content__input_a__OR__item, 7);
const $for_content__setup = ($scope) => {
	$for_content__input_a._($scope);
	$for_content__input_x._($scope);
};
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content__setup);
const $for_content__input_x = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_1_input_x#0:6/setup", "#text/0", ($scope) => $for_content__if($scope, $scope._.input_x ? 0 : 1), 8);
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__input_a__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
}
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_a($scope, input.a);
	$input_x($scope, input.x);
};
const $input_a = /*@__PURE__*/ _const("input_a", $for_content__input_a);
const $input_x = /*@__PURE__*/ _const("input_x", $for_content__input_x);
const $g = ($scope) => function() {
	return $scope.v;
};
_bind_resume("__tests__/template.marko_1/g v", $g);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/counter.marko
const $template = "<button> </button>";
const $walks = " D l";
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/counter.marko_0_n#2/fill", "n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template, $walks, $setup);
