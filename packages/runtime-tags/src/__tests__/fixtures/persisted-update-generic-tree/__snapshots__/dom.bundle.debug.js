// tags/counter.marko.update.mjs
const $n_seed = _update_signal("__tests__/tags/counter.marko_0_n/var");
const $update$2 = (patch, live) => {
	_update_pair(patch, live);
	if ("n" in patch) _update_seed(live, $n_seed, patch["n"]);
};
const _merge$2 = _resume("__tests__/tags/counter.marko_0_update", $update$2);
function createPatch$2() {
	return createPatch$3(_merge$2);
}

// tags/widget.marko.update.mjs
const $update$1 = (patch, live) => {
	_update_scope(patch, live);
	if ("#childScope/1" in patch) _merge$2(patch["#childScope/1"], live["#childScope/1"]);
};
const _merge$1 = _resume("__tests__/tags/widget.marko_0_update", $update$1);
function createPatch$1() {
	return createPatch$3(_merge$1);
}

// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	_update_scope(patch, live);
	if ("#childScope/3" in patch) _merge$1(patch["#childScope/3"], live["#childScope/3"]);
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
function createPatch() {
	return createPatch$3(_merge);
}

// tags/badge.marko
const $template$4 = "<span> </span>";
const $walks$4 = " D l";
const $setup$4 = () => {};
const $input_tone$2 = ($scope, input_tone) => _attr_class($scope["#span/0"], ["badge", input_tone]);
const $input_label$1 = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input$3 = ($scope, input) => {
	$input_tone$2($scope, input.tone);
	$input_label$1($scope, input.label);
};
enableBranchesPersisted();
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge.marko", $template$4, $walks$4, $setup$4, $input$3);

// tags/card.marko
const $template$3 = /*@__PURE__*/ ((_w0) => `<section class=card>${_w0}<h2> </h2><p> </p></section>`)($template$4);
const $walks$3 = /*@__PURE__*/ ((_w0) => `D/${_w0}&D l D m`)($walks$4);
const $setup$3 = () => {};
const $input_heading$1 = ($scope, input_heading) => {
	$input_label$1($scope["#childScope/0"], input_heading);
	_text($scope["#text/1"], input_heading);
};
const $input_tone$1 = ($scope, input_tone) => $input_tone$2($scope["#childScope/0"], input_tone);
const $input_flagged$1 = ($scope, input_flagged) => _attr_class($scope["#p/2"], ["meta", input_flagged && "flagged"]);
const $input_meta$1 = ($scope, input_meta) => _text($scope["#text/3"], input_meta);
const $input$2 = ($scope, input) => {
	$input_heading$1($scope, input.heading);
	$input_tone$1($scope, input.tone);
	$input_flagged$1($scope, input.flagged);
	$input_meta$1($scope, input.meta);
};
enableBranchesPersisted();
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$3, $walks$3, $setup$3, $input$2);

// tags/counter.marko
const $template$2 = "<button class=counter> </button>";
const $walks$2 = " D l";
const $n = /*@__PURE__*/ _let_persisted("n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script$1 = _script_update("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup$2($scope) {
	$n($scope, 0);
	$setup__script$1($scope);
}
enableBranchesPersisted();
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$2, $walks$2, $setup$2);

// tags/widget.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<div class=widget><em> </em>${_w0}</div>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)($walks$2);
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
function $setup$1($scope) {
	$setup$2($scope["#childScope/1"]);
}
const $input$1 = ($scope, input) => $input_label($scope, input.label);
enableBranchesPersisted();
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button class=bump>clicked <!></button>${_w0}${_w1}`)($template$3, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` Db%l/${_w0}&/${_w1}&`)($walks$3, $walks$1);
const $count = /*@__PURE__*/ _let_persisted("count/11", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/3"]);
	$count($scope, 0);
	$setup__script($scope);
}
const $input_heading = ($scope, input_heading) => $input_heading$1($scope["#childScope/2"], input_heading);
const $input_tone = ($scope, input_tone) => $input_tone$1($scope["#childScope/2"], input_tone);
const $input_meta = ($scope, input_meta) => $input_meta$1($scope["#childScope/2"], input_meta);
const $input_flagged = ($scope, input_flagged) => $input_flagged$1($scope["#childScope/2"], input_flagged);
const $input_widget = ($scope, input_widget) => $input_label($scope["#childScope/3"], input_widget);
const $input = ($scope, input) => {
	$input_heading($scope, input.heading);
	$input_tone($scope, input.tone);
	$input_meta($scope, input.meta);
	$input_flagged($scope, input.flagged);
	$input_widget($scope, input.widget);
};
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
