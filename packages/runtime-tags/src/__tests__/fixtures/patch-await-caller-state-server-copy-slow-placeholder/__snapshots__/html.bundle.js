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
	a3: "a3",
	a4: /*@__PURE__*/ (() => `a4${_shell_marker(_shell_setup([["a8"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)(),
	a: "a !a5; b%;<button class=swap>swap</button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $p__closures = /* @__PURE__ */ new Set();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(2 | _mask_group($scope0_reason, 1) << 3);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		show_await_default({
			promise: p,
			label: input.label
		});
		_patch_child_end();
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_label ? "a0" : "a1");
		_subscribe($p__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), $cg__input_label && "a1"), "a2");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>loading</em>");
	}, void 0, "a3", void 0, "a4", 1, 0, 2);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		h: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_label__closures,
		i: $p__closures
	});
}, 1);
