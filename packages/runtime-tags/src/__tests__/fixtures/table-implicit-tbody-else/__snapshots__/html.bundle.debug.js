// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let loading = true;
	_html("<table>");
	_if(() => {
		if (loading) {
			const $scope1_id = _scope_id();
			_html("<caption>loading</caption>");
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<tr><td>loaded</td></tr>");
			_scope($scope2_id, {}, "__tests__/template.marko", "4:4");
			return 1;
		}
	}, $scope0_id, "#table/0", 1, 1, 1, "</table>", 1);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { loading }, "__tests__/template.marko", 0, { loading: "1:6" });
}, 1);
