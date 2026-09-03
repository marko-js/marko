// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = true;
	_html(`<button id=t>t</button>${_el_resume($scope0_id, "a")}<div id=c>`);
	_show_start(visible, 1);
	forOf([1, 2], (i) => {
		_scope_id();
		_html(`<b>${_escape(i)}</b>`);
	});
	_show_end($scope0_id, "b", visible, 1, 1, "</div>");
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: visible });
}, 1);
