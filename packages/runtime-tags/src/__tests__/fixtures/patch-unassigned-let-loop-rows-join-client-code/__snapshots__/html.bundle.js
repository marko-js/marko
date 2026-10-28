// template.marko
_shells({
	a: "a !a2;b%b D ;<!><!><button> </button>",
	a1: "a1 a5;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let uid = input.id;
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "va0", item);
		_html(`<p>${_text_resume($scope1_id, "a", uid + "-" + item)}</p>`);
		_scope($scope1_id, {
			c: item,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a1", $scope0_reason, 1);
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", uid, 1);
	_scope($scope0_id, {
		h: _write_if($scope0_reason, 1) && uid,
		i: n
	});
}, 1);
