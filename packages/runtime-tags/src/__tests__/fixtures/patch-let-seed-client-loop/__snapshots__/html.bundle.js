// template.marko
_shells({ a: "a !a0; b%;<button>add</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button>add</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _for_until(n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		let x = input.v;
		_html(`<p>${_escape(i)}:${_text_resume($scope1_id, "b", x, 2)} ${_text_resume($scope1_id, "c", input.w, _write_guard($scope0_reason, 2) * 2)}</p>`);
		$scope0_page && _scope($scope1_id, {});
	}, 0, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		e: input.v,
		f: input.w,
		g: n
	}) : (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va1", input.v, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va2", input.w, !_server_guard($scope0_reason, 2)));
}, 1);
