// template.marko.persisted.mjs
const $Panel_content__walks = " Db%l", $Panel_content__template = "<button class=hit>hits <!></button>", $if_content__walks = " b", $if_content__template = "<div class=host></div>";
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $Panel_content__hits = _var_resume("a9", /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.b, $scope.c)));
const $Panel_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$Panel_content__hits($scope, $scope.c + 1);
}));
const $count = _var_resume("a10", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
_static_shells({
	"a4": [$if_content__template, $if_content__walks],
	"a7": [$if_content__template, $if_content__walks],
	"a8": [$Panel_content__template, $Panel_content__walks],
	"a2": [$Panel_content__template, $Panel_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $hits_seed = _update_signal("a9");
const $count_seed = _update_signal("a10");
const $if_content__construct = ($scope) => {
	_construct_attr_content($scope, "Da", "Aa");
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
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", 0, ["a4"]);
};
_construct("a4", $if_content__construct);
_construct("a8", $Panel_content__construct);
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a4", $noop_update);
_update_content("a2", $Panel_content__update, $Panel_content__construct);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
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
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
