// tags/child.marko
const $template$1 = "<!><!><!><button class=t>t</button>";
const $walks$1 = "b%b%b b";
const $for_content__d = ($scope, d) => _text($scope["#text/0"], d);
const $for_content__input_b__OR__item = /*@__PURE__*/ _fill_join_for("__tests__/tags/child.marko_fill0/unpatched | __tests__/tags/child.marko_fill0", "input_b", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_2_input_b#0:5_item#2/init", 3, ($scope) => $for_content__d($scope, $scope._.input_b + $scope.item)), "#text/1");
const $for_content__input_b = /*@__PURE__*/ _for_closure("#text/1", $for_content__input_b__OR__item);
const $for_content__setup = $for_content__input_b;
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__input_b__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__input_b = /*@__PURE__*/ _fill_join("__tests__/tags/child.marko_fill0 __tests__/tags/child.marko_fill0/unpatched", "input_b", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_b)));
const $if_content__setup = $if_content__input_b;
const $if = /*@__PURE__*/ _if("#text/0", "<i> </i>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/child.marko_fill1", "open/7", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script$1 = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, true);
	$setup__script$1($scope);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input$1 = ($scope, input) => {
	$input_b$1($scope, input.b);
	$input_items($scope, input.items);
};
const $input_b$1 = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_b", ($scope) => {
	$if_content__input_b($scope);
	$for_content__input_b($scope);
}, /*@__PURE__*/ _fill_mark("input_b", $if_content__input_b));
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=l>l</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $list = /*@__PURE__*/ _let("list/5", ($scope) => $input_items($scope["#childScope/0"], $scope.list));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$list($scope, $scope.list.concat("r"));
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$list($scope, ["p", "q"]);
	$setup__script($scope);
}
const $input_b = ($scope, input_b) => $input_b$1($scope["#childScope/0"], input_b);
const $input = ($scope, input) => $input_b($scope, input.b);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
