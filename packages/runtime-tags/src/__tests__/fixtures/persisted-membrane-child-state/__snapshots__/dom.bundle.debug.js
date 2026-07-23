// tags/static-bit.marko.persisted.mjs
const $template$2 = "<span class=static>static</span>";
const $walks$2 = "b";
const $setup$2 = () => {};
var static_bit_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/static-bit.marko", $template$2, "b", $setup$2);
const $update2$2 = () => {};
const $merge$2 = _resume("__tests__/tags/static-bit.marko_0_update", $update2$2);
_update_content("__tests__/tags/static-bit.marko", $merge$2);
function $patch2$2($fail) {
	return patch($merge$2, $fail);
}

// tags/stateful-widget.marko.persisted.mjs
const $template$1 = /*@__PURE__*/ ((_w0) => `<b class=widget>count <!></b>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `Db%l/${_w0}&`)("b");
const $count__script = _script_shared(($scope) => window.widgetBump = () => $count($scope, $scope.count + 1) - 1);
const $count = _var_resume("__tests__/tags/stateful-widget.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/2", ($scope) => {
	_text($scope["#text/0"], $scope.count);
	$count__script($scope);
}));
function $setup$1($scope) {
	$count($scope, 0);
}
var stateful_widget_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/stateful-widget.marko", $template$1, $walks$1, $setup$1);
const $count_seed = _update_signal("__tests__/tags/stateful-widget.marko_0_count/var");
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("ConditionalRenderer:#childScope/1" in $patch) _update_region("#childScope/1")($patch, $live);
};
const $merge$1 = _resume("__tests__/tags/stateful-widget.marko_0_update", $update2$1);
_update_content("__tests__/tags/stateful-widget.marko", $merge$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $update2 = ($patch, $live) => {
	if ("#childScope/0" in $patch) $merge$1($patch["#childScope/0"], $live["#childScope/0"]);
};
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/static-bit.marko
const $template$2 = "<span class=static>static</span>";
const $walks$2 = "b";
const $setup$2 = () => {};
var static_bit_default = /*@__PURE__*/ _template("__tests__/tags/static-bit.marko", $template$2, "b", $setup$2);

// tags/stateful-widget.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<b class=widget>count <!></b>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `Db%l/${_w0}&`)("b");
const $count__script = _script_update("__tests__/tags/stateful-widget.marko_0_count", ($scope) => window.widgetBump = () => $count($scope, $scope.count + 1) - 1);
const $count = /*@__PURE__*/ _let_persisted("count/2", ($scope) => {
	_text($scope["#text/0"], $scope.count);
	$count__script($scope);
});
function $setup$1($scope) {
	$count($scope, 0);
}
var stateful_widget_default = /*@__PURE__*/ _template("__tests__/tags/stateful-widget.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
