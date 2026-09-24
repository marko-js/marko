// tags/my-btn.marko
var my_btn_default = _template("__tests__/tags/my-btn.marko", (input) => {
	const $scope0_reason = _scope_reason(), $si__input = _serialize_if($scope0_reason, 0), $sg__input_href = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.href) {
			const $scope1_id = _scope_id();
			_html("<a");
			_attrs_content(input, "#a/0", $scope1_id, "a");
			_html(`</a>${_el_resume($scope1_id, "#a/0")}`);
			_script($scope1_id, "__tests__/tags/my-btn.marko_1_input#2");
			_scope($scope1_id, { _: $si__input && _scope_with_id($scope0_id) }, "__tests__/tags/my-btn.marko", "1:2", { "EventAttributes:#a/0": ["...input", "2:9"] });
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<button");
			_attrs_content(input, "#button/0", $scope2_id, "button");
			_html(`</button>${_el_resume($scope2_id, "#button/0")}`);
			_script($scope2_id, "__tests__/tags/my-btn.marko_2_input#2");
			_scope($scope2_id, { _: $si__input && _scope_with_id($scope0_id) }, "__tests__/tags/my-btn.marko", "4:2", { "EventAttributes:#button/0": ["...input", "5:14"] });
			return 1;
		}
	}, $scope0_id, "#text/0", _serialize_guard($scope0_reason, 0), $sg__input_href, $sg__input_href, 0, 1);
	_serialize_if($scope0_reason, 1) && _scope($scope0_id, {}, "__tests__/tags/my-btn.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let href = undefined;
	let count = 0;
	_html(`<button class=link>link</button>${_el_resume($scope0_id, "#button/0")}<button class=inc>inc</button>${_el_resume($scope0_id, "#button/1")}`);
	_set_serialize_reason(10);
	const $childScope = _peek_scope_id();
	my_btn_default({
		href,
		class: "btn",
		content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`Label ${_text_resume($scope1_id, "#text/0", count, 2)}`);
			_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"), "__tests__/template.marko_1_count#4/subscribe");
		}, $scope0_id)
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		href,
		count,
		"ClosureScopes:count": $count__closures,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		href: "1:6",
		count: "2:6"
	});
}, 1);
