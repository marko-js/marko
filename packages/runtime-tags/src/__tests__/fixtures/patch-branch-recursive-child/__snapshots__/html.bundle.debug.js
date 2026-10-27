// tags/tree.marko
const $template$1 = "<li><!><!></li>";
const $walks$1 = "D%b%l";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/tree.marko": "__tests__/tags/tree.marko;D%b%;<li><!><!></li>",
	"__tests__/tags/tree.marko_1*shell": "__tests__/tags/tree.marko_1*shell; ;<ul></ul>",
	"__tests__/tags/tree.marko_2*shell": /*@__PURE__*/ ((_w0) => `__tests__/tags/tree.marko_2*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<li>${_patch_text($scope0_id, "#text/0", input.node.name, void 0, $scope0_reason, 0)}`);
	_if(() => {
		if (input.node.children) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_for_of(input.node.children, (child) => {
				const $scope2_id = _scope_id();
				_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
				const $childScope = _patch_child($scope2_id, "#childScope/0", 0);
				$content({ node: child });
				_patch_child_end();
				$scope0_page && _scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/tree.marko", "5:8");
			}, 0, $scope1_id, "#ul/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/tree.marko_2*shell", $scope0_reason, 1);
			_html(`</ul>${_el_resume($scope1_id, "#ul/0")}`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/tree.marko_1_input_node_children#0:6/init");
			$scope0_page && _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/tree.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/tags/tree.marko_1*shell"], $scope0_reason, 1);
	_html("</li>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/tree.marko", 0);
};
var tree_default = _template("__tests__/tags/tree.marko", $content);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			tree_default({ node: input.tree });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_tree#0:4/init");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, { input_tree: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.tree }, "__tests__/template.marko", 0, { input_tree: ["input.tree"] }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.tree, !_server_guard($scope0_reason, 1));
}, 1);
