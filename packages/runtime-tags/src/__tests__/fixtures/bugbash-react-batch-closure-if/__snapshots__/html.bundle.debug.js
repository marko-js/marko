// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let count = 0;
	_html("<div id=a>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<span>a:<!>${_escape(count)}${_el_resume($scope1_id, "#text/0")}</span>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, 1, 1, "</div>", 1);
	_html("<div id=b>");
	_if(() => {
		if (!show) {
			const $scope2_id = _scope_id();
			_html(`<span>b:<!>${_escape(count)}${_el_resume($scope2_id, "#text/0")}</span>`);
			writeScope($scope2_id, {}, "__tests__/template.marko", "10:4");
			return 0;
		}
	}, $scope0_id, "#div/1", 1, 1, 1, "</div>", 1);
	_html(`<button id=both>both</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		show,
		count
	}, "__tests__/template.marko", 0, {
		show: "1:6",
		count: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
