// tags/layout.marko.persisted.mjs
const $template$1 = "<section class=shell><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var layout_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, "D%l", $setup$1, $input);
_static_shells({
	"__tests__/tags/layout.marko_0_update": [$template$1, "D%l"],
	"__tests__/tags/layout.marko": [$template$1, "D%l"]
});
const $update2$1 = ($patch, $live) => {
	if ("ConditionalRenderer:#text/0" in $patch || "BranchScopes:#text/0" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
const $merge$1 = _resume("__tests__/tags/layout.marko_0_update", $update2$1);
_update_content("__tests__/tags/layout.marko", $merge$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $Panel_content__walks = " bD l", $Panel_content__template = "<div class=box>panel</div><span class=note> </span>", $if_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%b`)("D%l"), $if_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $About_content = /*@__PURE__*/ _content("__tests__/template.marko_3_content", "<p class=about>about</p>");
const $if_content__Panel__OR__About = /*@__PURE__*/ _or(2, ($scope) => $input_content($scope["#childScope/0"], $scope.$global.view === "panel" ? $scope._.Panel : $scope._.About));
const $if_content__Panel = /*@__PURE__*/ _if_closure("#text/2", 0, $if_content__Panel__OR__About);
const $if_content__setup = ($scope) => {
	$if_content__Panel._($scope);
	$if_content__About._($scope);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
};
const $if_content__About = /*@__PURE__*/ _if_closure("#text/2", 0, $if_content__Panel__OR__About);
const $Panel_content__setup__script = _script_shared(($scope) => {
	_el_read($scope["#div/0"]);
	document.body.dataset.panelRuns = String(+(document.body.dataset.panelRuns || 0) + 1);
});
const $Panel_content__setup = ($scope) => {
	_text($scope["#text/1"], getNote?.());
	$Panel_content__setup__script($scope);
};
const $Panel_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", $Panel_content__template, $Panel_content__walks, $Panel_content__setup);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count)));
const $if = /*@__PURE__*/ _if("#text/2", $if_content__template, $if_content__walks, $if_content__setup);
const $veto = _var_resume("__tests__/template.marko_0_veto/var", /*@__PURE__*/ _let_persisted("veto/4", ($scope) => $if($scope, !$scope.veto ? 0 : 1)));
const $Panel = /*@__PURE__*/ _const_persisted("Panel");
const $About = /*@__PURE__*/ _const_persisted("About");
const $setup__script = _script_shared(($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, $scope.count + 1);
	});
	if ($scope.$global.veto) $veto($scope, true);
});
function $setup($scope) {
	$count($scope, 0);
	$veto($scope, false);
	if (!updating) $Panel($scope, { content: $Panel_content($scope) });
	if (!updating) $About($scope, { content: $About_content($scope) });
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_2_update": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_2_content": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_1_update": [$Panel_content__template, $Panel_content__walks],
	"__tests__/template.marko_1_content": [$Panel_content__template, $Panel_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $Panel_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $veto_seed = _update_signal("__tests__/template.marko_0_veto/var");
const $if_content__construct = ($scope) => {
	_construct_child($scope, "#childScope/0", "__tests__/tags/layout.marko_0_update");
};
const $if_content__update = ($patch, $live) => {
	if ("#childScope/0" in $patch) $merge$1($patch["#childScope/0"], $live["#childScope/0"]);
};
const $Panel_content__construct = ($scope) => {
	_construct_effect($scope, $Panel_content__setup__script);
};
const $Panel_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$Panel_content_holes($patch, $live);
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
	if ("ConditionalRenderer:#text/2" in $scope) _update_if($scope, $scope, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", [$if_content__update], ["__tests__/template.marko_2_update"]);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("veto" in $patch) _update_seed($live, $veto_seed, $patch["veto"]);
	if ("Panel" in $patch) {
		$live["Panel"] = $patch["Panel"];
		$if_content__Panel($live);
	}
	if ("About" in $patch) {
		$live["About"] = $patch["About"];
		$if_content__About($live);
	}
	if ("BranchScopes:#text/2" in $patch) _update_if_state($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", [$if_content__update]);
};
_construct("__tests__/template.marko_2_update", $if_content__construct);
_construct("__tests__/template.marko_1_update", $Panel_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_3_content", $noop_update);
_update_content("__tests__/template.marko_2_update", $if_content__update);
_update_content("__tests__/template.marko_1_content", $Panel_content__update, $Panel_content__construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.js
const getNote = typeof window === "undefined" ? () => "fresh" : undefined;

// tags/layout.marko
const $template$1 = "<section class=shell><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var layout_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, "D%l", $setup$1, $input);

// template.marko
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $About_content = _content_resume("__tests__/template.marko_3_content", "<p class=about>about</p>");
const $if_content__Panel__OR__About = /*@__PURE__*/ _or(2, ($scope) => $input_content($scope["#childScope/0"], $scope.$global.view === "panel" ? $scope._.Panel : $scope._.About));
const $if_content__Panel = /*@__PURE__*/ _if_closure("#text/2", 0, $if_content__Panel__OR__About);
const $if_content__setup = ($scope) => {
	$if_content__Panel._($scope);
	$if_content__About._($scope);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
};
const $if_content__About = /*@__PURE__*/ _if_closure("#text/2", 0, $if_content__Panel__OR__About);
const $Panel_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => {
	_el_read($scope["#div/0"]);
	document.body.dataset.panelRuns = String(+(document.body.dataset.panelRuns || 0) + 1);
});
const $Panel_content__setup = ($scope) => {
	_text($scope["#text/1"], getNote?.());
	$Panel_content__setup__script($scope);
};
const $Panel_content = _content_resume("__tests__/template.marko_1_content", "<div class=box>panel</div><span class=note> </span>", " bD ", $Panel_content__setup);
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&%b`)("D%l"), $if_content__setup);
const $veto = /*@__PURE__*/ _let_persisted("veto/4", ($scope) => $if($scope, !$scope.veto ? 0 : 1));
const $Panel = /*@__PURE__*/ _const_persisted("Panel");
const $About = /*@__PURE__*/ _const_persisted("About");
const $setup__script = _script_refresh("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, $scope.count + 1);
	});
	if ($scope.$global.veto) $veto($scope, true);
});
function $setup($scope) {
	$count($scope, 0);
	$veto($scope, false);
	if (!updating) $Panel($scope, { content: $Panel_content($scope) });
	if (!updating) $About($scope, { content: $About_content($scope) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
