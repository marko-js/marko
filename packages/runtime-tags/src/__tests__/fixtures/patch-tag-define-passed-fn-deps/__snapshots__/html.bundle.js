// tags/field.marko
const $TextField_content__walks = " b";
const $TextField_content__template = "<input>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($TextField_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&/&b`)($TextField_content__walks);
const $setup$1 = [[], ["a>b3", "a>b4"]];
_shells({
	b6: "b6,",
	b2: /*@__PURE__*/ ((_w0, _w1) => `b2 !b3 b4;${_w0};${_w1}`)($TextField_content__walks, $TextField_content__template),
	b: /*@__PURE__*/ (() => `b !a>b3 a>b4;${((_w0) => `b/${_w0}&/&b`)($TextField_content__walks)};${((_w0) => `<!>${_w0}<!>`)($TextField_content__template)}`)()
});
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.hint, !_server_guard($scope0_reason, 1));
	const TextField = { content: _content_elide("b2", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $cg__valueChange = _client_guard($scope1_reason, 2);
		const { value, valueChange, ...attrs } = input;
		_html(`<input${_patch_input_value($scope1_id, "a", value, valueChange, "n2a", $scope1_reason, 0, "wEa", $scope1_reason, 0)}${_patch_attrs_partial(attrs, {
			value: 1,
			valueChange: 1
		}, "a", $scope1_id, "input", void 0, $scope1_reason, 3)}>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b3");
		_script($scope1_id, "b4");
		$cg__valueChange && _patch_write($scope1_id, "xd", value, !(_filled_guard($scope1_reason, 1) && $cg__valueChange));
		_client_guard($scope1_reason, 0) && _patch_write($scope1_id, "xe", valueChange, !(_filled_guard($scope1_reason, 2) && _client_guard($scope1_reason, 1)));
		_patch_join_init($scope1_id, "b5", $scope1_reason, 0, _filled_guard($scope1_reason, 1) && "d", _filled_guard($scope1_reason, 2) && "e");
		_scope($scope1_id, {
			d: (_unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 0)) && value,
			e: _unfilled_if($scope1_reason, 0) && valueChange
		});
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 7);
	const $childScope = _patch_child($scope0_id, "a", 0);
	TextField.content({
		placeholder: input.hint,
		value: input.v,
		valueChange: _resume(function(next) {
			document.title = next;
		}, "b0")
	});
	_patch_child_end();
	const Log = { content: _content_elide("b6", ({ log, value }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_script($scope2_id, "b7", 0, (_filled_guard($scope2_reason, 1) || _filled_guard($scope2_reason, 2)) && (_client_guard($scope2_reason, 1) || _client_guard($scope2_reason, 2) ? 2 : 1), _filled_guard($scope2_reason, 1) && "c", _filled_guard($scope2_reason, 2) && "d");
		_client_guard($scope2_reason, 0) && _patch_init($scope2_id, "b8");
		_scope($scope2_id, {
			c: log,
			d: value
		}) || (_filled_guard($scope2_reason, 1) && _patch_write($scope2_id, "xc", log, !_server_guard($scope2_reason, 1)), _filled_guard($scope2_reason, 2) && _patch_write($scope2_id, "xd", value, !_server_guard($scope2_reason, 2)));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope2 = _patch_child($scope0_id, "b", 1);
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
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)($walks)};${((_w0) => `<button>v</button>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let v = "x";
	_html(`<button>v</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "b", 0);
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
