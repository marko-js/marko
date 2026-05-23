// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(0, 1), () => {
			const $scope3_id = _scope_id();
			let value = 1;
			_html(`<button>${_escape(value)}${_el_resume($scope3_id, "b")}</button>${_el_resume($scope3_id, "a")}`);
			_if(() => {
				{
					const $scope4_id = _scope_id();
					_html(`<span>${_escape(value)}${_el_resume($scope4_id, "a")}</span>`);
					writeScope($scope4_id, { _: _scope_with_id($scope3_id) });
					return 0;
				}
			}, $scope3_id, "c", 1, 1, 1, 0, 1);
			_script($scope3_id, "a0");
			writeScope($scope3_id, { d: value });
			_resume_branch($scope3_id);
		});
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a1", () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, $scope0_id) }) });
}, 1);
