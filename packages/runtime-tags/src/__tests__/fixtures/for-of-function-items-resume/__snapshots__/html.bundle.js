// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let last = "none";
	forOf([_resume(() => "a", "a0"), _resume(() => "b", "a1")], (fn) => {
		const $scope1_id = _scope_id();
		_html(`<button>x</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a2");
		_scope($scope1_id, {
			c: fn,
			_: _scope_with_id($scope0_id)
		});
	});
	_html(`<span>${_text_resume($scope0_id, "b", last)}</span>`);
	_scope($scope0_id, {});
}, 1);
