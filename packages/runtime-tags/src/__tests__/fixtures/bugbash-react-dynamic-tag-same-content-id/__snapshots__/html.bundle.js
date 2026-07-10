// tags/provider.marko
var provider_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0), $si__input_value = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $value__closures = /* @__PURE__ */ new Set();
	const { value } = input;
	const $return = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<span>v:${_sep($sg__input_value)}${_escape(value)}${_el_resume($scope1_id, "a", $sg__input_value)}</span>`);
		_subscribe($si__input_value && $value__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id) };
	writeScope($scope0_id, {
		c: value,
		Bc: $si__input_value && $value__closures
	});
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let flag = true;
	let a = 1;
	let b = 10;
	let one = provider_default({ value: a });
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	let two = provider_default({ value: b });
	_var($scope0_id, "d", $childScope, "a0");
	_html("<div>");
	_dynamic_tag($scope0_id, "e", one, {});
	_html(`</div><button id=toggle>toggle</button>${_el_resume($scope0_id, "f")}<button id=inc-b>b++</button>${_el_resume($scope0_id, "g")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		h: flag,
		j: b,
		k: one,
		l: two,
		c: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
