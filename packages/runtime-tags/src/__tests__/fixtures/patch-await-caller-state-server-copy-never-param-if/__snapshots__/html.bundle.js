// tags/show-await.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b2: "b2;b%;<!><!><!>",
	b3: "b3;b%;<!><!><!>",
	b: "b;b%;<!><!><!>",
	b1: "b1;D%c%;<p><!>:<!></p>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise__OR__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2), $cg__input_label = _client_guard($scope0_reason, 2), $ui__input_promise__OR__input_label = _unfilled_if($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 1), $ui__input_promise = _unfilled_if($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $scope1_id = _await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 2), $fg__input_promise = _filled_guard($scope0_reason, 1);
		$fg__input_promise && $ui__input_label && _patch_write($scope1_id, "xc", x, !_server_guard($scope0_reason, 1));
		_if(() => {
			if (x && input.label) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "a", x, 1, $scope0_reason, 1)}:${_text_mark($scope2_id, "b", 3, 2, 0, 0, 1)}</p>`);
				_client_guard($scope0_reason, 1) && _patch_render($scope2_id, "b0");
				_scope($scope2_id, { _: $wi__input_promise && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_promise__OR__input_label, 1, 0, 0, ["b1"], $scope0_reason, 0);
		$fg__input_promise && $cg__input_label && _patch_render($scope1_id, "b0", "c");
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "b4");
		_patch_render($scope1_id, "b5", (($fg__input_label ? " >e" : "") + (_filled_guard($scope0_reason, 1) ? " c" : "")).slice(1), $scope0_reason, 0);
		_write_if($scope0_reason, 0) && _subscribe($ui__input_label && $input_label__closures, _scope($scope1_id, { c: $wi__input_label && (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && x }), $cg__input_label && "b4", $wg__input_promise__OR__input_label);
	}, 1, "b2", $ui__input_promise && 2, 1);
	if ($scope1_id) {
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "b4");
		_patch_render($scope1_id, "b5", ((_filled_guard($scope0_reason, 2) ? " >e" : "") + (_filled_guard($scope0_reason, 1) ? " c" : "")).slice(1), $scope0_reason, 0);
	}
	_scope($scope0_id, {
		e: $wi__input_promise && $ui__input_promise__OR__input_label && input.label,
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
	}) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 2));
}, 1);
