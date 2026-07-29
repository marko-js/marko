// template.marko.persisted.mjs
const $template = "<h1 class=title> </h1><button class=toggle>toggle</button><button class=count>clicked <!></button><ul class=items></ul><!><!>";
const $walks = "D l b Db%l b%c";
const $for_content2__tag = ($scope, tag) => _text($scope.a, tag);
const $for_content2__$params = ($scope, $params3) => $for_content2__tag($scope, $params3[0]);
const $if_content__input_note = /*@__PURE__*/ _if_closure(5, 0, ($scope) => _text($scope.a, $scope._.k));
const $if_content__setup = ($scope) => {
	$if_content__input_note._($scope);
	$if_content__input_tags._($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of(1, "<li class=tag> </li>", "D ", 0, $for_content2__$params);
const $if_content__input_tags = /*@__PURE__*/ _if_closure(5, 0, ($scope) => $if_content__for($scope, [$scope._.l]));
const $if = /*@__PURE__*/ _if(5, "<section class=details><p class=note> </p><ol class=tags></ol></section>", "E l ", $if_content__setup);
const $showDetails = _var_resume("a3", /*@__PURE__*/ _let_persisted(12, ($scope) => $if($scope, $scope.m ? 0 : 1)));
const $clicks = _var_resume("a4", /*@__PURE__*/ _let_persisted(13, ($scope) => _text($scope.d, $scope.n)));
const $setup__script = _script_shared(($scope) => {
	_on($scope.b, "click", function() {
		$showDetails($scope, !$scope.m);
	});
	_on($scope.c, "click", function() {
		$clicks($scope, $scope.n + 1);
	});
});
_static_shells({
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $showDetails_seed = _update_signal("a3");
const $clicks_seed = _update_signal("a4");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $construct = ($scope) => {
	_text($scope.d, $scope.n);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("m" in $patch) _update_seed($live, $showDetails_seed, $patch["m"]);
	if ("n" in $patch) _update_seed($live, $clicks_seed, $patch["n"]);
	if ("k" in $patch) {
		$live["k"] = $patch["k"];
		$if_content__input_note($live);
	}
	if ("l" in $patch) {
		$live["l"] = $patch["l"];
		$if_content__input_tags($live);
	}
	$_holes($patch, $live);
	if ("De" in $patch) _update_region("e")($patch, $live);
};
_construct("a0", $construct);
const $noop_update = () => {};
_update_content("a5", $noop_update);
_update_content("a6", $noop_update);
_update_content("a7", $noop_update);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $for_content2__tag = ($scope, tag) => _text($scope.a, tag);
const $for_content2__$params = ($scope, $params3) => $for_content2__tag($scope, $params3[0]);
const $if_content__input_note = /*@__PURE__*/ _if_closure(5, 0, ($scope) => _text($scope.a, $scope._.k));
const $if_content__setup = ($scope) => {
	$if_content__input_note._($scope);
	$if_content__input_tags._($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of(1, "<li class=tag> </li>", "D ", 0, $for_content2__$params);
const $if_content__input_tags = /*@__PURE__*/ _if_closure(5, 0, ($scope) => $if_content__for($scope, [$scope._.l]));
const $if = /*@__PURE__*/ _if(5, "<section class=details><p class=note> </p><ol class=tags></ol></section>", "E l ", $if_content__setup);
const $showDetails = /*@__PURE__*/ _let_persisted(12, ($scope) => $if($scope, $scope.m ? 0 : 1));
const $clicks = /*@__PURE__*/ _let_persisted(13, ($scope) => _text($scope.d, $scope.n));
const $setup__script = _script_update("a2", ($scope) => {
	_on($scope.b, "click", function() {
		$showDetails($scope, !$scope.m);
	});
	_on($scope.c, "click", function() {
		$clicks($scope, $scope.n + 1);
	});
});
