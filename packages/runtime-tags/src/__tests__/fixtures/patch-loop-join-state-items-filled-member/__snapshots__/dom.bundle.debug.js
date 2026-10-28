// tags/child.marko
const $template$1 = "<!><!><!><button class=t>t</button>";
const $walks$1 = "b%b%b b";
const $if_content__input_a__script = _script("__tests__/tags/child.marko_2_input_a#0:6", ($scope) => _el_read($scope["#div/0"]).textContent = "s:" + $scope._.input_a);
const $if_content__input_a = /*@__PURE__*/ _fill_join("__tests__/tags/child.marko_fill0 __tests__/tags/child.marko_fill0/unpatched", "input_a", /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_a__script));
const $if_content__setup = $if_content__input_a;
const $for_content__input_a__OR__item = /*@__PURE__*/ _fill_join_for("__tests__/tags/child.marko_fill0/unpatched | __tests__/tags/child.marko_fill0", "input_a", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_1_input_a#0:6_item#2/init", 3, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope.item)), "#text/0");
const $for_content__input_a = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_a__OR__item);
const $for_content__setup = $for_content__input_a;
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__input_a__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if = /*@__PURE__*/ _if("#text/1", "<div></div>", " ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/child.marko_fill1", "open/7", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script$1 = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script$1($scope);
	$open($scope, true);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $input_items$1 = ($scope, input_items) => $for($scope, [input_items]);
const $input$1 = ($scope, input) => {
	$input_items$1($scope, input.items);
	$input_a$1($scope, input.a);
};
const $input_a$1 = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_a", ($scope) => {
	$if_content__input_a($scope);
	$for_content__input_a($scope);
}, /*@__PURE__*/ _fill_mark("input_a", $if_content__input_a));
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=l>l</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
const $list = _let("list/7", ($scope) => $input_items$1($scope["#childScope/0"], $scope.list));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$list($scope, $scope.list.concat("r"));
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
	$list($scope, ["p", "q"]);
	$setup__script($scope);
}
const $input_a = ($scope, input_a) => {
	$input_a$1($scope["#childScope/0"], input_a);
	$input_a$1($scope["#childScope/1"], input_a);
};
const $input_items = ($scope, input_items) => $input_items$1($scope["#childScope/1"], input_items);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
