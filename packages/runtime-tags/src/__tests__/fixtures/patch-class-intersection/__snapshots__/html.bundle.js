// template.marko
_shells({
	a: "a !a2;D b b%;<main><button>+</button><span>parity</span><!></main>",
	a1: "a1; ;<em>note</em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><button${_attr_class([
		"btn",
		input.tone,
		0
	])}>+</button>${_el_resume($scope0_id, "a")}<span class=even>parity</span>${_el_resume($scope0_id, "b")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<em${_patch_attr_class($scope1_id, "aa$class", input.tone, $scope0_reason, 0)}>note</em>${_el_resume($scope1_id, "a", _mask_group($scope0_reason, 0))}`);
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a0");
			$scope0_page && _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a1"], $scope0_reason, 1);
	_html("</main>");
	_script($scope0_id, "a2");
	$scope0_page ? _scope($scope0_id, {
		f: input.tone,
		h: count
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.tone, !_server_guard($scope0_reason, 0));
}, 1);
