// template.marko
_shells({
	a: "a !a4;E l%b ;<main><h1> </h1><!><button>+</button></main>",
	a3: "a3;b%;<!><!><!>",
	a2: "a2 a0 a7 a8;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_suffix = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.heading, void 0, $scope0_reason, 0)}</h1>`);
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_for_of(row.cells, (cell) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", cell + ":" + input.suffix + "@0")}</p>`);
			$scope0_page && _subscribe($count__closures, _subscribe($wi__input_suffix && $input_suffix__closures, _scope($scope2_id, {
				M: cell,
				_: _scope_with_id($scope1_id)
			}), _client_guard($scope0_reason, 2) && "a0"), "a1");
		}, (cell) => cell, $scope1_id, "a", 1, void 0, void 0, void 0, void 0, "a2", $scope0_reason, 1);
		$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, (row) => row.id, $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "a3", $scope0_reason, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a4");
	$scope0_page ? _scope($scope0_id, {
		h: input.suffix,
		i: count,
		j: $wi__input_suffix && $input_suffix__closures,
		k: $count__closures
	}) : _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va5", input.suffix, !_server_guard($scope0_reason, 2));
}, 1);
