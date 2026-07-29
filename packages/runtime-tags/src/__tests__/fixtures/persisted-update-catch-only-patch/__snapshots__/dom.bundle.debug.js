// template.marko.persisted.mjs
const $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "D l", $await_content__template = "<p class=feed> </p>";
const $template = "<button class=count>clicked <!></button><section><!></section>";
const $walks = " Db%lD%l";
_enable_catch();
const $await_content__feed = ($scope, feed) => _text($scope["#text/0"], feed);
const $await_content__$params = ($scope, $params3) => $await_content__feed($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<p class=failed>failed: <!></p>", "Db%", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", $await_content__template, $await_content__walks);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, getFeed($scope.$global.mode));
};
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count)));
const $try = /*@__PURE__*/ _try("#text/2", $try_content__template, $try_content__walks, $try_content__setup);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_3_update": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_3_content": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_1_update": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_1_content": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content_holes, "__tests__/template.marko_3_update");
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("BranchScopes:#text/2" in $patch) _update_branch($patch, $live, "#text/2", $try_content__update, "__tests__/template.marko_1_update");
};
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_3_update", $await_content_holes);
const $noop_update = () => {};
_update_content("__tests__/template.marko_2_content", $noop_update);
_update_content("__tests__/template.marko_1_update", $try_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.js
function getFeed(mode) {
	if (typeof window !== "undefined") {
		throw new Error("getFeed is server-only");
	}
	return mode === "broken" ? rejectAfter(new Error("feed unavailable"), 1) : resolveAfter(mode === "ok2" ? "still ok" : "all systems go", 1);
}

// template.marko
const $template = "<button class=count>clicked <!></button><section><!></section>";
const $walks = " Db%lD%l";
_enable_catch();
const $await_content__feed = ($scope, feed) => _text($scope["#text/0"], feed);
const $await_content__$params = ($scope, $params3) => $await_content__feed($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_2_content", "<p class=failed>failed: <!></p>", "Db%", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p class=feed> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, getFeed($scope.$global.mode));
};
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
