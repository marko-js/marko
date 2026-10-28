// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b2: "b2,<span>caught</span>",
	b3: "b3;D ;<b> </b>",
	b4: "b4;D ;<b> </b>",
	b5: "b5;b%;<!><!><!>",
	b6: "b6;D l%;<p> </p><!><!>",
	b7: "b7;D l%;<p> </p><!><!>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 1), $cg__input_other = _client_guard($scope0_reason, 2), $wi__input_promise__OR__input_other = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_other__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		const $await_content__x__closures = /* @__PURE__ */ new Set();
		_html(`<p>${_text_resume($scope1_id, "a", x, 1, $scope0_reason, 1)}</p>`);
		_try($scope1_id, "b", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.other, (y) => {
				const $scope3_id = _scope_id();
				_html(`<b>${_text_resume($scope3_id, "a", x, 1, $scope0_reason, 1)}</b>`);
				_unfilled_if($scope0_reason, 1) && _patch_init($scope3_id, $cg__input_promise ? "b0" : "b1");
				_subscribe(_unfilled_if($scope0_reason, 1) && $await_content__x__closures, _scope($scope3_id, {}), $cg__input_promise && "b1");
			}, 1, "b3", _unfilled_if($scope0_reason, 2), 1);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_other ? "b8" : "b9");
			$wi__input_promise__OR__input_other && _subscribe(_unfilled_if($scope0_reason, 2) && $input_other__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_other && "b9", 0);
			$wi__input_promise__OR__input_other && _resume_branch($scope2_id);
		}, void 0, () => {
			_scope_reason();
			_scope_id();
			_html("<span>caught</span>");
		}, 0, "b2", "b5", 1, 0, 1);
		_scope($scope1_id, { g: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $await_content__x__closures });
	}, 1, "b6", _unfilled_if($scope0_reason, 1), 1);
	_scope($scope0_id, { f: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_other__closures });
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	show_await_default({
		promise: p,
		other: input.other
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
