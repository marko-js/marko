// template.marko.persisted.mjs
const $Child_content__walks = " D%c%l", $Child_content__template = "<button class=child><!> <!></button>", $if_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Child_content__walks), $if_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Child_content__template);
const $template = "<!><!><!>";
const $walks = "b%c";
const $Child_content__n = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.c, $scope._.e));
const $Child_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$n($scope._, $scope._.e + 1);
}));
const $n = _var_resume("a8", /*@__PURE__*/ _let_persisted(4, /* @__PURE__ */ _closure($Child_content__n)));
_static_shells({
	"a4": [$if_content__template, $if_content__walks],
	"a6": [$if_content__template, $if_content__walks],
	"a7": [$Child_content__template, $Child_content__walks],
	"a2": [$Child_content__template, $Child_content__walks],
	"a1": [$template, "b%c"],
	"a": [$template, "b%c"]
});
const $Child_content_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $n_seed = _update_signal("a8");
const $if_content__construct = ($scope) => {
	_construct_child($scope, "a", "a2", $scope._);
};
const $if_content__update = ($patch, $live) => {
	if ("a" in $patch) _update_child($patch["a"], $live["a"], "a2");
};
const $Child_content__construct = ($scope) => {
	_text($scope.c, $scope._.e);
	_construct_closure($scope, $scope._, $Child_content__n);
	_construct_effect($scope, $Child_content__setup__script);
};
const $Child_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$Child_content_holes($patch, $live);
};
const $update2 = ($patch, $live) => {
	if ("e" in $patch) _update_seed($live, $n_seed, $patch["e"]);
	if ("Da" in $patch) _update_if($patch, $live, "Da", "Aa", [$if_content__update], ["a4"]);
};
_construct("a4", $if_content__construct);
_construct("a7", $Child_content__construct);
_update_content("a4", $if_content__update);
_update_content("a2", $Child_content__update, $Child_content__construct);
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $Child_content__n = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.c, $scope._.e));
const $Child_content__setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$n($scope._, $scope._.e + 1);
}));
const $n = /*@__PURE__*/ _let_persisted(4, /* @__PURE__ */ _closure($Child_content__n));
