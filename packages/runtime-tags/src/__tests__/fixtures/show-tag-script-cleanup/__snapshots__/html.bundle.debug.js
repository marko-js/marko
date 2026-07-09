// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<div id=ref></div>");
	_show_branch(() => {
		const $scope1_id = _scope_id();
		let id = 0;
		_html(`<button id=next>next</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_script($scope1_id, "__tests__/template.marko_1_id");
		writeScope($scope1_id, { id }, "__tests__/template.marko", "3:2", { id: "4:8" });
	}, $scope0_id, "#text/0", show, void 0, void 0, 0, 1);
	_html(`<button id=toggle>Toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
	_resume_branch($scope0_id);
}, 1);
