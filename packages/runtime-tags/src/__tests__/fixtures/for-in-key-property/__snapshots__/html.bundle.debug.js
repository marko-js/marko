// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let obj = { ab: 1 };
	_for_in(obj, (key) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_escape(key)}:${_escape(key.length)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_scope($scope0_id, { obj }, "__tests__/template.marko", 0, { obj: "1:6" });
}, 1);
