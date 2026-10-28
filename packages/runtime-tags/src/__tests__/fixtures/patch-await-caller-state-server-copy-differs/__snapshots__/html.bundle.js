// tags/echo.marko
const $template$1 = "<span> </span>";
const $setup$2 = [[], []];
_shells({ b: "b;D ;<span> </span>" });
var echo_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.value.length, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	c1: /*@__PURE__*/ (() => `c1${_shell_marker(_shell_setup([[], []], ["g>", $setup$2]))};${/*@__PURE__*/ ((_w0) => ` D%c%c%c%l%b/${_w0}&`)("D l")};${/*@__PURE__*/ ((_w0) => `<p><!>:<!>:<!>:<!></p><!>${_w0}`)($template$1)}`)(),
	c2: /*@__PURE__*/ (() => `c2${_shell_marker(_shell_setup([[], []], ["g>", $setup$2]))};${((_w0) => ` D%c%c%c%l%b/${_w0}&`)("D l")};${((_w0) => `<p><!>:<!>:<!>:<!></p><!>${_w0}`)($template$1)}`)(),
	c: "c;b%;<!><!><!>",
	c0: "c0,<em>long</em>"
});
var show_await_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_promise = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		const upper = x.toUpperCase();
		_html(`<p${_attr("title", x, $scope1_id, "aa$title", $scope0_reason, 1)}>${_text_resume($scope1_id, "b", input.label, 1, $scope0_reason, 2)}:${_text_resume($scope1_id, "c", x, 2, $scope0_reason, 1)}:${_text_resume($scope1_id, "d", upper, 2, $scope0_reason, 1)}:${_text_resume($scope1_id, "e", input.label + x, 2, $scope0_reason, 0)}</p>${_el_resume($scope1_id, "a", _mask_group($scope0_reason, 1))}`);
		_if(() => {
			if (x.length > 6) {
				const $scope2_id = _scope_id();
				_html("<em>long</em>");
				_write_if($scope0_reason, 1) && _scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "f", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["c0"], $scope0_reason, 1);
		_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
		const $childScope = _peek_scope_id($scope1_id, "g", 0);
		echo_default({ value: x });
		_patch_child_end();
		_filled_guard($scope0_reason, 1) && $cg__input_label && _patch_write($scope1_id, "xi", x);
		(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, $cg__input_label ? "c3" : "c4");
		_patch_join_init($scope1_id, "c5", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">e", _filled_guard($scope0_reason, 1) && "i");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, {
			i: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && x,
			g: _existing_scope($childScope)
		}), $cg__input_label && "c4");
	}, 1, "c1", _unfilled_if($scope0_reason, 1), 1);
	$cg__input_promise && _patch_write($scope0_id, "xe", input.label, !(_filled_guard($scope0_reason, 2) && $cg__input_promise));
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.label,
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
