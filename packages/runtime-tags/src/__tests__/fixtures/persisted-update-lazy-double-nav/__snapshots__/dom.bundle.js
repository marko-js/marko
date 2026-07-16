// template.marko
const $count = /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k));
const $setup__script = _script_update("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));

// template.marko.persisted.mjs
const $count = _var_resume("a2", /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));
const $count_seed = _update_signal("a2");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
_load_ready("_b", /*@__PURE__*/ _load_idle_trigger()(() => import("./v:panel.marko.setup.mjs")));
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("k" in _patch) _update_seed(_live, $count_seed, _patch["k"]);
	$_holes(_patch, _live);
	if ("e" in _patch) _update_load(_patch["e"], _live["e"], "b2");
};
const _merge = _resume("a0", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// tags/panel.marko.persisted.mjs
const $template = "<button class=panel><!> hit <!></button><!><!>";
const $walks = " D%c%l%c";
const $hits = _var_resume("b4", /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.c, $scope.i)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$hits($scope, $scope.i + 1);
}));
function $setup($scope) {
	$hits($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope.b, input_label);
const $if = /*@__PURE__*/ _if(3, "<p class=warn>heads up</p>", "b");
const $input_warn = ($scope, input_warn) => {
	if (!updating) $if($scope, input_warn ? 0 : 1);
};
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_warn($scope, input.warn);
};
var panel_marko_persisted_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);
const $hits_seed = _update_signal("b4");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("i" in _patch) _update_seed(_live, $hits_seed, _patch["i"]);
	$_holes(_patch, _live);
	if ("Dd" in _patch) _update_if(_patch, _live, "Dd", "Ad");
};
const _merge = _resume("b2", $update2);
_update_content("b", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// tags/panel.marko
const $template = "<button class=panel><!> hit <!></button><!><!>";
const $walks = " D%c%l%c";
const $hits = /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.c, $scope.i));
const $setup__script = _script_update("b3", ($scope) => _on($scope.a, "click", function() {
	$hits($scope, $scope.i + 1);
}));
function $setup($scope) {
	$hits($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope.b, input_label);
const $if = /*@__PURE__*/ _if(3, "<p class=warn>heads up</p>", "b");
const $input_warn = ($scope, input_warn) => {
	if (!updating) $if($scope, input_warn ? 0 : 1);
};
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_warn($scope, input.warn);
};
var panel_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// tags/v:panel.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
