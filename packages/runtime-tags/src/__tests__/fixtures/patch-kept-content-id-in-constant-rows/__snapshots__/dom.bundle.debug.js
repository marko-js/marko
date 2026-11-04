// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<p> </p>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D l/${_w0}&b`)($walks$1);
const $for_content__rid = ($scope, rid) => {
	_attr($scope["#input/0"], "id", rid);
	_attr($scope["#label/1"], "for", rid);
};
const $for_content__setup = ($scope) => $for_content__rid($scope, _id($scope));
const $for_content__$params = ($scope, $params2) => _text($scope["#text/2"], $params2[0]);
const $card_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<input type=radio name=r><label> </label>", " b D ", $for_content__setup, $for_content__$params);
const $card_content__setup = ($scope) => $card_content__for($scope, [[1, 2]]);
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $card_content__setup);
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$input_content($scope["#childScope/1"], $card_content($scope));
}
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/card.marko
const $template = "<button>clear</button><!><!><!>";
const $walks = " b%b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $c = _let("c/6", ($scope) => {
	$dynamicTag($scope, $scope.c);
	$dynamicTag2($scope, $scope.c);
});
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
