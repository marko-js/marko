// template.marko.persisted.mjs
const $if_content__walks = " Db%lD l", $if_content__template = "<button class=tap>tap <!></button><p class=price> </p>";
const $template = "<button class=count>clicked <!></button><button class=toggle>toggle</button><!><!>";
const $walks = " Db%l b%c";
const $if_content__input_price = /*@__PURE__*/ _if_closure(3, 0, ($scope) => _text($scope.c, $scope._.g));
const $if_content__n = _var_resume("a5", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $if_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$if_content__n($scope, $scope.d + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_price._($scope);
	$if_content__n($scope, 0);
	$if_content__setup__script($scope);
};
const $count = _var_resume("a6", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h)));
const $if = /*@__PURE__*/ _if(3, $if_content__template, $if_content__walks, $if_content__setup);
const $show = _var_resume("a7", /*@__PURE__*/ _let_persisted(8, ($scope) => $if($scope, $scope.i ? 0 : 1)));
const $setup__script = _script_shared(($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, $scope.h + 1);
	});
	_on($scope.c, "click", function() {
		$show($scope, !$scope.i);
	});
});
_static_shells({
	"a2": [$if_content__template, $if_content__walks],
	"a4": [$if_content__template, $if_content__walks],
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $n_seed = _update_signal("a5");
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "Qc": /*@__PURE__*/ _update_text("c") });
const $count_seed = _update_signal("a6");
const $show_seed = _update_signal("a7");
const $if_content__construct = ($scope) => {
	_text($scope.b, $scope.d);
	_text($scope.c, $scope._.g);
	_construct_effect($scope, $if_content__setup__script);
};
const $if_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $n_seed, $patch["d"]);
	$if_content_holes($patch, $live);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.h);
	_construct_effect($scope, $setup__script);
	if ("Dd" in $scope) _update_if($scope, $scope, "Dd", "Ad", [$if_content__update], ["a2"]);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $count_seed, $patch["h"]);
	if ("i" in $patch) _update_seed($live, $show_seed, $patch["i"]);
	if ("g" in $patch) {
		$live["g"] = $patch["g"];
		$if_content__input_price($live);
	}
	if ("Ad" in $patch) _update_if_state($patch, $live, "Dd", "Ad", [$if_content__update]);
};
_construct("a2", $if_content__construct);
_construct("a0", $construct);
_update_content("a2", $if_content__update);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $if_content__input_price = /*@__PURE__*/ _if_closure(3, 0, ($scope) => _text($scope.c, $scope._.g));
const $if_content__n = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $if_content__setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$if_content__n($scope, $scope.d + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_price._($scope);
	$if_content__n($scope, 0);
	$if_content__setup__script($scope);
};
const $count = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h));
const $if = /*@__PURE__*/ _if(3, "<button class=tap>tap <!></button><p class=price> </p>", " Db%lD ", $if_content__setup);
const $show = /*@__PURE__*/ _let_persisted(8, ($scope) => $if($scope, $scope.i ? 0 : 1));
const $setup__script = _script_update("a3", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, $scope.h + 1);
	});
	_on($scope.c, "click", function() {
		$show($scope, !$scope.i);
	});
});
