// tags/other.marko
var other_default = _template("__tests__/tags/other.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input = _serialize_guard($scope0_reason, 0), $sg__input_name = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<span>other:${_text_resume($scope0_id, "#text/0", typeof input, $sg__input * 2)}:${_text_resume($scope0_id, "#text/1", input.name, $sg__input_name * 2)}</span>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/other.marko", 0);
});

// tags/spread.marko
var spread_default = _template("__tests__/tags/spread.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<p");
	_attrs_content(input, "#p/0", $scope0_id, "p");
	_html(`</p>${_el_resume($scope0_id, "#p/0")}`);
	_script($scope0_id, "__tests__/tags/spread.marko_0_input#2");
	_scope($scope0_id, {}, "__tests__/tags/spread.marko", 0, { "EventAttributes:#p/0": ["...input", "1:7"] });
});

// tags/passthrough.marko
var passthrough_default = _template("__tests__/tags/passthrough.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p${_attrs(input, "#p/0", $scope0_id, "p")}>`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html(`</p>${_el_resume($scope0_id, "#p/0")}`);
	_script($scope0_id, "__tests__/tags/passthrough.marko_0_input#3");
	_scope($scope0_id, {}, "__tests__/tags/passthrough.marko", 0, { "EventAttributes:#p/0": ["...input", "1:7"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	spread_default({
		"data-n": n,
		content: _content("__tests__/template.marko_1*content", (x) => {
			const $scope1_reason = _scope_reason(), $sg__x = _serialize_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_html(`params:${_text_resume($scope1_id, "#text/0", typeof x, $sg__x * 2)}`);
			_serialize_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "4:2");
		}, $scope0_id)
	});
	const $childScope2 = _peek_scope_id();
	spread_default({
		content: other_default,
		"data-n": n
	});
	const $childScope3 = _peek_scope_id();
	spread_default({ content: n ? other_default : undefined });
	_set_serialize_reason(2);
	const $childScope4 = _peek_scope_id();
	passthrough_default({
		"data-n": n,
		content: _content("__tests__/template.marko_2*content", (x) => {
			const $scope2_reason = _scope_reason(), $sg__x2 = _serialize_guard($scope2_reason, 0);
			const $scope2_id = _scope_id();
			_html(`params:${_text_resume($scope2_id, "#text/0", typeof x, $sg__x2 * 2)}`);
			_serialize_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "7:2");
		}, $scope0_id)
	});
	_set_serialize_reason(2);
	const $childScope5 = _peek_scope_id();
	passthrough_default({
		content: other_default,
		"data-n": n
	});
	_set_serialize_reason(2);
	const $childScope6 = _peek_scope_id();
	passthrough_default({ content: n ? other_default : undefined });
	_dynamic_tag($scope0_id, "#text/8", input.tag, {
		content: other_default,
		"data-n": n
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_tag: input.tag,
		n,
		"#childScope/2": _existing_scope($childScope),
		"#childScope/3": _existing_scope($childScope2),
		"#childScope/4": _existing_scope($childScope3),
		"#childScope/5": _existing_scope($childScope4),
		"#childScope/6": _existing_scope($childScope5),
		"#childScope/7": _existing_scope($childScope6)
	}, "__tests__/template.marko", 0, {
		input_tag: ["input.tag"],
		n: "2:6"
	});
}, 1);
