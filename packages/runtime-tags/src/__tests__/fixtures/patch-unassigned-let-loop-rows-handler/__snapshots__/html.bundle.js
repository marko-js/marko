// template.marko
_shells({
	a: "a;b%bD ;<!><!><p> </p>",
	a1: "a1 !a0; D ;<button> </button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = input.v;
	let seen = "";
	_for_of(input.items, (i) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "wd", i, !_server_guard($scope0_reason, 1));
		_html(`<button>${_text_resume($scope1_id, "b", i, 1, $scope0_reason, 1)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, {
			d: i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a1", $scope0_reason, 1);
	_html(`<p>${_text_resume($scope0_id, "b", seen)}</p>`);
	_scope($scope0_id, { g: x });
}, 1);
