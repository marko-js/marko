// template.marko.persisted.mjs
const $template = "<!><!><!>";
const $walks = "b%c";
const $else_content__input_title = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.input_title);
	}
});
const $else_content__setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope._, $scope._.count + 1);
}));
const $else_content__setup = ($scope) => {
	if (!updating) $else_content__input_title._($scope);
	$else_content__count._($scope);
	$else_content__setup__script($scope);
};
const $else_content__count = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => _text($scope["#text/2"], $scope._.count));
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/5", $else_content__count));
function $setup($scope) {
	$count($scope, 0);
}
const $if = /*@__PURE__*/ _if("#text/0", "<h2>Something went wrong</h2>", "b", 0, "<h1> </h1><button> </button>", "D l D l", $else_content__setup);
const $input_err = ($scope, input_err) => {
	if (!updating) $if($scope, input_err ? 0 : 1);
};
const $input = ($scope, input) => {
	$input_err($scope, input.err);
	$input_title($scope, input.title);
};
const $input_title = /*@__PURE__*/ _const_persisted("input_title", $else_content__input_title);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
const $else_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $else_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$else_content_holes($patch, $live);
};
const $update2 = ($patch, $live) => {
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_title" in $patch) $live["input_title"] = $patch["input_title"];
	if ("ConditionalRenderer:#text/0" in $patch) _update_if($patch, $live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0", [0, $else_content__update], ["__tests__/template.marko_2_update", "__tests__/template.marko_1_update"]);
};
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $else_content__input_title = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.input_title);
	}
});
const $else_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope._, $scope._.count + 1);
}));
const $else_content__setup = ($scope) => {
	if (!updating) $else_content__input_title._($scope);
	$else_content__count._($scope);
	$else_content__setup__script($scope);
};
const $else_content__count = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => _text($scope["#text/2"], $scope._.count));
const $count = /*@__PURE__*/ _let_persisted("count/5", $else_content__count);
function $setup($scope) {
	$count($scope, 0);
}
const $if = /*@__PURE__*/ _if("#text/0", "<h2>Something went wrong</h2>", "b", 0, "<h1> </h1><button> </button>", "D l D l", $else_content__setup);
const $input_err = ($scope, input_err) => {
	if (!updating) $if($scope, input_err ? 0 : 1);
};
const $input = ($scope, input) => {
	$input_err($scope, input.err);
	$input_title($scope, input.title);
};
const $input_title = /*@__PURE__*/ _const_persisted("input_title", $else_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
