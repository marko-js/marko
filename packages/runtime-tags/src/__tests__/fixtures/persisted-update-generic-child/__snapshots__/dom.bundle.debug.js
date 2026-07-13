// tags/toggle.marko.update.mjs
const $on_seed = _update_signal("__tests__/tags/toggle.marko_0_on/var");
const $update$1 = (patch, live) => {
	_update_pair(patch, live);
	if ("on" in patch) _update_seed(live, $on_seed, patch["on"]);
	_update_scope(patch, live);
};
var toggle_marko_update_default = _resume("__tests__/tags/toggle.marko_0_update", $update$1);

// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	_update_scope(patch, live);
	if ("#childScope/4" in patch) toggle_marko_update_default(patch["#childScope/4"], live["#childScope/4"]);
};
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// tags/badge.marko
const $template$3 = "<span> </span>";
const $walks$3 = " D l";
const $setup$3 = () => {};
const $input_tone$1 = ($scope, input_tone) => {
	_attr_class($scope["#span/0"], ["badge", input_tone]);
	_attr($scope["#span/0"], "title", `tone: ${input_tone}`);
};
const $input_label$1 = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input$3 = ($scope, input) => {
	$input_tone$1($scope, input.tone);
	$input_label$1($scope, input.label);
};
enableBranchesPersisted();
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge.marko", $template$3, $walks$3, $setup$3, $input$3);

// tags/panel.marko
const $template$2 = "<details><summary> </summary><p> </p></details>";
const $walks$2 = " E lD m";
const $setup$2 = () => {};
const $input_expanded = /*@__PURE__*/ _const_persisted("input_expanded", ($scope) => _attr_details_or_dialog_open_default($scope, "#details/0", $scope.input_expanded));
const $input_title = ($scope, input_title) => _text($scope["#text/1"], input_title);
const $input_body = ($scope, input_body) => _text($scope["#text/2"], input_body);
const $input$2 = ($scope, input) => {
	$input_expanded($scope, input.expanded);
	$input_title($scope, input.title);
	$input_body($scope, input.body);
};
enableBranchesPersisted();
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/toggle.marko
const $template$1 = "<button class=toggle> </button><em> </em>";
const $walks$1 = " D lD l";
const $on = /*@__PURE__*/ _let_persisted("on/6", ($scope) => _text($scope["#text/1"], $scope.on ? "on" : "off"));
const $setup__script$1 = _script_update("__tests__/tags/toggle.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup$1($scope) {
	$on($scope, false);
	$setup__script$1($scope);
}
const $input_name$1 = ($scope, input_name) => _text($scope["#text/2"], input_name);
const $input$1 = ($scope, input) => $input_name$1($scope, input.name);
enableBranchesPersisted();
var toggle_default = /*@__PURE__*/ _template("__tests__/tags/toggle.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `<button>clicked <!></button>${_w0}${_w1}${_w2}`)($template$3, $template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => ` Db%l/${_w0}&/${_w1}&/${_w2}&`)($walks$3, $walks$2, $walks$1);
const $count = /*@__PURE__*/ _let_persisted("count/14", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/4"]);
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/2"], input_label);
const $input_tone = ($scope, input_tone) => $input_tone$1($scope["#childScope/2"], input_tone);
const $input_panel_title = ($scope, input_panel_title) => $input_title($scope["#childScope/3"], input_panel_title);
const $input_panel_body = ($scope, input_panel_body) => $input_body($scope["#childScope/3"], input_panel_body);
const $input_panel_expanded = ($scope, input_panel_expanded) => $input_expanded($scope["#childScope/3"], input_panel_expanded);
const $input_name = ($scope, input_name) => $input_name$1($scope["#childScope/4"], input_name);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_tone($scope, input.tone);
	$input_panel($scope, input.panel);
	$input_name($scope, input.name);
};
const $input_panel = ($scope, input_panel) => {
	$input_panel_title($scope, input_panel?.title);
	$input_panel_body($scope, input_panel?.body);
	$input_panel_expanded($scope, input_panel?.expanded);
};
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
