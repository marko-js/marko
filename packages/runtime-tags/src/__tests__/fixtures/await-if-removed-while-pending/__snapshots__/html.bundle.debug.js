// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}<div>`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", resolveAfter("loaded", 2), (value) => {
				const $scope2_id = _scope_id();
				_html(_escape(value));
			}, 0);
			_scope($scope1_id, {}, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#div/1", 1, 1, 1, "</div>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "2:6" });
}, 1);
