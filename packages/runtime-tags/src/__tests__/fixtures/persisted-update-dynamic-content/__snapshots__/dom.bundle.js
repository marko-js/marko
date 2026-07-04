// tags/layout.marko
const $open = /* @__PURE__ */ _let(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand"));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
const $dynamicTag = _var_resume("b1", /* @__PURE__ */ _dynamic_tag(2));

// template.marko
const $for_content__spec_name = ($scope, spec_name) => _text($scope.a, spec_name);
const $for_content__spec_value = ($scope, spec_value) => _text($scope.b, spec_value);
const $for_content__$params = ($scope, $params2) => {
	$for_content__spec_name($scope, $params2[0]?.name);
	$for_content__spec_value($scope, $params2[0]?.value);
};
const $for_content_content = _resume("a0", [
	"<li><!> is <!></li>",
	"D%c%l",
	0
]);
const $Specs_content__for = /* @__PURE__ */ _for_of(0, $for_content_content[0], $for_content_content[1], $for_content_content[2], $for_content__$params);
const $Specs_content__input_specs = /* @__PURE__ */ _closure_get(8, ($scope) => $Specs_content__for($scope, [$scope._.i, function(spec) {
	return spec.name;
}]));
const $Specs_content = _content_resume("a2", "<ul></ul>", " b", $Specs_content__input_specs);
const $Overview_content__input_title = /* @__PURE__ */ _closure_get(6, ($scope) => _text($scope.a, $scope._.g));
const $Overview_content__setup = ($scope) => {
	$Overview_content__input_title($scope);
	$Overview_content__input_summary($scope);
};
const $Overview_content__input_summary = /* @__PURE__ */ _closure_get(7, ($scope) => _text($scope.b, $scope._.h));
const $Overview_content = _content_resume("a3", "<p>Overview of <!>: <!></p>", "Db%c%l", $Overview_content__setup);
const $count = /* @__PURE__ */ _let(10, ($scope) => _text($scope.c, $scope.k));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));

// tags/layout.marko.update.mjs
const $dynamic_update = _update_signal("b1");
const $update$1 = (patch, live) => {
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("Dc" in patch) _update_dynamic(patch, live, "Dc", "Ac", $dynamic_update);
};
var layout_marko_update_default = _resume("b2", $update$1);

// template.marko.update.mjs
const $for_update = _update_for(0, "a0", (branch, args) => $for_content__update(args[0], branch));
const $for_content__update = (patch, live) => {
	if ("c" in patch) live["c"] = patch["c"];
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("a" in patch) _text(live["a"], patch["a"]);
	if ("b" in patch) _text(live["b"], patch["b"]);
};
const $Specs_content__update = (patch, live) => {
	if ("Aa" in patch) $for_update(live, [patch["Aa"], "M"]);
};
const $Overview_content__update = (patch, live) => {
	if ("a" in patch) _text(live["a"], patch["a"]);
	if ("b" in patch) _text(live["b"], patch["b"]);
};
const $update = (patch, live) => {
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("g" in patch) live["g"] = patch["g"];
	if ("h" in patch) live["h"] = patch["h"];
	if ("i" in patch) live["i"] = patch["i"];
	if ("j" in patch) live["j"] = patch["j"];
	if ("l" in patch) live["l"] = patch["l"];
	if ("m" in patch) live["m"] = patch["m"];
	if ("a" in patch) _text(live["a"], patch["a"]);
	if ("d" in patch) layout_marko_update_default(patch["d"], live["d"]);
};
_update_content("a2", $Specs_content__update);
_update_content("a3", $Overview_content__update);
var template_marko_update_default = _resume("a1", $update);
