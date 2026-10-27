// tags/my-for.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1;b%;<!><!><!>"
});
var my_for_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_to__OR__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render(), $cg__input_to = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_to(input.to, 0, 1, (...args) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "xb", args, !_server_guard($scope0_reason, 1));
		_dynamic_tag($scope1_id, "a", input.content, [...args], 1, 0, 1, $wg__input_to__OR__input_content, $scope0_reason, 0, 0, 2);
		(_filled_guard($scope0_reason, 2) && !$cg__input_to || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "b0", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">e", _filled_guard($scope0_reason, 1) && "b");
		$scope0_page && _write_if($scope0_reason, 0) && _scope($scope1_id, {
			b: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && args,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b1", $scope0_reason, 1);
	_filled_guard($scope0_reason, 2) && $cg__input_to ? _patch_fill($scope0_id, "vb2", input.content) : $cg__input_to && _patch_write($scope0_id, "xe", input.content, 1);
	$scope0_page && _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.content });
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a0: "a0; ; ",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a", 0);
	my_for_default({
		to: 5,
		content: _content_elide("a0", (i) => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(_patch_text($scope1_id, "a", i));
			$scope1_page && _scope($scope1_id, {});
		}, $scope0_id)
	});
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
