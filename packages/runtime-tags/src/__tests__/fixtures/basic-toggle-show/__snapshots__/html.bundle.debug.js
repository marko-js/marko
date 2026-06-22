// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<div>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html("Hello!");
			writeScope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", void 0, void 0, void 0, void 0, void 0, 1);
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "#button/1")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_show");
	writeScope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "2:8" });
	_resume_branch($scope0_id);
}, 1);
