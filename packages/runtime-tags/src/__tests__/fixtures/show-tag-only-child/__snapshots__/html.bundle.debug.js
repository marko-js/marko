// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html_opens("__tests__/template.marko:3:1", "__tests__/template.marko:5:1"), _html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}<div id=a>`);
	_show_start(open, 1 && 1, "__tests__/template.marko:6:3");
	_html_opens("__tests__/template.marko:7:5", "__tests__/template.marko:8:5"), _html("<span>first</span><span>second</span>");
	_show_end($scope0_id, "#div/1", open, 1, 1, "</div>");
	_html_opens("__tests__/template.marko:12:1"), _html("<div id=b>");
	const $show = !open;
	_show_start($show, 1 && 1, "__tests__/template.marko:13:3");
	_html_opens("__tests__/template.marko:14:14"), _html("fallback <b>content</b>");
	_show_end($scope0_id, "#div/2", $show, 1, 1, "</div>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "1:6" });
	_resume_branch($scope0_id);
}, 1);
