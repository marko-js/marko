// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $changes__closures = new Set();
	let changes = 0;
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter("outer", 1), () => {
			const $scope2_id = _scope_id();
			_try($scope2_id, "#text/0", _content_resume("__tests__/template.marko_3*content", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				_await($scope3_id, "#text/0", resolveAfter("inner", 2), () => {
					const $scope4_id = _scope_id();
					_script($scope4_id, "__tests__/template.marko_4_changes#1/pending");
					_html(`<div>changes: ${_text_resume($scope4_id, "#text/1", changes, 2)}</div>${_el_resume($scope4_id, "#div/0")}`);
					_script($scope4_id, "__tests__/template.marko_4");
					_scope($scope4_id, { _: _scope_with_id($scope3_id) }, "__tests__/template.marko", "9:8");
				});
				_scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "7:6");
			}, $scope2_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_6*content", () => {
				_scope_reason();
				const $scope6_id = _scope_id();
				_html("loading inner...");
			}, $scope2_id) }) });
			_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:4");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_5*content", () => {
		_scope_reason();
		const $scope5_id = _scope_id();
		_html("loading outer...");
	}, $scope0_id) }) });
	_scope($scope0_id, {
		changes,
		"ClosureScopes:changes": $changes__closures
	}, "__tests__/template.marko", 0, { changes: "3:6" });
	_resume_branch($scope0_id);
}, 1);
