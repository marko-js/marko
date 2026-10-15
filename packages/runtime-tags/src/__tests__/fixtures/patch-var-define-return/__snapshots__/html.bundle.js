// template.marko
_shells({
	a0: "a0 !,",
	a: "a !a5;0&b D l ;<!><div> </div><button>+</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	const Sum = { content: _content_elide("a0", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const $return = a + b;
		_patch_write($scope1_id, "wc", a, 1);
		_patch_write($scope1_id, "wd", b, 1);
		_client_guard($scope1_reason, 0) && _patch_init($scope1_id, "a3");
		$scope1_page ? _write_if($scope1_reason, 0) && _scope($scope1_id, {
			c: _write_if($scope1_reason, 2) && a,
			d: _write_if($scope1_reason, 1) && b
		}) : (_filled_guard($scope1_reason, 1) && _client_guard($scope1_reason, 2) && _patch_value($scope1_id, "va1", a, !_server_guard($scope1_reason, 1)), _filled_guard($scope1_reason, 2) && _client_guard($scope1_reason, 1) && _patch_value($scope1_id, "va2", b, !_server_guard($scope1_reason, 2)));
		return $return;
	}, $scope0_id) };
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "a");
	let total = Sum.content({
		a: n,
		b: input.b
	});
	_var($scope0_id, "b", $childScope, "a4");
	_patch_write($scope0_id, "wj", total, 1);
	_html(`<div>${_patch_text($scope0_id, "d", total)}</div>${_el_resume($scope0_id, "c")}<button>+</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a5");
	_script($scope0_id, "a6");
	_patch_value($scope0_id, "va8", n, 1);
	$scope0_page ? _scope($scope0_id, {
		i: n,
		j: total,
		a: _existing_scope($childScope)
	}) : _patch_value($scope0_id, "va7", total);
}, 1);
