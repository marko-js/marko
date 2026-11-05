// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = true;
	let n = 0;
	_html(`<button id=t>t</button>${_el_mark($scope0_id, "#button/0")}<section id=c>`);
	_show_start(visible, 1, 1, "</section>");
	_show_start(visible, 0);
	_html(`<p>${_text_mark($scope0_id, "#text/2", n)}</p>`);
	_show_end($scope0_id, "#text/3", visible, 1, 0, 0, 1);
	_show_end($scope0_id, "#section/1", visible, 1, 1, "</section>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		visible,
		n
	}, "__tests__/template.marko", 0, {
		visible: "1:6",
		n: "2:6"
	});
}, 1);
