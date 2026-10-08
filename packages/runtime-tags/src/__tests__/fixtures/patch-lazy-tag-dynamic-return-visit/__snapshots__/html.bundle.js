// child.marko
_shells({ a: "a;D ;<button> </button>" });
var child_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<button>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</button>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a");
_shells({ b: "b !b0; D lD%;<button class=n> </button><main><!></main>" });
var template_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}<main>`);
	const $tag = input.show ? $Child_withLoadAssets : null;
	const $input2 = { label: input.label };
	_dynamic_tag($scope0_id, "c", $tag, $input2, 0, 0, _source_guard($scope0_reason, 0), void 0, _patch_dynamic_tag($scope0_id, "c", $tag, $input2, 0, 0, $scope0_reason, 0));
	_html("</main>");
	_script($scope0_id, "b0");
	_patch_write($scope0_id, "f", input.show, 1);
	_patch_write($scope0_id, "g", input.label, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b3");
	_patch_value($scope0_id, "b4", n, 1);
	$scope0_page ? _scope($scope0_id, {
		f: _source_if($scope0_reason, 2) && input.show,
		g: _source_if($scope0_reason, 1) && input.label,
		i: n
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "b1", input.show), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "b2", input.label));
}, 1);
