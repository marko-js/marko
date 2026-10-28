// tags/show-await.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b2: "b2,<em>waiting</em>",
	b3: "b3;D%c%;<p><!>:<!></p>",
	b4: "b4;D%c%;<p><!>:<!></p>",
	b5: "b5;b%;<!><!><!>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_promise = _client_guard($scope0_reason, 1), $wi__input_promise__OR__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (x) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", input.label, 1, $scope0_reason, 2)}:${_text_resume($scope2_id, "b", x, 2, $scope0_reason, 1)}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_label ? "b0" : "b1");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {}), $cg__input_label && "b1");
		}, 1, "b3", _unfilled_if($scope0_reason, 1), 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_promise ? "b6" : "b7");
		$wi__input_promise__OR__input_label && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "b7", 0);
		$wi__input_promise__OR__input_label && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>waiting</em>");
	}, void 0, "b2", void 0, "b5", 1, 0, 2);
	_scope($scope0_id, {
		g: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_label__closures,
		f: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_promise__closures
	});
});

// template.marko
_shells({
	a: "a !a2; b b%;<button class=open>pend</button><button class=settle>settle</button><!><!>",
	a1: /*@__PURE__*/ (() => `a1${_shell_marker(_shell_setup([["a5"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	let resolve = void 0;
	_html(`<button class=open>pend</button>${_el_resume($scope0_id, "a")}<button${_attr("disabled", true)} class=settle>settle</button>${_el_resume($scope0_id, "b")}`);
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
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a1"], $scope0_reason, 1);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		h: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		i: _write_if($scope0_reason, 1) && p,
		j: resolve
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 2));
}, 1);
