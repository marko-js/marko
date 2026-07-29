// template.marko.persisted.mjs
const $for_content__walks = "E l D l b l", $for_content__template = "<li class=thread><h3 class=title> </h3><button class=collapse> </button><input class=draft><ol class=replies></ol></li>", $for_content3__walks = "D b D m", $for_content3__template = "<li class=tag> <button class=star> </button></li>";
const $template = "<button class=count>clicked <!></button><ul class=threads></ul><ul class=tags></ul>";
const $walks = " Db%l b b";
const $for_content3__starred = _var_resume("a10", /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.c, $scope.f ? "★" : "☆")));
const $for_content3__setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$for_content3__starred($scope, !$scope.f);
}));
const $for_content__draft = _var_resume("a11", /*@__PURE__*/ _let_persisted(9, ($scope) => _attr_input_value($scope, "d", $scope.j, $valueChange($scope))));
const $for_content__collapsed = _var_resume("a12", /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k ? "expand" : "collapse")));
const $for_content__setup__script = _script_shared(($scope) => {
	_on($scope.b, "click", function() {
		$for_content__collapsed($scope, !$scope.k);
	});
	_attr_input_value_script($scope, "d");
});
const $count = _var_resume("a13", /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.b, $scope.i)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + 1);
}));
function $valueChange($scope) {
	return (_new_draft) => {
		$for_content__draft($scope, _new_draft);
	};
}
_static_shells({
	"a6": [$for_content3__template, $for_content3__walks],
	"a8": [$for_content3__template, $for_content3__walks],
	"a4": [$for_content__template, $for_content__walks],
	"a9": [$for_content__template, $for_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $starred_seed = _update_signal("a10");
const $for_content3_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qc": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("c"))
});
const $draft_seed = _update_signal("a11");
const $collapsed_seed = _update_signal("a12");
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qc": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("c"))
});
const $count_seed = _update_signal("a13");
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content__update($p, $l), "a4");
const $for_update2 = _update_for_keyed(3, ($p2, $l2) => $for_content3__update($p2, $l2), "a6");
const $for_content3__construct = ($scope) => {
	_construct_effect($scope, $for_content3__setup__script);
};
const $for_content3__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("f" in $patch) _update_seed($live, $starred_seed, $patch["f"]);
	$for_content3_holes($patch, $live);
};
const $for_content__construct = ($scope) => {
	_attr_input_value($scope, "d", $scope.j, $scope["Ed"]);
	_construct_effect($scope, $for_content__setup__script);
};
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("j" in $patch) _update_seed($live, $draft_seed, $patch["j"]);
	if ("k" in $patch) _update_seed($live, $collapsed_seed, $patch["k"]);
	$for_content_holes($patch, $live);
	if ("De" in $patch) _update_region("e")($patch, $live);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.i);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("i" in $patch) _update_seed($live, $count_seed, $patch["i"]);
	if ("Ac" in $patch) $for_update($live, [$patch["Ac"], "M"]);
	if ("Ad" in $patch) $for_update2($live, [$patch["Ad"], "M"]);
};
_construct("a6", $for_content3__construct);
_construct("a4", $for_content__construct);
_construct("a1", $construct);
_update_content("a6", $for_content3__update);
const $noop_update = () => {};
_update_content("a14", $noop_update);
_update_content("a4", $for_content__update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $for_content3__starred = /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.c, $scope.f ? "★" : "☆"));
const $for_content3__setup__script = _script_update("a5", ($scope) => _on($scope.b, "click", function() {
	$for_content3__starred($scope, !$scope.f);
}));
const $for_content__draft = /*@__PURE__*/ _let_persisted(9, ($scope) => _attr_input_value($scope, "d", $scope.j, $valueChange($scope)));
const $for_content__collapsed = /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k ? "expand" : "collapse"));
const $for_content__setup__script = _script_update("a3", ($scope) => {
	_on($scope.b, "click", function() {
		$for_content__collapsed($scope, !$scope.k);
	});
	_attr_input_value_script($scope, "d");
});
const $count = /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script_update("a7", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + 1);
}));
function $valueChange($scope) {
	return (_new_draft) => {
		$for_content__draft($scope, _new_draft);
	};
}
_resume("a0", $valueChange);
