// tags/layout.marko.persisted.mjs
const $template$1 = "<aside><button class=toggle> </button></aside><section><!></section>";
const $walks$1 = "D D mD%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $open = _var_resume("__tests__/tags/layout.marko_0_open/var", /*@__PURE__*/ _let_persisted("open/6", ($scope) => _text($scope["#text/1"], $scope.open ? "collapse" : "expand")));
const $setup__script$1 = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script$1($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var layout_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, $walks$1, $setup$1, $input$1);
_static_shells({
	"__tests__/tags/layout.marko_0_update": [$template$1, $walks$1],
	"__tests__/tags/layout.marko": [$template$1, $walks$1]
});
const $open_seed = _update_signal("__tests__/tags/layout.marko_0_open/var");
const $_holes$1 = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/1": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("#text/1")) });
const $construct$1 = ($scope) => {
	_construct_effect($scope, $setup__script$1);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("open" in $patch) _update_seed($live, $open_seed, $patch["open"]);
	$_holes$1($patch, $live);
	if ("ConditionalRenderer:#text/2" in $patch || "BranchScopes:#text/2" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
};
_construct("__tests__/tags/layout.marko_0_update", $construct$1);
const $merge$1 = _resume("__tests__/tags/layout.marko_0_update", $update2$1);
_update_content("__tests__/tags/layout.marko", $merge$1, $construct$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<h1> </h1><button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D l Db%l/${_w0}&%b`)($walks$1);
const $for_content__spec_name = ($scope, spec_name) => _text($scope["#text/0"], spec_name);
const $for_content__spec_value = ($scope, spec_value) => _text($scope["#text/1"], spec_value);
const $for_content__$params = ($scope, $params2) => {
	$for_content__spec_name($scope, $params2[0]?.name);
	$for_content__spec_value($scope, $params2[0]?.value);
};
const $Specs_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><!> is <!></li>", "D%c%", 0, $for_content__$params);
const $Specs_content__input_specs = /*@__PURE__*/ _closure_get("input_specs", ($scope) => {
	if (!updating) {
		$Specs_content__for($scope, [$scope._.input_specs, function(spec) {
			return spec.name;
		}]);
	}
});
const $Specs_content__setup = ($scope) => {
	if (!updating) $Specs_content__input_specs($scope);
};
const $Specs_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<ul></ul>", " ", $Specs_content__setup);
const $Overview_content__input_title = /*@__PURE__*/ _closure_get("input_title", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.input_title);
	}
});
const $Overview_content__setup = ($scope) => {
	if (!updating) $Overview_content__input_title($scope);
	if (!updating) $Overview_content__input_summary($scope);
};
const $Overview_content__input_summary = /*@__PURE__*/ _closure_get("input_summary", ($scope) => {
	if (!updating) {
		_text($scope["#text/1"], $scope._.input_summary);
	}
});
const $Overview_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p>Overview of <!>: <!></p>", "Db%c%", $Overview_content__setup);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/11", ($scope) => _text($scope["#text/2"], $scope.count)));
const $input_view__OR__Overview__OR__Specs = /*@__PURE__*/ _or(14, ($scope) => $input_content($scope["#childScope/3"], $scope.input_view === "specs" ? $scope.Specs : $scope.Overview), 2);
const $Overview = /*@__PURE__*/ _const_persisted("Overview", $input_view__OR__Overview__OR__Specs);
const $Specs = /*@__PURE__*/ _const_persisted("Specs", $input_view__OR__Overview__OR__Specs);
const $setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/3"]);
	$count($scope, 0);
	if (!updating) $Overview($scope, { content: $Overview_content($scope) });
	if (!updating) $Specs($scope, { content: $Specs_content($scope) });
	$setup__script($scope);
}
const $input_title__closure = /*@__PURE__*/ _closure($Overview_content__input_title);
const $input_title = /*@__PURE__*/ _const_persisted("input_title", ($scope) => {
	_text($scope["#text/0"], $scope.input_title);
	$input_title__closure($scope);
});
const $input_view = /*@__PURE__*/ _const_persisted("input_view", $input_view__OR__Overview__OR__Specs);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_summary($scope, input.summary);
	$input_specs($scope, input.specs);
	$input_view($scope, input.view);
};
const $input_summary__closure = /*@__PURE__*/ _closure($Overview_content__input_summary);
const $input_summary = /*@__PURE__*/ _const_persisted("input_summary", $input_summary__closure);
const $input_specs__closure = /*@__PURE__*/ _closure($Specs_content__input_specs);
const $input_specs = /*@__PURE__*/ _const_persisted("input_specs", $input_specs__closure);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $construct = ($scope) => {
	_text($scope["#text/0"], $scope.input_title);
	_text($scope["#text/2"], $scope.count);
	_construct_child($scope, "#childScope/3", "__tests__/tags/layout.marko_0_update");
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_title" in $patch) $live["input_title"] = $patch["input_title"];
	if ("input_summary" in $patch) $live["input_summary"] = $patch["input_summary"];
	if ("input_specs" in $patch) $live["input_specs"] = $patch["input_specs"];
	if ("Overview" in $patch) $live["Overview"] = $patch["Overview"];
	if ("Specs" in $patch) $live["Specs"] = $patch["Specs"];
	$_holes($patch, $live);
	if ("#childScope/3" in $patch) $merge$1($patch["#childScope/3"], $live["#childScope/3"]);
};
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_3_update", $noop_update);
_update_content("__tests__/template.marko_2_content", $noop_update);
_update_content("__tests__/template.marko_1_content", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/layout.marko
const $template$1 = "<aside><button class=toggle> </button></aside><section><!></section>";
const $walks$1 = "D D mD%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $open = /*@__PURE__*/ _let_persisted("open/6", ($scope) => _text($scope["#text/1"], $scope.open ? "collapse" : "expand"));
const $setup__script$1 = _script_update("__tests__/tags/layout.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script$1($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var layout_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<h1> </h1><button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D l Db%l/${_w0}&%b`)($walks$1);
const $for_content__spec_name = ($scope, spec_name) => _text($scope["#text/0"], spec_name);
const $for_content__spec_value = ($scope, spec_value) => _text($scope["#text/1"], spec_value);
const $for_content__$params = ($scope, $params2) => {
	$for_content__spec_name($scope, $params2[0]?.name);
	$for_content__spec_value($scope, $params2[0]?.value);
};
const $Specs_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><!> is <!></li>", "D%c%", 0, $for_content__$params);
const $Specs_content__input_specs = /*@__PURE__*/ _closure_get("input_specs", ($scope) => {
	if (!updating) {
		$Specs_content__for($scope, [$scope._.input_specs, function(spec) {
			return spec.name;
		}]);
	}
});
const $Specs_content__setup = ($scope) => {
	if (!updating) $Specs_content__input_specs($scope);
};
const $Specs_content = _content_resume("__tests__/template.marko_2_content", "<ul></ul>", " ", $Specs_content__setup);
const $Overview_content__input_title = /*@__PURE__*/ _closure_get("input_title", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.input_title);
	}
});
const $Overview_content__setup = ($scope) => {
	if (!updating) $Overview_content__input_title($scope);
	if (!updating) $Overview_content__input_summary($scope);
};
const $Overview_content__input_summary = /*@__PURE__*/ _closure_get("input_summary", ($scope) => {
	if (!updating) {
		_text($scope["#text/1"], $scope._.input_summary);
	}
});
const $Overview_content = _content_resume("__tests__/template.marko_1_content", "<p>Overview of <!>: <!></p>", "Db%c%", $Overview_content__setup);
const $count = /*@__PURE__*/ _let_persisted("count/11", ($scope) => _text($scope["#text/2"], $scope.count));
const $input_view__OR__Overview__OR__Specs = /*@__PURE__*/ _or(14, ($scope) => $input_content($scope["#childScope/3"], $scope.input_view === "specs" ? $scope.Specs : $scope.Overview), 2);
const $Overview = /*@__PURE__*/ _const_persisted("Overview", $input_view__OR__Overview__OR__Specs);
const $Specs = /*@__PURE__*/ _const_persisted("Specs", $input_view__OR__Overview__OR__Specs);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/3"]);
	$count($scope, 0);
	if (!updating) $Overview($scope, { content: $Overview_content($scope) });
	if (!updating) $Specs($scope, { content: $Specs_content($scope) });
	$setup__script($scope);
}
const $input_title__closure = /*@__PURE__*/ _closure($Overview_content__input_title);
const $input_title = /*@__PURE__*/ _const_persisted("input_title", ($scope) => {
	_text($scope["#text/0"], $scope.input_title);
	$input_title__closure($scope);
});
const $input_view = /*@__PURE__*/ _const_persisted("input_view", $input_view__OR__Overview__OR__Specs);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_summary($scope, input.summary);
	$input_specs($scope, input.specs);
	$input_view($scope, input.view);
};
const $input_summary__closure = /*@__PURE__*/ _closure($Overview_content__input_summary);
const $input_summary = /*@__PURE__*/ _const_persisted("input_summary", $input_summary__closure);
const $input_specs__closure = /*@__PURE__*/ _closure($Specs_content__input_specs);
const $input_specs = /*@__PURE__*/ _const_persisted("input_specs", $input_specs__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
