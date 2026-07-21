// tags/child.marko.persisted.mjs
const $input_class = ($scope, input_class) => _attr_class($scope.a, input_class);
const $input_data_request = ($scope, input_data_request) => _attr($scope.a, "data-request", input_data_request);
const $merge$1 = _resume("b0", /* @__PURE__ */ _update_scopes({
	"Nclass:a": /*@__PURE__*/ _update_attr("a", _attr_class),
	"Ndata-request:a": /*@__PURE__*/ _update_named_attr("a", "data-request")
}));
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $input_title__OR__attrs__script = _script_shared(($scope) => {
	_attrs_script($scope, "c");
	_attrs_script($scope, "d");
});
const $input_title__OR__attrs = /*@__PURE__*/ _or(9, ($scope) => {
	_attrs($scope, "c", {
		"data-request": $scope.h,
		...$scope.i
	});
	_attrs($scope, "d", {
		"data-request": $scope.h,
		...$scope.i
	});
	const $child_input_spread = {
		"data-request": $scope.h,
		...$scope.i
	};
	$input_class($scope.e, $child_input_spread.class);
	$input_data_request($scope.e, $child_input_spread["data-request"]);
	$input_title__OR__attrs__script($scope);
});
const $attrs = _var_resume("a3", /*@__PURE__*/ _let_persisted(8, $input_title__OR__attrs));
const $count = _var_resume("a4", /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.b, $scope.k)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.k + 1);
}));
const $input_title = _var_resume("a5", /*@__PURE__*/ _const_persisted(7, $input_title__OR__attrs));
const $attrs_seed = _update_signal("a3");
const $count_seed = _update_signal("a4");
const $input_title_update = _update_signal("a5");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("i" in $patch) _update_seed($live, $attrs_seed, $patch["i"]);
	if ("k" in $patch) _update_seed($live, $count_seed, $patch["k"]);
	if ("h" in $patch) $input_title_update($live, $patch["h"]);
	if ("e" in $patch) $merge$1($patch["e"], $live["e"]);
};
const $merge = _resume("a0", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $input_title__OR__attrs__script = _script_update("a1", ($scope) => {
	_attrs_script($scope, "c");
	_attrs_script($scope, "d");
});
const $count = /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.b, $scope.k));
const $setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.k + 1);
}));
