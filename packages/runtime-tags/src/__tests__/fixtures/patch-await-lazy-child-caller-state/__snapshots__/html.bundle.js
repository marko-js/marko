// show-await.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	a1: "a1;D%c%;<p><!>:<!></p>",
	a2: "a2;D%c%;<p><!>:<!></p>",
	a: "a;b%;<!><!><!>"
});
var show_await_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_mark($scope1_id, "a", input.label, 1, $scope0_reason, 1)}:${_text_mark($scope1_id, "b", x, 2, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a0", $cg__input_label);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {}), $cg__input_label && "a0");
	}, 1, "a1", _unfilled_if($scope0_reason, 0), 1);
	_scope($scope0_id, { f: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_label__closures });
});

// template.marko
const $ShowAwait_withLoadAssets = withLoadAssets(() => show_await_default, "a", flush, "_a");
_shells({
	b: "b !b2; b%;<button class=open>inc</button><!><!>",
	b1: `b1${_shell_marker([["b4"], []], ["b>", $setup])};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2 | _updates_from($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "b", 0);
			$ShowAwait_withLoadAssets({
				promise: Promise.resolve(n),
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["b1"], $scope0_reason, 0);
	_script($scope0_id, "b2");
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "b0", "f");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.label,
		g: n
	}) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 1));
}, 1);
