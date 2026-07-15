// data.js
function patch(id) {
	return `server patch ${id}`;
}
function live(id) {
	return `server live ${id}`;
}

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_id = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => input.id ? 0 : 1, $scope0_id, "c", $sg__input_id, $sg__input_id, $sg__input_id, 0, 1, "a1", [() => {
		const $scope1_id = _scope_id();
		_html(`<p>${_escape(_hole_value($scope1_id, "Qa", patch(input.id), _persisted_reason()))}${_el_resume($scope1_id, "a", $sg__input_id)} / ${_sep($sg__input_id)}${_escape(_hole_value($scope1_id, "Qb", live(input.id), _persisted_reason()))}${_el_resume($scope1_id, "b", $sg__input_id)}</p>`);
		$sg__input_id && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, () => {
		const $scope2_id = _scope_id();
		_html("<p>nothing selected</p>");
		$sg__input_id && writeScope($scope2_id, {});
	}]);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		f: (_serialize_if($scope0_reason, 0) || _patch_reason()) && input.id,
		g: _state_reason() && count
	});
	_resume_branch($scope0_id);
}, 1);
