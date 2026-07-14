// template.marko.update.mjs
const $for_update = _update_for("#ul/0", "__tests__/template.marko_5_content/update", (branch, args) => _update_scope(args[0], branch));
const $for_update2 = _update_for("#nav/1", "__tests__/template.marko_2_content/update", (branch, args) => $for_content__update(args[0], branch));
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_content__update = (patch, live) => {
	if ("ConditionalRenderer:#text/0" in patch) _update_if(patch, live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0", [0, _update_scope]);
};
const $if_content__update = (patch, live) => {
	if ("BranchScopes:#ul/0" in patch) $for_update(live, [patch["BranchScopes:#ul/0"], "#LoopKey"]);
	if ("BranchScopes:#nav/1" in patch) $for_update2(live, [patch["BranchScopes:#nav/1"], "#LoopKey"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("search_page" in patch) live["search_page"] = patch["search_page"];
	if ("search_q" in patch) live["search_q"] = patch["search_q"];
	if ("results_items" in patch) live["results_items"] = patch["results_items"];
	if ("results_totalPages" in patch) live["results_totalPages"] = patch["results_totalPages"];
	if ("ConditionalRenderer:#text/2" in patch) _update_if(patch, live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", [$if_content__update, 0]);
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
function createPatch() {
	return createPatch$1(_merge);
}

// data.js
function getResults(search) {
	if (typeof window !== "undefined") {
		throw new Error("getResults is server-only");
	}
	const all = [
		"alpha",
		"beta",
		"gamma",
		"delta"
	];
	const items = all.filter((name) => name.includes(search.q ?? "")).map((name, i) => ({
		id: i + 1,
		name
	}));
	return {
		total: items.length,
		totalPages: 3,
		items
	};
}

// template.marko
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content2__setup = ($scope) => _text($scope["#text/0"], $scope._["#LoopKey"]);
const $for_content2__item_name = ($scope, item_name) => _text($scope["#text/0"], item_name);
const $for_content2__$params = ($scope, $params2) => $for_content2__item_name($scope, $params2[0]?.name);
const $else_content__search_q = /*@__PURE__*/ _closure_get("search_q", ($scope) => {
	if (!updating) {
		_attr($scope["#a/0"], "href", `/search?page=${$scope._["#LoopKey"]}&q=${$scope._._._.search_q}`);
	}
}, ($scope) => $scope._._._);
const $else_content__setup = ($scope) => {
	if (!updating) $else_content__search_q($scope);
	_text($scope["#text/1"], $scope._["#LoopKey"]);
};
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<span class=current> </span>", "D l", $if_content2__setup, "<a> </a>", " D l", $else_content__setup);
const $for_content__search_page = /*@__PURE__*/ _closure_get("search_page", ($scope) => {
	if (!updating) {
		if (!updating) $for_content__if($scope, $scope["#LoopKey"] === $scope._._.search_page ? 0 : 1);
	}
}, ($scope) => $scope._._);
const $for_content__setup = ($scope) => {
	if (!updating) $for_content__search_page($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", "D l", 0, $for_content2__$params);
const $if_content__results_items = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		if (!updating) $if_content__for($scope, [$scope._.results_items, function(item) {
			return item.id;
		}]);
	}
});
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__results_items._($scope);
	if (!updating) $if_content__results_totalPages._($scope);
};
const $if_content__for2 = /*@__PURE__*/ _for_to("#nav/1", "<!><!><!>", "b%c", $for_content__setup);
const $if_content__results_totalPages = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		if (!updating) $if_content__for2($scope, [
			$scope._.results_totalPages,
			1,
			1
		]);
	}
});
const $pattern2 = ($scope, $pattern) => $search($scope, $pattern[0]);
const $results = ($scope, results) => {
	$results_total($scope, results?.total);
	$results_items($scope, results?.items);
	$results_totalPages($scope, results?.totalPages);
};
const $search = ($scope, search) => {
	$search_page($scope, search?.page);
	$search_q($scope, search?.q);
	if (!updating) $results($scope, getResults(search));
};
const $search_page__closure = /*@__PURE__*/ _closure($for_content__search_page);
const $search_page = /*@__PURE__*/ _const_persisted("search_page", $search_page__closure);
const $search_q__closure = /*@__PURE__*/ _closure($else_content__search_q);
const $search_q = /*@__PURE__*/ _const_persisted("search_q", $search_q__closure);
const $count = /*@__PURE__*/ _let_persisted("count/11", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	if (!updating) $pattern2($scope, $scope.$global.search);
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<ul class=items></ul><nav class=pagination></nav>", " b b", $if_content__setup, "<p class=empty>No results</p>", "b");
const $results_total = ($scope, results_total) => {
	if (!updating) $if($scope, results_total ? 0 : 1);
};
const $results_items = /*@__PURE__*/ _const_persisted("results_items", $if_content__results_items);
const $results_totalPages = /*@__PURE__*/ _const_persisted("results_totalPages", $if_content__results_totalPages);
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
