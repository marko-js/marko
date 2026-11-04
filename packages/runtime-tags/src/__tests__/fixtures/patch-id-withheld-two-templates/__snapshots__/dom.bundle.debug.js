// tags/relay.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2);
const $card_content__rid = ($scope, rid) => {
	_attr($scope["#input/0"], "id", rid);
	_attr($scope["#label/1"], "for", rid);
};
const $card_content__setup = ($scope) => $card_content__rid($scope, _id($scope));
const $card_content = /*@__PURE__*/ _content("__tests__/tags/relay.marko_1*content", "<input><label>relay</label>", " b ", $card_content__setup);
function $setup$1($scope) {
	$setup$2($scope["#childScope/0"]);
	$input_content$1($scope["#childScope/0"], $card_content($scope));
}
const $input_content = ($scope, input_content) => $input_other($scope["#childScope/0"], input_content);
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var relay_default = /*@__PURE__*/ _template("__tests__/tags/relay.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $relay_content__uid = ($scope, uid) => {
	_attr($scope["#input/0"], "id", uid);
	_attr($scope["#label/1"], "for", uid);
};
const $relay_content__setup = ($scope) => {
	_text($scope["#text/2"], $scope._["#LoopKey"]);
	$relay_content__uid($scope, _id($scope));
};
const $relay_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<input><label>p <!></label>", " b Db%", $relay_content__setup);
const $for_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $relay_content($scope));
};
const $for = /*@__PURE__*/ _for_of("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $for_content__setup);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/card.marko
const $template = "<button>clear</button><!><!><!>";
const $walks = " b%b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = _let("c/7", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $o = _let("o/8", ($scope) => $dynamicTag2($scope, $scope.o));
const $input_other = $o;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
	$o($scope, undefined);
}));
const $setup = $setup__script;
const $input = ($scope, input) => {
	$input_content($scope, input.content);
	$input_other($scope, input.other);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
