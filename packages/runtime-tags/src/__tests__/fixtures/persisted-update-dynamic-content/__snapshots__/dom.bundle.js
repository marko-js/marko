// tags/layout.marko.persisted.mjs
const $open = _var_resume("b3", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand")));
const $setup__script$1 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
const $open_seed = _update_signal("b3");
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $open_seed, $patch["g"]);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
const $merge$1 = _resume("b1", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $count = _var_resume("a4", /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));
const $count_seed = _update_signal("a4");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("k" in $patch) _update_seed($live, $count_seed, $patch["k"]);
	if ("g" in $patch) $live["g"] = $patch["g"];
	if ("h" in $patch) $live["h"] = $patch["h"];
	if ("i" in $patch) $live["i"] = $patch["i"];
	if ("l" in $patch) $live["l"] = $patch["l"];
	if ("m" in $patch) $live["m"] = $patch["m"];
	$_holes($patch, $live);
	if ("d" in $patch) $merge$1($patch["d"], $live["d"]);
};
const $noop_update = () => {};
_update_content("a2", $noop_update);
_update_content("a1", $noop_update);
const $merge = _resume("a0", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/layout.marko
const $open = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand"));
const $setup__script$1 = _script_update("b2", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
const $for_content__spec_name = ($scope, spec_name) => _text($scope.a, spec_name);
const $for_content__spec_value = ($scope, spec_value) => _text($scope.b, spec_value);
const $for_content__$params = ($scope, $params2) => {
	$for_content__spec_name($scope, $params2[0]?.name);
	$for_content__spec_value($scope, $params2[0]?.value);
};
const $Specs_content__for = /*@__PURE__*/ _for_of(0, "<li><!> is <!></li>", "D%c%l", 0, $for_content__$params);
const $Specs_content__input_specs = /*@__PURE__*/ _closure_get(16, ($scope) => {
	if (!updating) $Specs_content__for($scope, [$scope._.i, function(spec) {
		return spec.name;
	}]);
});
const $Specs_content__setup = ($scope) => {
	if (!updating) $Specs_content__input_specs($scope);
};
const $Specs_content = _content_resume("a2", "<ul></ul>", " b", $Specs_content__setup);
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
const $Overview_content = _content_resume("a1", "<p>Overview of <!>: <!></p>", "Db%c%l", $Overview_content__setup);
const $count = /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k));
const $setup__script = _script_update("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));
