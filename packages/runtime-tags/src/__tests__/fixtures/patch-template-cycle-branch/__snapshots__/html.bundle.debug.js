// tags/tree-b.marko
const $template$2 = "<div><!><!></div>";
const $walks$2 = "D%b%l";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/tree-b.marko": "__tests__/tags/tree-b.marko;D%b%;<div><!><!></div>",
	"__tests__/tags/tree-b.marko_1*shell": "__tests__/tags/tree-b.marko_1*shell;D%;<ul><!></ul>"
});
var tree_b_default = _template("__tests__/tags/tree-b.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_node_kid = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.node.name, 1, $scope0_reason, 0)}`);
	_if(() => {
		if (input.node.kid) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_dynamic_tag($scope1_id, "#text/0", tree_a_default, { node: input.node.kid }, 1, 0, 0, $wg__input_node_kid, $scope0_reason, 1);
			_html("</ul>");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/tree-b.marko_1_input_node_kid#0:6/init");
			_write_if($scope0_reason, 1) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/tree-b.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $wg__input_node_kid, 1, 0, 0, ["__tests__/tags/tree-b.marko_1*shell"], $scope0_reason, 1);
	_html("</div>");
	_scope($scope0_id, {}, "__tests__/tags/tree-b.marko", 0);
});

// tags/tree-a.marko
const $template$1 = "<li><!><!></li>";
const $walks$1 = "D%b%l";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/tree-a.marko": "__tests__/tags/tree-a.marko;D%b%;<li><!><!></li>",
	"__tests__/tags/tree-a.marko_1*shell": /*@__PURE__*/ (() => `__tests__/tags/tree-a.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$2)};${/*@__PURE__*/ ((_w0) => `<ul>${_w0}</ul>`)($template$2)}`)()
});
var tree_a_default = _template("__tests__/tags/tree-a.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<li>${_text_resume($scope0_id, "#text/0", input.node.name, 1, $scope0_reason, 0)}`);
	_if(() => {
		if (input.node.kid) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			tree_b_default({ node: input.node.kid });
			_patch_child_end();
			_html("</ul>");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/tree-a.marko_1_input_node_kid#0:6/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/tree-a.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/tags/tree-a.marko_1*shell"], $scope0_reason, 1);
	_html("</li>");
	_scope($scope0_id, {}, "__tests__/tags/tree-a.marko", 0);
});

// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !; ;<ul></ul>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			tree_a_default({ node: input.node });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_node#0:4/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:6");
			return 0;
		}
	}, $scope0_id, "#ul/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0", $wg__input_show)}`);
	_scope($scope0_id, { input_node: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.node }, "__tests__/template.marko", 0, { input_node: ["input.node"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.node, !_server_guard($scope0_reason, 1));
}, 1);
