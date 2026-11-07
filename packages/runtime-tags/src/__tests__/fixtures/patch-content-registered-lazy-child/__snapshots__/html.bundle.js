// box.marko
const $template$1 = "<div><!></div>";
const $setup$2 = [[], []];
_shells({ a: "a;D%;<div><!></div>" });
var box_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// tags/card/index.marko
const $template = "<section></section>";
const $setup$1 = [[], []];
_shells({
	c: "c; ;<section></section>",
	c1: "c1;b%;<!><!><!>"
});
var card_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "c0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["c1"], $scope0_reason, 1);
	_html(`</section>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_content && $cg__input_show && _patch_render($scope0_id, "c0", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }) || $fg__input_content && $cg__input_show && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 2));
});

// template.marko
const $Box_withLoadAssets = withLoadAssets(() => box_default, "a", flush, "_a");
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	b1: "b1;D ;<em> </em>",
	b2: `b2${_shell_marker([[], []], ["b>", $setup$2])};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("D%l")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`,
	b: `b${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)(" b")};${((_w0) => `<main>${_w0}</main>`)($template)}`
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_note = _write_if($scope0_reason, 0), $fg__input_note = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 1) << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	card_default({
		show: input.show,
		content: _content_resume("b2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "b", 0);
			$Box_withLoadAssets({ content: _content("b1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "a", input.note, 1, $scope0_reason, 2)}</em>`);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "b0", _client_guard($scope0_reason, 2));
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_note && _scope_with_id($scope1_id) }));
			}, $scope1_id, 0) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_note && _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
		}, $scope0_id)
	});
	_patch_child_end();
	_html("</main>");
	$fg__input_note && $cg__input_show && _patch_subscribers($scope0_id, "b3", "e");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		f: _write_if($scope0_reason, 2) && $input_note__closures,
		a: _existing_scope($childScope2)
	}) || $fg__input_note && $cg__input_show && _patch_write($scope0_id, "xe", input.note, !_server_guard($scope0_reason, 2));
}, 1);
