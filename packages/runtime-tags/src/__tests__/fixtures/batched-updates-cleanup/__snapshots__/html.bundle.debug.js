// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let message = "hi";
	_html(`<button></button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_escape(message)}${_el_resume($scope1_id, "#text/0")}</span>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0_show");
	writeScope($scope0_id, {
		show,
		message
	}, "__tests__/template.marko", 0, {
		show: "1:6",
		message: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
