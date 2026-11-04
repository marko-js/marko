// tags/show-await.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b4: "b4; bD ;<style></style><p> </p>",
	b5: "b5; bD ;<style></style><p> </p>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`${_style_html(`${_escape_style_value(x, $scope1_id, "a", "--M_b0", $scope0_reason, 0)};${_escape_style_value(input.label, $scope1_id, "a", "--M_b1", $scope0_reason, 1)};${_escape_style_value(x, $scope1_id, "a", "--M_b2", $scope0_reason, 0)};`)}${_el_mark($scope1_id, "a", _updates_from($scope0_reason, 0) || _updates_from($scope0_reason, 1))}<p>${_text_mark($scope1_id, "b", x, 1, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "b3", $cg__input_label);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {}), $cg__input_label && "b3");
	}, 1, "b4", _unfilled_if($scope0_reason, 0), 1);
	_scope($scope0_id, { f: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_label__closures });
});

// template.marko
_shells({
	a: "a !a2; b%b b%;<button class=prefix>prefix</button><!><button class=swap>swap</button><!><!>",
	a1: `a1${_shell_marker([["a4"], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show = _write_if($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<button class=prefix>prefix</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_mark($scope0_id, "c")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2 | _updates_from($scope0_reason, 2) << 3);
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
	}, $scope0_id, "d", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a1"], $scope0_reason, 1);
	_script($scope0_id, "a2");
	$fg__input_label && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "a0", "i");
	_scope($scope0_id, {
		i: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.label,
		k: $wi__input_show && p
	}) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xi", input.label, !_server_guard($scope0_reason, 2));
}, 1);
