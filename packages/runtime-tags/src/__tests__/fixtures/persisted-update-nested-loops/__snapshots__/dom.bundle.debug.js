// template.marko.persisted.mjs
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
const $if_content__for = /*@__PURE__*/ _for_of("#p/0", "<b> </b>", " D ", $for_content3__setup, $for_content3__$params);
const $if_content__setup = ($scope) => $if_content__for($scope, [REGIONS]);
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
const $for_content__for = /*@__PURE__*/ _for_of("#text/1", "<a class=link> </a>", " D ", $for_content2__setup, $for_content2__$params);
const $for_content__section_pages = ($scope, section_pages) => $for_content__for($scope, [section_pages, "slug"]);
const $for_content__$params = ($scope, $params2) => {
	$for_content__section_title($scope, $params2[0]?.title);
	$for_content__section_pages($scope, $params2[0]?.pages);
};
const $path__closure = /*@__PURE__*/ _closure($for_content2__path);
const $path = /*@__PURE__*/ _const_persisted("path", $path__closure);
const $region__closure = /*@__PURE__*/ _closure($for_content3__region);
const $region = /*@__PURE__*/ _const_persisted("region", $region__closure);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count)));
const $for = 0;
const $if = /*@__PURE__*/ _if("#text/3", "<p></p>", " ", $if_content__setup);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
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
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_content3__update = ($patch, $live) => {
	if ("r" in $patch) $live["r"] = $patch["r"];
};
const $for_content2__update = ($patch, $live) => {
	if ("page_slug" in $patch) $live["page_slug"] = $patch["page_slug"];
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("ConditionalRenderer:#nav/2" in $patch) _update_region("#nav/2")($patch, $live);
	if ("ConditionalRenderer:#text/3" in $patch) _update_region("#text/3")($patch, $live);
};
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_4_update", $for_content3__update);
const $noop_update = () => {};
_update_content("__tests__/template.marko_3_update", $noop_update);
_update_content("__tests__/template.marko_2_update", $for_content2__update);
_update_content("__tests__/template.marko_1_update", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
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
const $if_content__for = /*@__PURE__*/ _for_of("#p/0", "<b> </b>", " D ", $for_content3__setup, $for_content3__$params);
const $if_content__setup = ($scope) => $if_content__for($scope, [REGIONS]);
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
const $for_content__for = /*@__PURE__*/ _for_of("#text/1", "<a class=link> </a>", " D ", $for_content2__setup, $for_content2__$params);
const $for_content__section_pages = ($scope, section_pages) => $for_content__for($scope, [section_pages, "slug"]);
const $for_content__$params = ($scope, $params2) => {
	$for_content__section_title($scope, $params2[0]?.title);
	$for_content__section_pages($scope, $params2[0]?.pages);
};
const $path__closure = /*@__PURE__*/ _closure($for_content2__path);
const $path = /*@__PURE__*/ _const_persisted("path", $path__closure);
const $region__closure = /*@__PURE__*/ _closure($for_content3__region);
const $region = /*@__PURE__*/ _const_persisted("region", $region__closure);
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $for = /*@__PURE__*/ _for_of("#nav/2", "<div><h4> </h4><!></div>", "E l%", 0, $for_content__$params);
const $if = /*@__PURE__*/ _if("#text/3", "<p></p>", " ", $if_content__setup);
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
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
