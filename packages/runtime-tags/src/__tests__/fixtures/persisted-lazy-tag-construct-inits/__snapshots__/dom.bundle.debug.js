// child.marko
const $template = "<button>+</button><!><!>";
const $walks = " b%c";
const $for_content__input_label = /*@__PURE__*/ _for_closure("#text/1", ($scope) => _text($scope["#text/0"], $scope._.input_label));
const $for_content__setup = ($scope) => {
	$for_content__input_label._($scope);
	$for_content__count._($scope);
};
const $for_content__count__OR__i = /*@__PURE__*/ _fill_join("__tests__/child.marko1", "i", /*@__PURE__*/ _fill_join_for("__tests__/child.marko0", "count", /*@__PURE__*/ _or(4, ($scope) => _text($scope["#text/1"], $scope._.count + $scope.i)), 0, "#text/1"));
const $for_content__count = /*@__PURE__*/ _init_for_closure("__tests__/child.marko_1_count#5/init", "#text/1", $for_content__count__OR__i);
const $for_content__i = /*@__PURE__*/ _fill_const("__tests__/child.marko1", "i", $for_content__count__OR__i);
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $count = /*@__PURE__*/ _fill_let("__tests__/child.marko0", "count/5", $for_content__count);
const $for = /*@__PURE__*/ _for_of("#text/1", "<span><!>:<!></span>", "D%c%", $for_content__setup, $for_content__$params);
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
	$for($scope, [[1, 2]]);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label = /*@__PURE__*/ _const("input_label", $for_content__input_label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=n> </button><main></main><p> </p>";
const $walks = " D l bD l";
_load_lazy("ready:__tests__/child.marko", () => import("./child.mjs").then(() => {}));
const $if_content__input_label = /*@__PURE__*/ _if_closure("#main/2", 0);
const $if_content__setup = $if_content__input_label;
const $n = /*@__PURE__*/ _let("n/8", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#main/2", "<!><!><!>", "b%/&", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$if_content__input_label($scope);
	_text($scope["#text/3"], $scope.input_label);
});
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
