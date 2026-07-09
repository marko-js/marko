// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<div id=ref></div>");
	_show_branch(() => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (true) {
				const $scope2_id = _scope_id();
				_script($scope2_id, "__tests__/template.marko_2");
				writeScope($scope2_id, {}, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 1, 0);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {}, "__tests__/template.marko", "3:2");
	}, $scope0_id, "#text/0", show);
	_html(`<button id=toggle>Toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
	_resume_branch($scope0_id);
}, 1);
