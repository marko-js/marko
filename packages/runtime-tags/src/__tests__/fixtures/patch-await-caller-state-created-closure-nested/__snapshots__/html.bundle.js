// tags/show-await.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b4: "b4,error",
	b5: "b5;D%c%;<p><!>:<!></p>",
	b6: "b6;b%;<!><!><!>",
	b7: "b7;b%;<!><!><!>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		const $await_content__x__closures = /* @__PURE__ */ new Set();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", x, 1, $scope0_reason, 0)}:${_text_resume($scope2_id, "b", input.promise ? "p" : "-", 2, $scope0_reason, 0)}</p>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_promise ? "b0" : "b1");
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_promise ? "b2" : "b3");
			_subscribe(_unfilled_if($scope0_reason, 0) && $await_content__x__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope2_id, { _: $wi__input_promise && _scope_with_id($scope1_id) }), $cg__input_promise && "b1"), $cg__input_promise && "b3");
		}, void 0, () => {
			_scope_reason();
			_scope_id();
			_html("error");
		}, 0, "b4", "b5", 1, 0, 1);
		$wi__input_promise && _scope($scope1_id, { f: _unfilled_if($scope0_reason, 0) && $await_content__x__closures });
	}, 1, "b6", _unfilled_if($scope0_reason, 0) && 3, 1);
	_scope($scope0_id, { e: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures });
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
	_scope($scope0_id, { g: _write_if($scope0_reason, 1) && p });
}, 1);
