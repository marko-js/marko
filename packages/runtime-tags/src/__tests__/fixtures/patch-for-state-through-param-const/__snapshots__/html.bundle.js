// template.marko
_shells({ a: "a !a0; b%;<button>load</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let sessions = null;
	const ws = input.workspace;
	const shown = ws ? ws.sessions : [];
	_html(`<button>load</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _for_of(input.active ? shown : shown.slice(0, 1), (s) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_escape(s.id)}</div>`);
		$scope0_page && _scope($scope1_id, {});
	}, "id", $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		f: input.active,
		g: _write_if($scope0_reason, 0) && sessions,
		h: ws,
		j: _write_if($scope0_reason, 1) && shown
	}) : (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va1", input.active, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", ws, !_server_guard($scope0_reason, 0)));
}, 1);
