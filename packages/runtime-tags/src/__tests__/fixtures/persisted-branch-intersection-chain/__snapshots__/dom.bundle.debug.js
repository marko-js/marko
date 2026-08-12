// template.marko
const $template = "<main><div></div><span> </span><button>+</button></main>";
const $walks = "D bD l l";
const $else_content__count = /*@__PURE__*/ _resume("__tests__/template.marko_3_count#7/init", /*@__PURE__*/ _if_closure("#div/0", 2, ($scope) => _text($scope["#text/0"], $scope._.count)));
const $else_content__setup = $else_content__count;
const $elseif_content__input_title__OR__count = /*@__PURE__*/ _fill_join_if("__tests__/template.marko0", "input_title", /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.input_title + " @" + $scope._.count)), "#div/0", 1);
const $elseif_content__input_title = /*@__PURE__*/ _if_closure("#div/0", 1, $elseif_content__input_title__OR__count);
const $elseif_content__setup = ($scope) => {
	$elseif_content__input_title._($scope);
	$elseif_content__count._($scope);
};
const $elseif_content__count = /*@__PURE__*/ _resume("__tests__/template.marko_2_count#7/init", /*@__PURE__*/ _if_closure("#div/0", 1, $elseif_content__input_title__OR__count));
const $if_content__input_title__OR__count = /*@__PURE__*/ _fill_join_if("__tests__/template.marko0", "input_title", /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.input_title + " #" + $scope._.count)), "#div/0", 0);
const $if_content__input_title = /*@__PURE__*/ _if_closure("#div/0", 0, $if_content__input_title__OR__count);
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__count._($scope);
};
const $if_content__count = /*@__PURE__*/ _resume("__tests__/template.marko_1_count#7/init", /*@__PURE__*/ _if_closure("#div/0", 0, $if_content__input_title__OR__count));
const $input_title__OR__count = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_title", /*@__PURE__*/ _or(8, ($scope) => _text($scope["#text/1"], $scope.input_title + " root #" + $scope.count)));
const $count = /*@__PURE__*/ _let("count/7", ($scope) => {
	$input_title__OR__count($scope);
	$if_content__count($scope);
	$elseif_content__count($scope);
	$else_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#div/0", "<p>A <!></p>", "Db%", $if_content__setup, "<p>B <!></p>", "Db%", $elseif_content__setup, "<p>None <!></p>", "Db%", $else_content__setup);
const $input_kind = ($scope, input_kind) => $if($scope, input_kind === "a" ? 0 : input_kind === "b" ? 1 : 2);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", ($scope) => {
	$input_title__OR__count($scope);
	$if_content__input_title($scope);
	$elseif_content__input_title($scope);
});
const $input = ($scope, input) => {
	$input_kind($scope, input.kind);
	$input_title($scope, input.title);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
