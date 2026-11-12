// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b2: "b2;D ;<p> </p>",
	b3: "b3;D ;<p> </p>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $scope1_id = _await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_mark($scope1_id, "a", x, 1, $scope0_reason, 0)}</p>`);
		_script($scope1_id, "b0", 1, $fg__input_label);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "b1", $cg__input_label);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {}), $cg__input_label && "b1");
	}, 1, "b2", _unfilled_if($scope0_reason, 0) && 2, 1);
	if ($scope1_id) {
		_script($scope1_id, "b0", 1, _filled_guard($scope0_reason, 1));
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "b1", $cg__input_label);
	}
	_scope($scope0_id, {
		e: input.label,
		f: _write_if($scope0_reason, 1) && $input_label__closures
	}) || $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(2 | _updates_from($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	show_await_default({
		promise: p,
		label: input.label
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
