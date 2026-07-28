// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = true;
	let inner = true;
	_html_opens("__tests__/template.marko:3:1", "__tests__/template.marko:4:1", "__tests__/template.marko:5:1"), _html(`<button id=t>t</button>${_el_resume($scope0_id, "#button/0")}<button id=i>i</button>${_el_resume($scope0_id, "#button/1")}<div id=c>x `);
	_show_start(visible, 1, "__tests__/template.marko:5:15");
	_if(() => {
		if (inner) {
			const $scope1_id = _scope_id();
			_html_opens("__tests__/template.marko:5:39"), _html("<b>B</b>");
			writeScope($scope1_id, {}, "__tests__/template.marko", "5:30");
			return 0;
		}
	}, $scope0_id, "#text/3", 1, 1, 1, 0, 1);
	_show_end($scope0_id, "#text/5", visible);
	_html(" y</div>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		visible,
		inner
	}, "__tests__/template.marko", 0, {
		visible: "1:6",
		inner: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
