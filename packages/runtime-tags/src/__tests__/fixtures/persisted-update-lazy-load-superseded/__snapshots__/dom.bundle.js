// template.marko.persisted.mjs
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $count = _var_resume("a6", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
_static_shells({
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a6");
const $construct = ($scope) => {
	_text($scope.b, $scope.d);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $count_seed, $patch["d"]);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a4", $noop_update);
_update_content("a3", $noop_update);
_update_content("a2", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));

// tags/rejecting.marko.persisted.mjs
const $template = "<button class=lazy>rejecting <!></button>";
const $walks = "Db%l";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var rejecting_marko_persisted_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);
_static_shells({ "b0": [$template, $walks] });
const $update2 = () => {};
const $merge = _resume("b0", $update2);
_update_content("b", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/rejecting.marko
const $template = "<button class=lazy>rejecting <!></button>";
const $walks = "Db%l";
const $setup = () => {};
if (typeof window !== "undefined") await rejectAfter(/* @__PURE__ */ new Error("stale lazy rejection"));
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var rejecting_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// tags/resolving.marko.persisted.mjs
const $template = "<button class=lazy>resolving <!></button>";
const $walks = "Db%l";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var resolving_marko_persisted_default = /*@__PURE__*/ _template("c", $template, $walks, $setup, $input);
_static_shells({ "c0": [$template, $walks] });
const $update2 = () => {};
const $merge = _resume("c0", $update2);
_update_content("c", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/resolving.marko
const $template = "<button class=lazy>resolving <!></button>";
const $walks = "Db%l";
const $setup = () => {};
if (typeof window !== "undefined") await resolveAfter(0);
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var resolving_default = /*@__PURE__*/ _template("c", $template, $walks, $setup, $input);
