// tags/field.marko
const $TextField_content__walks = " b";
const $TextField_content__template = "<input>";
const $template = $TextField_content__template;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&/&`)($TextField_content__walks);
const $setup$1 = [[], ["a>b3", "a>b4"]];
_shells({
	b6: "b6,",
	b2: `b2 !b3 b4;${$TextField_content__walks};${$TextField_content__template}`,
	b: `b !a>b3 a>b4;${((_w0) => `/${_w0}&/&`)($TextField_content__walks)};${$TextField_content__template}`
});
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_v = _updates_from($scope0_reason, 2), $uf__input_hint = _updates_from($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.hint, !_server_guard($scope0_reason, 1));
	const TextField = { content: _content("b2", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $ui__value__OR__valueChange = _unfilled_if($scope1_reason, 0), $ui__valueChange = _unfilled_if($scope1_reason, 2), $fg__value = _filled_guard($scope1_reason, 1), $fg__valueChange = _filled_guard($scope1_reason, 2);
		const { value, valueChange, ...attrs } = input;
		_html(`<input${_attr_input_value($scope1_id, "a", value, valueChange, 3, $scope1_reason, 0)}${_attrs_partial(attrs, {
			value: 1,
			valueChange: 1
		}, "a", $scope1_id, "input", 0, $scope1_reason, 3)}>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "b3");
		_script($scope1_id, "b4");
		_patch_render($scope1_id, "b5", [$fg__value && "d", $fg__valueChange && "e"], $scope1_reason, 0);
		_scope($scope1_id, {
			d: ($ui__valueChange || $ui__value__OR__valueChange) && value,
			e: $ui__value__OR__valueChange && valueChange
		}) || ($fg__value && $ui__valueChange && _patch_write($scope1_id, "xd", value, !_server_guard($scope1_reason, 1)), $fg__valueChange && $ui__value__OR__valueChange && _patch_write($scope1_id, "xe", valueChange, !_server_guard($scope1_reason, 2)));
	}, $scope0_id, 0) };
	_set_scope_reason($uf__input_v << 1 | $uf__input_v << 3 | $uf__input_hint << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	TextField.content({
		placeholder: input.hint,
		value: input.v,
		valueChange: _resume(function(next) {
			document.title = next;
		}, "b0")
	});
	_patch_child_end();
	const Log = { content: _content("b6", ({ log, value }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $fg__log = _filled_guard($scope2_reason, 1), $fg__value2 = _filled_guard($scope2_reason, 2);
		_script($scope2_id, "b7", 0, ($fg__log || $fg__value2) && (_client_guard($scope2_reason, 1) || _client_guard($scope2_reason, 2) ? 2 : 1), [
			$fg__log && "c",
			_filled_guard($scope0_reason, 1) && ">e",
			$fg__value2 && "d"
		], "b8", $scope2_reason, 0);
		_scope($scope2_id, {
			c: log,
			d: value
		}) || ($fg__log && _patch_write($scope2_id, "xc", log, !_server_guard($scope2_reason, 1)), $fg__value2 && _patch_write($scope2_id, "xd", value, !_server_guard($scope2_reason, 2)));
	}, $scope0_id, 0) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | $uf__input_hint << 3 | $uf__input_v << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	Log.content({
		log: _bind_resume(function(value) {
			console.log(value, input.hint);
		}, "b1", $scope0_id),
		value: input.v
	});
	_patch_child_end();
	_scope($scope0_id, {
		e: input.hint,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks)};${((_w0) => `<button>v</button>${_w0}`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let v = "x";
	_html(`<button>v</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(38 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	field_default({
		hint: input.hint,
		v
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: v,
		b: _existing_scope($childScope)
	});
}, 1);
