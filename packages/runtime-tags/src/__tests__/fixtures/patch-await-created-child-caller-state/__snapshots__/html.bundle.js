// tags/show-await.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b2: "b2;D%c%;<p><!>:<!></p>",
	b3: "b3;D%c%;<p><!>:<!></p>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.label, 1, $scope0_reason, 1)}:${_text_resume($scope1_id, "b", x, 2, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_label ? "b0" : "b1");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {}), $cg__input_label && "b1");
	}, 1, "b2", _unfilled_if($scope0_reason, 0), 1);
	_scope($scope0_id, { f: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_label__closures });
});

// template.marko
_shells({
	a: "a !a2; b%;<button class=open>inc</button><!><!>",
	a1: /*@__PURE__*/ (() => `a1${_shell_marker(_shell_setup([["a5"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			show_await_default({
				promise: Promise.resolve(n),
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a1"], $scope0_reason, 0);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		g: n
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 1));
}, 1);
