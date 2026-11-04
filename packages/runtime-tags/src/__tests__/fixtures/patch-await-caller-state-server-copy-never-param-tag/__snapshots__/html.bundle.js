// tags/brand.marko
_shells({ b: "b;D ;<span> </span>" });
var brand_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// tags/show-await.marko
const $template = "<!><!><!>";
const tags = [brand_default];
const $setup = [[], []];
_shells({
	c2: "c2;b%;<!><!><!>",
	c3: "c3;b%;<!><!><!>",
	c: "c;b%;<!><!><!>"
});
var show_await_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise__OR__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2), $ui__input_promise__OR__input_label = _unfilled_if($scope0_reason, 0), $ui__input_promise = _unfilled_if($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $scope1_id = _await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 2);
		_filled_guard($scope0_reason, 1) && $ui__input_label && _patch_write($scope1_id, "xc", x, !_server_guard($scope0_reason, 1));
		_dynamic_tag($scope1_id, "a", x && input.label ? tags[0] : null, { label: x + ":" + input.label }, 1, 0, 0, $wg__input_promise__OR__input_label, $scope0_reason, 0);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "c0");
		_patch_render($scope1_id, "c1", (($fg__input_label ? " >e" : "") + (_filled_guard($scope0_reason, 1) ? " c" : "")).slice(1), $scope0_reason, 0);
		_write_if($scope0_reason, 0) && _subscribe($ui__input_label && $input_label__closures, _scope($scope1_id, { c: $wi__input_label && _unfilled_if($scope0_reason, 0) && x }), _client_guard($scope0_reason, 2) && "c0", $wg__input_promise__OR__input_label);
	}, 1, "c2", $ui__input_promise && 2, 1, 1);
	if ($scope1_id) {
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "c0");
		_patch_render($scope1_id, "c1", ((_filled_guard($scope0_reason, 2) ? " >e" : "") + (_filled_guard($scope0_reason, 1) ? " c" : "")).slice(1), $scope0_reason, 0);
	}
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && $ui__input_promise__OR__input_label && input.label,
		f: $wi__input_label && $wi__input_label && $ui__input_promise__OR__input_label && $input_label__closures
	}) || $fg__input_label && $ui__input_promise && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2));
});

// template.marko
_shells({
	a: "a !a2; b%;<button class=swap>swap</button><!><!>",
	a1: `a1${_shell_marker([["a4"], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show = _write_if($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(14 | _updates_from($scope0_reason, 2) << 5);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			show_await_default({
				promise: p,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a1"], $scope0_reason, 1);
	_script($scope0_id, "a2");
	$fg__input_label && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "a0", "g");
	_scope($scope0_id, {
		g: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.label,
		h: $wi__input_show && p
	}) || (_client_branch(input.promise), $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
