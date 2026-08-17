// template.marko
_shells({
	a0: ",`a0 !;b%;<!><!><!>`",
	a1: ",`a1 a5 a6;D ;<p> </p>`"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_rows = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_owned_guard($scope0_owned, 0) ? _patch_value($scope1_id, "a0", row?.id) : _patch_init($scope1_id, "a2");
		_for_of(row.cells, (cell) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_escape(row.id + "@0")}${_el_resume($scope2_id, "a")}</p>`);
			_subscribe($count__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
		}, (cell) => cell, $scope1_id, "a", 1, $sg__input_rows, $sg__input_rows, void 0, void 0, "a1");
		writeScope($scope1_id, {
			e: row?.id,
			_: _scope_with_id($scope0_id)
		});
	}, (row) => row.id, $scope0_id, "a", 1, $sg__input_rows, $sg__input_rows, void 0, void 0, "a0");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	$scope0_reason && writeScope($scope0_id, {
		f: count,
		g: $count__closures
	});
	_resume_branch($scope0_id);
}, 1, 0);
