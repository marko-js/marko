// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a !a5;E l%b Db%;<main><h1> </h1><!><button>Count <!></button></main>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>",
	a3: "a3,<em>closed</em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 1)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (value) => {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_resume($scope3_id, "a", value, 1, $scope0_reason, 3)}</em>`);
				_scope($scope3_id, {});
			}, 1, "a0", _unfilled_if($scope0_reason, 3) && 2);
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a4");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) });
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<em>closed</em>");
			_write_if($scope0_reason, 2) && _scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["a2", "a3"], $scope0_reason, 2);
	_html(`<button>Count ${_text_resume($scope0_id, "d", count, 2)}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		i: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.promise,
		j: count
	}) || _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va6", input.promise, !_server_guard($scope0_reason, 3));
}, 1);
