// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clicked = "";
	forOf(["a", "b"], (...args) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_escape(args[0])}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			args,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { args: "2:6" });
	});
	_html(`<span>${_text_resume($scope0_id, "#text/1", clicked)}</span>`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
