// template.marko.persisted.mjs
const $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $for_content__walks = "E l D m", $for_content__template = "<li class=card><span class=name> </span><button class=pin> </button></li>", $await_content__walks = "D%c%l", $await_content__template = "<p class=note><!> <!></p>";
const $template = "<button class=count>clicked <!></button><ul class=cards></ul><!><!>";
const $walks = " Db%l b%c";
_enable_catch();
_var_resume("a11", /*@__PURE__*/ _let_persisted(7, ($scope) => $for_content__opts_label($scope, $scope.h?.label)));
const $for_content__opts_label__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$for_content__pinned($scope, !!$scope.i && !$scope.j);
}));
const $for_content__opts_label = _var_resume("a12", /*@__PURE__*/ _const_persisted(8, $for_content__opts_label__script));
const $for_content__pinned = _var_resume("a13", /*@__PURE__*/ _let_persisted(9, ($scope) => _text($scope.c, $scope.j ? "pinned" : "pin")));
const $count = _var_resume("a14", /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.b, $scope.i)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + 1);
}));
_static_shells({
	"a4": [$await_content__template, $await_content__walks],
	"a9": [$await_content__template, $await_content__walks],
	"a3": [$for_content__template, $for_content__walks],
	"a10": [$for_content__template, $for_content__walks],
	"a7": [$try_content__template, $try_content__walks],
	"a6": [$try_content__template, $try_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $opts_seed = _update_signal("a11");
const $opts_label_seed = _update_signal("a12");
const $pinned_seed = _update_signal("a13");
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qc": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("c"))
});
const $count_seed = _update_signal("a14");
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content__update($p, $l), "a3");
const $for_content__construct = ($scope) => {
	_construct_effect($scope, $for_content__opts_label__script);
};
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $opts_seed, $patch["h"]);
	if ("i" in $patch) _update_seed($live, $opts_label_seed, $patch["i"]);
	if ("j" in $patch) _update_seed($live, $pinned_seed, $patch["j"]);
	$for_content_holes($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a4");
};
const $construct = ($scope) => {
	_text($scope.b, $scope.i);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("i" in $patch) _update_seed($live, $count_seed, $patch["i"]);
	if ("Ac" in $patch) $for_update($live, [$patch["Ac"], "M"]);
	if ("Ad" in $patch) _update_branch($patch, $live, "d", $try_content__update, "a7", "a5");
};
_construct("a3", $for_content__construct);
_construct("a1", $construct);
_update_content("a4", $await_content_holes);
const $noop_update = () => {};
_update_content("a5", $noop_update);
_update_content("a3", $for_content__update);
_update_content("a7", $try_content__update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a5", "<p class=loading>loading…</p>");
const $for_content__opts_label = /*@__PURE__*/ _const_persisted(8, _script_update("a2", ($scope) => _on($scope.b, "click", function() {
	$for_content__pinned($scope, !!$scope.i && !$scope.j);
})));
const $for_content__pinned = /*@__PURE__*/ _let_persisted(9, ($scope) => _text($scope.c, $scope.j ? "pinned" : "pin"));
const $count = /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script_update("a8", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + 1);
}));
