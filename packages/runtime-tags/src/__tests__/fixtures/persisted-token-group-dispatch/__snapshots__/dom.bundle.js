// template.marko.persisted.mjs
const $if_content__walks = " Db%lD l", $if_content__template = "<button class=tap>tap <!></button><p class=info> </p>", $if_content2__walks = " Db%lD l", $if_content2__template = "<button class=bump>bump <!></button><span class=badge> </span>";
const $template = "<button class=count>clicked <!></button><!><!><!>";
const $walks = " Db%l%b%c";
const $if_content2__m = _var_resume("a12", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $if_content2__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$if_content2__m($scope, $scope.d + 1);
}));
const $if_content__n = _var_resume("a13", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $if_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$if_content__n($scope, $scope.d + 1);
}));
const $count = _var_resume("a14", /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
_static_shells({
	"a7": [$if_content2__template, $if_content2__walks],
	"a10": [$if_content2__template, $if_content2__walks],
	"a4": [$if_content__template, $if_content__walks],
	"a11": [$if_content__template, $if_content__walks],
	"a2": [$template, $walks],
	"a": [$template, $walks]
});
const $m_seed = _update_signal("a12");
const $if_content2_holes = /*@__PURE__*/ _update_scopes({ "Qc": /*@__PURE__*/ _update_text("c") });
const $n_seed = _update_signal("a13");
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "Qc": /*@__PURE__*/ _update_text("c") });
const $count_seed = _update_signal("a14");
const $if_content2__construct = ($scope) => {
	_text($scope.b, $scope.d);
	_construct_effect($scope, $if_content2__setup__script);
};
const $if_content2__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $m_seed, $patch["d"]);
	$if_content2_holes($patch, $live);
};
const $if_content__construct = ($scope) => {
	_text($scope.b, $scope.d);
	_construct_effect($scope, $if_content__setup__script);
};
const $if_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $n_seed, $patch["d"]);
	$if_content_holes($patch, $live);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.l);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("l" in $patch) _update_seed($live, $count_seed, $patch["l"]);
	if ("h" in $patch) $live["h"] = $patch["h"];
	if ("i" in $patch) $live["i"] = $patch["i"];
	if ("k" in $patch) $live["k"] = $patch["k"];
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", [$if_content__update], ["a4"]);
	if ("Dd" in $patch) _update_if($patch, $live, "Dd", "Ad", [$if_content2__update], ["a7"]);
};
_construct("a7", $if_content2__construct);
_construct("a4", $if_content__construct);
_construct("a2", $construct);
_update_content("a7", $if_content2__update);
_update_content("a4", $if_content__update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $if_content2__m = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $if_content2__setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$if_content2__m($scope, $scope.d + 1);
}));
const $if_content__n = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $if_content__setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$if_content__n($scope, $scope.d + 1);
}));
const $count = /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l));
const $setup__script = _script_update("a9", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
