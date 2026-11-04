// layout.marko
const $template$2 = "<nav><!></nav><main><!></main>";
const $walks$2 = "D%lD%l";
const $setup$2 = [[], []];
_shells({
	a1: "a1;b%;<!><!><!>",
	a2: "a2;b%;<!><!><!>",
	a: "a;D%lD%;<nav><!></nav><main><!></main>",
	a0: "a0;D ;<a> </a>"
});
var layout_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<nav>");
	_await($scope0_id, "a", input.list, (list) => {
		const $scope1_id = _scope_id();
		_for_of(list, (item) => {
			const $scope2_id = _scope_id();
			_html(`<a>${_text_mark($scope2_id, "a", item, 1, $scope0_reason, 0)}</a>`);
			_scope($scope2_id, {});
		}, 0, $scope1_id, "a", 1, 1, 1, 0, 0, "a0", $scope0_reason, 0);
		_scope($scope1_id, {});
	}, 1, "a1", _unfilled_if($scope0_reason, 0) && 2, 1);
	_html("</nav><main>");
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 1);
	_html("</main>");
	_scope($scope0_id, {});
});

// page-a.marko
const $template$1 = "<h1>A</h1><p> </p><!><button> </button>";
const $walks$1 = "bD l%b D l";
const $setup$1 = [[], ["b1"]];
_shells({
	b: "b !b1;bD l%b D ;<h1>A</h1><p> </p><!><button> </button>",
	b0: "b0,<p>wide</p>"
});
var page_a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<h1>A</h1><p>${_text_mark($scope0_id, "a", input.note, 1, $scope0_reason, 0)}</p>`);
	_if(() => {
		if (input.wide) {
			const $scope1_id = _scope_id();
			_html("<p>wide</p>");
			_write_if($scope0_reason, 1) && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["b0"], $scope0_reason, 1);
	_html(`<button>${_text_mark($scope0_id, "d", n)}</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "b1");
	_patch_fill($scope0_id, "vb2", n, 1);
	_scope($scope0_id, { i: n });
});

