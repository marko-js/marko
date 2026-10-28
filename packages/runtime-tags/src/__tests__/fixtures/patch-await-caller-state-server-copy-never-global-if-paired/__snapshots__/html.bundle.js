// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b2: "b2;b%;<!><!><!>",
	b3: "b3;b%;<!><!><!>",
	b: "b;b%;<!><!><!>",
	b1: "b1;D%c%;<p><!>:<!></p>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_promise = _write_guard($scope0_reason, 0), $cg__input_promise = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (x && $global$1.flag) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", x, 1, $scope0_reason, 0)}:${_text_resume($scope2_id, "b", 3, 2, 0, 0)}</p>`);
				$cg__input_promise && _patch_init($scope2_id, "b0");
				_scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $scope0_page || $wg__input_promise, 1, 0, 0, ["b1"], (2 | _mask_group($scope0_reason, 0)) << 1, 0);
		_fill_global_subscribe("b4", $scope1_id, $cg__input_promise);
		_scope($scope1_id, { c: _unfilled_if($scope0_reason, 0) && x });
	}, 1, "b2", _unfilled_if($scope0_reason, 0) && 2, 1);
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	show_await_default({ promise: p });
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
