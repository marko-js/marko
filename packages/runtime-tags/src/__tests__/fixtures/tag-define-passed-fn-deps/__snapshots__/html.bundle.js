// tags/field.marko
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_hint__OR__input_v = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const TextField = { content: _content("b2", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const { value, valueChange, ...attrs } = input;
		_html(`<input${_attr_input_value($scope1_id, "a", value, valueChange)}${_attrs_partial(attrs, {
			value: 1,
			valueChange: 1
		}, "a", $scope1_id, "input")}>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b3");
		_script($scope1_id, "b4");
		_scope($scope1_id, {
			d: _write_if($scope1_reason, 1) && value,
			e: _write_if($scope1_reason, 0) && valueChange
		});
	}, $scope0_id) };
	_set_scope_reason(_write_guard($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id();
	TextField.content({
		placeholder: input.hint,
		value: input.v,
		valueChange: _resume(function(next) {
			document.title = next;
		}, "b0")
	});
	const Log = { content: _content("b5", ({ log, value }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_script($scope2_id, "b6", 0);
		_scope($scope2_id, {
			c: log,
			d: value
		});
	}, $scope0_id) };
	const $childScope2 = _peek_scope_id();
	Log.content({
		log: _resume(function(value) {
			console.log(value, input.hint);
		}, "b1", $scope0_id),
		value: input.v
	});
	_scope($scope0_id, {
		e: input.hint,
		a: $wi__input_hint__OR__input_v && _existing_scope($childScope),
		b: $wi__input_hint__OR__input_v && _existing_scope($childScope2)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "x";
	_html(`<button>v</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	field_default({
		hint: input.hint,
		v
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: v,
		b: _existing_scope($childScope)
	});
}, 1);
