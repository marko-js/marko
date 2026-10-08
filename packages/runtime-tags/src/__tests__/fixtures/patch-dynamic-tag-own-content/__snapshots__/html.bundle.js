// template.marko
_shells({ a: "a !a2;b%b D ;<!><!><button> </button>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	const Content = { content: _content_resume("a0", ({ label }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let count = 0;
		_html(`<em>${_patch_text($scope1_id, "b", label)} ${_text_resume($scope1_id, "c", count, 2)}</em>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_scope($scope1_id, { g: count });
	}, $scope0_id) };
	const $tag = input.show ? Content : "span";
	const $input2 = { label: input.label };
	_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, _source_guard($scope0_reason, 0), void 0, _patch_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $scope0_reason, 0));
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_patch_write($scope0_id, "f", input.show, 1);
	_patch_write($scope0_id, "g", input.label, 1);
	_patch_write($scope0_id, "i", Content, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "a5");
	_patch_value($scope0_id, "a6", n, 1);
	$scope0_page ? _scope($scope0_id, {
		f: _source_if($scope0_reason, 2) && input.show,
		g: _source_if($scope0_reason, 1) && input.label,
		h: n,
		i: _source_if($scope0_reason, 0) && Content
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "a3", input.show), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "a4", input.label));
}, 1);
