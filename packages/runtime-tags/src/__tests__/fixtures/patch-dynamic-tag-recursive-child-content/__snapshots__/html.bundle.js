// tags/wrap.marko
const $template = "<!><!><!>";
_shells({
	c: "c !;b%;<!><!><!>",
	c0: "c0;D%;<ul><!></ul>"
});
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 2);
			_html("</ul>");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "c1");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["c0"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vc2", input.content, !_server_guard($scope0_reason, 2)), _client_guard($scope0_reason, 1) && _content_withhold(input.content));
});

// tags/tree.marko
_shells({
	b0: "b0,",
	b: /*@__PURE__*/ (() => `b;${((_w0) => `D%b/${_w0}&l`)("b%c")};${((_w0) => `<li><!>${_w0}</li>`)($template)}`)()
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
		content: _content_resume("b0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _patch_child($scope1_id, "a");
			$content({ node: input.node.kid });
			_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "b1" : "b2");
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_node_kid__closures, _scope($scope1_id, {
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
	a0: "a0,",
	a: "a;D%;<ul><!></ul>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_deep__OR__input_node = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Card = { content: _content_resume("a0", ({ node }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<b>${_patch_text($scope1_id, "a", node.name)}</b>`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	_html("<ul>");
	_dynamic_tag($scope0_id, "a", input.deep ? tree_default : Card, { node: input.node }, 0, 0, $wg__input_deep__OR__input_node, void 0, 1, $scope0_reason, 0);
	_html("</ul>");
	_patch_write($scope0_id, "wd", input.deep, 1);
	_patch_write($scope0_id, "we", input.node, 1);
	_patch_write($scope0_id, "wf", Card, 1);
	$scope0_page && _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.deep,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.node,
		f: _unfilled_if($scope0_reason, 0) && Card
	});
}, 1);
