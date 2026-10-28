// template.marko
_shells({
	a: "a;b%bD ;<!><!><p> </p>",
	a1: "a1 !a0; ;<button class=r>x</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_for_to(input.n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<button class=r>x</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, {
			M: i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a1", $scope0_reason, 0);
	_html(`<p>${_text_resume($scope0_id, "b", count)}</p>`);
	_scope($scope0_id, { f: count });
}, 1);
