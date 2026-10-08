// tags/list.marko
const $template$1 = "<button>toggle</button><button>pick</button><!><!>";
const $walks$1 = " b b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__item_content = /*@__PURE__*/ _fill_join("__tests__/tags/list.marko_fill1", "item_content", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.item_content)));
const $if_content__setup = $if_content__item_content;
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $for_content__open = _shell_for_closure("__tests__/tags/list.marko_1_open#0:7/init", "#text/2", ($scope) => $for_content__if($scope, $scope._.open ? 0 : 1));
const $for_content__setup = $for_content__open;
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for_content__item_content = /*@__PURE__*/ _fill_const("__tests__/tags/list.marko_fill1", "item_content", $if_content__item_content);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/list.marko_fill0", "open/7", $for_content__open);
const $setup__script = _script("__tests__/tags/list.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input_onPick__script = _script("__tests__/tags/list.marko_0_input_onPick#5", ($scope) => _on($scope["#button/1"], "click", $scope.input_onPick));
const $input_onPick = /*@__PURE__*/ _const("input_onPick", $input_onPick__script);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/2", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input$1 = ($scope, input) => {
	$input_onPick($scope, input.onPick);
	$input_item($scope, input.item);
};
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $item_content__input_note = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_note", _closure_get("input_note/5", ($scope) => _text($scope["#text/1"], $scope._.input_note), 0, "__tests__/template.marko_1_input_note#0:3/subscribe"), 0);
const $item_content__setup = $item_content__input_note;
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", "<em><!>:<!></em>", "D%c%", $item_content__setup), { label($scope) {
	_text($scope["#text/0"], $scope.label);
} });
_resumed["__tests__/template.marko_1*content"] = $item_content;
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_onPick($scope["#childScope/0"], $onPick($scope));
}
const $input_labels = /*@__PURE__*/ _const("input_labels", ($scope) => {
	let $item;
	forOf($scope.input_labels, (label) => {
		$item = attrTags($item, { content: $item_content($scope, { label }) });
	});
	$input_item($scope["#childScope/0"], $item);
});
const $input = ($scope, input) => {
	$input_labels($scope, input.labels);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($item_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_note", $input_note__closure);
const $onPick = ($scope) => function() {
	console.log($scope.input_note);
};
_resumed["__tests__/template.marko_0/onPick"] = $onPick;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
