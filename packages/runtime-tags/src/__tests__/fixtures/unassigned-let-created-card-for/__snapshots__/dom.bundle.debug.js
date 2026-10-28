// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__input_w = /*@__PURE__*/ _for_closure("#text/0", ($scope) => _text($scope["#text/1"], $scope._.input_w));
const $for_content__setup = $for_content__input_w;
const $for_content__i = ($scope, i) => _text($scope["#text/0"], i);
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<li><!><!></li>", "D%b%", $for_content__setup, $for_content__$params);
const $rows = /*@__PURE__*/ _let("rows/5", ($scope) => $for($scope, [$scope.rows]));
const $input_items$1 = $rows;
const $input$1 = ($scope, input) => {
	$input_items$1($scope, input.items);
	$input_w$1($scope, input.w);
};
const $input_w$1 = /*@__PURE__*/ _const("input_w", $for_content__input_w);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_w = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_w$1($scope["#childScope/0"], $scope._.input_w));
const $if_content__setup = ($scope) => {
	$if_content__input_w._($scope);
	$if_content__input_items._($scope);
};
const $if_content__input_items = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_items$1($scope["#childScope/0"], $scope._.input_items));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_on = ($scope, input_on) => $if($scope, input_on ? 0 : 1);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_w($scope, input.w);
	$input_items($scope, input.items);
};
const $input_w = /*@__PURE__*/ _const("input_w", $if_content__input_w);
const $input_items = /*@__PURE__*/ _const("input_items", $if_content__input_items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
