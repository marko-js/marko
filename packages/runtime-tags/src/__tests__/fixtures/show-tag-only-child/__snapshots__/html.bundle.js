// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}<div id=a>`);
	_show_start(open, 1);
	_html("<span>first</span><span>second</span>");
	_show_end($scope0_id, "b", open, 1, 1, "</div>");
	_html("<div id=b>");
	const $show = false;
	_show_start($show, 1);
	_html("fallback <b>content</b>");
	_show_end($scope0_id, "c", $show, 1, 1, "</div>");
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: open });
	_resume_branch($scope0_id);
}, 1);
