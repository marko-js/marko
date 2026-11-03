// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = true;
	let n = 0;
	_html(`<button id=t>t</button>${_el_resume($scope0_id, "a")}<section id=c>`);
	_show_start(visible, 1, 1, "</section>");
	_show_start(visible, 0);
	_html(`<p>${_text_resume($scope0_id, "c", n)}</p>`);
	_show_end($scope0_id, "d", visible, 1, 0, 0, 1);
	_show_end($scope0_id, "b", visible, 1, 1, "</section>");
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: visible,
		f: n
	});
}, 1);
