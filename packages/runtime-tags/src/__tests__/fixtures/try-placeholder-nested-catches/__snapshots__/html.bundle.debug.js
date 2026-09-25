// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_await($scope2_id, "#text/0", resolveAfter(count), (value) => {
				const $scope5_id = _scope_id();
				_html(_text_resume($scope5_id, "#text/0", value));
				_scope($scope5_id, {}, "__tests__/template.marko", "7:6");
			});
			_subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:4"), "__tests__/template.marko_2_count#2/subscribe", 0);
			_resume_branch($scope2_id);
		}, $scope1_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_4*content", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html("inner loading");
		}, $scope1_id) }) });
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("outer loading");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, { count: "3:6" });
}, 1);
