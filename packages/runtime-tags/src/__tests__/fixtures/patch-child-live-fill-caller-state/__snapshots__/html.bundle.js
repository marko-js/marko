// tags/child.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b2: "b2; ; "
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $ui__input_suffix = _unfilled_if($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 1), $sg__input_suffix = _server_guard($scope0_reason, 0), $fg__input_suffix = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_suffix && $ui__input_show && _patch_write($scope0_id, "xd", input.suffix, !$sg__input_suffix);
	const fmt = _bind_resume((v) => v + input.suffix, "b0", $scope0_id);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(_text_mark($scope1_id, "a", fmt("x"), 2, $scope0_reason, 0));
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "b1");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b2"], $scope0_reason, 1);
	$fg__input_suffix && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "b1", "f d");
	_scope($scope0_id, {
		d: $wi__input_show && ($ui__input_show || $ui__input_suffix) && input.suffix,
		f: $wi__input_show && ($ui__input_show || $ui__input_suffix) && fmt
	}) || $fg__input_suffix && $ui__input_show && _patch_write($scope0_id, "xf", fmt, !$sg__input_suffix);
});

// tags/mid.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=s>s</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $setup$1 = _shell_setup([[], ["c0"]], ["a>", $setup$2]);
_shells({ c: `c${_shell_marker($setup$1)};${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button class=s>s</button>`)($template$1)}` });
var mid_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let s = "!";
	_set_scope_reason(2 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		suffix: s,
		show: input.show
	});
	_patch_child_end();
	_html(`<button class=s>s</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "c0");
	_patch_fill($scope0_id, "vc1", s, 1);
	_scope($scope0_id, {
		f: s,
		a: _existing_scope($childScope)
	});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)($walks)};${((_w0) => `<!>${_w0}<button class=show>show</button>`)($template)}` });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	mid_default({ show });
	_patch_child_end();
	_html(`<button class=show>show</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: show,
		a: _existing_scope($childScope)
	});
}, 1);
