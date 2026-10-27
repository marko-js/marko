// tags/box.marko
const $setup$1 = [[], []];
_shells({ b: "b;D%;<div><!></div>" });
var box_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// tags/child.marko
const $template = "<!><!><!>";
function boom(error) {
	throw error;
}
const $setup = [[], []];
_shells({
	c6: "c6;D ;<p> </p>",
	c2: "c2",
	c5: /*@__PURE__*/ (() => `c5${_shell_marker(_shell_setup([[], []], ["a>", $setup$1]))}`)(),
	c: "c !;b%;<!><!><!>"
});
var child_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_error = _client_guard($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_patch_text($scope3_id, "a", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope3_id, $cg__input_error ? "c3" : "c4");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope3_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), $cg__input_error && "c4");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason(), $wi__err_message = _write_if($scope1_reason, 0);
		const $scope1_id = _scope_id();
		const $catch_content__err_message__closures = /* @__PURE__ */ new Set();
		_set_scope_reason(0);
		const $childScope = _patch_child($scope1_id, "a", 0);
		box_default({ content: _content_elide("c2", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<span>${_patch_text($scope2_id, "a", err.message)} ${_patch_text($scope2_id, "b", input.label, 2, $scope0_reason, 0)}</span>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, _client_guard($scope0_reason, 0) ? "c0" : "c1");
			_subscribe(_unfilled_if() && $wi__err_message && $catch_content__err_message__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) })));
		}, $scope1_id) });
		_patch_child_end();
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			h: $wi__err_message && _unfilled_if($scope1_reason, 0) && $catch_content__err_message__closures,
			a: _existing_scope($childScope)
		});
	}, void 0, "c5", "c6", 1, 1, 1);
	_scope($scope0_id, {
		d: input.label,
		f: _write_if($scope0_reason, 0) && $input_label__closures,
		g: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc7", input.label, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 3) << 3);
			const $childScope = _patch_child($scope1_id, "a", 0);
			child_default({
				label: input.label,
				error: input.error
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a0");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a1");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.error
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va4", input.error, !_server_guard($scope0_reason, 3)));
}, 1);
