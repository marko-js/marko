// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}<div>`);
	_if(() => {
		if (count % 3 === 0) {
			const $scope1_id = _scope_id();
			_html("<p>a</p>");
			_scope($scope1_id, {}, "__tests__/template.marko", "7:4");
			return 0;
		} else if (count % 3 === 1) {
			const $scope2_id = _scope_id();
			_html("<i>b</i>");
			_scope($scope2_id, {}, "__tests__/template.marko", "10:4");
			return 1;
		} else {
			const $scope3_id = _scope_id();
			_html("<b>c</b>");
			_scope($scope3_id, {}, "__tests__/template.marko", "13:4");
			return 2;
		}
	}, $scope0_id, "#div/2", 1, 1, 1, "</div>", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
