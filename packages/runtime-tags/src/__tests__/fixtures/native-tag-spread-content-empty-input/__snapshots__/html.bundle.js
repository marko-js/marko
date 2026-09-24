// tags/other.marko
var other_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input = _serialize_guard($scope0_reason, 0), $sg__input_name = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<span>other:${_text_resume($scope0_id, "a", typeof input, $sg__input * 2)}:${_text_resume($scope0_id, "b", input.name, $sg__input_name * 2)}</span>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/spread.marko
var spread_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<p");
	_attrs_content(input, "a", $scope0_id, "p");
	_html(`</p>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "d0");
	_scope($scope0_id, {});
});

// tags/passthrough.marko
var passthrough_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p${_attrs(input, "a", $scope0_id, "p")}>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html(`</p>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "c0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	spread_default({
		"data-n": n,
		content: _content("a0", (x) => {
			const $scope1_reason = _scope_reason(), $sg__x = _serialize_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_html(`params:${_text_resume($scope1_id, "a", typeof x, $sg__x * 2)}`);
			_serialize_if($scope1_reason, 0) && _scope($scope1_id, {});
		}, $scope0_id)
	});
	const $childScope2 = _peek_scope_id();
	spread_default({
		content: other_default,
		"data-n": n
	});
	const $childScope3 = _peek_scope_id();
	spread_default({ content: void 0 });
	_set_serialize_reason(2);
	const $childScope4 = _peek_scope_id();
	passthrough_default({
		"data-n": n,
		content: _content("a1", (x) => {
			const $scope2_reason = _scope_reason(), $sg__x2 = _serialize_guard($scope2_reason, 0);
			const $scope2_id = _scope_id();
			_html(`params:${_text_resume($scope2_id, "a", typeof x, $sg__x2 * 2)}`);
			_serialize_if($scope2_reason, 0) && _scope($scope2_id, {});
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
	passthrough_default({ content: void 0 });
	_dynamic_tag($scope0_id, "i", input.tag, {
		content: other_default,
		"data-n": n
	});
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		l: input.tag,
		m: n,
		c: _existing_scope($childScope),
		d: _existing_scope($childScope2),
		e: _existing_scope($childScope3),
		f: _existing_scope($childScope4),
		g: _existing_scope($childScope5),
		h: _existing_scope($childScope6)
	});
}, 1);
