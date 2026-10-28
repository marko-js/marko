// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $card_content__uid = ($scope, uid) => {
	_attr($scope["#input/0"], "id", uid);
	_attr($scope["#label/1"], "for", uid);
};
const $card_content__setup = ($scope) => {
	_text($scope["#text/2"], $scope._["#LoopKey"]);
	$card_content__uid($scope, _id($scope));
};
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<input><label> </label>", " b D ", $card_content__setup);
const $for_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $for = /*@__PURE__*/ _for_of("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $for_content__setup);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/card.marko
const $template = "<input><label>own</label><button>clear</button><!><!>";
const $walks = " b b b%c";
const $own = ($scope, own) => {
	_attr($scope["#input/0"], "id", own);
	_attr($scope["#label/1"], "for", own);
};
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$c($scope, undefined);
}));
function $setup($scope) {
	$setup__script($scope);
	$own($scope, _id($scope));
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3");
const $c = /*@__PURE__*/ _let("c/8", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $input = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
