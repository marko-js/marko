// tags/frame.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_x = _write_guard($scope0_reason, 0), $ui__input_content__OR__input_x = _unfilled_if($scope0_reason, 0), $ui__input_x = _unfilled_if($scope0_reason, 2), $ui__input_content = _unfilled_if($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 1), $fg__input_x = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, [input.x], 1, 0, 1, $wg__input_content__OR__input_x, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "b0", (($fg__input_content ? " d" : "") + ($fg__input_x ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_x || $ui__input_content__OR__input_x) && input.content,
		e: ($ui__input_content || $ui__input_content__OR__input_x) && input.x
	}) || ($fg__input_content && $ui__input_x && _patch_write($scope0_id, "xd", input.content, !_server_guard($scope0_reason, 1)), $fg__input_x && $ui__input_content && _patch_write($scope0_id, "xe", input.x, !_server_guard($scope0_reason, 2)));
});

// tags/panel.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["b>", $setup$2]);
_shells({
	c5: "c5",
	c0: "c0,",
	c: `c${_shell_marker($setup$1)};${((_w0) => `b%b/${_w0}&b`)("b%c")};${((_w0) => `<!><!>${_w0}<!>`)($template$1)}`,
	c4: "c4 >a>;/&;"
});
var panel_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 1), $uf__input_x = _updates_from($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 2), $sg__input_n = _server_guard($scope0_reason, 1), $fg__input_n2 = _filled_guard($scope0_reason, 1), $wi__input_n = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	const Info = { content: _content("c0", () => {
		const $scope1_id = _scope_id(), $fg__input_n = _filled_guard($scope0_reason, 1);
		_scope_reason();
		const twice = input.n * 2;
		_script($scope1_id, "c1", 0, $fg__input_n);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "c2", $cg__input_n);
		$cg__input_n && _patch_render($scope1_id, "c3");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_n__closures, _scope($scope1_id, {
			a: twice,
			_: _scope_with_id($scope0_id)
		}), $cg__input_n && "c2", 0) || $fg__input_n && _patch_write($scope1_id, "xa", twice, !$sg__input_n);
		_resume_branch($scope1_id);
	}, $scope0_id, 0) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			const $childScope = _peek_scope_id($scope3_id, "a", 0, 0, $scope0_id);
			Info.content({});
			_patch_child_end();
			_scope($scope3_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["c4"], $scope0_reason, 2);
	_set_scope_reason($uf__input_x << 1 | $uf__input_x << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	frame_default({
		x: input.x,
		content: _content_resume("c5", (x) => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "a", x, 1, 4, 0)} ${_text_mark($scope2_id, "b", input.n, 2, $scope0_reason, 1)}</p>`);
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "c6", $cg__input_n);
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_n__closures, _scope($scope2_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				Ch: $wi__input_n && 1
			}), $cg__input_n && "c6");
		}, $scope0_id)
	});
	_patch_child_end();
	$fg__input_n2 && _patch_subscribers($scope0_id, "c7", "e");
	_scope($scope0_id, {
		e: input.n,
		h: $wi__input_n && $input_n__closures,
		b: _existing_scope($childScope2)
	}) || $fg__input_n2 && _patch_write($scope0_id, "xe", input.n, !$sg__input_n);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)($walks)};${((_w0) => `<!>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 3) << 5 | _updates_from($scope0_reason, 2) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({
		n: input.n,
		x: input.x,
		show: input.show
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
