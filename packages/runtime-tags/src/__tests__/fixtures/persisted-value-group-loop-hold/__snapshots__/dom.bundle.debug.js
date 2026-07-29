// template.marko.persisted.mjs
const $for_content__walks = "D b Db%m", $for_content__template = "<li class=item> <button class=tap>tap <!></button></li>";
const $template = "<button class=count>clicked <!></button><ul></ul>";
const $walks = " Db%l b";
const $for_content__n = _var_resume("__tests__/template.marko_1_n/var", /*@__PURE__*/ _let_persisted("n/6", ($scope) => _text($scope["#text/2"], $scope.n)));
const $for_content__setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$for_content__n($scope, $scope.n + 1);
}));
const $for_content__setup = ($scope) => {
	$for_content__n($scope, 0);
	$for_content__setup__script($scope);
};
const $for_content__item_name = ($scope, item_name) => _text($scope["#text/0"], item_name);
const $for_content__$params = ($scope, $params2) => $for_content__item_name($scope, $params2[0]?.name);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = 0;
const $input_items = ($scope, input_items) => {
	if (!updating) $for($scope, [input_items, function(item) {
		return item.id;
	}]);
};
const $input = ($scope, input) => $input_items($scope, input.items);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_1_update": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_1_content": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $n_seed = _update_signal("__tests__/template.marko_1_n/var");
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for_keyed("#ul/2", ($p, $l) => $for_content__update($p, $l), "__tests__/template.marko_1_update");
const $for_content__construct = ($scope) => {
	_text($scope["#text/2"], $scope.n);
	_construct_effect($scope, $for_content__setup__script);
};
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $n_seed, $patch["n"]);
	$for_content_holes($patch, $live);
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("BranchScopes:#ul/2" in $patch) $for_update($live, [$patch["BranchScopes:#ul/2"], "#LoopKey"]);
};
_construct("__tests__/template.marko_1_update", $for_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_1_update", $for_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=count>clicked <!></button><ul></ul>";
const $walks = " Db%l b";
const $for_content__n = /*@__PURE__*/ _let_persisted("n/6", ($scope) => _text($scope["#text/2"], $scope.n));
const $for_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$for_content__n($scope, $scope.n + 1);
}));
const $for_content__setup = ($scope) => {
	$for_content__n($scope, 0);
	$for_content__setup__script($scope);
};
const $for_content__item_name = ($scope, item_name) => _text($scope["#text/0"], item_name);
const $for_content__$params = ($scope, $params2) => $for_content__item_name($scope, $params2[0]?.name);
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#ul/2", "<li class=item> <button class=tap>tap <!></button></li>", "D b Db%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => {
	if (!updating) $for($scope, [input_items, function(item) {
		return item.id;
	}]);
};
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
