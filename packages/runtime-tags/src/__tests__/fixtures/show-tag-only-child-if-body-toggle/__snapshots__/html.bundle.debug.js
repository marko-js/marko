// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}<section>`);
	_show_start(show, 1, 1, "</section>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html("<p>yes</p>");
			_scope($scope1_id, {}, "__tests__/template.marko", "5:6");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<i>no</i>");
			_scope($scope2_id, {}, "__tests__/template.marko", "8:6");
			return 1;
		}
	}, $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_show_end($scope0_id, "#section/1", show, 1, 1, "</section>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
