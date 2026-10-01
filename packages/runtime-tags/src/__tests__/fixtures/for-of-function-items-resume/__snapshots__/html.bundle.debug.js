// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let last = "none";
	forOf([_resume(() => "a", "__tests__/template.marko_0/of"), _resume(() => "b", "__tests__/template.marko_0/of2")], (fn) => {
		const $scope1_id = _scope_id();
		_html(`<button>x</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			fn,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { fn: "2:6" });
	});
	_html(`<span>${_text_resume($scope0_id, "#text/1", last)}</span>`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
