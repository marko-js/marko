// template.marko
_shells({
	a: "a !a5;E l%b ;<main><h1> </h1><!><button>+</button></main>",
	a4: "a4;b%;<!><!><!>",
	a3: "a3 a2;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_suffix = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<main><h1>${_text_mark($scope0_id, "a", input.heading, 1, $scope0_reason, 0)}</h1>`);
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_for_of(row.cells, (cell) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "a", cell + ":" + input.suffix + "@0")}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a0");
			_patch_render($scope2_id, "a1", _filled_guard($scope0_reason, 2) && ">>h");
			_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_suffix__closures, _scope($scope2_id, {
				M: cell,
				_: _scope_with_id($scope1_id)
			}), _client_guard($scope0_reason, 2) && "a0"), "a2");
		}, (cell) => cell, $scope1_id, "a", 1, 1, 1, 0, 0, "a3", $scope0_reason, 1);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, (row) => row.id, $scope0_id, "b", 1, 1, 1, 0, 0, "a4", $scope0_reason, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "c")}</main>`);
	_script($scope0_id, "a5");
	$fg__input_suffix && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "a6", "h");
	_scope($scope0_id, {
		h: input.suffix,
		i: count,
		j: _write_if($scope0_reason, 2) && $input_suffix__closures,
		k: $count__closures
	}) || $fg__input_suffix && _patch_write($scope0_id, "xh", input.suffix, !_server_guard($scope0_reason, 2));
}, 1);
