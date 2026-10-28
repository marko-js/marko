// tags/label.marko
const $template = "<span> </span>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<span> </span>" });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", typeof input.onHide, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&%c`)("D l")};${((_w0) => `${_w0}<!><!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let show = input.show;
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	label_default({ onHide: function() {
		show = false;
	} });
	_patch_child_end();
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", input.promise, (value) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_text_resume($scope4_id, "a", value, $wg__input_promise)}</em>`);
					$wi__input_promise && _scope($scope4_id, {});
				}, $wg__input_promise, 0);
				_subscribe($wi__input_promise && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", 0);
				_resume_branch($scope2_id);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("<p>loading</p>");
			}, void 0, "a1", void 0, "a2");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b");
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", show, 1);
	_scope($scope0_id, {
		f: input.promise,
		a: _existing_scope($childScope),
		h: $wi__input_promise && $input_promise__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.promise, !_server_guard($scope0_reason, 1));
}, 1);
