// template.marko
const $foo_content__walks = "D l%c";
const $foo_content__template = "<b> </b><!><!>";
_shells({
	a: /*@__PURE__*/ (() => `a;${((_w0) => `b/${_w0}&b`)($foo_content__walks)};${((_w0) => `<!>${_w0}<!>`)($foo_content__template)}`)(),
	a0: /*@__PURE__*/ (() => `a0 >>a>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($foo_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($foo_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_x = _client_guard($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	const foo = { content: _content("a1", (n) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $wi__n = _write_if($scope1_reason, 0);
		_html(`<b>${_patch_text($scope1_id, "a", input.x, void 0, $scope0_reason, 0)}</b>`);
		_if(() => {
			if (n) {
				const $scope2_id = _scope_id();
				_set_scope_reason(_mask_group($scope1_reason, 0) << 1);
				const $childScope = _patch_child($scope2_id, "a", 0, void 0, $scope0_id);
				foo.content(n - 1);
				_patch_child_end();
				$scope1_page && _scope($scope2_id, {
					_: $wi__n && _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope1_id, "b", 1, _write_guard($scope1_reason, 0), void 0, void 0, void 0, ["a0"], $scope1_reason, 0);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_x ? "a2" : "a3");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_x__closures, _scope($scope1_id, { _: ($wi__input_x || $wi__n) && _scope_with_id($scope0_id) }), $cg__input_x && "a3");
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope2 = _patch_child($scope0_id, "a", 1);
	foo.content(2);
	_patch_child_end();
	$scope0_page && _scope($scope0_id, {
		d: input.x,
		e: $wi__input_x && $input_x__closures,
		a: _existing_scope($childScope2)
	});
}, 1);
