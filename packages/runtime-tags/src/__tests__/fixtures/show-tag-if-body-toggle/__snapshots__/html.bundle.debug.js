// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = true;
	_html(`<button id=t>t</button>${_el_resume($scope0_id, "#button/0")}<div id=c>x `);
	_show_start(visible, 1);
	if (true) {
		const $scope1_id = _scope_id();
		_html("<b>B</b>");
	}
	_show_end($scope0_id, "#text/4", visible);
	_html(" y</div>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { visible }, "__tests__/template.marko", 0, { visible: "1:6" });
	_resume_branch($scope0_id);
}, 1);
