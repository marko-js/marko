// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b2: "b2;D ;<p> </p>",
	b3: "b3;D ;<p> </p>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_promise = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.label + ":" + x, 1, $scope0_reason, 0)}</p>`);
		_filled_guard($scope0_reason, 1) && $cg__input_label && _patch_write($scope1_id, "xc", x);
		(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "b0");
		_patch_join_init($scope1_id, "b1", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">e", _filled_guard($scope0_reason, 1) && "c");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, { c: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && x }), $cg__input_label && "b0");
	}, 1, "b2", _unfilled_if($scope0_reason, 1), 1);
	$cg__input_promise && _patch_write($scope0_id, "xe", input.label, !(_filled_guard($scope0_reason, 2) && $cg__input_promise));
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.label,
		f: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_label__closures
	});
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
		label: input.label
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
