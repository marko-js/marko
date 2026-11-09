// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [{ name: "ab" }, { name: "cde" }];
	let show = true;
	_for_of(items, ({ name }) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				_html(`<span>${_escape(name.length)}</span>`);
				_scope($scope2_id, {}, "__tests__/template.marko", "6:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 1, 0, 0, 1);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
	}, "name", $scope0_id, "#text/0", 1, 0);
	_html(`<button>t</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "4:6" });
}, 1);
