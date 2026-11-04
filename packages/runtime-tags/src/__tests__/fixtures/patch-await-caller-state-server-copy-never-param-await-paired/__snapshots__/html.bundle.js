// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b0: "b0;D ;<p> </p>",
	b1: "b1;D ;<p> </p>",
	b2: "b2;b%;<!><!><!>",
	b3: "b3;b%;<!><!><!>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_promise__OR__input_label = _write_if($scope0_reason, 0), $ui__input_promise__OR__input_label2 = _unfilled_if($scope0_reason, 0), $ui__input_promise = _unfilled_if($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $scope1_id = _await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id(), $ui__input_promise__OR__input_label = _unfilled_if($scope0_reason, 0), $ui__input_label = _unfilled_if($scope0_reason, 2);
		_filled_guard($scope0_reason, 1) && $ui__input_label && _patch_write($scope1_id, "xc", x, !_server_guard($scope0_reason, 1));
		_await($scope1_id, "a", Promise.resolve(x + ":" + input.label), (y) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "a", y, 1, $scope0_reason, 0)}</p>`);
			_scope($scope2_id, {});
		}, 1, "b0", $ui__input_promise__OR__input_label && 2, 1);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "b4", 1);
		_patch_render($scope1_id, "b5", (($fg__input_label ? " >e" : "") + (_filled_guard($scope0_reason, 1) ? " c" : "")).slice(1), $scope0_reason, 0);
		$wi__input_promise__OR__input_label && _subscribe($ui__input_label && $input_label__closures, _scope($scope1_id, { c: $wi__input_label && $ui__input_promise__OR__input_label && x }), _client_guard($scope0_reason, 2) && "b4", 0);
		$wi__input_promise__OR__input_label && _resume_branch($scope1_id);
	}, 1, "b2", $ui__input_promise && 3, 1);
	if ($scope1_id) {
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "b4", 1);
		_patch_render($scope1_id, "b5", ((_filled_guard($scope0_reason, 2) ? " >e" : "") + (_filled_guard($scope0_reason, 1) ? " c" : "")).slice(1), $scope0_reason, 0);
	}
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && $ui__input_promise__OR__input_label2 && input.label,
		f: $wi__input_label && $wi__input_label && $ui__input_promise__OR__input_label2 && $input_label__closures
	}) || $fg__input_label && $ui__input_promise && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2));
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
