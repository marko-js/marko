// template.marko.persisted.mjs
const $template = "<button> </button><button class=log>log <!></button>";
const $walks = " D l Db%l";
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/8", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, $scope.count + 1);
	});
	_on($scope["#button/2"], "click", function() {
		console.log($scope.input_detail);
	});
});
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/3"], input_label);
const $input = ($scope, input) => {
	$input_detail($scope, input.detail);
	$input_label($scope, input.label);
};
const $input_detail = _var_resume("__tests__/template.marko_0_input_detail/var", /*@__PURE__*/ _const_persisted("input_detail"));
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $input_detail_update = _update_signal("__tests__/template.marko_0_input_detail/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/3": /*@__PURE__*/ _update_text("#text/3") });
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_detail" in $patch) $input_detail_update($live, $patch["input_detail"]);
	$_holes($patch, $live);
};
_construct("__tests__/template.marko_0_update", $construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button> </button><button class=log>log <!></button>";
const $walks = " D l Db%l";
const $count = /*@__PURE__*/ _let_persisted("count/8", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, $scope.count + 1);
	});
	_on($scope["#button/2"], "click", function() {
		console.log($scope.input_detail);
	});
});
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/3"], input_label);
const $input = ($scope, input) => {
	$input_detail($scope, input.detail);
	$input_label($scope, input.label);
};
const $input_detail = /*@__PURE__*/ _const_persisted("input_detail");
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
