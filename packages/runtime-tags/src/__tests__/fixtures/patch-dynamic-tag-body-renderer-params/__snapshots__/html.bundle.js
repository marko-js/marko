// tags/host.marko
const $template = "<button class=flag>f</button><!><!><!>";
const $walks = " b%b%c";
const $setup$1 = [[], ["b5"]];
_shells({
	b1: "b1",
	b: "b !b5; b%b%;<button class=flag>f</button><!><!><!>",
	b4: "b4;b%;<!><!><!>"
});
var host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 4);
	const $scope0_page = _page_render(), $wg__input_wrap__OR__input_native = _write_guard($scope0_reason, 1), $wi__input_wrap__OR__input_show__OR__input_native__OR__input_label = _write_if($scope0_reason, 3), $fg__input_wrap = _filled_guard($scope0_reason, 4), $fg__input_native = _filled_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 5), $fg__input_label = _filled_guard($scope0_reason, 7);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let flag = false;
	_html(`<button class=flag>f</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "a", input.native ? "section" : input.wrap, {}, 10, _content_resume("b1", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				_html(`<i>${_text_mark($scope3_id, "a", input.label, 1, $scope0_reason, 7)}</i>`);
				_unfilled_if($scope0_reason, 7) && _patch_subscribe($scope3_id, "b2", _client_guard($scope0_reason, 7));
				_subscribe(_unfilled_if($scope0_reason, 7) && $input_label__closures, _scope($scope3_id, { _: $wi__input_wrap__OR__input_show__OR__input_native__OR__input_label && _scope_with_id($scope2_id) }));
			}, $scope2_id, ($scope) => $scope0_page ? [{ i: input.label }, { _: $scope($scope0_id) }] : []), 0, $wg__input_wrap__OR__input_native, $scope0_reason, 1, 0, void 0, 0, 0, "b1");
			_patch_render($scope2_id, "b3", [_filled_guard($scope0_reason, 4) && ">f", _filled_guard($scope0_reason, 6) && ">h"], $scope0_reason, 1);
			$wi__input_wrap__OR__input_show__OR__input_native__OR__input_label && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 5), 1, 0, 0, ["b4"], $scope0_reason, 5);
	_script($scope0_id, "b5");
	$fg__input_wrap && _patch_render($scope0_id, "b0", "f");
	$fg__input_wrap && $cg__input_show && _patch_render($scope0_id, "b6", "f");
	$fg__input_native && $cg__input_show && _patch_render($scope0_id, "b7", "h");
	$fg__input_label && _patch_subscribers($scope0_id, "b8", "i");
	_patch_fill($scope0_id, "vb9", flag, 1);
	_scope($scope0_id, {
		f: input.wrap,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.native,
		i: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 7)) && input.label,
		j: flag,
		m: _write_if($scope0_reason, 7) && $input_label__closures
	}) || ($fg__input_wrap && _patch_write($scope0_id, "xf", input.wrap, !_server_guard($scope0_reason, 4)), $fg__input_native && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xh", input.native, !_server_guard($scope0_reason, 6)), $fg__input_label && (_client_branch_if("b1", $scope0_id) || _unfilled_if($scope0_reason, 2)) && _patch_write($scope0_id, "xi", input.label, !_server_guard($scope0_reason, 7)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a3: "a3 !a0",
	a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)($walks)};${((_w0) => `<main>${_w0}</main>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_updates_from($scope0_reason, 2) << 1 | _updates_from($scope0_reason, 3) << 3 | _updates_from($scope0_reason, 0) << 5 | _updates_from($scope0_reason, 1) << 7 | _updates_from($scope0_reason, 2) << 11 | _updates_from($scope0_reason, 3) << 13 | _updates_from($scope0_reason, 4) << 15);
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	host_default({
		show: input.show,
		native: input.native,
		label: input.label,
		wrap: attrTag({ content: _content_resume("a3", ({ content }) => {
			const $scope1_reason = _scope_reason(), $wg__content = _write_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_patch_write($scope1_id, "xe", content);
			let open = true;
			_html(`<button class=toggle>t</button>${_el_mark($scope1_id, "a")}`);
			_if(() => {
				{
					const $scope2_id = _scope_id();
					_dynamic_tag($scope2_id, "a", content, {}, 0, 0, 0, $wg__content);
					_scope($scope2_id, {});
					return 0;
				}
			}, $scope1_id, "b");
			_script($scope1_id, "a0");
			_patch_render($scope1_id, "a1", "e");
			_patch_fill($scope1_id, "va2", open, 1);
			_scope($scope1_id, {
				e: content,
				f: open
			});
		}, $scope0_id) })
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
