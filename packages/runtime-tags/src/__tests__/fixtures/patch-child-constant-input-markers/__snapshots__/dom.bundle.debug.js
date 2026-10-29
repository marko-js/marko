// tags/badge.marko
const $template$1 = "<span> </span>";
const $walks$1 = " D l";
const $setup$1 = ($_) => {};
const $input_tone = ($scope, input_tone) => _attr_class($scope["#span/0"], ["badge", input_tone]);
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input$1 = ($scope, input) => {
	$input_tone($scope, input.tone);
	$input_label($scope, input.label);
};
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `<main>${_w0}${_w1}${_w2}${_w3}<!><button> </button></main>`)($template$1, $template$1, $template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `D/${_w0}&/${_w1}&/${_w2}&/${_w3}&%b D m`)($walks$1, $walks$1, $walks$1, $walks$1);
const $for_content__p_name = ($scope, p_name) => _text($scope["#text/0"], p_name);
const $for_content__setup = ($scope) => {
	$input_label($scope["#childScope/1"], "Item");
	$input_tone($scope["#childScope/1"], "info");
};
const $for_content__$params = ($scope, $params2) => $for_content__p_name($scope, $params2[0]?.name);
const $count = _let("count/11", ($scope) => _text($scope["#text/6"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/5"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$input_label($scope["#childScope/0"], "New");
	$input_tone($scope["#childScope/0"], "info");
	$input_label($scope["#childScope/1"], "Sale");
	$input_tone($scope["#childScope/1"], "warn");
	$input_label($scope["#childScope/2"], "Hot");
	$input_tone($scope["#childScope/2"], "info");
	$input_tone($scope["#childScope/3"], "info");
	$count($scope, 0);
	$setup__script($scope);
}
const $input_status = ($scope, input_status) => $input_label($scope["#childScope/3"], input_status);
const $for = /*@__PURE__*/ _for_of("#text/4", /*@__PURE__*/ ((_w0) => `<p><!> ${_w0}</p>`)($template$1), /*@__PURE__*/ ((_w0) => `D%c/${_w0}&l`)($walks$1), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => {
	$input_status($scope, input.status);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
