// tags/pass-on.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({ c: "c;b%;<!><!><!>" });
var pass_on_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_x = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 1), $fg__input_x = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, [input.x], 1, 0, 1, $wg__input_content__OR__input_x, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "c0", [$fg__input_content && "d", $fg__input_x && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.content,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.x
	}) || ($fg__input_content && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.content, !_server_guard($scope0_reason, 1)), $fg__input_x && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.x, !_server_guard($scope0_reason, 2)));
});

// tags/owner.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], ["b6"]], ["a>", $setup$2]);
_shells({
	b3: "b3",
	b: `b${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`,
	b2: "b2;D ;<p> </p>"
});
var owner_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 4), $wi__input_x__OR__input_show__OR__input_a = _write_if($scope0_reason, 2), $fg__input_show = _filled_guard($scope0_reason, 4), $fg__input_a = _filled_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_updates_from($scope0_reason, 3) << 1 | _updates_from($scope0_reason, 3) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	pass_on_default({
		x: input.x,
		content: _content_resume("b3", (x) => {
			const $scope1_reason = _scope_reason(), $wi__x = _write_if($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_client_guard($scope0_reason, 1) && _patch_write($scope1_id, "xc", x);
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<p>${_text_mark($scope2_id, "a", input.a + x, 1, (2 | _updates_from($scope0_reason, 5)) << 1, 0)}</p>`);
					_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope2_id, "b0");
					_patch_render($scope2_id, "b1", [_filled_guard($scope0_reason, 5) && ">>f", ">c"], (2 | _updates_from($scope0_reason, 5)) << 1, 0);
					_subscribe(_unfilled_if($scope0_reason, 5) && $input_a__closures, _scope($scope2_id, { _: ($wi__input_x__OR__input_show__OR__input_a || $wi__x) && _scope_with_id($scope1_id) }));
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_show, 1, 0, 0, ["b2"], $scope0_reason, 4);
			$cg__input_show && _patch_render($scope1_id, "b4", "c");
			_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "b5", $cg__input_show);
			($wi__input_x__OR__input_show__OR__input_a || $wi__x) && _subscribe(_unfilled_if($scope0_reason, 4) && $input_show__closures, _scope($scope1_id, {
				c: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 5)) && x,
				_: _scope_with_id($scope0_id)
			}));
			$wg__input_show || ($wi__input_x__OR__input_show__OR__input_a || $wi__x) && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_patch_child_end();
	_script($scope0_id, "b6", 0);
	$fg__input_show && _patch_subscribers($scope0_id, "b7", "e");
	$fg__input_a && _patch_subscribers($scope0_id, "b8", "f");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.show,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 5)) && input.a,
		h: _write_if($scope0_reason, 5) && $input_a__closures,
		g: _write_if($scope0_reason, 4) && $input_show__closures,
		a: _existing_scope($childScope)
	}) || ($fg__input_show && _client_guard($scope0_reason, 3) && _patch_write($scope0_id, "xe", input.show, !_server_guard($scope0_reason, 4)), $fg__input_a && _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.a, !_server_guard($scope0_reason, 5)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)($walks)};${((_w0) => `<!>${_w0}<button>toggle</button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_set_scope_reason(638 | (_updates_from($scope0_reason, 1) << 7 | _updates_from($scope0_reason, 0) << 11));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	owner_default({
		show,
		a: input.a,
		x: input.x
	});
	_patch_child_end();
	_html(`<button>toggle</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: show,
		a: _existing_scope($childScope)
	});
}, 1);
