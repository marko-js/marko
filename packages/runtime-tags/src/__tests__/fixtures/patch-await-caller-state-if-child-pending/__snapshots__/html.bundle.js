// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b2: "b2;D%c%;<p><!>:<!></p>",
	b: "b !;b%;<!><!><!>",
	b3: "b3;D%c%;<p><!>:<!></p>",
	b4: "b4;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (x) => {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", input.label, 1, $scope0_reason, 4)}:${_text_resume($scope2_id, "b", x, 2, $scope0_reason, 3)}</p>`);
				_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, $cg__input_label ? "b0" : "b1");
				_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope2_id, {}), $cg__input_label && "b1");
			}, 1, "b2", _unfilled_if($scope0_reason, 3));
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "b5");
			_write_if($scope0_reason, 1) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b4"], $scope0_reason, 2);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.promise,
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.label,
		h: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_label__closures
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "vb6", input.promise, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && $cg__input_show && _patch_fill($scope0_id, "vb7", input.label, !_server_guard($scope0_reason, 4)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["c>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b b/${_w0}&b`)("b%c")};${((_w0) => `<button class=open>pend</button><button class=settle>settle</button>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = Promise.resolve(0);
	let resolve = void 0;
	_html(`<button class=open>pend</button>${_el_resume($scope0_id, "a")}<button${_attr("disabled", true)} class=settle>settle</button>${_el_resume($scope0_id, "b")}`);
	_set_scope_reason(152 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 1) << 9));
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
