// template.marko.persisted.mjs
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $for_content__setup = ($scope) => _text($scope["#text/0"], serverTaskSentinel?.());
const $for_content__task_name = ($scope, task_name) => _text($scope["#text/1"], task_name);
const $for_content__task_eta = ($scope, task_eta) => _text($scope["#text/2"], task_eta);
const $for_content__$params = ($scope, $params2) => {
	$for_content__task_name($scope, $params2[0]?.name);
	$for_content__task_eta($scope, $params2[0]?.eta);
};
const $if_content__for = 0;
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__for($scope, [getTasks?.($scope.$global.day), function(task) {
		return task.id;
	}]);
};
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count)));
const $if = /*@__PURE__*/ _if("#text/2", "<ol class=lane></ol>", " b", $if_content__setup, "<p class=closed>lane closed</p>", "b");
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $if($scope, $scope.$global.lane === "active" ? 0 : 1);
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1"),
	"PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2")
});
const $for_update = _update_for_keyed("#ol/0", ($p, $l) => $for_content_holes($p, $l));
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $if_content__update = (_patch, _live) => {
	if ("BranchScopes:#ol/0" in _patch) $for_update(_live, [_patch["BranchScopes:#ol/0"], "#LoopKey"]);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("ConditionalRenderer:#text/2" in _patch) _update_if(_patch, _live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", [$if_content__update, 0]);
};
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// data.js
const getTasks = typeof window === "undefined" ? (day) => day === "mon" ? [{
	id: 1,
	name: "brew",
	eta: "5m"
}, {
	id: 2,
	name: "grind",
	eta: "2m"
}] : day === "tue" ? [
	{
		id: 3,
		name: "roast",
		eta: "45m"
	},
	{
		id: 2,
		name: "grind",
		eta: "3m"
	},
	{
		id: 1,
		name: "brew",
		eta: "6m"
	}
] : [{
	id: 2,
	name: "grind",
	eta: "4m"
}, {
	id: 1,
	name: "brew",
	eta: "7m"
}] : undefined;
const serverTaskSentinel = typeof window === "undefined" ? () => "server-only task sentinel" : undefined;

// template.marko
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $for_content__setup = ($scope) => _text($scope["#text/0"], serverTaskSentinel?.());
const $for_content__task_name = ($scope, task_name) => _text($scope["#text/1"], task_name);
const $for_content__task_eta = ($scope, task_eta) => _text($scope["#text/2"], task_eta);
const $for_content__$params = ($scope, $params2) => {
	$for_content__task_name($scope, $params2[0]?.name);
	$for_content__task_eta($scope, $params2[0]?.eta);
};
const $if_content__for = /*@__PURE__*/ _for_of("#ol/0", "<li><em>TASK_ROW_MARKUP</em> <span class=name> </span>: <span class=eta> </span></li>", "Db bD lbD m", $for_content__setup, $for_content__$params);
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__for($scope, [getTasks?.($scope.$global.day), function(task) {
		return task.id;
	}]);
};
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $if = /*@__PURE__*/ _if("#text/2", "<ol class=lane></ol>", " b", $if_content__setup, "<p class=closed>lane closed</p>", "b");
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $if($scope, $scope.$global.lane === "active" ? 0 : 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
