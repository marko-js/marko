// template.marko.persisted.mjs
const $template = "<p>root</p><button> </button><!><!>";
const $walks = "b D l%c";
const $for_content2__item_id = /*@__PURE__*/ _for_closure("#article/0", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.item_id);
	}
});
const $for_content2__setup = ($scope) => {
	if (!updating) $for_content2__item_id._($scope);
	if (!updating) $for_content2__item_view._($scope);
};
const $for_content2__item_view = /*@__PURE__*/ _for_closure("#article/0", ($scope) => {
	if (!updating) {
		_text($scope["#text/1"], $scope._.item_view);
	}
});
const $for_content2__cell_id = ($scope, cell_id) => _text($scope["#text/2"], cell_id);
const $for_content2__$params = ($scope, $params3) => $for_content2__cell_id($scope, $params3[0]?.id);
const $for_content__for = /*@__PURE__*/ _for_of("#article/0", "<span><!>:<!>:<!></span>", "D%c%c%l", $for_content2__setup, $for_content2__$params);
const $for_content__setup = ($scope) => {
	if (!updating) $for_content__for($scope, [CELLS, "id"]);
};
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_id($scope, $params2[0]?.id);
	$for_content__item_view($scope, $params2[0]?.view);
};
const $for_content__item_id = /*@__PURE__*/ _const_persisted("item_id", $for_content2__item_id);
const $for_content__item_view = /*@__PURE__*/ _const_persisted("item_view", $for_content2__item_view);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count)));
const $for = 0;
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $for($scope, [$scope.$global.items, "id"]);
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $for_content2_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1"),
	"PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2")
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for_keyed("#text/2", ($p, $l) => $for_content__update($p, $l));
const $for_content__update = (_patch, _live) => {
	if ("BranchScopes:#article/0" in _patch) _update_for(_patch["BranchScopes:#article/0"], _live["BranchScopes:#article/0"], $for_content2_holes);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("BranchScopes:#text/2" in _patch) $for_update(_live, [_patch["BranchScopes:#text/2"], "#LoopKey"]);
};
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2() {
	return patch(_merge);
}

// data.js
const CELLS = [{ id: "only" }];

// template.marko
const $template = "<p>root</p><button> </button><!><!>";
const $walks = "b D l%c";
const $for_content2__item_id = /*@__PURE__*/ _for_closure("#article/0", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.item_id);
	}
});
const $for_content2__setup = ($scope) => {
	if (!updating) $for_content2__item_id._($scope);
	if (!updating) $for_content2__item_view._($scope);
};
const $for_content2__item_view = /*@__PURE__*/ _for_closure("#article/0", ($scope) => {
	if (!updating) {
		_text($scope["#text/1"], $scope._.item_view);
	}
});
const $for_content2__cell_id = ($scope, cell_id) => _text($scope["#text/2"], cell_id);
const $for_content2__$params = ($scope, $params3) => $for_content2__cell_id($scope, $params3[0]?.id);
const $for_content__for = /*@__PURE__*/ _for_of("#article/0", "<span><!>:<!>:<!></span>", "D%c%c%l", $for_content2__setup, $for_content2__$params);
const $for_content__setup = ($scope) => {
	if (!updating) $for_content__for($scope, [CELLS, "id"]);
};
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_id($scope, $params2[0]?.id);
	$for_content__item_view($scope, $params2[0]?.view);
};
const $for_content__item_id = /*@__PURE__*/ _const_persisted("item_id", $for_content2__item_id);
const $for_content__item_view = /*@__PURE__*/ _const_persisted("item_view", $for_content2__item_view);
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $for = /*@__PURE__*/ _for_of("#text/2", "<article></article>", " b", $for_content__setup, $for_content__$params);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $for($scope, [$scope.$global.items, "id"]);
	$setup__script($scope);
}
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
