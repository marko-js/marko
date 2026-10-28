// tags/wrap.marko
const $template$3 = "<!><!><!>";
const $walks$3 = "b%c";
const $setup$3 = [[], []];
_shells({
	"__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko !;b%;<!><!><!>",
	"__tests__/tags/wrap.marko_1*shell": "__tests__/tags/wrap.marko_1*shell;D%;<ul><!></ul>"
});
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_html("</ul>");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/wrap.marko_1_input_content#0:4/init");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/wrap.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/wrap.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, { input_content: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }, "__tests__/tags/wrap.marko", 0, { input_content: ["input.content"] }) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/wrap.marko_fill0", input.content, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.content));
});

// tags/tree-b.marko
const $template$2 = /*@__PURE__*/ ((_w0) => `<div><!>${_w0}</div>`)($template$3);
const $walks$2 = /*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)("b%c");
const $setup$2 = _shell_setup([[], []], ["#childScope/1>", $setup$3]);
_shells({
	"__tests__/tags/tree-b.marko_1*content": "__tests__/tags/tree-b.marko_1*content;b%;<!><!><!>",
	"__tests__/tags/tree-b.marko": /*@__PURE__*/ (() => `__tests__/tags/tree-b.marko${_shell_marker($setup$2)};${((_w0) => `D%b/${_w0}&l`)("b%c")};${((_w0) => `<div><!>${_w0}</div>`)($template$3)}`)()
});
var tree_b_default = _template("__tests__/tags/tree-b.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_node_kid = _write_guard($scope0_reason, 1), $wi__input_node_kid = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_node_kid__closures = new Set();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.node.name, void 0, $scope0_reason, 0)}`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/1", 1);
	wrap_default({
		show: !!input.node.kid,
		content: _content_resume("__tests__/tags/tree-b.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", tree_a_default, { node: input.node.kid }, 1, 0, 0, $wg__input_node_kid, $scope0_reason, 1);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "__tests__/tags/tree-b.marko_1_input_node_kid#0:6/init" : "__tests__/tags/tree-b.marko_1_input_node_kid#0:6/subscribe");
			$wi__input_node_kid && _subscribe(_unfilled_if($scope0_reason, 1) && $input_node_kid__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/tree-b.marko", "2:4"));
			$wg__input_node_kid || $wi__input_node_kid && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_patch_child_end();
	_html("</div>");
	_scope($scope0_id, {
		"ClosureScopes:input_node_kid/7": $wi__input_node_kid && $input_node_kid__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/tags/tree-b.marko", 0);
});

// tags/tree-a.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<li><!>${_w0}</li>`)($template$3);
const $walks$1 = /*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)("b%c");
const $setup$1 = _shell_setup([[], []], ["#childScope/1>", $setup$3]);
_shells({
	"__tests__/tags/tree-a.marko_1*content": /*@__PURE__*/ ((_w0) => `__tests__/tags/tree-a.marko_1*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2)};${_w0}`)($template$2),
	"__tests__/tags/tree-a.marko": /*@__PURE__*/ (() => `__tests__/tags/tree-a.marko${_shell_marker($setup$1)};${((_w0) => `D%b/${_w0}&l`)("b%c")};${((_w0) => `<li><!>${_w0}</li>`)($template$3)}`)()
});
var tree_a_default = _template("__tests__/tags/tree-a.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_node_kid = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_node_kid__closures = new Set();
	_html(`<li>${_text_resume($scope0_id, "#text/0", input.node.name, void 0, $scope0_reason, 0)}`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1", 1);
	wrap_default({
		show: !!input.node.kid,
		content: _content_resume("__tests__/tags/tree-a.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			tree_b_default({ node: input.node.kid });
			_patch_child_end();
			_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "__tests__/tags/tree-a.marko_1_input_node_kid#0:6/init" : "__tests__/tags/tree-a.marko_1_input_node_kid#0:6/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_node_kid__closures, _scope($scope1_id, {
				_: $wi__input_node_kid && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/tree-a.marko", "2:4"));
		}, $scope0_id)
	});
	_patch_child_end();
	_html("</li>");
	_scope($scope0_id, {
		"ClosureScopes:input_node_kid/7": $wi__input_node_kid && $input_node_kid__closures,
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/tags/tree-a.marko", 0);
});

// template.marko
const $template = "<ul><!></ul>";
const $walks = "D%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<b> </b>",
	"__tests__/template.marko": "__tests__/template.marko !;D%;<ul><!></ul>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_deep__OR__input_node = _write_guard($scope0_reason, 0), $cg__input_node = _client_guard($scope0_reason, 2), $cg__input_deep = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const Card = { content: _content_resume("__tests__/template.marko_1*content", ({ node }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<b>${_text_resume($scope1_id, "#text/0", node.name, void 0, 4, 0)}</b>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
	}, $scope0_id) };
	_html("<ul>");
	_dynamic_tag($scope0_id, "#text/0", input.deep ? tree_a_default : Card, { node: input.node }, 1, 0, 0, $wg__input_deep__OR__input_node, $scope0_reason, 0);
	_html("</ul>");
	_scope($scope0_id, {
		input_deep: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.deep,
		input_node: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.node,
		Card: _unfilled_if($scope0_reason, 0) && Card
	}, "__tests__/template.marko", 0, {
		input_deep: ["input.deep"],
		input_node: ["input.node"],
		Card: "2:9"
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_node && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.deep, !_server_guard($scope0_reason, 1)), $cg__input_node && _content_withhold(input.deep), _filled_guard($scope0_reason, 2) && $cg__input_deep && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.node, !_server_guard($scope0_reason, 2)), $cg__input_deep && _content_withhold(input.node));
}, 1);
