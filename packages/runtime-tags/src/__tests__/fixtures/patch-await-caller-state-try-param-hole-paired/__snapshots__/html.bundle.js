// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b4: "b4;D ;<p> </p>",
	b5: "b5;b%;<!><!><!>",
	b6: "b6;b%;<!><!><!>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_promise = _write_if($scope0_reason, 1), $wi__input_promise__OR__input_label = _write_if($scope0_reason, 0), $ui__input_promise__OR__input_label2 = _unfilled_if($scope0_reason, 0), $ui__input_promise = _unfilled_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id(), $ui__input_promise__OR__input_label = _unfilled_if($scope0_reason, 0);
		const $await_content__x__closures = /* @__PURE__ */ new Set();
		_filled_guard($scope0_reason, 1) && _unfilled_if($scope0_reason, 2) && _patch_write($scope1_id, "xc", x, !_server_guard($scope0_reason, 1));
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "a", x + ":" + input.label, 1, $scope0_reason, 0)}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "b0");
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "b1");
			_patch_render($scope2_id, "b2", ((_filled_guard($scope0_reason, 2) ? " >>e" : "") + (_filled_guard($scope0_reason, 1) ? " >c" : "")).slice(1), $scope0_reason, 0);
			_subscribe(_unfilled_if($scope0_reason, 1) && $await_content__x__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: $wi__input_promise__OR__input_label && _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 2) && "b0"), _client_guard($scope0_reason, 1) && "b1");
		}, void 0, () => {
			_scope_reason();
			_scope_id();
			_html("failed");
		}, 0, "b3", "b4", 1);
		$wi__input_promise__OR__input_label && _scope($scope1_id, {
			c: $wi__input_label && $ui__input_promise__OR__input_label && x,
			g: $wi__input_promise && $wi__input_promise && $ui__input_promise__OR__input_label && $await_content__x__closures
		});
	}, 1, "b5", $ui__input_promise, 1);
	_scope($scope0_id, {
		e: $wi__input_promise && $ui__input_promise__OR__input_label2 && input.label,
		f: $wi__input_label && $wi__input_label && $ui__input_promise__OR__input_label2 && $input_label__closures
	}) || _filled_guard($scope0_reason, 2) && $ui__input_promise && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(14 | _updates_from($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	show_await_default({
		promise: p,
		label: input.label
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
