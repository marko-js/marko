// tags/child.marko
const $template$1 = "<!><!><!><!>";
const $walks$1 = "b%b%c";
const $setup$1 = ($_) => {};
const $for_content__d = ($scope, d) => _text($scope["#text/0"], d);
const $for_content__input_b__OR__item = /*@__PURE__*/ _fill_join_for("__tests__/tags/child.marko_fill0/unpatched", "input_b", /*@__PURE__*/ _fill_join_value("__tests__/tags/child.marko_fill0", "input_b", /*@__PURE__*/ _shell_or("__tests__/tags/child.marko_2_input_b#0:5_item#2/init", 3, ($scope) => $for_content__d($scope, $scope._.input_b + $scope.item))), "#text/1");
const $for_content__input_b = /*@__PURE__*/ _for_closure("#text/1", $for_content__input_b__OR__item);
const $for_content__setup = $for_content__input_b;
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__input_b__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__input_b = /*@__PURE__*/ _shell_init("__tests__/tags/child.marko_1_input_b#0:5/init", /*@__PURE__*/ _fill_join("__tests__/tags/child.marko_fill0/unpatched", "input_b", /*@__PURE__*/ _fill_join("__tests__/tags/child.marko_fill0", "input_b", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_b)))));
const $if_content__setup = $if_content__input_b;
const $if = /*@__PURE__*/ _if("#text/0", "<i> </i>", "D ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $input_items$1 = ($scope, input_items) => $for($scope, [input_items]);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_b$1($scope, input.b);
	$input_items$1($scope, input.items);
};
const $input_b$1 = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_b", ($scope) => {
	$if_content__input_b($scope);
	$for_content__input_b($scope);
}, $if_content__input_b);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=l>l</button><button class=s>s</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks$1, $walks$1);
const $list = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "list/9", ($scope) => $input_items$1($scope["#childScope/0"], $scope.list));
const $show = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "show/10", ($scope) => $input_show$1($scope["#childScope/0"], $scope.show));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$list($scope, $scope.list.concat("r"));
	});
	_on($scope["#button/3"], "click", function() {
		$show($scope, !$scope.show);
	});
});
function $setup($scope) {
	$setup__script($scope);
	$list($scope, ["p", "q"]);
	$show($scope, true);
}
const $input_b = ($scope, input_b) => {
	$input_b$1($scope["#childScope/0"], input_b);
	$input_b$1($scope["#childScope/1"], input_b);
};
const $input_items = ($scope, input_items) => $input_items$1($scope["#childScope/1"], input_items);
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/1"], input_show);
const $input = ($scope, input) => {
	$input_b($scope, input.b);
	$input_items($scope, input.items);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
