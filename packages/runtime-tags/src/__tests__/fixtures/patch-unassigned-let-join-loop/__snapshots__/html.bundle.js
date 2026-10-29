// template.marko
_shells({
	a: "a !; ;<ul></ul>",
	a2: "a2 a5;D ;<li> </li>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = input.a;
	_html("<ul>");
	_for_of(input.items, (i) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 2) && _patch_fill($scope1_id, "va0", i);
		_html(`<li>${_text_resume($scope1_id, "a", x + input.b + i)}</li>`);
		_patch_init_entry($scope1_id, "a1", [_filled_guard($scope0_reason, 3) && ">f", _filled_guard($scope0_reason, 2) && "c"]);
		_scope($scope1_id, {
			c: i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a2", $scope0_reason, 2);
	_html(`</ul>${_el_resume($scope0_id, "a")}`);
	_scope($scope0_id, {
		f: input.b,
		g: _write_if($scope0_reason, 0) && x
	}) || _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "va3", input.b, !_server_guard($scope0_reason, 3));
}, 1);
