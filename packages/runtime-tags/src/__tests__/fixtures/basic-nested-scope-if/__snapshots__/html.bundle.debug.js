// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clickCount = 0;
	_html("<div>");
	_if(() => {
		if (clickCount < 3) {
			const $scope1_id = _scope_id();
			_html(`<button>${_escape(clickCount)}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1_clickCount");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html(`<span>The button was clicked <!>${_escape(clickCount)}${_el_resume($scope2_id, "#text/0")} times.</span>`);
			writeScope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:4");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html("</div>");
	writeScope($scope0_id, { clickCount }, "__tests__/template.marko", 0, { clickCount: "2:8" });
	_resume_branch($scope0_id);
}, 1);
