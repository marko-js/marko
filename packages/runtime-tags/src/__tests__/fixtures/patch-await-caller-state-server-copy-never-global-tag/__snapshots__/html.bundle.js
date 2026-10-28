// tags/brand.marko
_shells({ b: "b;D ;<span> </span>" });
var brand_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// tags/show-await.marko
const $template = "<!><!><!>";
const tags = [brand_default];
const $setup = [[], []];
_shells({
	c1: "c1;b%;<!><!><!>",
	c2: "c2;b%;<!><!><!>",
	c: "c;b%;<!><!><!>"
});
var show_await_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_promise = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", x && $global$1.flag ? tags[0] : null, { label: x }, 1, 0, 0, $scope0_page || $wg__input_promise, (2 | _mask_group($scope0_reason, 0)) << 1, 0);
		_fill_global_subscribe("c0", $scope1_id, _client_guard($scope0_reason, 0));
		_scope($scope1_id, { c: _unfilled_if($scope0_reason, 0) && x });
	}, 1, "c1", _unfilled_if($scope0_reason, 0) && 2, 1);
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
