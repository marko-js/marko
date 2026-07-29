// template.marko.persisted.mjs
const $template = "<button class=count>clicked <!></button><select class=sort></select>";
const $walks = " Db%l b";
const $for_content__opt_id = ($scope, opt_id) => _attr($scope["#option/0"], "value", opt_id);
const $for_content__opt_label = ($scope, opt_label) => _text($scope["#text/1"], opt_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__opt_id($scope, $params2[0]?.id);
	$for_content__opt_label($scope, $params2[0]?.label);
};
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/7", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_sort = /*@__PURE__*/ _const_persisted("input_sort", ($scope) => _attr_select_value_default($scope, "#select/2", $scope.input_sort));
const $for = 0;
const $input_options = ($scope, input_options) => {
	if (!updating) $for($scope, [input_options, function(opt) {
		return opt.key;
	}]);
};
const $input = ($scope, input) => {
	$input_sort($scope, input.sort);
	$input_options($scope, input.options);
};
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchAttr:value:#select/2": /*@__PURE__*/ _update_controllable("#select/2", _update_select_value) });
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	$_holes($patch, $live);
	if ("ConditionalRenderer:#select/2" in $patch) _update_region("#select/2")($patch, $live);
};
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_1_update", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=count>clicked <!></button><select class=sort></select>";
const $walks = " Db%l b";
const $for_content__opt_id = ($scope, opt_id) => _attr($scope["#option/0"], "value", opt_id);
const $for_content__opt_label = ($scope, opt_label) => _text($scope["#text/1"], opt_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__opt_id($scope, $params2[0]?.id);
	$for_content__opt_label($scope, $params2[0]?.label);
};
const $count = /*@__PURE__*/ _let_persisted("count/7", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_sort = /*@__PURE__*/ _const_persisted("input_sort", ($scope) => _attr_select_value_default($scope, "#select/2", $scope.input_sort));
const $for = /*@__PURE__*/ _for_of("#select/2", "<option> </option>", " D ", 0, $for_content__$params);
const $input_options = ($scope, input_options) => {
	if (!updating) $for($scope, [input_options, function(opt) {
		return opt.key;
	}]);
};
const $input = ($scope, input) => {
	$input_sort($scope, input.sort);
	$input_options($scope, input.options);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
