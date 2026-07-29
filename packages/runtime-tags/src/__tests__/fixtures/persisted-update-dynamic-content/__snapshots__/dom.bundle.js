// tags/layout.marko.persisted.mjs
const $template$1 = "<aside><button class=toggle> </button></aside><section><!></section>";
const $walks$1 = "D D mD%l";
const $open = _var_resume("b3", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand")));
const $setup__script$1 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
_static_shells({
	"b1": [$template$1, $walks$1],
	"b": [$template$1, $walks$1]
});
const $open_seed = _update_signal("b3");
const $_holes$1 = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("b")) });
const $construct$1 = ($scope) => {
	_construct_effect($scope, $setup__script$1);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $open_seed, $patch["g"]);
	$_holes$1($patch, $live);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
_construct("b1", $construct$1);
const $merge$1 = _resume("b1", $update2$1);
_update_content("b", $merge$1, $construct$1);

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<h1> </h1><button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D l Db%l/${_w0}&%b`)($walks$1);
const $count = _var_resume("a4", /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.c, $scope.l)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.l + 1);
}));
_static_shells({
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a4");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $construct = ($scope) => {
	_text($scope.a, $scope.h);
	_text($scope.c, $scope.l);
	_construct_child($scope, "d", "b1");
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("l" in $patch) _update_seed($live, $count_seed, $patch["l"]);
	if ("h" in $patch) $live["h"] = $patch["h"];
	if ("i" in $patch) $live["i"] = $patch["i"];
	if ("j" in $patch) $live["j"] = $patch["j"];
	if ("m" in $patch) $live["m"] = $patch["m"];
	if ("n" in $patch) $live["n"] = $patch["n"];
	$_holes($patch, $live);
	if ("d" in $patch) $merge$1($patch["d"], $live["d"]);
};
_construct("a0", $construct);
const $noop_update = () => {};
_update_content("a5", $noop_update);
_update_content("a2", $noop_update);
_update_content("a1", $noop_update);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
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
const $Specs_content__for = /*@__PURE__*/ _for_of(0, "<li><!> is <!></li>", "D%c%", 0, $for_content__$params);
const $Specs_content__input_specs = /*@__PURE__*/ _closure_get(17, ($scope) => {
	if (!updating) $Specs_content__for($scope, [$scope._.j, function(spec) {
		return spec.name;
	}]);
});
const $Specs_content__setup = ($scope) => {
	if (!updating) $Specs_content__input_specs($scope);
};
const $Specs_content = _content_resume("a2", "<ul></ul>", " ", $Specs_content__setup);
const $Overview_content__input_title = /*@__PURE__*/ _closure_get(15, ($scope) => {
	if (!updating) _text($scope.a, $scope._.h);
});
const $Overview_content__setup = ($scope) => {
	if (!updating) $Overview_content__input_title($scope);
	if (!updating) $Overview_content__input_summary($scope);
};
const $Overview_content__input_summary = /*@__PURE__*/ _closure_get(16, ($scope) => {
	if (!updating) _text($scope.b, $scope._.i);
});
const $Overview_content = _content_resume("a1", "<p>Overview of <!>: <!></p>", "Db%c%", $Overview_content__setup);
const $count = /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.c, $scope.l));
const $setup__script = _script_update("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.l + 1);
}));
