// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = true;
	_html(`<button id=t>t</button>${_el_resume($scope0_id, "a")}<span>`);
	_show_start(visible);
	_show_end($scope0_id, "c", visible);
	_html("after</span>");
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: visible });
}, 1);
