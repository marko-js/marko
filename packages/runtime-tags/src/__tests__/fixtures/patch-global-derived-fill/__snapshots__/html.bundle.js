// template.marko
_shells({ a: "a !a1; b%;<button>inc</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const greeting = $global().prefix + ":" + input.name;
	let count = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "a", greeting, $scope0_page || _write_guard($scope0_reason, 0))} ${_text_resume($scope1_id, "b", count, 2)}</span>`);
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_fill_global_subscribe("a0", $scope0_id, _client_guard($scope0_reason, 0));
	_script($scope0_id, "a1");
	$scope0_page ? _scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 0) && input.name,
		f: greeting,
		g: count
	}) : _filled_guard((2 | _mask_group($scope0_reason, 0)) << 1, 0) && _patch_fill($scope0_id, "va2", greeting, !_server_guard((2 | _mask_group($scope0_reason, 0)) << 1, 0));
}, 1);
