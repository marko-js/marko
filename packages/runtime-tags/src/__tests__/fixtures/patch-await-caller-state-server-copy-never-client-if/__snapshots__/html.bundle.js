// tags/show-await.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b5: "b5;D l%;<p> </p><!><!>",
	b6: "b6;D l%;<p> </p><!><!>",
	b: "b !;b%;<!><!><!>",
	b4: "b4; bD%c%c%;<style></style><b class=b><!>:<!>:<!></b>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_promise = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", x, 1, $scope0_reason, 1)}</p>`);
		_if(() => {
			if (x) {
				const $scope2_id = _scope_id();
				_html(`${_style_html(`--M_b0:${_escape_style_value("red", $scope2_id, "ya$--M_b0", 0, 0)};`)}${_el_resume($scope2_id, "a", 0)}<b class=b>${_text_resume($scope2_id, "b", x, 1, $scope0_reason, 1)}:${_text_resume($scope2_id, "c", 1, 2, 0, 0)}:${_text_resume($scope2_id, "d", input.label, 2, $scope0_reason, 2)}</b>`);
				_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_label ? "b1" : "b2");
				$cg__input_promise && _patch_init($scope2_id, "b3");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) }), $cg__input_label && "b2");
				return 0;
			}
		}, $scope1_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["b4"], $scope0_reason, 1);
		_scope($scope1_id, {});
	}, 1, "b5", _unfilled_if($scope0_reason, 1) && 2, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		f: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_label__closures
	}) || _filled_guard($scope0_reason, 2) && $cg__input_promise && _patch_fill($scope0_id, "vb7", input.label, !_server_guard($scope0_reason, 2));
});

// template.marko
_shells({
	a: "a !a2; b%;<button class=swap>swap</button><!><!>",
	a1: /*@__PURE__*/ (() => `a1${_shell_marker(_shell_setup([["a5"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(14 | _mask_group($scope0_reason, 2) << 5);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			show_await_default({
				promise: p,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a1"], $scope0_reason, 1);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		h: _write_if($scope0_reason, 1) && p
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 2));
}, 1);
