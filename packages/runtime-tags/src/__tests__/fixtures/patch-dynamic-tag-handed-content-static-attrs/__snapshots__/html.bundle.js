// tags/one.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var one_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, { class: "x" }, 1, 0, 0, $wg__input_content, $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_y = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_y__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a", 0);
	one_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_html(`A${_patch_text($scope1_id, "a", input.y, 2, $scope0_reason, 0)}`);
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_y__closures, _scope($scope1_id, { _: $wi__input_y && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a0");
	}, $scope0_id) });
	_patch_child_end();
	$scope0_page && _scope($scope0_id, {
		e: $wi__input_y && _unfilled_if($scope0_reason, 0) && $input_y__closures,
		a: _existing_scope($childScope)
	});
}, 1);
