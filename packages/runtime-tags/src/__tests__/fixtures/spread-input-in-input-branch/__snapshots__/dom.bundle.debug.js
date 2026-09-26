// tags/my-btn.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $else_content__input__script = _script("__tests__/tags/my-btn.marko_2_input#2", ($scope) => _attrs_script($scope, "#button/0"));
const $else_content__input = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => {
	_attrs_content($scope, "#button/0", $scope._.input);
	$else_content__input__script($scope);
});
const $else_content__setup = $else_content__input;
const $if_content__input__script = _script("__tests__/tags/my-btn.marko_1_input#2", ($scope) => _attrs_script($scope, "#a/0"));
const $if_content__input = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	_attrs_content($scope, "#a/0", $scope._.input);
	$if_content__input__script($scope);
});
const $if_content__setup = $if_content__input;
const $if = /*@__PURE__*/ _if("#text/0", "<a></a>", " ", $if_content__setup, "<button></button>", " ", $else_content__setup);
const $input_href = ($scope, input_href) => $if($scope, input_href ? 0 : 1);
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	$input_href($scope, $scope.input.href);
	$if_content__input($scope);
	$else_content__input($scope);
});
var my_btn_default = /*@__PURE__*/ _template("__tests__/tags/my-btn.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=link>link</button><button class=inc>inc</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b b/${_w0}&b`)("b%c");
const $mybtn_content__count = /*@__PURE__*/ _closure_get("count/5", ($scope) => _text($scope["#text/0"], $scope._.count), 0, "__tests__/template.marko_1_count#4/subscribe");
const $mybtn_content__setup = $mybtn_content__count;
const $mybtn_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "Label <!>", "b%", $mybtn_content__setup);
const $href = /*@__PURE__*/ _let("href/3", ($scope) => $input($scope["#childScope/2"], {
	href: $scope.href,
	class: "btn",
	content: $mybtn_content($scope)
}));
const $count__closure = /*@__PURE__*/ _closure($mybtn_content__count);
const $count = /*@__PURE__*/ _let("count/4", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$href($scope, $scope.href ? undefined : "/x");
	});
	_on($scope["#button/1"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
});
function $setup($scope) {
	$href($scope, undefined);
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
