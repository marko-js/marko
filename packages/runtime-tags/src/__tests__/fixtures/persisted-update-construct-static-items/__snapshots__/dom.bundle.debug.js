// template.marko.persisted.mjs
const $template = "<button class=clicks>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $for_content__ratings = /*@__PURE__*/ _for_closure("#div/0", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.ratings[$scope["#LoopKey"] - 1]);
	}
});
const $for_content__setup = ($scope) => {
	if (!updating) $for_content__ratings._($scope);
	_text($scope["#text/1"], $scope.$global.topic);
};
const $await_content__for = 0;
const $await_content__ratings_length = ($scope, ratings_length) => {
	if (!updating) $await_content__for($scope, [
		ratings_length,
		1,
		1
	]);
};
const $await_content__$params = ($scope, $params2) => $await_content__ratings($scope, $params2[0]);
const $await_content__ratings = /*@__PURE__*/ _const_persisted("ratings", ($scope) => {
	$await_content__ratings_length($scope, $scope.ratings?.length);
	$for_content__ratings($scope);
});
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_4_content", "loading ratings…", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div class=ratings></div>", " b");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, getRatings($scope.$global.topic));
};
const $Ratings_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
const $Ratings_content__setup = ($scope) => $Ratings_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $Ratings_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<!><!><!>", "b%c", $Ratings_content__setup);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home>welcome home</p>", "b");
const $clicks = _var_resume("__tests__/template.marko_0_clicks/var", /*@__PURE__*/ _let_persisted("clicks/3", ($scope) => _text($scope["#text/1"], $scope.clicks)));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Home__OR__Ratings = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.$global.view === "ratings" ? $scope.Ratings : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Ratings);
const $Ratings = /*@__PURE__*/ _const_persisted("Ratings", $Home__OR__Ratings);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$clicks($scope, $scope.clicks + 1);
}));
function $setup($scope) {
	$clicks($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Ratings($scope, { content: $Ratings_content($scope) });
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $clicks_seed = _update_signal("__tests__/template.marko_0_clicks/var");
const $await_content__update = ($patch, $live) => {
	if ("ratings" in $patch) $live["ratings"] = $patch["ratings"];
	if ("ConditionalRenderer:#div/0" in $patch) _update_region("#div/0")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content__update, "__tests__/template.marko_5_update");
};
const $Ratings_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $try_content__update, "__tests__/template.marko_3_update", "__tests__/template.marko_4_content");
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.clicks);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("clicks" in $patch) _update_seed($live, $clicks_seed, $patch["clicks"]);
	if ("ConditionalRenderer:#text/2" in $patch || "BranchScopes:#text/2" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
};
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_4_content", $noop_update);
_update_content("__tests__/template.marko_2_content", $Ratings_content__update);
_update_content("__tests__/template.marko_1_content", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.js
function getRatings(topic) {
	if (typeof window !== "undefined") {
		throw new Error("getRatings is server-only");
	}
	return resolveAfter([
		"good",
		"great",
		"amazing"
	], 1);
}

// template.marko
const $template = "<button class=clicks>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $for_content__ratings = /*@__PURE__*/ _for_closure("#div/0", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.ratings[$scope["#LoopKey"] - 1]);
	}
});
const $for_content__setup = ($scope) => {
	if (!updating) $for_content__ratings._($scope);
	_text($scope["#text/1"], $scope.$global.topic);
};
const $await_content__for = /*@__PURE__*/ _for_to("#div/0", "<div class=rating><!> for <!></div>", "D%c%l", $for_content__setup);
const $await_content__ratings_length = ($scope, ratings_length) => {
	if (!updating) $await_content__for($scope, [
		ratings_length,
		1,
		1
	]);
};
const $await_content__$params = ($scope, $params2) => $await_content__ratings($scope, $params2[0]);
const $await_content__ratings = /*@__PURE__*/ _const_persisted("ratings", ($scope) => {
	$await_content__ratings_length($scope, $scope.ratings?.length);
	$for_content__ratings($scope);
});
const $placeholder_content = _content_resume("__tests__/template.marko_4_content", "loading ratings…", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div class=ratings></div>", " b");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, getRatings($scope.$global.topic));
};
const $Ratings_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
const $Ratings_content__setup = ($scope) => $Ratings_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $Ratings_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<!><!><!>", "b%c", $Ratings_content__setup);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home>welcome home</p>", "b");
const $clicks = /*@__PURE__*/ _let_persisted("clicks/3", ($scope) => _text($scope["#text/1"], $scope.clicks));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Home__OR__Ratings = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.$global.view === "ratings" ? $scope.Ratings : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Ratings);
const $Ratings = /*@__PURE__*/ _const_persisted("Ratings", $Home__OR__Ratings);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$clicks($scope, $scope.clicks + 1);
}));
function $setup($scope) {
	$clicks($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Ratings($scope, { content: $Ratings_content($scope) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
