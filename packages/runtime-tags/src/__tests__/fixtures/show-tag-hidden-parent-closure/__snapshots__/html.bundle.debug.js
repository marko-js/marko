// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let label = 0;
	_html("<div id=ref></div>");
	_show_branch(() => {
		const $scope1_id = _scope_id();
		_script($scope1_id, "__tests__/template.marko_1_label");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
	}, $scope0_id, "#text/0", show);
	_html(`<button id=bump>bump</button>${_el_resume($scope0_id, "#button/1")}<button id=toggle>Toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		show,
		label
	}, "__tests__/template.marko", 0, {
		show: "1:6",
		label: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
