// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = true;
	_html(`<button id=t>t</button>${_el_resume($scope0_id, "a")}<div id=c>x `);
	_show_start(visible, 1);
	_scope_id();
	_html("<b>B</b>");
	_show_end($scope0_id, "e", visible);
	_html(" y</div>");
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: visible });
}, 1);
