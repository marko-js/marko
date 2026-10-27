// tags/field.marko
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_hint__OR__input_v = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const TextField = { content: _content("__tests__/tags/field.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const { value, valueChange, ...attrs } = input;
		_html(`<input${_attr_input_value($scope1_id, "#input/0", value, valueChange)}${_attrs_partial(attrs, {
			value: 1,
			valueChange: 1
		}, "#input/0", $scope1_id, "input")}>${_el_resume($scope1_id, "#input/0")}`);
		_script($scope1_id, "__tests__/tags/field.marko_1_attrs#6");
		_script($scope1_id, "__tests__/tags/field.marko_1");
		_scope($scope1_id, {
			value: _write_if($scope1_reason, 1) && value,
			valueChange: _write_if($scope1_reason, 0) && valueChange
		}, "__tests__/tags/field.marko", "1:2", {
			value: "2:12",
			valueChange: "2:19",
			"ControlledHandler:#input/0": ["valueChange", "3:31"]
		});
	}, $scope0_id) };
	_set_scope_reason(_write_guard($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id();
	TextField.content({
		placeholder: input.hint,
		value: input.v,
		valueChange: _resume(function(next) {
			document.title = next;
		}, "__tests__/tags/field.marko_0/valueChange")
	});
	const Log = { content: _content("__tests__/tags/field.marko_2*content", ({ log, value }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_script($scope2_id, "__tests__/tags/field.marko_2_log#2_value#3", 0);
		_scope($scope2_id, {
			log,
			value
		}, "__tests__/tags/field.marko", "6:2", {
			log: "6:15",
			value: "6:20"
		});
	}, $scope0_id) };
	const $childScope2 = _peek_scope_id();
	Log.content({
		log: _resume(function(value) {
			console.log(value, input.hint);
		}, "__tests__/tags/field.marko_0/log", $scope0_id),
		value: input.v
	});
	_scope($scope0_id, {
		input_hint: input.hint,
		"#childScope/0": $wi__input_hint__OR__input_v && _existing_scope($childScope),
		"#childScope/1": $wi__input_hint__OR__input_v && _existing_scope($childScope2)
	}, "__tests__/tags/field.marko", 0, { input_hint: ["input.hint"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "x";
	_html(`<button>v</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	field_default({
		hint: input.hint,
		v
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		v,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { v: "1:6" });
}, 1);
