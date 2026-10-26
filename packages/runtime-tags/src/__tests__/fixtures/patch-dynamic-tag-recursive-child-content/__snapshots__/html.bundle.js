// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	c: "c !;b%;<!><!><!>",
	c1: "c1;D%;<ul><!></ul>"
});
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 2);
			_html("</ul>");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "c0");
			$scope0_page && _write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["c1"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }) : (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "vc2", input.content, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.content));
});

// tags/tree.marko
const $template = /*@__PURE__*/ ((_w0) => `<li><!>${_w0}</li>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)("b%c");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({
	b2: /*@__PURE__*/ ((_w0) => `b2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => `D%b/${_w0}&l`)("b%c")};${((_w0) => `<li><!>${_w0}</li>`)($template$1)}`)()
});
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_node_kid = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_node_kid__closures = /* @__PURE__ */ new Set();
	_html(`<li>${_patch_text($scope0_id, "a", input.node.name, void 0, $scope0_reason, 0)}`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope2 = _patch_child($scope0_id, "b");
	wrap_default({
		show: !!input.node.kid,
		content: _content_resume("b2", () => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _patch_child($scope1_id, "a");
			$content({ node: input.node.kid });
			_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "b0" : "b1");
			$scope1_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_node_kid__closures, _scope($scope1_id, {
				_: $wi__input_node_kid && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			}));
		}, $scope0_id)
	});
	_html("</li>");
	$scope0_page && _scope($scope0_id, {
		h: $wi__input_node_kid && $input_node_kid__closures,
		b: _existing_scope($childScope2)
	});
};
var tree_default = _template("b", $content);

// template.marko
_shells({
	a0: "a0;D ;<b> </b>",
	a: "a !;D%;<ul><!></ul>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_deep__OR__input_node = _write_guard($scope0_reason, 0), $cg__input_node = _client_guard($scope0_reason, 2), $cg__input_deep = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Card = { content: _content_resume("a0", ({ node }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $scope1_page = _page_render();
		_html(`<b>${_patch_text($scope1_id, "a", node.name)}</b>`);
		$scope1_page && _scope($scope1_id, {});
	}, $scope0_id) };
	_html("<ul>");
	_dynamic_tag($scope0_id, "a", input.deep ? tree_default : Card, { node: input.node }, 0, 0, $wg__input_deep__OR__input_node, void 0, 1, $scope0_reason, 0);
	_html("</ul>");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.deep,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.node,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && Card
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_node && _patch_fill($scope0_id, "va1", input.deep, !_server_guard($scope0_reason, 1)), $cg__input_node && _content_withhold(input.deep), _filled_guard($scope0_reason, 2) && $cg__input_deep && _patch_fill($scope0_id, "va2", input.node, !_server_guard($scope0_reason, 2)), $cg__input_deep && _content_withhold(input.node));
}, 1);
