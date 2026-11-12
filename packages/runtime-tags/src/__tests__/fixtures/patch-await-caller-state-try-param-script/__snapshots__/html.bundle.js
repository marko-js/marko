// tags/show-await.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b5: "b5,",
	b6: "b6;D l%;<p> </p><!><!>",
	b7: "b7;D l%;<p> </p><!><!>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_promise = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		const $await_content__x__closures = /* @__PURE__ */ new Set();
		_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "xd", x, !_server_guard($scope0_reason, 1));
		_html(`<p>${_text_mark($scope1_id, "a", x, 1, $scope0_reason, 1)}</p>`);
		_try($scope1_id, "b", () => {
			_scope_reason();
			const $scope2_id = _scope_id(), $fg__input_label = _filled_guard($scope0_reason, 2), $fg__input_promise = _filled_guard($scope0_reason, 1);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "b1");
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "b2");
			_script($scope2_id, "b0", 0, ($fg__input_promise || $fg__input_label) && ($cg__input_label || $cg__input_promise ? 2 : 1), (($fg__input_label ? " >>e" : "") + ($fg__input_promise ? " >d" : "")).slice(1), "b3", $scope0_reason, 0);
			_subscribe(_unfilled_if($scope0_reason, 1) && $await_content__x__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_label && "b1", 0), $cg__input_promise && "b2", 0);
			_resume_branch($scope2_id);
		}, void 0, () => {
			_scope_reason();
			_scope_id();
			_html("failed");
		}, 0, "b4", "b5", 1);
		_scope($scope1_id, {
			d: x,
			g: _write_if($scope0_reason, 1) && $await_content__x__closures
		});
	}, 1, "b6", _unfilled_if($scope0_reason, 1), 1);
	_scope($scope0_id, {
		e: input.label,
		f: _write_if($scope0_reason, 2) && $input_label__closures
	}) || _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2));
});

// template.marko
_shells({
	a: "a !a2; b%;<button class=swap>swap</button><!><!>",
	a1: `a1${_shell_marker([["a4"], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show = _write_if($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(14 | _updates_from($scope0_reason, 2) << 5);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			show_await_default({
				promise: p,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a1"], $scope0_reason, 1);
	_script($scope0_id, "a2");
	$fg__input_label && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "a0", "g");
	_scope($scope0_id, {
		g: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.label,
		h: $wi__input_show && p
	}) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 2));
}, 1);
