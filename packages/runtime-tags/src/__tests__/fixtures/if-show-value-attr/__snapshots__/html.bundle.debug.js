// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>b</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (n % 3 === 0) {
			const $scope1_id = _scope_id();
			_html("<div>zero</div>");
			writeScope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		} else if (n % 3 === 1) {
			const $scope2_id = _scope_id();
			_html("<div>one</div>");
			writeScope($scope2_id, {}, "__tests__/template.marko", "6:2");
			return 1;
		} else {
			const $scope3_id = _scope_id();
			_html("<div>two</div>");
			writeScope($scope3_id, {}, "__tests__/template.marko", "9:2");
			return 2;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	const $show = n > 0;
	_show_start($show);
	_html("<span>shown</span>");
	_show_end($scope0_id, "#text/3", $show, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
}, 1);
