// template.marko.persisted.mjs
const $if_content__walks = " Db%lD l", $if_content__template = "<button class=tap>tap <!></button><p class=price> </p>";
const $template = "<button class=count>clicked <!></button><button class=toggle>toggle</button><!><!>";
const $walks = " Db%l b%c";
const $if_content__input_price = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => _text($scope["#text/2"], $scope._.input_price));
const $if_content__n = _var_resume("__tests__/template.marko_1_n/var", /*@__PURE__*/ _let_persisted("n/3", ($scope) => _text($scope["#text/1"], $scope.n)));
const $if_content__setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__n($scope, $scope.n + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_price._($scope);
	$if_content__n($scope, 0);
	$if_content__setup__script($scope);
};
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/7", ($scope) => _text($scope["#text/1"], $scope.count)));
const $if = /*@__PURE__*/ _if("#text/3", $if_content__template, $if_content__walks, $if_content__setup);
const $show = _var_resume("__tests__/template.marko_0_show/var", /*@__PURE__*/ _let_persisted("show/8", ($scope) => $if($scope, $scope.show ? 0 : 1)));
const $setup__script = _script_shared(($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, $scope.count + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$show($scope, !$scope.show);
	});
});
function $setup($scope) {
	$count($scope, 0);
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_price($scope, input.price);
const $input_price = /*@__PURE__*/ _const_persisted("input_price", $if_content__input_price);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_1_update": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_1_content": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $n_seed = _update_signal("__tests__/template.marko_1_n/var");
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $show_seed = _update_signal("__tests__/template.marko_0_show/var");
const $if_content__construct = ($scope) => {
	_text($scope["#text/1"], $scope.n);
	_text($scope["#text/2"], $scope._.input_price);
	_construct_effect($scope, $if_content__setup__script);
};
const $if_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $n_seed, $patch["n"]);
	$if_content_holes($patch, $live);
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
	if ("ConditionalRenderer:#text/3" in $scope) _update_if($scope, $scope, "ConditionalRenderer:#text/3", "BranchScopes:#text/3", [$if_content__update], ["__tests__/template.marko_1_update"]);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("show" in $patch) _update_seed($live, $show_seed, $patch["show"]);
	if ("input_price" in $patch) {
		$live["input_price"] = $patch["input_price"];
		$if_content__input_price($live);
	}
	if ("BranchScopes:#text/3" in $patch) _update_if_state($patch, $live, "ConditionalRenderer:#text/3", "BranchScopes:#text/3", [$if_content__update]);
};
_construct("__tests__/template.marko_1_update", $if_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_1_update", $if_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=count>clicked <!></button><button class=toggle>toggle</button><!><!>";
const $walks = " Db%l b%c";
const $if_content__input_price = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => _text($scope["#text/2"], $scope._.input_price));
const $if_content__n = /*@__PURE__*/ _let_persisted("n/3", ($scope) => _text($scope["#text/1"], $scope.n));
const $if_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__n($scope, $scope.n + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_price._($scope);
	$if_content__n($scope, 0);
	$if_content__setup__script($scope);
};
const $count = /*@__PURE__*/ _let_persisted("count/7", ($scope) => _text($scope["#text/1"], $scope.count));
const $if = /*@__PURE__*/ _if("#text/3", "<button class=tap>tap <!></button><p class=price> </p>", " Db%lD ", $if_content__setup);
const $show = /*@__PURE__*/ _let_persisted("show/8", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, $scope.count + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$show($scope, !$scope.show);
	});
});
function $setup($scope) {
	$count($scope, 0);
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_price($scope, input.price);
const $input_price = /*@__PURE__*/ _const_persisted("input_price", $if_content__input_price);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
