// template.marko
_renderer_shells({ a0: ",`a0;b%;<!><!><!>`" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_rows = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_for_of(row.cells, (cell) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_escape(cell + ":" + input.suffix + "@0")}${_el_resume($scope2_id, "a")}</p>`);
			_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 1) && $input_suffix__closures, writeScope($scope2_id, {
				c: cell,
				_: _scope_with_id($scope1_id)
			})));
		}, (cell) => cell, $scope1_id, "a", 1, $sg__input_rows, $sg__input_rows, void 0, void 0, 0);
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, (row) => row.id, $scope0_id, "a", 1, $sg__input_rows, $sg__input_rows, void 0, void 0, "a0");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason ? writeScope($scope0_id, {
		f: input.suffix,
		g: count,
		h: $input_suffix__closures,
		i: $count__closures
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a0", input.suffix);
	_resume_branch($scope0_id);
}, 1, 0);
