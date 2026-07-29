// template.marko.persisted.mjs
const $if_content__walks = "Db%l b", $if_content__template = "<em>Sale <!>% off</em><button class=buy>buy</button>";
const $template = "<h1> </h1><a>link</a><button> </button><section></section>";
const $walks = "D l b D l b";
const $if_content__setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.f + 10);
}));
const $count = _var_resume("a7", /*@__PURE__*/ _let_persisted(5, ($scope) => {
	_text($scope.d, $scope.f);
	_attr_class($scope.e, $scope.f && $scope.$.params.tag && "hot");
}));
const $setup__script = _script_shared(($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.f + 1);
}));
_resume("a8", ($scope) => () => {
	_attr_class($scope.e, $scope.f && $scope.$.params.tag && "hot");
});
_static_shells({
	"a3": [$if_content__template, $if_content__walks],
	"a6": [$if_content__template, $if_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a7");
const $_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Nhref:b": /*@__PURE__*/ _update_named_attr("b", "href"),
	"Nclass:e": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_attr("e", _attr_class))
});
const $globals_update = _update_signal("a8");
const $if_content__construct = ($scope) => {
	_construct_effect($scope, $if_content__setup__script);
};
const $if_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$if_content_holes($patch, $live);
};
const $construct = ($scope) => {
	_text($scope.d, $scope.f);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("f" in $patch) _update_seed($live, $count_seed, $patch["f"]);
	$_holes($patch, $live);
	if ("De" in $patch) _update_if($patch, $live, "De", "Ae", [$if_content__update], ["a3"]);
	$globals_update($live);
};
_construct("a3", $if_content__construct);
_construct("a1", $construct);
_update_content("a3", $if_content__update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $if_content__setup__script = _script_update("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.f + 10);
}));
const $count = /*@__PURE__*/ _let_persisted(5, ($scope) => {
	_text($scope.d, $scope.f);
	_attr_class($scope.e, $scope.f && $scope.$.params.tag && "hot");
});
const $setup__script = _script_update("a5", ($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.f + 1);
}));
