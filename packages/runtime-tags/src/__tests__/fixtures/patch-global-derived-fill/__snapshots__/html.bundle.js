// template.marko
_shells({ a: "a !a1; b%;<button>inc</button><!><!>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const greeting = $global().prefix + ":" + input.name;
	let count = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "a", greeting, $scope0_page || _source_guard($scope0_reason, 0))} ${_text_resume($scope1_id, "b", count, 2)}</span>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_fill_global_subscribe("a0", $scope0_id, _client_guard($scope0_reason, 0));
	_script($scope0_id, "a1");
	_patch_write($scope0_id, "e", input.name, 1);
	_patch_value($scope0_id, "a3", count, 1);
	$scope0_page ? _scope($scope0_id, {
		e: _source_if($scope0_reason, 0) && input.name,
		f: greeting,
		i: count
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a2", greeting);
}, 1);
