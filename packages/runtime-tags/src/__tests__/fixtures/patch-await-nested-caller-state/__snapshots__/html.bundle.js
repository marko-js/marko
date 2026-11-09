// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b2: "b2;D%c%c%;<p><!>:<!>:<!></p>",
	b3: "b3;D%c%c%;<p><!>:<!>:<!></p>",
	b4: "b4;b%;<!><!><!>",
	b5: "b5;b%;<!><!><!>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_promise = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 1);
		const $await_content__x__closures = /* @__PURE__ */ new Set();
		_await($scope1_id, "a", Promise.resolve(x + 10), (y) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "a", input.label, 1, $scope0_reason, 2)}:${_text_mark($scope2_id, "b", x, 2, $scope0_reason, 1)}:${_text_mark($scope2_id, "c", y, 2, $scope0_reason, 1)}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "b0", $cg__input_label);
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "b1", $cg__input_promise);
			_subscribe(_unfilled_if($scope0_reason, 1) && $await_content__x__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {}), $cg__input_label && "b0"), $cg__input_promise && "b1");
		}, 1, "b2", $ui__input_promise, 1);
		_write_if($scope0_reason, 0) && _scope($scope1_id, { g: _write_if($scope0_reason, 1) && $ui__input_promise && $await_content__x__closures });
	}, 1, "b4", _unfilled_if($scope0_reason, 1), 1);
	_scope($scope0_id, { f: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_label__closures });
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=open>inc</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(14 | _updates_from($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	show_await_default({
		promise: Promise.resolve(n),
		label: input.label
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: n,
		b: _existing_scope($childScope)
	});
}, 1);
