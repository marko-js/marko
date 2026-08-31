// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 3;
	let vis = true;
	_html("<strong>+ ");
	_html(_text_resume($scope0_id, "a", count, 2));
	_html("</strong><span>");
	_html(_text_resume($scope0_id, "b", count));
	_html(" dmg</span><em>+ ");
	_show_start(vis, 1);
	_html(_text_resume($scope0_id, "d", count, 2));
	_show_end($scope0_id, "f", vis);
	_html("</em><b>+ ");
	_html(_text_resume($scope0_id, "g", count, 2));
	_html(`</b><button>inc</button>${_el_resume($scope0_id, "h")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: count,
		j: vis
	});
	_resume_branch($scope0_id);
}, 1);
