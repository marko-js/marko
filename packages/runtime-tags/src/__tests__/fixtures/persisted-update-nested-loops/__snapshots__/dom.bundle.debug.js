// template.marko.update.mjs
const $for_update = _update_for("#p/0", "__tests__/template.marko_4_content/update", (branch, args) => _update_scope(args[0], branch));
const $for_update2 = _update_for("#text/1", "__tests__/template.marko_2_content/update", (branch, args) => _update_scope(args[0], branch));
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update3 = _update_for("#nav/2", "__tests__/template.marko_1_content/update", (branch, args) => $for_content__update(args[0], branch));
const $if_update = _update_signal("__tests__/template.marko_0/update_if_#text/3");
const $if_content__update = (patch, live) => {
	if ("BranchScopes:#p/0" in patch) $for_update(live, [patch["BranchScopes:#p/0"], "#LoopKey"]);
};
const $for_content__update = (patch, live) => {
	_update_scope(patch, live);
	if ("BranchScopes:#text/1" in patch) $for_update2(live, [patch["BranchScopes:#text/1"], "#LoopKey"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("path" in patch) live["path"] = patch["path"];
	if ("BranchScopes:#nav/2" in patch) $for_update3(live, [patch["BranchScopes:#nav/2"], "#LoopKey"]);
	if ("ConditionalRenderer:#text/3" in patch) {
		$if_update(live, patch["ConditionalRenderer:#text/3"]);
		const $patchBranch = patch["BranchScopes:#text/3"], $liveBranch = live["BranchScopes:#text/3"], $branchMerge = $if_content__update;
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
function createPatch() {
	return createPatch$1(_merge);
}

// data.ts
function getNav() {
	return [{
		title: "Start",
		pages: [{
			slug: "intro",
			title: "Intro"
		}, {
			slug: "setup",
			title: "Setup"
		}]
	}, {
		title: "Guides",
		pages: [{
			slug: "routing",
			title: "Routing"
		}, {
			slug: "data",
			title: "Data"
		}]
	}];
}
const REGIONS = [
	"na",
	"eu",
	"apac"
];

// template.marko
const $template = "<button class=bump> </button><nav></nav><!><!>";
const $walks = " D l b%c";
const $for_content3__region__OR__r = /*@__PURE__*/ _or(4, ($scope) => _attr_class($scope["#b/0"], $scope._._.region === $scope.r && "on"));
const $for_content3__region = /*@__PURE__*/ _closure_get("region", ($scope) => {
	if (!updating) $for_content3__region__OR__r($scope);
}, ($scope) => $scope._._);
const $for_content3__setup = ($scope) => {
	if (!updating) $for_content3__region($scope);
};
const $for_content3__r = /*@__PURE__*/ _const_persisted("r", ($scope) => {
	_text($scope["#text/1"], $scope.r);
	$for_content3__region__OR__r($scope);
});
const $for_content3__$params = ($scope, $params4) => $for_content3__r($scope, $params4[0]);
const $if_content__for = /*@__PURE__*/ _for_of("#p/0", "<b> </b>", " D l", $for_content3__setup, $for_content3__$params);
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__for($scope, [REGIONS]);
};
const $for_content2__path__OR__page_slug = /*@__PURE__*/ _or(5, ($scope) => _attr_class_item($scope["#a/0"], "active", $scope._._.path === $scope.page_slug));
const $for_content2__path = /*@__PURE__*/ _closure_get("path", ($scope) => {
	if (!updating) $for_content2__path__OR__page_slug($scope);
}, ($scope) => $scope._._);
const $for_content2__setup = ($scope) => {
	if (!updating) $for_content2__path($scope);
};
const $for_content2__page_slug = /*@__PURE__*/ _const_persisted("page_slug", $for_content2__path__OR__page_slug);
const $for_content2__page_title = ($scope, page_title) => _text($scope["#text/1"], page_title);
const $for_content2__$params = ($scope, $params3) => {
	$for_content2__page_slug($scope, $params3[0]?.slug);
	$for_content2__page_title($scope, $params3[0]?.title);
};
const $for_content__section_title = ($scope, section_title) => _text($scope["#text/0"], section_title);
const $for_content__for = /*@__PURE__*/ _for_of("#text/1", "<a class=link> </a>", " D l", $for_content2__setup, $for_content2__$params);
const $for_content__section_pages = ($scope, section_pages) => {
	if (!updating) $for_content__for($scope, [section_pages, "slug"]);
};
const $for_content__$params = ($scope, $params2) => {
	$for_content__section_title($scope, $params2[0]?.title);
	$for_content__section_pages($scope, $params2[0]?.pages);
};
const $path__closure = /*@__PURE__*/ _closure($for_content2__path);
const $path = /*@__PURE__*/ _const_persisted("path", $path__closure);
const $region__closure = /*@__PURE__*/ _closure($for_content3__region);
const $region = /*@__PURE__*/ _const_persisted("region", $region__closure);
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $for = /*@__PURE__*/ _for_of("#nav/2", "<div><h4> </h4><!></div>", "E l%l", 0, $for_content__$params);
const $if = /*@__PURE__*/ _if("#text/3", "<p></p>", " b", $if_content__setup);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	if (!updating) $path($scope, $scope.$global.params.path);
	if (!updating) $region($scope, $scope.$global.params.region);
	$count($scope, 0);
	if (!updating) $for($scope, [getNav()]);
	if (!updating) $if($scope, REGIONS.length ? 0 : 1);
	$setup__script($scope);
}
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
