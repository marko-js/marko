// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return input.x;
});

// tags/row.marko
var row_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let v = child_default({ x: input.x });
	_var($scope0_id, "b", $childScope, "c0");
	_html(`<p class=row>${_text_resume($scope0_id, "c", v, $sg__input_x)}</p>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// tags/wrap.marko
var wrap_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, { value: "w" }, 0, 0, $sg__input_content);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = ["a", "b"];
	_html(`<button></button>${_el_resume($scope0_id, "a")}`);
	_for_of(list, (item) => {
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		let v = child_default({ x: item });
		_var($scope1_id, "b", $childScope, "a0");
		_html(`<p>${_text_resume($scope1_id, "c", v)}</p>`);
		_set_serialize_reason(2);
		const $childScope2 = _peek_scope_id();
		row_default({ x: item });
		_scope($scope1_id, {
			a: _existing_scope($childScope),
			d: _existing_scope($childScope2)
		});
	}, 0, $scope0_id, "b");
	const Count = { content: _content("a2", ({ x }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $sg__x = _serialize_guard($scope2_reason, 0);
		const $childScope3 = _peek_scope_id();
		let v = child_default({ x });
		_var($scope2_id, "b", $childScope3, "a1");
		_html(`<p class=define>${_text_resume($scope2_id, "c", v, $sg__x)}</p>`);
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, { a: _existing_scope($childScope3) });
	}, $scope0_id) };
	_set_serialize_reason(2);
	const $childScope4 = _peek_scope_id();
	Count.content({ x: list.length });
	wrap_default({ content: _content("a4", ({ value }) => {
		const $scope3_reason = _scope_reason(), $sg__value = _serialize_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		const $childScope5 = _peek_scope_id();
		let v = child_default({ x: value });
		_var($scope3_id, "b", $childScope5, "a3");
		_html(`<p class=wrap>${_text_resume($scope3_id, "c", v, $sg__value)}</p>`);
		_serialize_if($scope3_reason, 0) && _scope($scope3_id, { a: _existing_scope($childScope5) });
	}, $scope0_id) });
	_await($scope0_id, "e", resolveAfter("a", 1), (value) => {
		_scope_id();
		_html(`<p class=await>${_escape(child_default({ x: value }))}</p>`);
	}, 0);
	_try($scope0_id, "f", _content_resume("a7", () => {
		const $scope5_id = _scope_id();
		_scope_reason();
		_await($scope5_id, "a", rejectAfter(/* @__PURE__ */ new Error("e"), 2), (value) => {
			_scope_id();
			_html(_escape(value));
		}, 0);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a6", (err) => {
		const $scope6_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope6_reason, 0);
		const $scope6_id = _scope_id();
		const $childScope6 = _peek_scope_id();
		let v = child_default({ x: err.message });
		_var($scope6_id, "b", $childScope6, "a5");
		_html(`<p class=catch>${_text_resume($scope6_id, "c", v, $sg__err_message)}</p>`);
		_serialize_if($scope6_reason, 0) && _scope($scope6_id, { a: _existing_scope($childScope6) });
	}, $scope0_id) }) });
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		g: list,
		c: _existing_scope($childScope4)
	});
}, 1);
