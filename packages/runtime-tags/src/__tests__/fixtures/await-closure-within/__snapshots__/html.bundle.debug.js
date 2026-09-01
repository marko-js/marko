// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(0, 1), () => {
			const $scope3_id = _scope_id();
			let value = 1;
			_html(`<button>${_text_resume($scope3_id, "#text/1", value)}</button>${_el_resume($scope3_id, "#button/0")}`);
			_if(() => {
				if (value > 0) {
					const $scope4_id = _scope_id();
					_html(`<span>${_text_resume($scope4_id, "#text/0", value)}</span>`);
					_scope($scope4_id, {}, "__tests__/template.marko", "7:5");
					return 0;
				}
			}, $scope3_id, "#text/2", 1, 1, 1, 0, 1);
			_script($scope3_id, "__tests__/template.marko_3");
			_scope($scope3_id, { value }, "__tests__/template.marko", "4:3", { value: "5:9" });
			_resume_branch($scope3_id);
		});
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading...");
	}, $scope0_id) }) });
}, 1);