// page-b.marko
const $template = "<h1>B</h1><p> </p><!><!>";
const $walks = "bD l%c";
const $setup = [[], []];
_shells({
	c: "c;bD l%;<h1>B</h1><p> </p><!><!>",
	c0: "c0,<p>wide</p>"
});
var page_b_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<h1>B</h1><p>${_text_mark($scope0_id, "a", input.note, 1, $scope0_reason, 0)}</p>`);
	_if(() => {
		if (input.wide) {
			const $scope1_id = _scope_id();
			_html("<p>wide</p>");
			_write_if($scope0_reason, 1) && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["c0"], $scope0_reason, 1);
	_scope($scope0_id, {});
});

// template.marko
const $Layout_withLoadAssets = withLoadAssets(() => layout_default, "a", flush, "_a");
const $PageA_withLoadAssets = withLoadAssets(() => page_a_default, "b", flush, "_b");
const $PageB_withLoadAssets = withLoadAssets(() => page_b_default, "c", flush, "_c");
_shells({
	d5: "d5;b%;<!><!><!>",
	d: "d;E%;<html><body><!></body></html>",
	d6: `d6${_shell_marker([[], []], ["b>", $setup$2])};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$2)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2)}`,
	d4: `d4${_shell_marker([[], []], ["b>", $setup$1])};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`,
	d7: `d7${_shell_marker([[], []], ["b>", $setup])};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`,
	d8: "d8,<p>home</p>"
});
var template_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_page = _unfilled_if($scope0_reason, 2), $cg__input_wide = _client_guard($scope0_reason, 4), $cg__input_note = _client_guard($scope0_reason, 5), $uf__input_note = _updates_from($scope0_reason, 5), $uf__input_wide = _updates_from($scope0_reason, 4), $wi__input_page__OR__input_wide__OR__input_note = _write_if($scope0_reason, 0), $wg__input_page = _write_guard($scope0_reason, 2), $cg__input_page = _client_guard($scope0_reason, 2), $ui__input_wide = _unfilled_if($scope0_reason, 4), $ui__input_note = _unfilled_if($scope0_reason, 5), $fg__input_list = _filled_guard($scope0_reason, 3), $fg__input_wide = _filled_guard($scope0_reason, 4), $fg__input_note = _filled_guard($scope0_reason, 5), $wi__input_wide = _write_if($scope0_reason, 4), $wi__input_note = _write_if($scope0_reason, 5), $wi__input_page = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_wide__closures = /* @__PURE__ */ new Set();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_page__closures = /* @__PURE__ */ new Set();
	_html(`<html>${_flush_head()}<body>`);
	_if(() => {
		if (input.page === 0) {
			const $scope5_id = _scope_id();
			_html("<p>home</p>");
			$wi__input_page && _scope($scope5_id, {});
			return 0;
		} else {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 3) << 1);
			const $childScope3 = _peek_scope_id($scope1_id, "b", 1);
			$Layout_withLoadAssets({
				list: input.list,
				content: _content("d5", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.page === 1) {
							const $scope3_id = _scope_id();
							_set_scope_reason($uf__input_note << 1 | $uf__input_wide << 3);
							const $childScope = _peek_scope_id($scope3_id, "b", 0);
							$PageA_withLoadAssets({
								wide: input.wide,
								note: input.note
							});
							_patch_child_end();
							$cg__input_wide && _patch_render($scope3_id, "d0");
							$cg__input_note && _patch_render($scope3_id, "d1");
							_subscribe(_unfilled_if($scope0_reason, 5) && $input_note__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_wide__closures, _scope($scope3_id, {
								_: $wi__input_page__OR__input_wide__OR__input_note && _scope_with_id($scope2_id),
								b: _existing_scope($childScope)
							}), $cg__input_wide && "d0", 0), $cg__input_note && "d1", 0);
							_resume_branch($scope3_id);
							return 0;
						} else {
							const $scope4_id = _scope_id();
							_set_scope_reason($uf__input_note << 1 | $uf__input_wide << 3);
							const $childScope2 = _peek_scope_id($scope4_id, "b", 0);
							$PageB_withLoadAssets({
								wide: input.wide,
								note: input.note
							});
							_patch_child_end();
							$cg__input_wide && _patch_render($scope4_id, "d2");
							$cg__input_note && _patch_render($scope4_id, "d3");
							_subscribe(_unfilled_if($scope0_reason, 5) && $input_note__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_wide__closures, _scope($scope4_id, {
								_: $wi__input_page__OR__input_wide__OR__input_note && _scope_with_id($scope2_id),
								b: _existing_scope($childScope2),
								Cj: $wi__input_wide && 1,
								Ck: $wi__input_note && 1
							}), $cg__input_wide && "d2", 0), $cg__input_note && "d3", 0);
							_resume_branch($scope4_id);
							return 1;
						}
					}, $scope2_id, "a", 1, $wg__input_page, 1, 0, 0, ["d4", "d7"], $scope0_reason, 2);
					$cg__input_page && _patch_render($scope2_id, "d9");
					$wi__input_page__OR__input_wide__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 2) && $input_page__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_page && "d9", $wg__input_page);
					$wg__input_page || $wi__input_page__OR__input_wide__OR__input_note && _resume_branch($scope2_id);
				}, $scope1_id, 0)
			});
			_patch_child_end();
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "d10");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				b: _existing_scope($childScope3)
			});
			return 1;
		}
	}, $scope0_id, "a", 1, $wg__input_page, 1, 0, 0, ["d8", "d6"], $scope0_reason, 2);
	_trailers("</body></html>");
	$fg__input_list && $cg__input_page && _patch_render($scope0_id, "d10", "e");
	$fg__input_wide && $cg__input_page && _patch_subscribers($scope0_id, "d11", "f");
	$fg__input_note && $cg__input_page && _patch_subscribers($scope0_id, "d12", "g");
	_scope($scope0_id, {
		e: ($ui__input_page || _unfilled_if($scope0_reason, 3)) && input.list,
		f: ($ui__input_page || $ui__input_wide) && input.wide,
		g: ($ui__input_page || $ui__input_note) && input.note,
		j: $wi__input_wide && ($ui__input_wide || $ui__input_page) && $input_wide__closures,
		k: $wi__input_note && ($ui__input_note || $ui__input_page) && $input_note__closures,
		h: $wi__input_page && $ui__input_page && $input_page__closures
	}) || ($fg__input_list && $ui__input_page && _patch_write($scope0_id, "xe", input.list, !_server_guard($scope0_reason, 3)), $fg__input_wide && $ui__input_page && _patch_write($scope0_id, "xf", input.wide, !_server_guard($scope0_reason, 4)), $fg__input_note && $ui__input_page && _patch_write($scope0_id, "xg", input.note, !_server_guard($scope0_reason, 5)));
}, 1);
