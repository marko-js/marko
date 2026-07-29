// template.marko.persisted.mjs
const $if_content__walks = "Db%l b", $if_content__template = "<em>Sale <!>% off</em><button class=buy>buy</button>";
const $template = "<h1> </h1><a>link</a><button> </button><section></section>";
const $walks = "D l b D l b";
const $if_content__setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope._, $scope._.count + 10);
}));
const $if_content__setup = ($scope) => {
	_text($scope["#text/0"], $scope.$global.params.sale);
	$if_content__setup__script($scope);
};
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/5", ($scope) => {
	_text($scope["#text/3"], $scope.count);
	_attr_class($scope["#section/4"], $scope.count && $scope.$global.params.tag && "hot");
}));
const $if = /*@__PURE__*/ _if("#section/4", $if_content__template, $if_content__walks, $if_content__setup);
const $setup__script = _script_shared(($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	_text($scope["#text/0"], $scope.$global.title);
	_attr($scope["#a/1"], "href", `/items/${$scope.$global.params.id}`);
	$count($scope, 0);
	if (!updating) $if($scope, $scope.$global.params.sale ? 0 : 1);
	$setup__script($scope);
}
_resume("__tests__/template.marko_0/update_globals", ($scope) => () => {
	_attr_class($scope["#section/4"], $scope.count && $scope.$global.params.tag && "hot");
});
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_1_update": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_1_content": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchAttr:href:#a/1": /*@__PURE__*/ _update_named_attr("#a/1", "href"),
	"PatchAttr:class:#section/4": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_attr("#section/4", _attr_class))
});
const $globals_update = _update_signal("__tests__/template.marko_0/update_globals");
const $if_content__construct = ($scope) => {
	_construct_effect($scope, $if_content__setup__script);
};
const $if_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$if_content_holes($patch, $live);
};
const $construct = ($scope) => {
	_text($scope["#text/3"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	$_holes($patch, $live);
	if ("ConditionalRenderer:#section/4" in $patch) _update_if($patch, $live, "ConditionalRenderer:#section/4", "BranchScopes:#section/4", [$if_content__update], ["__tests__/template.marko_1_update"]);
	$globals_update($live);
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
const $template = "<h1> </h1><a>link</a><button> </button><section></section>";
const $walks = "D l b D l b";
const $if_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope._, $scope._.count + 10);
}));
const $if_content__setup = ($scope) => {
	_text($scope["#text/0"], $scope.$global.params.sale);
	$if_content__setup__script($scope);
};
const $count = /*@__PURE__*/ _let_persisted("count/5", ($scope) => {
	_text($scope["#text/3"], $scope.count);
	_attr_class($scope["#section/4"], $scope.count && $scope.$global.params.tag && "hot");
});
const $if = /*@__PURE__*/ _if("#section/4", "<em>Sale <!>% off</em><button class=buy>buy</button>", "Db%l ", $if_content__setup);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	_text($scope["#text/0"], $scope.$global.title);
	_attr($scope["#a/1"], "href", `/items/${$scope.$global.params.id}`);
	$count($scope, 0);
	if (!updating) $if($scope, $scope.$global.params.sale ? 0 : 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
