// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let n = 0;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}<section>`);
	_show_start(show, 1, 1, "</section>");
	_show_start(show, 0);
	_html(`<p>${_text_resume($scope0_id, "#text/3", n)}</p>`);
	_show_end($scope0_id, "#text/4", show, 1, 0, 0, 1);
	_show_end($scope0_id, "#section/1", show, 1, 1, "</section>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		n
	}, "__tests__/template.marko", 0, {
		show: "1:6",
		n: "2:6"
	});
}, 1);
