// tags/frame-doc.marko.persisted.mjs
const $template$1 = "";
const $walks$1 = "";
const $n = _var_resume("__tests__/tags/frame-doc.marko_0_n/var", /*@__PURE__*/ _let_persisted("n/2", ($scope) => _text($scope["#text/1"], $scope.n)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup$1($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var frame_doc_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/frame-doc.marko", "", "", $setup$1);
const $n_seed = _update_signal("__tests__/tags/frame-doc.marko_0_n/var");
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.n);
	_construct_effect($scope, $setup__script);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $n_seed, $patch["n"]);
};
_construct("__tests__/tags/frame-doc.marko_0_update", $construct);
const $merge$1 = _resume("__tests__/tags/frame-doc.marko_0_update", $update2$1);
_update_content("__tests__/tags/frame-doc.marko", $merge$1, $construct);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!><span class=sibling>VISIBLE</span>`)(""), /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)(""), $if_content__setup);
const $input_show = ($scope, input_show) => {
	if (!updating) $if($scope, input_show ? 0 : 1);
};
const $input = ($scope, input) => $input_show($scope, input.show);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
_static_shells({
	"__tests__/template.marko_0_update": [$template, "b%c"],
	"__tests__/template.marko": [$template, "b%c"]
});
const $if_content__construct = ($scope) => {
	_construct_child($scope, "#childScope/0", "__tests__/tags/frame-doc.marko_0_update");
};
const $if_content__update = ($patch, $live) => {
	if ("#childScope/0" in $patch) $merge$1($patch["#childScope/0"], $live["#childScope/0"]);
};
const $update2 = ($patch, $live) => {
	if ("ConditionalRenderer:#text/0" in $patch) _update_if($patch, $live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0", [$if_content__update], ["__tests__/template.marko_1_update"]);
};
_construct("__tests__/template.marko_1_update", $if_content__construct);
_update_content("__tests__/template.marko_1_update", $if_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/frame-doc.marko
const $template$1 = "<html lang=en><head><title>frame</title></head><body><header class=frame>STATIC FRAME</header><button class=frame-count> </button></body></html>";
const $walks$1 = "DbDb D n";
const $n = /*@__PURE__*/ _let_persisted("n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script_update("__tests__/tags/frame-doc.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup$1($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var frame_doc_default = /*@__PURE__*/ _template("__tests__/tags/frame-doc.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!><span class=sibling>VISIBLE</span>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => {
	if (!updating) $if($scope, input_show ? 0 : 1);
};
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
