// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_foo = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_foo__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter({ items: ["a", "b"] }, 1), (d) => {
			const $scope2_id = _scope_id();
			$si__input_foo && _script($scope2_id, "__tests__/template.marko_2_input_foo#3/pending");
			_script($scope2_id, "__tests__/template.marko_2_count#4/pending");
			_html(`<p>${_text_resume($scope2_id, "#text/0", input.foo, _serialize_guard($scope0_reason, 0))}</p><button>${_text_resume($scope2_id, "#text/2", count)}</button>${_el_resume($scope2_id, "#button/1")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:4");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("Loading");
	}, $scope0_id) }) });
	_scope($scope0_id, {
		input_foo: $si__input_foo && input.foo,
		count,
		"ClosureScopes:input_foo": $si__input_foo && $input_foo__closures,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, {
		input_foo: ["input.foo"],
		count: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
