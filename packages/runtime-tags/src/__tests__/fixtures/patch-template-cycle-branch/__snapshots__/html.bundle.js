// tags/tree-b.marko
const $template$1 = "<div><!><!></div>";
const $walks$1 = "D%b%l";
const $setup$1 = [[], []];
_shells({
	c: "c;D%b%;<div><!><!></div>",
	c1: "c1;D%;<ul><!></ul>"
});
var tree_b_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_node_kid = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<div>${_patch_text($scope0_id, "a", input.node.name, void 0, $scope0_reason, 0)}`);
	_if(() => {
		if (input.node.kid) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_dynamic_tag($scope1_id, "a", tree_a_default, { node: input.node.kid }, 1, 0, 0, $wg__input_node_kid, $scope0_reason, 1);
			_html("</ul>");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "c0");
			_write_if($scope0_reason, 1) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, $wg__input_node_kid, void 0, void 0, void 0, ["c1"], $scope0_reason, 1);
	_html("</div>");
	_scope($scope0_id, {});
});

// tags/tree-a.marko
const $template = "<li><!><!></li>";
const $walks = "D%b%l";
const $setup = [[], []];
_shells({
	b: "b;D%b%;<li><!><!></li>",
	b1: /*@__PURE__*/ (() => `b1${_shell_marker(_shell_setup([[], []], ["a>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<ul>${_w0}</ul>`)($template$1)}`)()
});
var tree_a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<li>${_patch_text($scope0_id, "a", input.node.name, void 0, $scope0_reason, 0)}`);
	_if(() => {
		if (input.node.kid) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _patch_child($scope1_id, "a", 0);
			tree_b_default({ node: input.node.kid });
			_patch_child_end();
			_html("</ul>");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["b1"], $scope0_reason, 1);
	_html("</li>");
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a !; ;<ul></ul>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _patch_child($scope1_id, "a", 0);
			tree_a_default({ node: input.node });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.node }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.node, !_server_guard($scope0_reason, 1));
}, 1);
