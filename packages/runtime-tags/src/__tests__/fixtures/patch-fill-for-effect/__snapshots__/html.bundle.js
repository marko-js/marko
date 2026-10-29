// template.marko
_shells({
	a: "a !a5;b%b D ;<!><!><button> </button>",
	a4: "a4 a8;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "va1", item);
		_html(`<p>${_text_resume($scope1_id, "a", input.label + " " + item + ": 0")}</p>`);
		_script($scope1_id, "a0");
		_patch_join_init($scope1_id, "a2", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">g", _filled_guard($scope0_reason, 1) && "c");
		_patch_init_entry($scope1_id, "a3", _filled_guard($scope0_reason, 2) && ">g", _filled_guard($scope0_reason, 1) && "c");
		_scope($scope1_id, {
			c: item,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a4", $scope0_reason, 1);
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		g: input.label,
		h: count
	}) || _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va6", input.label, !_server_guard($scope0_reason, 2));
}, 1);
