// tags/show-await.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b2: "b2;D%c%;<b><!>:<!></b>",
	b3: "b3;b%;<!><!><!>",
	b4: "b4;b%;<!><!><!>",
	b: "b;b%;<!><!><!>",
	b5: "b5;D%c%;<b><!>:<!></b>",
	b6: "b6;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_for_of([x], (n, i) => {
			const $scope2_id = _scope_id();
			const $for_content__n__closures = /* @__PURE__ */ new Set();
			_await($scope2_id, "a", Promise.resolve(i), (y) => {
				const $scope3_id = _scope_id();
				_html(`<b>${_text_resume($scope3_id, "a", n, 1, $scope0_reason, 0)}:${_text_resume($scope3_id, "b", y, 2, 0, 0)}</b>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope3_id, $cg__input_promise ? "b0" : "b1");
				_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__n__closures, _scope($scope3_id, {}), $cg__input_promise && "b1");
			}, 1, "b2", _unfilled_if($scope0_reason, 0) && 3);
			_write_if($scope0_reason, 0) && _scope($scope2_id, { e: _unfilled_if($scope0_reason, 0) && $for_content__n__closures });
		}, 0, $scope1_id, "a", 1, 1, 1, 0, 0, "b6", $scope0_reason, 0);
		_scope($scope1_id, {});
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
	_scope($scope0_id, { g: _write_if($scope0_reason, 1) && p });
}, 1);
