// template.marko
_shells({
	a: "a !a3;E l%b ;<main><h1> </h1><!><button>+</button></main>",
	a0: "a0;b%;<!><!><!>",
	a1: "a1 a5 a6;D ;<p> </p>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_rows = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.heading, void 0, $scope0_owned, 0)}</h1>`);
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_for_of(row.cells, (cell) => {
			const $scope2_id = _scope_id();
			_owned_guard($scope0_owned, 1) ? _patch_value($scope2_id, "a1", cell) : _patch_init($scope2_id, "a2");
			_html(`<p>${_text_resume($scope2_id, "a", cell + ":" + input.suffix + "@0")}</p>`);
			_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 2) && $input_suffix__closures, _scope($scope2_id, {
				c: cell,
				_: _scope_with_id($scope1_id)
			})));
		}, (cell) => cell, $scope1_id, "a", 1, $sg__input_rows, $sg__input_rows, void 0, void 0, "a1", $scope0_owned, 1);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, (row) => row.id, $scope0_id, "b", 1, $sg__input_rows, $sg__input_rows, void 0, void 0, "a0", $scope0_owned, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a3");
	$scope0_reason ? _scope($scope0_id, {
		h: input.suffix,
		i: count,
		j: $input_suffix__closures,
		k: $count__closures
	}) : _owned_guard($scope0_owned, 2) && _patch_value($scope0_id, "a0", input.suffix);
	_resume_branch($scope0_id);
}, 1, 0);
