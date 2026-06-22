// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=start>start</div>");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter("v", 1), (v) => {
			const $scope3_id = _scope_id();
			_html(`<button id=a>${_escape(v)}</button>${_el_resume($scope3_id, "#button/0")}`);
			_script($scope3_id, "__tests__/template.marko_3");
			writeScope($scope3_id, {}, "__tests__/template.marko", "12:4");
		});
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading");
	}, $scope0_id) }) });
	_html("<div id=end>end</div>");
}, 1);
