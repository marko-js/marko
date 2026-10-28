// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b4: "b4;D%b%c%;<p><!><!>:<!></p>",
	b: "b !;b%;<!><!><!>",
	b5: "b5;D%b%c%;<p><!><!>:<!></p>",
	b6: "b6;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 4), $cg__input_items = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item__closures = /* @__PURE__ */ new Set();
		_await($scope1_id, "a", input.promise, (x) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", item, 1, $scope0_reason, 2)}${_text_resume($scope2_id, "b", input.label, 2, $scope0_reason, 4)}:${_text_resume($scope2_id, "c", x, 2, $scope0_reason, 3)}</p>`);
			_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, $cg__input_label ? "b0" : "b1");
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_items ? "b2" : "b3");
			_subscribe(_unfilled_if($scope0_reason, 2) && $for_content__item__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope2_id, {}), $cg__input_label && "b1"), $cg__input_items && "b3");
		}, 1, "b4", _unfilled_if($scope0_reason, 3));
		_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "b7");
		_write_if($scope0_reason, 1) && _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			i: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $for_content__item__closures
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b6", $scope0_reason, 2);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.promise,
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.label,
		h: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_label__closures
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_items && _patch_fill($scope0_id, "vb8", input.promise, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && $cg__input_items && _patch_fill($scope0_id, "vb9", input.label, !_server_guard($scope0_reason, 4)));
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
		items: input.items
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_patch_fill($scope0_id, "va1", p, 1);
	_scope($scope0_id, {
		i: resolve,
		c: _existing_scope($childScope)
	});
}, 1);
