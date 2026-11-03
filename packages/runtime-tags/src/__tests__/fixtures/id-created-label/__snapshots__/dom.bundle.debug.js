// tags/card.marko
const $template$1 = "<button>clear</button><!><!>";
const $walks$1 = " b%c";
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = /*@__PURE__*/ _let("c/5", ($scope) => $dynamicTag$1($scope, $scope.c));
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!><!><!><!>";
const $walks = "b%b%b%b%c";
const $card_content__uid = ($scope, uid) => {
	_attr($scope["#input/0"], "id", uid);
	_attr($scope["#label/1"], "for", uid);
};
const $card_content__setup = ($scope) => {
	_text($scope["#text/2"], $scope._["#LoopKey"]);
	$card_content__uid($scope, _id($scope));
};
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_6*content", "<input><label> </label>", " b D ", $card_content__setup);
const $for_content2__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $if_content2__uid = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _attr($scope["#label/0"], "for", $scope._.uid));
const $if_content2__setup = $if_content2__uid;
const $Field_content__uid = /*@__PURE__*/ _const("uid", ($scope) => _attr($scope["#input/0"], "id", $scope.uid));
const $Field_content__setup = ($scope) => $Field_content__uid($scope, _id($scope));
const $Field_content__if = /*@__PURE__*/ _if("#text/1", "<label>field</label>", " ", $if_content2__setup);
const $Field_content__show = ($scope, show) => $Field_content__if($scope, show ? 0 : 1);
const $Field_content__$params = ($scope, $params3) => $Field_content__show($scope, $params3[0].show);
const $Field_content = _content("__tests__/template.marko_3*content", "<input><!><!>", " b%", $Field_content__setup, $Field_content__$params);
const $if_content__uid = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _attr($scope["#label/0"], "for", $scope._.uid));
const $if_content__setup = ($scope) => {
	$if_content__uid._($scope);
	_text($scope["#text/1"], $scope._["#LoopKey"]);
};
const $for_content__if = /*@__PURE__*/ _if("#text/1", "<label> </label>", " D ", $if_content__setup);
const $for_content__input_show = /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__if($scope, $scope._.input_show ? 0 : 1));
const $for_content__uid = /*@__PURE__*/ _const("uid", ($scope) => _attr($scope["#input/0"], "id", $scope.uid));
const $for_content__setup = ($scope) => {
	$for_content__input_show._($scope);
	$for_content__uid($scope, _id($scope));
};
const $for = /*@__PURE__*/ _for_of("#text/0", "<input><!><!>", " b%", $for_content__setup);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "key"]);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_show__OR__input_on__OR__Field = /*@__PURE__*/ _or(11, ($scope) => {
	$dynamicTag($scope, $scope.input_on ? $scope.Field : null, ($_) => ({ show: $scope.input_show }));
	$dynamicTag2($scope, $scope.input_on ? $scope.Field : null, ($_) => ({ show: $scope.input_show }));
}, 2);
const $Field = /*@__PURE__*/ _const("Field", $input_show__OR__input_on__OR__Field);
function $setup($scope) {
	$Field($scope, { content: $Field_content($scope) });
}
const $input_show = /*@__PURE__*/ _const("input_show", ($scope) => {
	$input_show__OR__input_on__OR__Field($scope);
	$for_content__input_show($scope);
});
const $input_on = /*@__PURE__*/ _const("input_on", $input_show__OR__input_on__OR__Field);
const $for2 = /*@__PURE__*/ _for_of("#text/3", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $for_content2__setup);
const $input_rows = ($scope, input_rows) => $for2($scope, [input_rows, "id"]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_show($scope, input.show);
	$input_on($scope, input.on);
	$input_rows($scope, input.rows);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
