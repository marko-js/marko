// template.marko.persisted.mjs
const $for_content__walks = "E l D m", $for_content__template = "<li class=user><span class=name> </span><button class=toggle> </button></li>", $for_content2__walks = "D b D m", $for_content2__template = "<li class=tag> <button class=star> </button></li>";
const $template = "<button class=count>clicked <!></button><ul class=users></ul><ul class=tags></ul>";
const $walks = " Db%l b b";
const $for_content2__starred = _var_resume("__tests__/template.marko_2_starred/var", /*@__PURE__*/ _let_persisted("starred/5", ($scope) => _text($scope["#text/2"], $scope.starred ? "★" : "☆")));
const $for_content2__setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$for_content2__starred($scope, !$scope.starred);
}));
const $for_content2__setup = ($scope) => {
	$for_content2__starred($scope, false);
	$for_content2__setup__script($scope);
};
const $for_content2__tag = ($scope, tag) => _text($scope["#text/0"], tag);
const $for_content2__$params = ($scope, $params3) => $for_content2__tag($scope, $params3[0]);
const $for_content__open = _var_resume("__tests__/template.marko_1_open/var", /*@__PURE__*/ _let_persisted("open/6", ($scope) => _text($scope["#text/2"], $scope.open ? "less" : "more")));
const $for_content__setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$for_content__open($scope, !$scope.open);
}));
const $for_content__setup = ($scope) => {
	$for_content__open($scope, false);
	$for_content__setup__script($scope);
};
const $for_content__user_name = ($scope, user_name) => _text($scope["#text/0"], user_name);
const $for_content__$params = ($scope, $params2) => $for_content__user_name($scope, $params2[0]?.name);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/8", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = 0;
const $input_users = ($scope, input_users) => {
	if (!updating) $for($scope, [input_users, function(user) {
		return user.email;
	}]);
};
const $for2 = 0;
const $input_tags = ($scope, input_tags) => {
	if (!updating) $for2($scope, [input_tags]);
};
const $input = ($scope, input) => {
	$input_users($scope, input.users);
	$input_tags($scope, input.tags);
};
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_2_update": [$for_content2__template, $for_content2__walks],
	"__tests__/template.marko_2_content": [$for_content2__template, $for_content2__walks],
	"__tests__/template.marko_1_update": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_1_content": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $starred_seed = _update_signal("__tests__/template.marko_2_starred/var");
const $for_content2_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchHole:#text/2": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("#text/2"))
});
const $open_seed = _update_signal("__tests__/template.marko_1_open/var");
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchHole:#text/2": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("#text/2"))
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for_keyed("#ul/2", ($p, $l) => $for_content__update($p, $l), "__tests__/template.marko_1_update");
const $for_update2 = _update_for_keyed("#ul/3", ($p2, $l2) => $for_content2__update($p2, $l2), "__tests__/template.marko_2_update");
const $for_content2__construct = ($scope) => {
	_construct_effect($scope, $for_content2__setup__script);
};
const $for_content2__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("starred" in $patch) _update_seed($live, $starred_seed, $patch["starred"]);
	$for_content2_holes($patch, $live);
};
const $for_content__construct = ($scope) => {
	_construct_effect($scope, $for_content__setup__script);
};
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("open" in $patch) _update_seed($live, $open_seed, $patch["open"]);
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
	if ("BranchScopes:#ul/3" in $patch) $for_update2($live, [$patch["BranchScopes:#ul/3"], "#LoopKey"]);
};
_construct("__tests__/template.marko_2_update", $for_content2__construct);
_construct("__tests__/template.marko_1_update", $for_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_2_update", $for_content2__update);
_update_content("__tests__/template.marko_1_update", $for_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=count>clicked <!></button><ul class=users></ul><ul class=tags></ul>";
const $walks = " Db%l b b";
const $for_content2__starred = /*@__PURE__*/ _let_persisted("starred/5", ($scope) => _text($scope["#text/2"], $scope.starred ? "★" : "☆"));
const $for_content2__setup__script = _script_update("__tests__/template.marko_2", ($scope) => _on($scope["#button/1"], "click", function() {
	$for_content2__starred($scope, !$scope.starred);
}));
const $for_content2__setup = ($scope) => {
	$for_content2__starred($scope, false);
	$for_content2__setup__script($scope);
};
const $for_content2__tag = ($scope, tag) => _text($scope["#text/0"], tag);
const $for_content2__$params = ($scope, $params3) => $for_content2__tag($scope, $params3[0]);
const $for_content__open = /*@__PURE__*/ _let_persisted("open/6", ($scope) => _text($scope["#text/2"], $scope.open ? "less" : "more"));
const $for_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$for_content__open($scope, !$scope.open);
}));
const $for_content__setup = ($scope) => {
	$for_content__open($scope, false);
	$for_content__setup__script($scope);
};
const $for_content__user_name = ($scope, user_name) => _text($scope["#text/0"], user_name);
const $for_content__$params = ($scope, $params2) => $for_content__user_name($scope, $params2[0]?.name);
const $count = /*@__PURE__*/ _let_persisted("count/8", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#ul/2", "<li class=user><span class=name> </span><button class=toggle> </button></li>", "E l D ", $for_content__setup, $for_content__$params);
const $input_users = ($scope, input_users) => {
	if (!updating) $for($scope, [input_users, function(user) {
		return user.email;
	}]);
};
const $for2 = /*@__PURE__*/ _for_of("#ul/3", "<li class=tag> <button class=star> </button></li>", "D b D ", $for_content2__setup, $for_content2__$params);
const $input_tags = ($scope, input_tags) => {
	if (!updating) $for2($scope, [input_tags]);
};
const $input = ($scope, input) => {
	$input_users($scope, input.users);
	$input_tags($scope, input.tags);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
