// tags/layout.marko
const $open = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand"));
const $setup__script$1 = _script_update("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
enableBranchesPersisted();

// template.marko
const $for_content__spec_name = ($scope, spec_name) => _text($scope.a, spec_name);
const $for_content__spec_value = ($scope, spec_value) => _text($scope.b, spec_value);
const $for_content__$params = ($scope, $params2) => {
	$for_content__spec_name($scope, $params2[0]?.name);
	$for_content__spec_value($scope, $params2[0]?.value);
};
const $Specs_content__for = /*@__PURE__*/ _for_of(0, "<li><!> is <!></li>", "D%c%l", 0, $for_content__$params);
const $Specs_content__input_specs = /*@__PURE__*/ _closure_get(16, ($scope) => {
	if (!updating) {
		if (!updating) $Specs_content__for($scope, [$scope._.i, function(spec) {
			return spec.name;
		}]);
	}
});
const $Specs_content__setup = ($scope) => {
	if (!updating) $Specs_content__input_specs($scope);
};
const $Specs_content = _content_resume("a4", "<ul></ul>", " b", $Specs_content__setup);
const $Overview_content__input_title = /*@__PURE__*/ _closure_get(14, ($scope) => {
	if (!updating) _text($scope.a, $scope._.g);
});
const $Overview_content__setup = ($scope) => {
	if (!updating) $Overview_content__input_title($scope);
	if (!updating) $Overview_content__input_summary($scope);
};
const $Overview_content__input_summary = /*@__PURE__*/ _closure_get(15, ($scope) => {
	if (!updating) _text($scope.b, $scope._.h);
});
const $Overview_content = _content_resume("a2", "<p>Overview of <!>: <!></p>", "Db%c%l", $Overview_content__setup);
const $count = /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k));
const $setup__script = _script_update("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));
enableBranchesPersisted();

// tags/layout.marko.update.mjs
const $open_seed = _update_signal("b2");
const $update$1 = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $open_seed, patch["g"]);
	if ("Dc" in patch) _update_dynamic(patch, live, "Dc", "Ac");
};
var layout_marko_update_default = _resume("b3", $update$1);

// template.marko.update.mjs
const $for_update = _update_for(0, "a3", (branch, args) => _update_scope(args[0], branch));
const $count_seed = _update_signal("a1");
const $Specs_content__update = (patch, live) => {
	if ("Aa" in patch) $for_update(live, [patch["Aa"], "M"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("k" in patch) _update_seed(live, $count_seed, patch["k"]);
	if ("g" in patch) live["g"] = patch["g"];
	if ("h" in patch) live["h"] = patch["h"];
	if ("i" in patch) live["i"] = patch["i"];
	if ("l" in patch) live["l"] = patch["l"];
	if ("m" in patch) live["m"] = patch["m"];
	_update_scope(patch, live);
	if ("d" in patch) layout_marko_update_default(patch["d"], live["d"]);
};
_update_content("a4", $Specs_content__update);
_update_content("a2", _update_scope);
var template_marko_update_default = _resume("a5", $update);
