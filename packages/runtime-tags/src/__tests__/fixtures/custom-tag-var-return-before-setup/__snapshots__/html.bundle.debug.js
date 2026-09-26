// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.x;
	return $return;
});

// tags/row.marko
var row_default = _template("__tests__/tags/row.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let v = child_default({ x: input.x });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/row.marko_0_v#6/var");
	_html(`<p class=row>${_text_resume($scope0_id, "#text/2", v, $sg__input_x)}</p>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/row.marko", 0);
});

// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, { value: "w" }, 0, 0, $sg__input_content);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/wrap.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = ["a", "b"];
	_html(`<button></button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(list, (item) => {
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		let v = child_default({ x: item });
		_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_v#6/var");
		_html(`<p>${_text_resume($scope1_id, "#text/2", v)}</p>`);
		_set_serialize_reason(2);
		const $childScope2 = _peek_scope_id();
		row_default({ x: item });
		_scope($scope1_id, {
			"#childScope/0": _existing_scope($childScope),
			"#childScope/3": _existing_scope($childScope2)
		}, "__tests__/template.marko", "5:2");
	}, 0, $scope0_id, "#text/1");
	const Count = { content: _content("__tests__/template.marko_2*content", ({ x }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $sg__x = _serialize_guard($scope2_reason, 0);
		const $childScope3 = _peek_scope_id();
		let v = child_default({ x });
		_var($scope2_id, "#scopeOffset/1", $childScope3, "__tests__/template.marko_2_v#6/var");
		_html(`<p class=define>${_text_resume($scope2_id, "#text/2", v, $sg__x)}</p>`);
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, { "#childScope/0": _existing_scope($childScope3) }, "__tests__/template.marko", "10:2");
	}, $scope0_id) };
	_set_serialize_reason(2);
	const $childScope4 = _peek_scope_id();
	Count.content({ x: list.length });
	wrap_default({ content: _content("__tests__/template.marko_3*content", ({ value }) => {
		const $scope3_reason = _scope_reason(), $sg__value = _serialize_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		const $childScope5 = _peek_scope_id();
		let v = child_default({ x: value });
		_var($scope3_id, "#scopeOffset/1", $childScope5, "__tests__/template.marko_3_v#6/var");
		_html(`<p class=wrap>${_text_resume($scope3_id, "#text/2", v, $sg__value)}</p>`);
		_serialize_if($scope3_reason, 0) && _scope($scope3_id, { "#childScope/0": _existing_scope($childScope5) }, "__tests__/template.marko", "15:2");
	}, $scope0_id) });
	_await($scope0_id, "#text/4", resolveAfter("a", 1), (value) => {
		const $scope4_id = _scope_id();
		let v = child_default({ x: value });
		_html(`<p class=await>${_escape(v)}</p>`);
	}, 0);
	_try($scope0_id, "#text/5", _content_resume("__tests__/template.marko_5*content", () => {
		const $scope5_id = _scope_id();
		_scope_reason();
		_await($scope5_id, "#text/0", rejectAfter(new Error("e"), 2), (value) => {
			const $scope7_id = _scope_id();
			_html(_escape(value));
		}, 0);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_6*content", (err) => {
		const $scope6_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope6_reason, 0);
		const $scope6_id = _scope_id();
		const $childScope6 = _peek_scope_id();
		let v = child_default({ x: err.message });
		_var($scope6_id, "#scopeOffset/1", $childScope6, "__tests__/template.marko_6_v#6/var");
		_html(`<p class=catch>${_text_resume($scope6_id, "#text/2", v, $sg__err_message)}</p>`);
		_serialize_if($scope6_reason, 0) && _scope($scope6_id, { "#childScope/0": _existing_scope($childScope6) }, "__tests__/template.marko", "25:4");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		list,
		"#childScope/2": _existing_scope($childScope4)
	}, "__tests__/template.marko", 0, { list: "3:6" });
}, 1);
