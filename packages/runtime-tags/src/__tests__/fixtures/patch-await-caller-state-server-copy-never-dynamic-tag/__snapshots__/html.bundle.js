// tags/show-await.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b0: "b0; ; ",
	b3: "b3;b%;<!><!><!>",
	b4: "b4;b%;<!><!><!>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		const $await_content__x__closures = /* @__PURE__ */ new Set();
		_dynamic_tag($scope1_id, "a", x ? "b" : "i", { class: "k" }, 1, _content("b0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(_text_resume($scope2_id, "a", x, 1, $scope0_reason, 0));
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, _client_guard($scope0_reason, 0) ? "b1" : "b2");
			_subscribe(_unfilled_if($scope0_reason, 0) && $await_content__x__closures, _scope($scope2_id, { _: $wi__input_promise && _scope_with_id($scope1_id) }));
		}, $scope1_id, 1), 0, $wg__input_promise, $scope0_reason, 0);
		$wi__input_promise && _scope($scope1_id, { d: $await_content__x__closures });
	}, 1, "b3", _unfilled_if($scope0_reason, 0) && 2, 1);
});

// template.marko
_shells({
	a: "a !a1; b%;<button class=swap>swap</button><!><!>",
	a0: /*@__PURE__*/ (() => `a0${_shell_marker(_shell_setup([["a3"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			show_await_default({ promise: p });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a0"], $scope0_reason, 1);
	_script($scope0_id, "a1");
	_scope($scope0_id, { g: _write_if($scope0_reason, 1) && p }) || _content_withhold(input.promise);
}, 1);
