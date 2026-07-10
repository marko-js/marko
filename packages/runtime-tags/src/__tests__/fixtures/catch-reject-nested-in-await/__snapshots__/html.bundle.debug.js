// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $changes__closures = new Set();
	let changes = 0;
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter("outer", 1), () => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "__tests__/template.marko_2_changes/pending");
			_try($scope2_id, "#text/0", _content_resume("__tests__/template.marko_4_content", () => {
				const $scope4_id = _scope_id();
				_scope_reason();
				_await($scope4_id, "#text/0", rejectAfter(new Error("ERROR!"), 2), () => {
					const $scope6_id = _scope_id();
					_html("never");
				}, 0);
			}, $scope2_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_5_content", (err) => {
				const $scope5_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope5_reason, 0);
				const $scope5_id = _scope_id();
				_html(`caught: ${_sep($sg__err_message)}${_escape(err.message)}${_el_resume($scope5_id, "#text/0", $sg__err_message)}`);
				_serialize_if($scope5_reason, 0) && writeScope($scope5_id, {}, "__tests__/template.marko", "11:8");
			}, $scope2_id) }) });
			_html(`<div>changes: <!>${_escape(changes)}${_el_resume($scope2_id, "#text/2")}</div>${_el_resume($scope2_id, "#div/1")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:4");
			_resume_branch($scope2_id);
		});
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3_content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("loading outer...");
	}, $scope0_id) }) });
	writeScope($scope0_id, {
		changes,
		"ClosureScopes:changes": $changes__closures
	}, "__tests__/template.marko", 0, { changes: "3:6" });
	_resume_branch($scope0_id);
}, 1);
