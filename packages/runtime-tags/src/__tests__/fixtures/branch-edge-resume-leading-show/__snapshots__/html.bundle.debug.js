// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let outer = true;
	let shown = true;
	_html("<div class=host>");
	_if(() => {
		if (outer) {
			const $scope1_id = _scope_id();
			_show_start(shown);
			_html("<b>hi</b>");
			_show_end($scope1_id, "#text/1", shown, 1, 1, 0, 1);
			_html("<span class=tail>tail</span>");
			writeScope($scope1_id, {}, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<span class=sib>sib</span></div><button class=show>Show</button>${_el_resume($scope0_id, "#button/1")}<button class=outer>Outer</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		outer,
		shown
	}, "__tests__/template.marko", 0, {
		outer: "1:6",
		shown: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
