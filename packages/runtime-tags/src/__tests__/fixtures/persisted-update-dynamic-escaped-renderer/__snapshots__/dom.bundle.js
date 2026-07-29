// tags/stage.marko.persisted.mjs
const $template$1 = "<section class=stage><h2 class=headline><!> on stage</h2><!></section>";
const $walks$1 = "E%l%l";
_static_shells({
	"c1": [$template$1, $walks$1],
	"c": [$template$1, $walks$1]
});
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $update2$1 = ($patch, $live) => {
	if ("e" in $patch) $live["e"] = $patch["e"];
	if ("g" in $patch) $live["g"] = $patch["g"];
	$_holes($patch, $live);
	if ("Db" in $patch || "Ab" in $patch) _update_dynamic($patch, $live, "Db", "Ab");
};
const $merge$1 = _resume("c1", $update2$1);
_update_content("c", $merge$1);

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)($walks$1);
const $count = _var_resume("a2", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
_static_shells({
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a2");
const $construct = ($scope) => {
	_text($scope.b, $scope.h);
	_construct_child($scope, "c", "c1");
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $count_seed, $patch["h"]);
	if ("c" in $patch) $merge$1($patch["c"], $live["c"]);
};
_construct("a0", $construct);
_update_loader("b", () => import("./lineup.marko.persisted.mjs"));
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));

// tags/lineup.marko.persisted.mjs
const $template = "<ol class=lineup></ol>";
const $walks = " b";
const $setup = () => {};
const $for_content__name = ($scope, name) => _text($scope.a, name);
const $for_content__$params = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of(0, "<li> </li>", "D ", 0, $for_content__$params);
const $input_performers = ($scope, input_performers) => $for($scope, [input_performers, function(name) {
	return name;
}]);
const $input = ($scope, input) => $input_performers($scope, input.performers);
var lineup_marko_persisted_default = /*@__PURE__*/ _template("b", $template, " b", $setup, $input);
_static_shells({ "b0": [$template, " b"] });
const $update2 = () => {};
const $noop_update = () => {};
_update_content("b1", $noop_update);
const $merge = _resume("b0", $update2);
_update_content("b", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}
