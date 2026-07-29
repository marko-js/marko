// template.marko.persisted.mjs
const $for_content__walks = "E l%bD l D m", $for_content__template = "<li class=post><span class=tag> </span><!><span class=body> </span><button class=fave> </button></li>";
const $template = "<ul class=posts></ul>";
const $walks = " b";
const $setup = () => {};
const $if_content__post_flair = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.post_flair);
	}
});
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__post_flair._($scope);
};
const $for_content__faved = _var_resume("__tests__/template.marko_1_faved/var", /*@__PURE__*/ _let_persisted("faved/10", ($scope) => _text($scope["#text/4"], $scope.faved ? "faved" : "fave")));
const $for_content__setup__script = _script_shared(($scope) => _on($scope["#button/3"], "click", function() {
	$for_content__faved($scope, !$scope.faved);
}));
const $for_content__setup = ($scope) => {
	$for_content__faved($scope, false);
	$for_content__setup__script($scope);
};
const $for_content__post_tag = ($scope, post_tag) => _text($scope["#text/0"], post_tag);
const $for_content__if = /*@__PURE__*/ _if("#text/1", "<span class=flair> </span>", "D ", $if_content__setup);
const $for_content__post_flair = /*@__PURE__*/ _const_persisted("post_flair", ($scope) => {
	if (!updating) $for_content__if($scope, $scope.post_flair ? 0 : 1);
	$if_content__post_flair($scope);
});
const $for_content__post_body = ($scope, post_body) => _text($scope["#text/2"], post_body);
const $for_content__$params = ($scope, $params2) => {
	$for_content__post_tag($scope, $params2[0]?.tag);
	$for_content__post_flair($scope, $params2[0]?.flair);
	$for_content__post_body($scope, $params2[0]?.body);
};
const $for = 0;
const $input_posts = ($scope, input_posts) => {
	if (!updating) $for($scope, [input_posts, function(post) {
		return post.id;
	}]);
};
const $input = ($scope, input) => $input_posts($scope, input.posts);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
_static_shells({
	"__tests__/template.marko_1_update": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_1_content": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_0_update": [$template, " b"],
	"__tests__/template.marko": [$template, " b"]
});
const $faved_seed = _update_signal("__tests__/template.marko_1_faved/var");
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2"),
	"PatchHole:#text/4": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("#text/4"))
});
const $for_update = _update_for_keyed("#ul/0", ($p, $l) => $for_content__update($p, $l), "__tests__/template.marko_1_update");
const $for_content__construct = ($scope) => {
	_construct_effect($scope, $for_content__setup__script);
};
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("faved" in $patch) _update_seed($live, $faved_seed, $patch["faved"]);
	if ("post_flair" in $patch) $live["post_flair"] = $patch["post_flair"];
	$for_content_holes($patch, $live);
	if ("ConditionalRenderer:#text/1" in $patch) _update_region("#text/1")($patch, $live);
};
const $update2 = ($patch, $live) => {
	if ("BranchScopes:#ul/0" in $patch) $for_update($live, [$patch["BranchScopes:#ul/0"], "#LoopKey"]);
};
_construct("__tests__/template.marko_1_update", $for_content__construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_2_update", $noop_update);
_update_content("__tests__/template.marko_1_update", $for_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<ul class=posts></ul>";
const $walks = " b";
const $setup = () => {};
const $if_content__post_flair = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.post_flair);
	}
});
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__post_flair._($scope);
};
const $for_content__faved = /*@__PURE__*/ _let_persisted("faved/10", ($scope) => _text($scope["#text/4"], $scope.faved ? "faved" : "fave"));
const $for_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/3"], "click", function() {
	$for_content__faved($scope, !$scope.faved);
}));
const $for_content__setup = ($scope) => {
	$for_content__faved($scope, false);
	$for_content__setup__script($scope);
};
const $for_content__post_tag = ($scope, post_tag) => _text($scope["#text/0"], post_tag);
const $for_content__if = /*@__PURE__*/ _if("#text/1", "<span class=flair> </span>", "D ", $if_content__setup);
const $for_content__post_flair = /*@__PURE__*/ _const_persisted("post_flair", ($scope) => {
	if (!updating) $for_content__if($scope, $scope.post_flair ? 0 : 1);
	$if_content__post_flair($scope);
});
const $for_content__post_body = ($scope, post_body) => _text($scope["#text/2"], post_body);
const $for_content__$params = ($scope, $params2) => {
	$for_content__post_tag($scope, $params2[0]?.tag);
	$for_content__post_flair($scope, $params2[0]?.flair);
	$for_content__post_body($scope, $params2[0]?.body);
};
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li class=post><span class=tag> </span><!><span class=body> </span><button class=fave> </button></li>", "E l%bD l D ", $for_content__setup, $for_content__$params);
const $input_posts = ($scope, input_posts) => {
	if (!updating) $for($scope, [input_posts, function(post) {
		return post.id;
	}]);
};
const $input = ($scope, input) => $input_posts($scope, input.posts);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
