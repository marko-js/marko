// template.marko.persisted.mjs
const $template = "<button class=a>A</button><button class=b>B</button><!><!>";
const $walks = " b b%c";
const $else_content__input_b = /*@__PURE__*/ _if_closure(2, 1, ($scope) => _text($scope.a, $scope._.g));
const $else_content__setup = $else_content__input_b;
const $if_content__input_a = /*@__PURE__*/ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.f));
const $if = /*@__PURE__*/ _if(2, "<p class=a> </p>", "D ", $if_content__input_a, "<p class=b> </p>", "D ", $else_content__setup);
const $tab = _var_resume("a2", /*@__PURE__*/ _let_persisted(7, ($scope) => $if($scope, $scope.h === 0 ? 0 : 1)));
const $setup__script = _script_shared(($scope) => {
	_on($scope.a, "click", function() {
		$tab($scope, 0);
	});
	_on($scope.b, "click", function() {
		$tab($scope, 1);
	});
});
_static_shells({
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $tab_seed = _update_signal("a2");
const $construct = ($scope) => {
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $tab_seed, $patch["h"]);
	if ("f" in $patch) {
		$live["f"] = $patch["f"];
		$if_content__input_a($live);
	}
	if ("g" in $patch) {
		$live["g"] = $patch["g"];
		$else_content__input_b($live);
	}
};
_construct("a0", $construct);
const $noop_update = () => {};
_update_content("a3", $noop_update);
_update_content("a4", $noop_update);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $else_content__input_b = /*@__PURE__*/ _if_closure(2, 1, ($scope) => _text($scope.a, $scope._.g));
const $else_content__setup = $else_content__input_b;
const $if_content__input_a = /*@__PURE__*/ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.f));
const $if = /*@__PURE__*/ _if(2, "<p class=a> </p>", "D ", $if_content__input_a, "<p class=b> </p>", "D ", $else_content__setup);
const $tab = /*@__PURE__*/ _let_persisted(7, ($scope) => $if($scope, $scope.h === 0 ? 0 : 1));
const $setup__script = _script_update("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$tab($scope, 0);
	});
	_on($scope.b, "click", function() {
		$tab($scope, 1);
	});
});
