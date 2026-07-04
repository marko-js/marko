// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $global_params_tag_update = _update_signal("__tests__/template.marko_0_$global_params_tag/var");
const $if_content__update = (patch, live) => {
	if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("$global" in patch) live["$global"] = patch["$global"];
	if ("$global_title" in patch) live["$global_title"] = patch["$global_title"];
	if ("$global_params" in patch) live["$global_params"] = patch["$global_params"];
	if ("$global_params_id" in patch) live["$global_params_id"] = patch["$global_params_id"];
	if ("$global_params_tag" in patch) $global_params_tag_update(live, patch["$global_params_tag"]);
	if ("$global_params_sale" in patch) live["$global_params_sale"] = patch["$global_params_sale"];
	if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
	if ("UpdateAttr:href:#a/1" in patch) _attr(live["#a/1"], "href", patch["UpdateAttr:href:#a/1"]);
};
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// template.marko
const $template = "<h1> </h1><a>link</a><button> </button><section></section>";
const $walks = "D l b D l b";
const $if_content__$global_params_sale = /* @__PURE__ */ _if_closure("#section/4", 0, ($scope) => _text($scope["#text/0"], $scope.$global.params.sale));
const $if_content__setup = ($scope) => {
	if (!_updating()) $if_content__$global_params_sale._($scope);
};
const $count__OR__$global_params_tag = /* @__PURE__ */ _or(11, ($scope) => _attr_class($scope["#section/4"], $scope.count && $scope.$global.params.tag && "hot"), 0);
const $count = _var_resume("__tests__/template.marko_0_count/var", /* @__PURE__ */ _let("count/5", ($scope) => {
	_text($scope["#text/3"], $scope.count);
	$count__OR__$global_params_tag($scope);
}));
const $if = /* @__PURE__ */ _if("#section/4", "<em>Sale <!>% off</em>", "Db%l", $if_content__setup);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	_text($scope["#text/0"], $scope.$global.title);
	_attr($scope["#a/1"], "href", `/items/${$scope.$global.params.id}`);
	$count($scope, 0);
	$if($scope, $scope.$global.params.sale ? 0 : 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
