// template.marko.persisted.mjs
const $for_content2__walks = "D b Db%m", $for_content2__template = "<li class=item> <button class=tap>tap <!></button></li>";
const $template = "<button class=count>clicked <!></button><ul class=alerts></ul><ul class=items></ul>";
const $walks = " Db%l b b";
const $for_content2__n = _var_resume("__tests__/template.marko_2_n/var", /*@__PURE__*/ _let_persisted("n/6", ($scope) => _text($scope["#text/2"], $scope.n)));
const $for_content2__setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$for_content2__n($scope, $scope.n + 1);
}));
const $for_content2__setup = ($scope) => {
	$for_content2__n($scope, 0);
	$for_content2__setup__script($scope);
};
const $for_content2__item_name = ($scope, item_name) => _text($scope["#text/0"], item_name);
const $for_content2__$params = ($scope, $params3) => $for_content2__item_name($scope, $params3[0]?.name);
const $for_content__alert_text = ($scope, alert_text) => _text($scope["#text/0"], alert_text);
const $for_content__$params = ($scope, $params2) => $for_content__alert_text($scope, $params2[0]?.text);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/8", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = 0;
const $input_alerts = ($scope, input_alerts) => {
	if (!updating) $for($scope, [input_alerts, function(alert) {
		return alert.id;
	}]);
};
const $for2 = 0;
const $input_items = ($scope, input_items) => {
	if (!updating) $for2($scope, [input_items, function(item) {
		return item.id;
	}]);
};
const $input = ($scope, input) => {
	$input_alerts($scope, input.alerts);
	$input_items($scope, input.items);
};
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_2_update": [$for_content2__template, $for_content2__walks],
	"__tests__/template.marko_2_content": [$for_content2__template, $for_content2__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $n_seed = _update_signal("__tests__/template.marko_2_n/var");
const $for_content2_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for_keyed("#ul/3", ($p, $l) => $for_content2__update($p, $l), "__tests__/template.marko_2_update");
const $for_content2__construct = ($scope) => {
	_text($scope["#text/2"], $scope.n);
	_construct_effect($scope, $for_content2__setup__script);
};
const $for_content2__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $n_seed, $patch["n"]);
	$for_content2_holes($patch, $live);
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("ConditionalRenderer:#ul/2" in $patch) _update_region("#ul/2")($patch, $live);
	if ("BranchScopes:#ul/3" in $patch) $for_update($live, [$patch["BranchScopes:#ul/3"], "#LoopKey"]);
};
_construct("__tests__/template.marko_2_update", $for_content2__construct);
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_2_update", $for_content2__update);
const $noop_update = () => {};
_update_content("__tests__/template.marko_1_update", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=count>clicked <!></button><ul class=alerts></ul><ul class=items></ul>";
const $walks = " Db%l b b";
const $for_content2__n = /*@__PURE__*/ _let_persisted("n/6", ($scope) => _text($scope["#text/2"], $scope.n));
const $for_content2__setup__script = _script_update("__tests__/template.marko_2", ($scope) => _on($scope["#button/1"], "click", function() {
	$for_content2__n($scope, $scope.n + 1);
}));
const $for_content2__setup = ($scope) => {
	$for_content2__n($scope, 0);
	$for_content2__setup__script($scope);
};
const $for_content2__item_name = ($scope, item_name) => _text($scope["#text/0"], item_name);
const $for_content2__$params = ($scope, $params3) => $for_content2__item_name($scope, $params3[0]?.name);
const $for_content__alert_text = ($scope, alert_text) => _text($scope["#text/0"], alert_text);
const $for_content__$params = ($scope, $params2) => $for_content__alert_text($scope, $params2[0]?.text);
const $count = /*@__PURE__*/ _let_persisted("count/8", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#ul/2", "<li class=alert> </li>", "D ", 0, $for_content__$params);
const $input_alerts = ($scope, input_alerts) => {
	if (!updating) $for($scope, [input_alerts, function(alert) {
		return alert.id;
	}]);
};
const $for2 = /*@__PURE__*/ _for_of("#ul/3", "<li class=item> <button class=tap>tap <!></button></li>", "D b Db%", $for_content2__setup, $for_content2__$params);
const $input_items = ($scope, input_items) => {
	if (!updating) $for2($scope, [input_items, function(item) {
		return item.id;
	}]);
};
const $input = ($scope, input) => {
	$input_alerts($scope, input.alerts);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
