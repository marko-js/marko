// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const x = input.x;
	if (true) {
		const $scope1_id = _scope_id();
		let out = "";
		_html(`<button>${_text_resume($scope1_id, "#text/1", out)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
	}
	_scope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "2:12" });
}, 1);
