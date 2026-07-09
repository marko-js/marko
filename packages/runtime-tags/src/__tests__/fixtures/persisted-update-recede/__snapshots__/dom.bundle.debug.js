// template.marko.update.mjs
const $clicks_seed = _update_signal("__tests__/template.marko_0_clicks/var");
const $try_content__update = (patch, live) => {
	if ("BranchScopes:#text/0" in patch) _update_branch(patch, live, "#text/0", _update_scope);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("clicks" in patch) _update_seed(live, $clicks_seed, patch["clicks"]);
	if ("BranchScopes:#text/2" in patch) _update_branch(patch, live, "#text/2", $try_content__update);
};
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// template.marko
const $template = "<button class=clicks>clicked <!></button><section><!></section>";
const $walks = " Db%lD%l";
_enable_catch();
const $await_content__detail = ($scope, detail) => _text($scope["#text/0"], detail);
const $await_content__$params = ($scope, $params2) => $await_content__detail($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "<p class=ph>loading detail…</p>", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p class=detail>detail <!></p>", "Db%l");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, resolveAfter(`${$scope.$global.pid}: ${$scope.$global.rev}`, $scope.$global.tick));
};
const $clicks = /*@__PURE__*/ _let("clicks/3", ($scope) => _text($scope["#text/1"], $scope.clicks));
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$clicks($scope, $scope.clicks + 1);
}));
function $setup($scope) {
	$clicks($scope, 0);
	$try($scope, { placeholder: attrTag({
		by: $scope.$global.pid,
		content: $placeholder_content($scope)
	}) });
	$setup__script($scope);
}
enableBranches();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
