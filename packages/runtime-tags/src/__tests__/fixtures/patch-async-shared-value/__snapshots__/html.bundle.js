// child.marko
const $template = "<div></div>";
const $setup$1 = [[], []];
_shells({ a: "a; ;<div></div>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div${_attr_class(input.name, $scope0_id, "aa$class", $scope0_reason, 1)}></div>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 1))}`);
	_script($scope0_id, "a0", 1, (_filled_guard($scope0_reason, 1) || _filled_guard($scope0_reason, 2)) && (_client_guard($scope0_reason, 1) || _client_guard($scope0_reason, 2) ? 2 : 1), _filled_guard($scope0_reason, 1) && "d", _filled_guard($scope0_reason, 2) && "e");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "a1");
	_scope($scope0_id, {
		d: input.name,
		e: input.item
	}) || (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xd", input.name, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.item, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1], ["b>", $setup$1]);
_shells({
	b2: "b2",
	b3: /*@__PURE__*/ (() => `b3${_shell_marker(_shell_setup([[], []], ["b>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `D l/${_w0}&`)(" b")};${/*@__PURE__*/ ((_w0) => `<span> </span>${_w0}`)($template)}`)(),
	b4: /*@__PURE__*/ (() => `b4${_shell_marker(_shell_setup([[], []], ["b>", $setup$1]))};${((_w0) => `D l/${_w0}&`)(" b")};${((_w0) => `<span> </span>${_w0}`)($template)}`)(),
	b5: "b5;b%;<!><!><!>",
	b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0, _w1) => `D/${_w0}&/${_w1}&%l`)(" b", " b")};${((_w0, _w1) => `<main>${_w0}${_w1}<!></main>`)($template, $template)}`)()
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $cg__input_promise = _client_guard($scope0_reason, 2), $wi__input_label__OR__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $item__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const item = { label: input.label };
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		name: "a",
		item: _patch_live($childScope, item, $scope0_id, "f")
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	child_default({
		name: "b",
		item: _patch_live($childScope2, item, $scope0_id, "f")
	});
	_patch_child_end();
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope2_id = _scope_id();
			_html(`<span>${_text_resume($scope2_id, "a", value, 1, $scope0_reason, 2)}</span>`);
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
			const $childScope3 = _peek_scope_id($scope2_id, "b", 2);
			child_default({
				name: "c",
				item: _patch_live($childScope3, item, $scope2_id, ">>f")
			});
			_patch_child_end();
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_label ? "b0" : "b1");
			_subscribe(_unfilled_if($scope0_reason, 1) && $item__closures, _scope($scope2_id, { b: _existing_scope($childScope3) }), $cg__input_label && "b1");
		}, 1, "b3", 1);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_promise ? "b6" : "b7");
		$wi__input_label__OR__input_promise && _subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "b7", 0);
		$wi__input_label__OR__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "b2", void 0, "b5", 1, 0, 2);
	_html("</main>");
	_scope($scope0_id, {
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2),
		j: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $item__closures,
		i: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_promise__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 1));
}, 1);
