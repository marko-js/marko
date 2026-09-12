// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_html = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(_html_resume($scope1_id, "#text/0", input.html, $sg__input_html));
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_html: input.html,
		show
	}, "__tests__/template.marko", 0, {
		input_html: ["input.html"],
		show: "1:6"
	});
}, 1);
