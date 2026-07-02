// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 3;
	let vis = true;
	_html("<strong>+ ");
	_html(`<!>${_escape(count)}${_el_resume($scope0_id, "a")}`);
	_html("</strong><span>");
	_html(`${_escape(count)}${_el_resume($scope0_id, "b")}`);
	_html(" dmg</span><em>+ ");
	_show_start(vis, 1);
	_html(`<!>${_escape(count)}${_el_resume($scope0_id, "d")}`);
	_show_end($scope0_id, "e", vis);
	_html("</em><b>+ ");
	_html(`<!>${_escape(count)}${_el_resume($scope0_id, "f")}`);
	_html(`</b><button>inc</button>${_el_resume($scope0_id, "g")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		h: count,
		i: vis
	});
	_resume_branch($scope0_id);
}, 1);
