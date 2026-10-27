// template.marko
_shells({
	a0: "a0",
	a: "a !a3 a4 a5;D b b D ;<main><div></div><section></section><button> </button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const extra = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $scope1_page = _page_render();
		_html(`<em>${_patch_text($scope1_id, "a", input.title, void 0, $scope0_reason, 0)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, _client_guard($scope0_reason, 0) ? "a1" : "a2");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html(`<main><div${_patch_attrs(input.attrs, "a", $scope0_id, "div", void 0, $scope0_reason, 1)}>`);
	_patch_attr_content("a", $scope0_id, extra, void 0, 0, 0);
	_html(`</div>${_el_resume($scope0_id, "a")}<section`);
	_patch_attrs_content({
		...input.attrs,
		content: extra
	}, "b", $scope0_id, "section", void 0, void 0, $scope0_reason, 1);
	_html(`</section>${_el_resume($scope0_id, "b")}<button>${_text_resume($scope0_id, "d", count)}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a3");
	_script($scope0_id, "a4");
	_script($scope0_id, "a5");
	$scope0_page ? _scope($scope0_id, {
		g: input.title,
		i: count,
		j: _unfilled_if($scope0_reason, 1) && extra,
		l: _write_if($scope0_reason, 0) && $input_title__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va6", input.title, !_server_guard($scope0_reason, 0));
}, 1);
