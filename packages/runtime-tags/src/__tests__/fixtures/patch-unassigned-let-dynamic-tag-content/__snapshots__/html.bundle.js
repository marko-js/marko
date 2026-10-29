// tags/wrap.marko
_shells({ b: "b !b0; D l%;<button> </button><!><!>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c");
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", n, 1);
	_scope($scope0_id, {
		f: input.content,
		g: n
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
_shells({ a: "a !;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", wrap_default, {}, 2, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>${_text_resume($scope1_id, "a", input.w, 1, $scope0_reason, 0)}</p>`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_w__closures, _scope($scope1_id, { _: $wi__input_w && _scope_with_id($scope0_id) }), "a1");
	}, $scope0_id, ($scope) => $scope0_page ? [{ d: input.w }] : []), 0, 0, 0, 0);
	_scope($scope0_id, { f: $wi__input_w && $input_w__closures }) || _filled_guard($scope0_reason, 0) && _content_withheld("a0", $scope0_id) && _patch_fill($scope0_id, "va2", input.w, !_server_guard($scope0_reason, 0));
	$wi__input_w && _resume_branch($scope0_id);
}, 1);
