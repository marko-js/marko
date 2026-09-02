// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicked = "";
	forOf(["a", "b"], (...args) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_escape(args[0])}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, {
			c: args,
			_: _scope_with_id($scope0_id)
		});
	});
	_html(`<span>${_text_resume($scope0_id, "b", clicked)}</span>`);
	_scope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
