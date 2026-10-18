// template.marko
_shells({ a: "a !a0;D%bD l ;<main><!><p> </p><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, _write_guard($scope0_reason, 0), void 0, 2, $scope0_reason, 0);
	_html(`<p>${_text_resume($scope0_id, "b", input.content + ":0")}</p><button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va2", count, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.content,
		g: count
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
}, 1);
