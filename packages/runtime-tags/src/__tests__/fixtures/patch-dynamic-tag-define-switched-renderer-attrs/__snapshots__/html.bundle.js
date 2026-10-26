// template.marko
const $Wrap_content__walks = "D l%c";
const $Wrap_content__template = "<span> </span><!><!>";
_shells({
	a1: "a1,b",
	a0: "a0,a",
	a: /*@__PURE__*/ (() => `a !;${((_w0) => `b/${_w0}&b`)($Wrap_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Wrap_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_t = _client_guard($scope0_reason, 0), $wi__input_t = _write_if($scope0_reason, 0), $cg__input_x = _client_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_t__closures = /* @__PURE__ */ new Set();
	const A = { content: _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("a");
	}, $scope0_id) };
	const B = { content: _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html("b");
	}, $scope0_id) };
	const Wrap = { content: _content("a2", ({ n, content }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<span>${_patch_text($scope1_id, "a", n, void 0, $scope1_reason, 0)}</span>`);
		_dynamic_tag($scope1_id, "b", content, { title: input.t }, 0, 0, _write_guard($scope0_reason, 0) || _write_guard($scope1_reason, 1), void 0, 1, (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1)) << 1, 0, 0, 1, $scope1_reason);
		$scope1_page ? _subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1)) << 1, 0) && $wi__input_t && $input_t__closures, _scope($scope1_id, {
			f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 1) || _unfilled_if($scope0_reason, 2)) && content,
			_: ($wi__input_t || _write_if($scope1_reason, 1)) && _scope_with_id($scope0_id)
		}), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1)) << 1, 0) && "a4") : (_filled_guard($scope1_reason, 1) && $cg__input_t && _patch_fill($scope1_id, "va3", content, !_server_guard($scope1_reason, 1)), $cg__input_t && _content_withhold(content));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 2) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	Wrap.content({
		n: input.n,
		content: input.x === 1 ? A : B
	});
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.t,
		g: _unfilled_if($scope0_reason, 2) && A,
		h: _unfilled_if($scope0_reason, 2) && B,
		j: $wi__input_t && $input_t__closures,
		a: _existing_scope($childScope)
	}) : (_filled_guard($scope0_reason, 0) && $cg__input_x && _patch_fill($scope0_id, "va5", input.t, !_server_guard($scope0_reason, 0)), $cg__input_x && _content_withhold(input.t));
}, 1);
