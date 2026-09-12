// tags/tree.marko
const $template$1 = "<li><!><!></li>";
const $walks$1 = "D%b%l";
_shells({
	"__tests__/tags/tree.marko": "__tests__/tags/tree.marko;D%b%;<li><!><!></li>",
	"__tests__/tags/tree.marko_1*shell": "__tests__/tags/tree.marko_1*shell; ;<ul></ul>",
	"__tests__/tags/tree.marko_2*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/tree.marko_2*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1)
});
const $content = (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_node_children = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<li>${_patch_text($scope0_id, "#text/0", input.node.name, void 0, $scope0_owned, 0)}`);
	_if(() => {
		if (input.node.children) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_for_of(input.node.children, (child) => {
				const $scope2_id = _scope_id();
				_set_serialize_reason({
					0: _mask_group($scope0_owned, 1),
					1: _mask_group($scope0_owned, 1)
				});
				const $childScope = _peek_scope_id();
				_patch_child($scope2_id, "#childScope/0", $childScope);
				$content({ node: child });
				_scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/tree.marko", "5:8");
			}, 0, $scope1_id, "#ul/0", 1, $sg__input_node_children, $sg__input_node_children, void 0, void 0, "__tests__/tags/tree.marko_2*shell", $scope0_owned, 1);
			_html(`</ul>${_el_resume($scope1_id, "#ul/0", $sg__input_node_children)}`);
			$scope0_reason && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/tree.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_node_children, $sg__input_node_children, void 0, void 0, ["__tests__/tags/tree.marko_1*shell"], $scope0_owned, 1);
	_html("</li>");
	$scope0_reason && _scope($scope0_id, { input_node_children: _source_if($scope0_reason, 1) && input.node?.children }, "__tests__/tags/tree.marko", 0, { input_node_children: ["input.node.children"] });
};
var tree_default = _template_persisted("__tests__/tags/tree.marko", $content, 0, () => [$content]);

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1)
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({
				0: _mask_group($scope0_owned, 2),
				1: _mask_group($scope0_owned, 2)
			});
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			tree_default({ node: input.tree });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 1);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, { input_tree: input.tree }, "__tests__/template.marko", 0, { input_tree: ["input.tree"] });
}, 1, () => [tree_default]);
