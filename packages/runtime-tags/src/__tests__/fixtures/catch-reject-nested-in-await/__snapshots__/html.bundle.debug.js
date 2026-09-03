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
			_script($scope2_id, "__tests__/template.marko_2_changes#1/pending");
			_try($scope2_id, "#text/0", _content_resume("__tests__/template.marko_4*content", () => {
				const $scope4_id = _scope_id();
				_scope_reason();
				_await($scope4_id, "#text/0", rejectAfter(new Error("ERROR!"), 2), () => {
					const $scope6_id = _scope_id();
					_html("never");
				}, 0);
			}, $scope2_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_5*content", (err) => {
				const $scope5_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope5_reason, 0);
				const $scope5_id = _scope_id();
				_html(`caught: ${_text_resume($scope5_id, "#text/0", err.message, $sg__err_message * 2)}`);
				_serialize_if($scope5_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "11:8");
			}, $scope2_id) }) });
			_html(`<div>changes: ${_text_resume($scope2_id, "#text/2", changes, 2)}</div>${_el_resume($scope2_id, "#div/1")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:4");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("loading outer...");
	}, $scope0_id) }) });
	_scope($scope0_id, {
		changes,
		"ClosureScopes:changes": $changes__closures
	}, "__tests__/template.marko", 0, { changes: "3:6" });
	_resume_branch($scope0_id);
}, 1);
