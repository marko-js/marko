// template.marko.persisted.mjs
const $for_content__walks = "E l%l", $for_content__template = "<section><h3> </h3><!></section>", $for_content2__walks = " D%c%l", $for_content2__template = "<button><!>:<!></button>";
const $template = "<p> </p><!><!>";
const $walks = "D l%c";
const $for_content2__group_id = /*@__PURE__*/ _for_closure("#text/1", ($scope) => {
	if (!updating) {
		_text($scope["#text/1"], $scope._.group_id);
	}
});
const $for_content2__setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._._, $scope._._.count + 1);
}));
const $for_content2__setup = ($scope) => {
	if (!updating) $for_content2__group_id._($scope);
	$for_content2__setup__script($scope);
};
const $for_content2__item_id = ($scope, item_id) => _text($scope["#text/2"], item_id);
const $for_content2__$params = ($scope, $params3) => $for_content2__item_id($scope, $params3[0]?.id);
const $for_content__group_id = /*@__PURE__*/ _const_persisted("group_id", ($scope) => {
	_text($scope["#text/0"], $scope.group_id);
	$for_content2__group_id($scope);
});
const $for_content__for = 0;
const $for_content__group_items = ($scope, group_items) => {
	if (!updating) $for_content__for($scope, [group_items, "id"]);
};
const $for_content__$params = ($scope, $params2) => {
	$for_content__group_id($scope, $params2[0]?.id);
	$for_content__group_items($scope, $params2[0]?.items);
};
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/2", ($scope) => _text($scope["#text/0"], $scope.count)));
const $for = 0;
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $for($scope, [$scope.$global.groups, "id"]);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_2_update": [$for_content2__template, $for_content2__walks],
	"__tests__/template.marko_2_content": [$for_content2__template, $for_content2__walks],
	"__tests__/template.marko_1_update": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_1_content": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $for_content2_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1"),
	"PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2")
});
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $for_update = _update_for_keyed("#text/1", ($p, $l) => $for_content2__update($p, $l), "__tests__/template.marko_2_update");
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update2 = _update_for_keyed("#text/1", ($p2, $l2) => $for_content__update($p2, $l2), "__tests__/template.marko_1_update");
const $for_content2__construct = ($scope) => {
	_text($scope["#text/1"], $scope._.group_id);
	_construct_effect($scope, $for_content2__setup__script);
};
const $for_content2__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$for_content2_holes($patch, $live);
};
const $for_content__construct = ($scope) => {
	_text($scope["#text/0"], $scope.group_id);
};
const $for_content__update = ($patch, $live) => {
	if ("group_id" in $patch) $live["group_id"] = $patch["group_id"];
	$for_content_holes($patch, $live);
	if ("BranchScopes:#text/1" in $patch) $for_update($live, [$patch["BranchScopes:#text/1"], "#LoopKey"]);
};
const $construct = ($scope) => {
	_text($scope["#text/0"], $scope.count);
};
const $update2 = ($patch, $live) => {
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("BranchScopes:#text/1" in $patch) $for_update2($live, [$patch["BranchScopes:#text/1"], "#LoopKey"]);
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
const $template = "<p> </p><!><!>";
const $walks = "D l%c";
const $for_content2__group_id = /*@__PURE__*/ _for_closure("#text/1", ($scope) => {
	if (!updating) {
		_text($scope["#text/1"], $scope._.group_id);
	}
});
const $for_content2__setup__script = _script_update("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._._, $scope._._.count + 1);
}));
const $for_content2__setup = ($scope) => {
	if (!updating) $for_content2__group_id._($scope);
	$for_content2__setup__script($scope);
};
const $for_content2__item_id = ($scope, item_id) => _text($scope["#text/2"], item_id);
const $for_content2__$params = ($scope, $params3) => $for_content2__item_id($scope, $params3[0]?.id);
const $for_content__group_id = /*@__PURE__*/ _const_persisted("group_id", ($scope) => {
	_text($scope["#text/0"], $scope.group_id);
	$for_content2__group_id($scope);
});
const $for_content__for = /*@__PURE__*/ _for_of("#text/1", "<button><!>:<!></button>", " D%c%", $for_content2__setup, $for_content2__$params);
const $for_content__group_items = ($scope, group_items) => {
	if (!updating) $for_content__for($scope, [group_items, "id"]);
};
const $for_content__$params = ($scope, $params2) => {
	$for_content__group_id($scope, $params2[0]?.id);
	$for_content__group_items($scope, $params2[0]?.items);
};
const $count = /*@__PURE__*/ _let_persisted("count/2", ($scope) => _text($scope["#text/0"], $scope.count));
const $for = /*@__PURE__*/ _for_of("#text/1", "<section><h3> </h3><!></section>", "E l%", 0, $for_content__$params);
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $for($scope, [$scope.$global.groups, "id"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
