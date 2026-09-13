// tags/tree.marko
const $template = "<li><!><!></li>";
const $walks = "D%b%l";
_shells({
	b: "b;D%b%;<li><!><!></li>",
	b0: "b0; ;<ul></ul>",
	b1: /*@__PURE__*/ ((_w0, _w1) => `b1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template)
});
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_node_children = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<li>${_patch_text($scope0_id, "a", input.node.name, void 0, $scope0_reason, 0)}`);
	_if(() => {
		if (input.node.children) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_for_of(input.node.children, (child) => {
				const $scope2_id = _scope_id();
				_set_serialize_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
				const $childScope = _peek_scope_id();
				_patch_child($scope2_id, "a", $childScope);
				$content({ node: child });
				_scope($scope2_id, { a: _existing_scope($childScope) });
			}, 0, $scope1_id, "a", 1, $sg__input_node_children, $sg__input_node_children, void 0, void 0, "b1", $scope0_reason, 1);
			_html(`</ul>${_el_resume($scope1_id, "a", $sg__input_node_children)}`);
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_node_children, $sg__input_node_children, void 0, void 0, ["b0"], $scope0_reason, 1);
	_html("</li>");
	$scope0_page && _scope($scope0_id, { g: _source_if($scope0_reason, 1) && input.node?.children });
};
var tree_default = _template_persisted("b", $content, 0, () => [$content]);

// template.marko
_shells({
	a: "a; ;<main></main>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template)
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			tree_default({ node: input.tree });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, { e: input.tree });
}, 1, () => [tree_default]);
