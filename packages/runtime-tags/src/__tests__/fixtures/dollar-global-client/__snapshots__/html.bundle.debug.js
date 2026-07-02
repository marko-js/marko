// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<div>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_escape($global().x)}</span>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_if(() => {
		if (!show) {
			const $scope2_id = _scope_id();
			_html(`<span class=hidden>${_escape($global().x)}</span>`);
			writeScope($scope2_id, {}, "__tests__/template.marko", "7:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "#button/2")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "2:8" });
	_resume_branch($scope0_id);
}, 1);
