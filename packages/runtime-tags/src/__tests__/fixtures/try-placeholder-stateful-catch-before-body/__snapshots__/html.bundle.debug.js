// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $attempt__closures = new Set();
	let attempt = 1;
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_await($scope2_id, "#text/0", attempt === 1 ? resolveAfter("body", 3) : Promise.reject(new Error("nope")), (value) => {
			const $scope4_id = _scope_id();
			_html(`<p>${_text_resume($scope4_id, "#text/0", value)}</p>`);
			_scope($scope4_id, {}, "__tests__/template.marko", "12:4");
		});
		_subscribe($attempt__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:attempt": 1
		}, "__tests__/template.marko", "4:2"));
		_resume_branch($scope2_id);
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<button>retry ${_text_resume($scope1_id, "#text/1", attempt, 2)}</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_subscribe($attempt__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"));
		}, $scope0_id) }),
		catch: attrTag({ content: _content_resume("__tests__/template.marko_3*content", (err) => {
			const $scope3_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_html(`<b>${_text_resume($scope3_id, "#text/0", err.message, $sg__err_message)}</b>`);
			_serialize_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "15:4");
		}, $scope0_id) })
	});
	_scope($scope0_id, {
		attempt,
		"ClosureScopes:attempt": $attempt__closures
	}, "__tests__/template.marko", 0, { attempt: "3:6" });
	_resume_branch($scope0_id);
}, 1);
