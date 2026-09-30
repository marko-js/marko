// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_html = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = true;
	_html("<div><span>before</span>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(_html_resume($scope1_id, "#text/0", input.html, $sg__input_html));
			_scope($scope1_id, {}, "__tests__/template.marko", "2:26");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<span>after</span></div><button>hide</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { input_html: input.html }, "__tests__/template.marko", 0, { input_html: ["input.html"] });
}, 1);
