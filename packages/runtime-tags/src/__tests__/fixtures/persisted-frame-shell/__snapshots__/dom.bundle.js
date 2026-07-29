// template.marko.persisted.mjs
const $if_content__walks = " Db%l", $if_content__template = "<button class=detail>detail <!></button>";
const $if_content__count = /*@__PURE__*/ _if_closure(3, 0, ($scope) => _text($scope.b, $scope._.h));
const $if_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope._, $scope._.h + 2);
}));
const $count = _var_resume("a7", /*@__PURE__*/ _let_persisted(7, ($scope) => {
	_text($scope.c, $scope.h);
	$if_content__count($scope);
}));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.h + 1);
}));
_static_shells({
	"a3": [$if_content__template, $if_content__walks],
	"a6": [$if_content__template, $if_content__walks]
});
const $count_seed = _update_signal("a7");
const $_holes = /*@__PURE__*/ _update_scopes({ "NtextContent:a": /*@__PURE__*/ _update_attr("a", _text_content) });
const $if_content__construct = ($scope) => {
	_text($scope.b, $scope._.h);
	_construct_effect($scope, $if_content__setup__script);
};
const $construct = ($scope) => {
	_text($scope.c, $scope.h);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $count_seed, $patch["h"]);
	$_holes($patch, $live);
	if ("Dd" in $patch) _update_if($patch, $live, "Dd", "Ad", [_update_pair], ["a3"]);
};
_construct("a3", $if_content__construct);
_construct("a1", $construct);
_update_content("a3", _update_pair);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure(3, 0, ($scope) => _text($scope.b, $scope._.h));
const $if_content__setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, $scope._.h + 2);
}));
const $count = /*@__PURE__*/ _let_persisted(7, ($scope) => {
	_text($scope.c, $scope.h);
	$if_content__count($scope);
});
const $setup__script = _script_update("a5", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.h + 1);
}));
