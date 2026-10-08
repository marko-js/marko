// template.marko
_shells({ a: "a !a1;b%b D ;<!><!><button> </button>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	const $tag = input.tag;
	const $input2 = {
		title: input.title,
		onClick: _resume(function() {
			n = input.title.length;
		}, "a0", $scope0_id)
	};
	_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, _source_guard($scope0_reason, 0), void 0, _patch_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $scope0_reason, 0));
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_patch_write($scope0_id, "f", input.tag, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "a4");
	_patch_value($scope0_id, "a5", n, 1);
	$scope0_page ? _scope($scope0_id, {
		f: _source_if($scope0_reason, 2) && input.tag,
		g: input.title,
		i: n
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "a2", input.tag), _filled_guard($scope0_reason, 2) && (_client_guard($scope0_reason, 1) ? _patch_value($scope0_id, "a3", input.title) : _patch_write($scope0_id, "g", input.title)));
}, 1);
