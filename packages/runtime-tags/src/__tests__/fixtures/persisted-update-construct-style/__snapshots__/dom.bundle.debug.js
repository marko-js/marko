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
const $Panel_content__walks = " Db%l b b", $Panel_content__template = "<button class=tap>tap <!></button><button class=grow>grow</button><style></style><div class=tinted>styled</div>";
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
const $About_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<p class=about>about</p>");
const $Panel_content__n = _var_resume("__tests__/template.marko_1_n/var", /*@__PURE__*/ _let_persisted("n/4", ($scope) => _text($scope["#text/1"], $scope.n)));
const $Panel_content__pad = _var_resume("__tests__/template.marko_1_pad/var", /*@__PURE__*/ _let_persisted("pad/5", ($scope) => _style_rule_item($scope["#style/3"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19update-19construct-19style-1btemplate-1amarko_1", $scope.pad)));
const $Panel_content__setup__script = _script_shared(($scope) => {
	_on($scope["#button/0"], "click", function() {
		$Panel_content__n($scope, $scope.n + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$Panel_content__pad($scope, "8px");
	});
});
const $Panel_content__setup = ($scope) => {
	_style_shell($scope, "#style/3");
	_style_rule_item($scope["#style/3"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19update-19construct-19style-1btemplate-1amarko_0", getTint?.());
	$Panel_content__n($scope, 0);
	$Panel_content__pad($scope, "4px");
	$Panel_content__setup__script($scope);
};
const $Panel_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", $Panel_content__template, $Panel_content__walks, $Panel_content__setup);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/4", ($scope) => _text($scope["#text/1"], $scope.count)));
const $Panel__OR__About = /*@__PURE__*/ _or(7, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "panel" ? $scope.Panel : $scope.About));
const $Panel = /*@__PURE__*/ _const_persisted("Panel", $Panel__OR__About);
const $About = /*@__PURE__*/ _const_persisted("About", $Panel__OR__About);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $Panel($scope, { content: $Panel_content($scope) });
	if (!updating) $About($scope, { content: $About_content($scope) });
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_1_update": [$Panel_content__template, $Panel_content__walks],
	"__tests__/template.marko_1_content": [$Panel_content__template, $Panel_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $n_seed = _update_signal("__tests__/template.marko_1_n/var");
const $pad_seed = _update_signal("__tests__/template.marko_1_pad/var");
const $Panel_content_holes = /*@__PURE__*/ _update_scopes({ "PatchAttr:style0:#style/3": _update_style_item("#style/3", "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19update-19construct-19style-1btemplate-1amarko_0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $Panel_content__construct = ($scope) => {
	_text($scope["#text/1"], $scope.n);
	_style_shell($scope, "#style/3");
	_style_rule_item($scope["#style/3"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19update-19construct-19style-1btemplate-1amarko_1", $scope.pad);
	_construct_effect($scope, $Panel_content__setup__script);
};
const $Panel_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $n_seed, $patch["n"]);
	if ("pad" in $patch) _update_seed($live, $pad_seed, $patch["pad"]);
	$Panel_content_holes($patch, $live);
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_child($scope, "#childScope/2", "__tests__/tags/layout.marko_0_update");
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("#childScope/2" in $patch) $merge$1($patch["#childScope/2"], $live["#childScope/2"]);
};
_construct("__tests__/template.marko_1_update", $Panel_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_2_content", $noop_update);
_update_content("__tests__/template.marko_1_content", $Panel_content__update, $Panel_content__construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.js
const getTint = typeof window === "undefined" ? () => "teal" : undefined;

// v:template.marko.css
var v_template_marko_default = "\n    .tinted {\n      color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19update-19construct-19style-1btemplate-1amarko_0);\n      padding: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19update-19construct-19style-1btemplate-1amarko_1);\n    }\n  ";

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
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
const $About_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<p class=about>about</p>");
const $Panel_content__n = /*@__PURE__*/ _let_persisted("n/4", ($scope) => _text($scope["#text/1"], $scope.n));
const $Panel_content__pad = /*@__PURE__*/ _let_persisted("pad/5", ($scope) => _style_rule_item($scope["#style/3"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19update-19construct-19style-1btemplate-1amarko_1", $scope.pad));
const $Panel_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$Panel_content__n($scope, $scope.n + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$Panel_content__pad($scope, "8px");
	});
});
const $Panel_content__setup = ($scope) => {
	_style_shell($scope, "#style/3");
	_style_rule_item($scope["#style/3"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19update-19construct-19style-1btemplate-1amarko_0", getTint?.());
	$Panel_content__n($scope, 0);
	$Panel_content__pad($scope, "4px");
	$Panel_content__setup__script($scope);
};
const $Panel_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<button class=tap>tap <!></button><button class=grow>grow</button><style></style><div class=tinted>styled</div>", " Db%l b ", $Panel_content__setup);
const $count = /*@__PURE__*/ _let_persisted("count/4", ($scope) => _text($scope["#text/1"], $scope.count));
const $Panel__OR__About = /*@__PURE__*/ _or(7, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "panel" ? $scope.Panel : $scope.About));
const $Panel = /*@__PURE__*/ _const_persisted("Panel", $Panel__OR__About);
const $About = /*@__PURE__*/ _const_persisted("About", $Panel__OR__About);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $Panel($scope, { content: $Panel_content($scope) });
	if (!updating) $About($scope, { content: $About_content($scope) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
