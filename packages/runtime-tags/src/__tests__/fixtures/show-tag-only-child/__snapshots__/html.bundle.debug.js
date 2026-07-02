// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}<div id=a>`);
	_show_start(open, 1 && 1);
	_html("<span>first</span><span>second</span>");
	_show_end($scope0_id, "#div/1", open, 1, 1, "</div>");
	_html("<div id=b>");
	const $show = !open;
	_show_start($show, 1 && 1);
	_html("fallback <b>content</b>");
	_show_end($scope0_id, "#div/2", $show, 1, 1, "</div>");
	_script($scope0_id, "__tests__/template.marko_0_open");
	writeScope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "1:6" });
	_resume_branch($scope0_id);
}, 1);
