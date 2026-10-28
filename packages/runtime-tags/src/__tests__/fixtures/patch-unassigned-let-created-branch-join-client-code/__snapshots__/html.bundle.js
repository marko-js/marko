// template.marko
_shells({
	a: "a !a1;b%b D ;<!><!><button> </button>",
	a0: "a0 a5;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let uid = input.id;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", uid + "-" + input.name)}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["a0"], $scope0_reason, 2);
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	!_client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", uid, 1);
	_scope($scope0_id, {
		h: input.name,
		i: _write_if($scope0_reason, 0) && uid,
		j: n
	}) || _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "va2", input.name, !_server_guard($scope0_reason, 3));
}, 1);
