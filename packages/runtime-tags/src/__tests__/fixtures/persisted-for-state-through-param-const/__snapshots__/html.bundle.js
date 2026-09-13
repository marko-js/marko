// template.marko
_shells({ a: "a !a0; b%;<button>load</button><!><!>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let sessions = null;
	const ws = input.workspace;
	const shown = ws ? ws.sessions : [];
	_html(`<button>load</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_reason) _for_of(input.active ? shown : shown.slice(0, 1), (s) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_text_resume($scope1_id, "a", s.id)}</div>`);
		_scope($scope1_id, {});
	}, "id", $scope0_id, "b", 1, 1, 1, 0, 1);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		f: input.active,
		g: _source_if($scope0_reason, 0) && sessions,
		h: ws,
		j: _source_if($scope0_reason, 1) && shown
	}) : (_filled_guard($scope0_owned, 1) && _patch_value($scope0_id, "a0", input.active), _filled_guard($scope0_owned, 0) && _patch_value($scope0_id, "a1", ws));
}, 1, 0);
