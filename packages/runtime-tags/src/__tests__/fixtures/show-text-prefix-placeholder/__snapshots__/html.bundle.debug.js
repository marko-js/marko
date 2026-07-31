// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 3;
	let vis = true;
	_html_opens("__tests__/template.marko:3:1"), _html("<strong>+ ");
	_html(`<!>${_escape(count)}${_el_resume($scope0_id, "#text/0")}`);
	_html_opens("__tests__/template.marko:4:1"), _html("</strong><span>");
	_html(`${_escape(count)}${_el_resume($scope0_id, "#text/1")}`);
	_html_opens("__tests__/template.marko:5:1"), _html(" dmg</span><em>+ ");
	_show_start(vis, 1, "__tests__/template.marko:5:7");
	_html(`<!>${_escape(count)}${_el_resume($scope0_id, "#text/3")}`);
	_show_end($scope0_id, "#text/5", vis);
	_html_opens("__tests__/template.marko:6:1"), _html("</em><b>+ ");
	_html(`<!>${_escape(count)}${_el_resume($scope0_id, "#text/6")}`);
	_html_opens("__tests__/template.marko:7:1"), _html(`</b><button>inc</button>${_el_resume($scope0_id, "#button/7")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count,
		vis
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		vis: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
