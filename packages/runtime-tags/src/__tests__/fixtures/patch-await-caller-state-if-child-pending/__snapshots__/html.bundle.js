// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b1: "b1;D%c%;<p><!>:<!></p>",
	b: "b;b%;<!><!><!>",
	b2: "b2;D%c%;<p><!>:<!></p>",
	b3: "b3;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $fg__input_promise = _filled_guard($scope0_reason, 3), $fg__input_label = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (x) => {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "a", input.label, 1, $scope0_reason, 4)}:${_text_mark($scope2_id, "b", x, 2, $scope0_reason, 3)}</p>`);
				_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "b0", $cg__input_label);
				_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope2_id, {}), $cg__input_label && "b0");
			}, 1, "b1", _unfilled_if($scope0_reason, 3));
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "b4");
			_write_if($scope0_reason, 1) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b3"], $scope0_reason, 2);
	$fg__input_promise && $cg__input_show && _patch_render($scope0_id, "b4", "e");
	$fg__input_label && $cg__input_show && _patch_subscribers($scope0_id, "b5", "f");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.promise,
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.label,
		h: _write_if($scope0_reason, 4) && (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 2)) && $input_label__closures
	}) || ($fg__input_promise && $cg__input_show && _patch_write($scope0_id, "xe", input.promise, !_server_guard($scope0_reason, 3)), $fg__input_label && $cg__input_show && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 4)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["c>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b b/${_w0}&b`)("b%c")};${((_w0) => `<button class=open>pend</button><button class=settle>settle</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = Promise.resolve(0);
	let resolve = void 0;
	_html(`<button class=open>pend</button>${_el_mark($scope0_id, "a")}<button${_attr("disabled", true)} class=settle>settle</button>${_el_mark($scope0_id, "b")}`);
	_set_scope_reason(152 | (_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 5 | _updates_from($scope0_reason, 1) << 9));
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	show_await_default({
		promise: p,
		label: input.label,
		show: input.show
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: resolve,
		c: _existing_scope($childScope)
	});
}, 1);
