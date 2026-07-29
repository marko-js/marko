// template.marko.persisted.mjs
const $Panel_content__walks = " Db%l", $Panel_content__template = "<button class=hit>hits <!></button>", $if_content__walks = " Db%l b", $if_content__template = "<button class=tap>tap <!></button><div class=host></div>";
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__n = _var_resume("a10", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $if_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$if_content__n($scope, $scope.d + 1);
}));
const $Panel_content__hits = _var_resume("a11", /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.b, $scope.c)));
const $Panel_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$Panel_content__hits($scope, $scope.c + 1);
}));
const $count = _var_resume("a12", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
_static_shells({
	"a5": [$if_content__template, $if_content__walks],
	"a8": [$if_content__template, $if_content__walks],
	"a9": [$Panel_content__template, $Panel_content__walks],
	"a2": [$Panel_content__template, $Panel_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $n_seed = _update_signal("a10");
const $hits_seed = _update_signal("a11");
const $count_seed = _update_signal("a12");
const $if_content__construct = ($scope) => {
	_text($scope.b, $scope.d);
	_construct_attr_content($scope, "Dc", "Ac");
	_construct_effect($scope, $if_content__setup__script);
};
const $if_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $n_seed, $patch["d"]);
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
	_text($scope.b, $scope.h);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $count_seed, $patch["h"]);
	if ("g" in $patch) $live["g"] = $patch["g"];
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", [$if_content__update], ["a5"]);
};
_construct("a5", $if_content__construct);
_construct("a9", $Panel_content__construct);
_construct("a1", $construct);
_update_content("a5", $if_content__update);
_update_content("a2", $Panel_content__update, $Panel_content__construct);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $if_content__n = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $if_content__setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$if_content__n($scope, $scope.d + 1);
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
const $count = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script_update("a7", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
