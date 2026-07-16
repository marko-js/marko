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
const $open_seed = _update_signal("__tests__/tags/layout.marko_0_open/var");
const $update2$1 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("open" in _patch) _update_seed(_live, $open_seed, _patch["open"]);
	if ("ConditionalRenderer:#text/2" in _patch || "BranchScopes:#text/2" in _patch) _update_dynamic(_patch, _live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
};
const _merge$1 = _resume("__tests__/tags/layout.marko_0_update", $update2$1);
_update_content("__tests__/tags/layout.marko", _merge$1);
function _patch2$1(_fail) {
	return patch(_merge$1, _fail);
}

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<h1> </h1><button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D l Db%l/${_w0}&`)($walks$1);
const $for_content__spec_name = ($scope, spec_name) => _text($scope["#text/0"], spec_name);
const $for_content__spec_value = ($scope, spec_value) => _text($scope["#text/1"], spec_value);
const $for_content__$params = ($scope, $params2) => {
	$for_content__spec_name($scope, $params2[0]?.name);
	$for_content__spec_value($scope, $params2[0]?.value);
};
const $Specs_content__for = 0;
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
const $Specs_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<ul></ul>", " b", $Specs_content__setup);
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
const $Overview_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p>Overview of <!>: <!></p>", "Db%c%l", $Overview_content__setup);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/10", ($scope) => _text($scope["#text/2"], $scope.count)));
const $input_view__OR__Overview__OR__Specs = /*@__PURE__*/ _or(13, ($scope) => $input_content($scope["#childScope/3"], $scope.input_view === "specs" ? $scope.Specs : $scope.Overview), 2);
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
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1")
});
const $for_update = _update_for_keyed("#ul/0", ($p, $l) => $for_content_holes($p, $l));
const $Overview_content_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1")
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $Specs_content__update = (_patch, _live) => {
	if ("BranchScopes:#ul/0" in _patch) $for_update(_live, [_patch["BranchScopes:#ul/0"], "#LoopKey"]);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("input_title" in _patch) _live["input_title"] = _patch["input_title"];
	if ("input_summary" in _patch) _live["input_summary"] = _patch["input_summary"];
	if ("input_specs" in _patch) _live["input_specs"] = _patch["input_specs"];
	if ("Overview" in _patch) _live["Overview"] = _patch["Overview"];
	if ("Specs" in _patch) _live["Specs"] = _patch["Specs"];
	$_holes(_patch, _live);
	if ("#childScope/3" in _patch) _merge$1(_patch["#childScope/3"], _live["#childScope/3"]);
};
_update_content("__tests__/template.marko_2_content", $Specs_content__update);
_update_content("__tests__/template.marko_1_content", $Overview_content_holes);
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
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
const $template = /*@__PURE__*/ ((_w0) => `<h1> </h1><button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D l Db%l/${_w0}&`)($walks$1);
const $for_content__spec_name = ($scope, spec_name) => _text($scope["#text/0"], spec_name);
const $for_content__spec_value = ($scope, spec_value) => _text($scope["#text/1"], spec_value);
const $for_content__$params = ($scope, $params2) => {
	$for_content__spec_name($scope, $params2[0]?.name);
	$for_content__spec_value($scope, $params2[0]?.value);
};
const $Specs_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><!> is <!></li>", "D%c%l", 0, $for_content__$params);
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
const $Specs_content = _content_resume("__tests__/template.marko_2_content", "<ul></ul>", " b", $Specs_content__setup);
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
const $Overview_content = _content_resume("__tests__/template.marko_1_content", "<p>Overview of <!>: <!></p>", "Db%c%l", $Overview_content__setup);
const $count = /*@__PURE__*/ _let_persisted("count/10", ($scope) => _text($scope["#text/2"], $scope.count));
const $input_view__OR__Overview__OR__Specs = /*@__PURE__*/ _or(13, ($scope) => $input_content($scope["#childScope/3"], $scope.input_view === "specs" ? $scope.Specs : $scope.Overview), 2);
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
