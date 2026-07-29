// template.marko.persisted.mjs
const $Panel_content__walks = " Db%l", $Panel_content__template = "<button class=hit>hits <!></button>", $if_content__walks = " Db%l b b", $if_content__template = "<button class=tap>tap <!></button><div class=host></div><div class=aside></div>";
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__n = _var_resume("a11", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $if_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$if_content__n($scope, $scope.e + 1);
}));
const $Panel_content__hits = _var_resume("a12", /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.b, $scope.c)));
const $Panel_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$Panel_content__hits($scope, $scope.c + 1);
}));
const $count = _var_resume("a13", /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.b, $scope.i)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + 1);
}));
_static_shells({
	"a6": [$if_content__template, $if_content__walks],
	"a9": [$if_content__template, $if_content__walks],
	"a10": [$Panel_content__template, $Panel_content__walks],
	"a2": [$Panel_content__template, $Panel_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $n_seed = _update_signal("a11");
const $hits_seed = _update_signal("a12");
const $count_seed = _update_signal("a13");
const $if_content__construct = ($scope) => {
	_text($scope.b, $scope.e);
	_construct_attr_content($scope, "Dc", "Ac");
	_construct_attr_content($scope, "Dd", "Ad");
	_construct_effect($scope, $if_content__setup__script);
};
const $if_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("e" in $patch) _update_seed($live, $n_seed, $patch["e"]);
};
const $Panel_content__construct = ($scope) => {
	_text($scope.b, $scope.c);
	_construct_effect($scope, $Panel_content__setup__script);
};
const $Panel_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("c" in $patch) _update_seed($live, $hits_seed, $patch["c"]);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.i);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("i" in $patch) _update_seed($live, $count_seed, $patch["i"]);
	if ("g" in $patch) $live["g"] = $patch["g"];
	if ("h" in $patch) $live["h"] = $patch["h"];
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", [$if_content__update], ["a6"]);
};
_construct("a6", $if_content__construct);
_construct("a10", $Panel_content__construct);
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a4", $noop_update);
_update_content("a6", $if_content__update);
_update_content("a2", $Panel_content__update, $Panel_content__construct);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $Badge_content = _content_resume("a4", "<span class=badge>badge</span>");
const $if_content__n = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $if_content__setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$if_content__n($scope, $scope.e + 1);
}));
const $Panel_content__hits = /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.b, $scope.c));
const $Panel_content__setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$Panel_content__hits($scope, $scope.c + 1);
}));
const $Panel_content__setup = ($scope) => {
	$Panel_content__hits($scope, 0);
	$Panel_content__setup__script($scope);
};
const $Panel_content = _content_resume("a2", "<button class=hit>hits <!></button>", " Db%", $Panel_content__setup);
const $count = /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script_update("a8", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + 1);
}));
