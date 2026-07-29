// tags/child.marko.persisted.mjs
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $input_class = ($scope, input_class) => _attr_class($scope.a, input_class);
const $input_data_request = ($scope, input_data_request) => _attr($scope.a, "data-request", input_data_request);
_static_shells({ "b0": [$template$1, " b"] });
const $update2$1 = () => {};
const $merge$1 = _resume("b0", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<button>clicked <!></button><input><div>dynamic</div>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l b b/${_w0}&%b`)(" b");
_enable_controllable_input();
_enable_controllable();
const $input_title__OR__attrs__script = _script_shared(($scope) => {
	_attrs_script($scope, "c");
	_attrs_script($scope, "d");
});
const $input_title__OR__attrs = /*@__PURE__*/ _or(10, ($scope) => {
	_attrs($scope, "c", {
		"data-request": $scope.i,
		...$scope.j
	}, _controllable_input);
	_attrs($scope, "d", {
		"data-request": $scope.i,
		...$scope.j
	});
	const $child_input_spread = {
		"data-request": $scope.i,
		...$scope.j
	};
	$input_class($scope.e, $child_input_spread.class);
	$input_data_request($scope.e, $child_input_spread["data-request"]);
	$input_title__OR__attrs__script($scope);
});
const $attrs = _var_resume("a4", /*@__PURE__*/ _let_persisted(9, $input_title__OR__attrs));
const $count = _var_resume("a5", /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
const $input_title = _var_resume("a6", /*@__PURE__*/ _const_persisted(8, $input_title__OR__attrs));
_static_shells({
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $attrs_seed = _update_signal("a4");
const $count_seed = _update_signal("a5");
const $input_title_update = _update_signal("a6");
const $construct = ($scope) => {
	_text($scope.b, $scope.l);
	_construct_effect($scope, $input_title__OR__attrs__script);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("j" in $patch) _update_seed($live, $attrs_seed, $patch["j"]);
	if ("l" in $patch) _update_seed($live, $count_seed, $patch["l"]);
	if ("i" in $patch) $input_title_update($live, $patch["i"]);
	if ("Df" in $patch) _update_region("f")($patch, $live);
};
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_controllable_input();
_enable_controllable();
const $input_title__OR__attrs__script = _script_update("a2", ($scope) => {
	_attrs_script($scope, "c");
	_attrs_script($scope, "d");
});
const $count = /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l));
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
