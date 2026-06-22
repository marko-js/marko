// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=start>start</div>");
	_try($scope0_id, "a", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter("v", 1), (v) => {
			const $scope3_id = _scope_id();
			_html(`<button id=a>${_escape(v)}</button>${_el_resume($scope3_id, "a")}`);
			_script($scope3_id, "a0");
			writeScope($scope3_id, {});
		});
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a1", () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, $scope0_id) }) });
	_html("<div id=end>end</div>");
}, 1);
