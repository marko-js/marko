// tags/boundary.marko
var boundary_default = _template("__tests__/tags/boundary.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0), $si__input_content = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	_try($scope0_id, "#text/0", _content_resume("__tests__/tags/boundary.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
		$si__input_content && _subscribe($input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/boundary.marko", "1:2"), "__tests__/tags/boundary.marko_1_input_content#3/subscribe", $sg__input_content);
		$sg__input_content || $si__input_content && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/tags/boundary.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading...");
	}, $scope0_id) }) }, 0);
	$si__input_content && _scope($scope0_id, { "ClosureScopes:input_content": $input_content__closures }, "__tests__/tags/boundary.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 1;
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	boundary_default({ content: _content("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<span>${_text_resume($scope1_id, "#text/0", count)}</span>`);
		_await($scope1_id, "#text/1", resolveAfter(0, 1), () => {
			const $scope2_id = _scope_id();
			_html(`<b>${_text_resume($scope2_id, "#text/0", count)}</b>`);
			_subscribe($count__closures, _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				"ClosureSignalIndex:count": 1
			}, "__tests__/template.marko", "6:4"), "__tests__/template.marko_2_count#2/subscribe");
		});
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), "__tests__/template.marko_1_count#2/subscribe");
	}, $scope0_id) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, { count: "2:6" });
}, 1);
