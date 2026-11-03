// tags/child.marko
const $template$1 = "<!><!><!><button class=t>t</button>";
const $walks$1 = "b%b%b b";
const $for_content__d = ($scope, d) => _text($scope["#text/0"], d);
const $for_content__input_b__OR__item = /*@__PURE__*/ _or(3, ($scope) => $for_content__d($scope, $scope._.input_b + $scope.item));
const $for_content__input_b = /*@__PURE__*/ _for_closure("#text/1", $for_content__input_b__OR__item);
const $for_content__setup = $for_content__input_b;
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__input_b__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__input_b$1 = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_b));
const $if_content__setup$1 = $if_content__input_b$1;
const $if$1 = /*@__PURE__*/ _if("#text/0", "<i> </i>", "D ", $if_content__setup$1);
const $open = /*@__PURE__*/ _let("open/7", ($scope) => $if$1($scope, $scope.open ? 0 : 1));
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
const $input_b$1 = /*@__PURE__*/ _const("input_b", ($scope) => {
	$if_content__input_b$1($scope);
	$for_content__input_b($scope);
});
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><button class=l>l</button>";
const $walks = "b%b b";
const $if_content__input_b = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_b$1($scope["#childScope/0"], $scope._.input_b));
const $if_content__setup = ($scope) => {
	$if_content__input_b._($scope);
	$if_content__list._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__list = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_items($scope["#childScope/0"], $scope._.list));
const $list = /*@__PURE__*/ _let("list/6", $if_content__list);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$list($scope, $scope.list.concat("r"));
}));
function $setup($scope) {
	$list($scope, ["p", "q"]);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_b($scope, input.b);
};
const $input_b = /*@__PURE__*/ _const("input_b", $if_content__input_b);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
