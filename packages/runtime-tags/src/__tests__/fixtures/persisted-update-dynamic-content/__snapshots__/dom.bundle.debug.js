// tags/layout.marko.update.mjs
const $dynamic_update = _update_signal("__tests__/tags/layout.marko_0/update_dynamic_#text/2");
const $update$1 = (patch, live) => {
	_update_pair(patch, live);
	if ("$params" in patch) live["$params"] = patch["$params"];
	if ("input" in patch) live["input"] = patch["input"];
	if ("input_content" in patch) live["input_content"] = patch["input_content"];
	if ("ConditionalRenderer:#text/2" in patch) _update_dynamic(patch, live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", $dynamic_update);
};
var layout_marko_update_default = _resume("__tests__/tags/layout.marko_0_update", $update$1);

// template.marko.update.mjs
const $for_update = _update_for("#ul/0", "__tests__/template.marko_3_content/update", (branch, args) => $for_content__update(args[0], branch));
const $for_content__update = (patch, live) => {
	if ("$params2" in patch) live["$params2"] = patch["$params2"];
	if ("spec" in patch) live["spec"] = patch["spec"];
	if ("spec_name" in patch) live["spec_name"] = patch["spec_name"];
	if ("spec_value" in patch) live["spec_value"] = patch["spec_value"];
	if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
	if ("#text/1" in patch) _text(live["#text/1"], patch["#text/1"]);
};
const $Specs_content__update = (patch, live) => {
	if ("BranchScopes:#ul/0" in patch) $for_update(live, [patch["BranchScopes:#ul/0"], "#LoopKey"]);
};
const $Overview_content__update = (patch, live) => {
	if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
	if ("#text/1" in patch) _text(live["#text/1"], patch["#text/1"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("$params" in patch) live["$params"] = patch["$params"];
	if ("input" in patch) live["input"] = patch["input"];
	if ("input_title" in patch) live["input_title"] = patch["input_title"];
	if ("input_summary" in patch) live["input_summary"] = patch["input_summary"];
	if ("input_specs" in patch) live["input_specs"] = patch["input_specs"];
	if ("input_view" in patch) live["input_view"] = patch["input_view"];
	if ("Overview" in patch) live["Overview"] = patch["Overview"];
	if ("Specs" in patch) live["Specs"] = patch["Specs"];
	if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
	if ("#childScope/3" in patch) layout_marko_update_default(patch["#childScope/3"], live["#childScope/3"]);
};
_update_content("__tests__/template.marko_2_content", $Specs_content__update);
_update_content("__tests__/template.marko_1_content", $Overview_content__update);
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// tags/layout.marko
const $template$1 = "<aside><button class=toggle> </button></aside><section><!></section>";
const $walks$1 = "D D mD%l";
const $input_content_direct = /* @__PURE__ */ _dynamic_tag_content("#text/2");
const $open = /* @__PURE__ */ _let("open/6", ($scope) => _text($scope["#text/1"], $scope.open ? "collapse" : "expand"));
const $setup__script$1 = _script_update("__tests__/tags/layout.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script$1($scope);
}
const $dynamicTag = _var_resume("__tests__/tags/layout.marko_0/update_dynamic_#text/2", /* @__PURE__ */ _dynamic_tag("#text/2"));
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var layout_default = /* @__PURE__ */ _template("__tests__/tags/layout.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<h1> </h1><button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `D l Db%l/${_w0}&`)($walks$1);
const $for_content__spec_name = ($scope, spec_name) => _text($scope["#text/0"], spec_name);
const $for_content__spec_value = ($scope, spec_value) => _text($scope["#text/1"], spec_value);
const $for_content__$params = ($scope, $params2) => {
	$for_content__spec_name($scope, $params2[0]?.name);
	$for_content__spec_value($scope, $params2[0]?.value);
};
const $for_content_content = _resume("__tests__/template.marko_3_content/update", [
	"<li><!> is <!></li>",
	"D%c%l",
	0
]);
const $Specs_content__for = /* @__PURE__ */ _for_of("#ul/0", $for_content_content[0], $for_content_content[1], $for_content_content[2], $for_content__$params);
const $Specs_content__input_specs = /* @__PURE__ */ _closure_get("input_specs", ($scope) => $Specs_content__for($scope, [$scope._.input_specs, function(spec) {
	return spec.name;
}]));
const $Specs_content__setup = ($scope) => {
	if (!_updating()) $Specs_content__input_specs($scope);
};
const $Specs_content = _content_resume("__tests__/template.marko_2_content", "<ul></ul>", " b", $Specs_content__setup);
const $Overview_content__input_title = /* @__PURE__ */ _closure_get("input_title", ($scope) => _text($scope["#text/0"], $scope._.input_title));
const $Overview_content__setup = ($scope) => {
	if (!_updating()) $Overview_content__input_title($scope);
	if (!_updating()) $Overview_content__input_summary($scope);
};
const $Overview_content__input_summary = /* @__PURE__ */ _closure_get("input_summary", ($scope) => _text($scope["#text/1"], $scope._.input_summary));
const $Overview_content = _content_resume("__tests__/template.marko_1_content", "<p>Overview of <!>: <!></p>", "Db%c%l", $Overview_content__setup);
const $count = /* @__PURE__ */ _let("count/10", ($scope) => _text($scope["#text/2"], $scope.count));
const $input_view__OR__Overview__OR__Specs = /* @__PURE__ */ _or(13, ($scope) => $input_content($scope["#childScope/3"], $scope.input_view === "specs" ? $scope.Specs : $scope.Overview), 2);
const $Overview = /* @__PURE__ */ _const("Overview", $input_view__OR__Overview__OR__Specs);
const $Specs = /* @__PURE__ */ _const("Specs", $input_view__OR__Overview__OR__Specs);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/3"]);
	$count($scope, 0);
	if (!_updating()) $Overview($scope, { content: $Overview_content($scope) });
	if (!_updating()) $Specs($scope, { content: $Specs_content($scope) });
	$setup__script($scope);
}
const $input_title__closure = /* @__PURE__ */ _closure($Overview_content__input_title);
const $input_title = /* @__PURE__ */ _const("input_title", ($scope) => {
	_text($scope["#text/0"], $scope.input_title);
	$input_title__closure($scope);
});
const $input_view = /* @__PURE__ */ _const("input_view", $input_view__OR__Overview__OR__Specs);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_summary($scope, input.summary);
	$input_specs($scope, input.specs);
	$input_view($scope, input.view);
};
const $input_summary__closure = /* @__PURE__ */ _closure($Overview_content__input_summary);
const $input_summary = /* @__PURE__ */ _const("input_summary", $input_summary__closure);
const $input_specs__closure = /* @__PURE__ */ _closure($Specs_content__input_specs);
const $input_specs = /* @__PURE__ */ _const("input_specs", $input_specs__closure);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
