// tags/panel/index.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b2: "b2; ;<section></section>",
	b1: "b1;D ;<em> </em>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 4), $wg__input_inner = _write_guard($scope0_reason, 3), $wi__input_show__OR__input_inner__OR__input_title = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 2), $ui__input_inner = _unfilled_if($scope0_reason, 3), $ui__input_title = _unfilled_if($scope0_reason, 4), $ui__input_show__OR__input_inner = _unfilled_if($scope0_reason, 0), $cg__input_inner = _client_guard($scope0_reason, 3), $fg__input_inner = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 2), $wi__input_title = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<em>${_text_mark($scope2_id, "a", input.title, 1, $scope0_reason, 4)}</em>`);
					_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "b0", $cg__input_title);
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_title__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_inner__OR__input_title && _scope_with_id($scope1_id) }), $cg__input_title && "b0");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_inner, 1, 0, 0, ["b1"], $scope0_reason, 3);
			_html(`</section>${_el_mark($scope1_id, "a", $wg__input_inner)}`);
			$cg__input_inner && _patch_render($scope1_id, "b3");
			$wi__input_show__OR__input_inner__OR__input_title && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b2"], $scope0_reason, 2);
	$fg__input_inner && $cg__input_show && _patch_render($scope0_id, "b3", "e");
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 2) && ($ui__input_show || $ui__input_inner) && input.inner,
		f: _write_if($scope0_reason, 0) && ($ui__input_show__OR__input_inner || $ui__input_title) && input.title,
		h: $wi__input_title && $wi__input_title && ($ui__input_title || $ui__input_show || $ui__input_inner) && $input_title__closures
	}) || ($fg__input_inner && $ui__input_show && _patch_write($scope0_id, "xe", input.inner, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && $ui__input_show__OR__input_inner && _patch_write($scope0_id, "xf", input.title, !_server_guard($scope0_reason, 4)) && ($cg__input_show || $cg__input_inner) && _patch_subscribers($scope0_id, "b4", "f"));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)("b%c")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(62 | (_updates_from($scope0_reason, 0) << 7 | _updates_from($scope0_reason, 1) << 9));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({
		show: true,
		inner: input.inner,
		title: input.title
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: count,
		a: _existing_scope($childScope)
	});
}, 1);
