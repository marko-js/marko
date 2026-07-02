// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let count = 0;
	_html(`<button class=inc></button>${_el_resume($scope0_id, "#button/0")}<button class=toggle></button>${_el_resume($scope0_id, "#button/1")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_escape(count)}${_el_resume($scope1_id, "#text/0")}</span>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 1, 0, 1);
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
