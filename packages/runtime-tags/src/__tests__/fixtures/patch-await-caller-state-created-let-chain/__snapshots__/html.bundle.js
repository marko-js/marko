// tags/card.marko
const $template$1 = "<p> </p><button>log</button>";
const $walks = "D l b";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0;D l ;<p> </p><button>log</button>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let o = { label: input.label };
	_html(`<p>${_text_resume($scope0_id, "a", o.label, 1, _client_guard($scope0_reason, 0) << 1, 0)}</p><button>log</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wh", o?.label, 1);
	_scope($scope0_id, { h: o?.label });
});

// tags/show-await.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	c2: /*@__PURE__*/ (() => `c2${_shell_marker(_shell_setup([[], []], ["e>", $setup$1]))};${/*@__PURE__*/ ((_w0) => ` bD%c%c%l/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<style></style><p class=v><!>|<!>|<!></p>${_w0}`)($template$1)}`)(),
	c3: /*@__PURE__*/ (() => `c3${_shell_marker(_shell_setup([[], []], ["e>", $setup$1]))};${((_w0) => ` bD%c%c%l/${_w0}&`)($walks)};${((_w0) => `<style></style><p class=v><!>|<!>|<!></p>${_w0}`)($template$1)}`)(),
	c: "c;b%;<!><!><!>"
});
var show_await_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		let b = x;
		let c = b;
		let d = c;
		_html(`${_style_html(`--M_c0:${_escape_style_value(c, $scope1_id, "ya$--M_c0", $cg__input_promise << 1, 0)};`)}${_el_resume($scope1_id, "a")}<p class=v>${_text_resume($scope1_id, "b", b, 1, $cg__input_promise << 1, 0)}|${_text_resume($scope1_id, "c", c, 2, $cg__input_promise << 1, 0, 1)}|${_text_resume($scope1_id, "d", d, 2, $cg__input_promise << 1, 0, 1)}</p>`);
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "e", 0);
		card_default({ label: x });
		_patch_child_end();
		_scope($scope1_id, { e: _existing_scope($childScope) });
	}, 1, "c2", _unfilled_if($scope0_reason, 0), 1);
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
