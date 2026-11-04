// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b2: "b2;D%b%c%;<p><!><!>:<!></p>",
	b: "b;b%;<!><!><!>",
	b3: "b3;D%b%c%;<p><!><!>:<!></p>",
	b4: "b4;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 4), $cg__input_items = _client_guard($scope0_reason, 2), $ui__input_items = _unfilled_if($scope0_reason, 2), $ui__input_label = _unfilled_if($scope0_reason, 4), $fg__input_promise = _filled_guard($scope0_reason, 3), $fg__input_label = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item__closures = /* @__PURE__ */ new Set();
		_await($scope1_id, "a", input.promise, (x) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "a", item, 1, $scope0_reason, 2)}${_text_mark($scope2_id, "b", input.label, 2, $scope0_reason, 4)}:${_text_mark($scope2_id, "c", x, 2, $scope0_reason, 3)}</p>`);
			_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "b0", $cg__input_label);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "b1", $cg__input_items);
			_subscribe(_unfilled_if($scope0_reason, 2) && $for_content__item__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope2_id, {}), $cg__input_label && "b0"), $cg__input_items && "b1");
		}, 1, "b2", _unfilled_if($scope0_reason, 3));
		_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "b5");
		_write_if($scope0_reason, 1) && _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			i: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $for_content__item__closures
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b4", $scope0_reason, 2);
	$fg__input_promise && $cg__input_items && _patch_render($scope0_id, "b5", "e");
	$fg__input_label && $cg__input_items && _patch_subscribers($scope0_id, "b6", "f");
	_scope($scope0_id, {
		e: ($ui__input_items || _unfilled_if($scope0_reason, 3)) && input.promise,
		f: ($ui__input_items || $ui__input_label) && input.label,
		h: _write_if($scope0_reason, 4) && ($ui__input_label || $ui__input_items) && $input_label__closures
	}) || ($fg__input_promise && $ui__input_items && _patch_write($scope0_id, "xe", input.promise, !_server_guard($scope0_reason, 3)), $fg__input_label && $ui__input_items && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 4)));
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
		items: input.items
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: resolve,
		c: _existing_scope($childScope)
	});
}, 1);
