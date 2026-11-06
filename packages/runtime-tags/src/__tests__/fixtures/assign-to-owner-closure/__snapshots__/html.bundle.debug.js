// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let hide = void 0;
	_if(() => {
		if (!hide) {
			const $scope1_id = _scope_id();
			_html(`<button></button>${_el_mark($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
