// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_if(() => {
		if (1) {
			const $scope1_id = _scope_id();
			const x = 1;
			writeScope($scope1_id, { x }, "__tests__/template.marko", "1:2", { x: "2:10" });
			_assert_hoist(x);
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 0, 0, void 0, void 0, 1);
	_html(`<div>${_escape(((x) => x())(_hoist_read_error))}</div>`);
}, 1);
