// template.marko.persisted.mjs
const $template = "<button class=a>A</button><button class=b>B</button><!><!>";
const $walks = " b b%c";
const $else_content__input_b = /*@__PURE__*/ _if_closure("#text/2", 1, ($scope) => _text($scope["#text/0"], $scope._.input_b));
const $else_content__setup = $else_content__input_b;
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => _text($scope["#text/0"], $scope._.input_a));
const $if_content__setup = $if_content__input_a;
const $if = /*@__PURE__*/ _if("#text/2", "<p class=a> </p>", "D ", $if_content__setup, "<p class=b> </p>", "D ", $else_content__setup);
const $tab = _var_resume("__tests__/template.marko_0_tab/var", /*@__PURE__*/ _let_persisted("tab/7", ($scope) => $if($scope, $scope.tab === 0 ? 0 : 1)));
const $setup__script = _script_shared(($scope) => {
	_on($scope["#button/0"], "click", function() {
		$tab($scope, 0);
	});
	_on($scope["#button/1"], "click", function() {
		$tab($scope, 1);
	});
});
function $setup($scope) {
	$tab($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_a = /*@__PURE__*/ _const_persisted("input_a", $if_content__input_a);
const $input_b = /*@__PURE__*/ _const_persisted("input_b", $else_content__input_b);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $tab_seed = _update_signal("__tests__/template.marko_0_tab/var");
const $construct = ($scope) => {
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("tab" in $patch) _update_seed($live, $tab_seed, $patch["tab"]);
	if ("input_a" in $patch) {
		$live["input_a"] = $patch["input_a"];
		$if_content__input_a($live);
	}
	if ("input_b" in $patch) {
		$live["input_b"] = $patch["input_b"];
		$else_content__input_b($live);
	}
};
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_2_update", $noop_update);
_update_content("__tests__/template.marko_1_update", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=a>A</button><button class=b>B</button><!><!>";
const $walks = " b b%c";
const $else_content__input_b = /*@__PURE__*/ _if_closure("#text/2", 1, ($scope) => _text($scope["#text/0"], $scope._.input_b));
const $else_content__setup = $else_content__input_b;
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => _text($scope["#text/0"], $scope._.input_a));
const $if_content__setup = $if_content__input_a;
const $if = /*@__PURE__*/ _if("#text/2", "<p class=a> </p>", "D ", $if_content__setup, "<p class=b> </p>", "D ", $else_content__setup);
const $tab = /*@__PURE__*/ _let_persisted("tab/7", ($scope) => $if($scope, $scope.tab === 0 ? 0 : 1));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$tab($scope, 0);
	});
	_on($scope["#button/1"], "click", function() {
		$tab($scope, 1);
	});
});
function $setup($scope) {
	$tab($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_a = /*@__PURE__*/ _const_persisted("input_a", $if_content__input_a);
const $input_b = /*@__PURE__*/ _const_persisted("input_b", $else_content__input_b);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
