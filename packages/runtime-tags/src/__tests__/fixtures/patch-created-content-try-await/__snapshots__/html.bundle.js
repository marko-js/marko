// tags/wrap.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1;D%;<section><!></section>"
});
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_html("</section>");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "b0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b1"], $scope0_reason, 1);
	$fg__input_content && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "b0", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }) || $fg__input_content && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a2: "a2;D%c%;<p><!>:<!></p>",
	a3: "a3;D%c%;<p><!>:<!></p>",
	a4: "a4;b%;<!><!><!>",
	a5: "a5",
	a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 3), $cg__input_id = _client_guard($scope0_reason, 3), $wi__input_id = _write_if($scope0_reason, 3), $wi__input_show__OR__input_id__OR__input_value = _write_if($scope0_reason, 1), $fg__input_id = _filled_guard($scope0_reason, 3), $fg__input_value = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_id__closures = /* @__PURE__ */ new Set();
	const $input_value__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_updates_from($scope0_reason, 2) << 1 | _updates_from($scope0_reason, 2) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	wrap_default({
		show: input.show,
		content: _content_resume("a5", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_await($scope3_id, "a", input.value, (v) => {
					const $scope4_id = _scope_id();
					_html(`<p>${_text_mark($scope4_id, "a", input.id, 1, $scope0_reason, 3)}:${_text_mark($scope4_id, "b", v, 2, $scope0_reason, 4)}</p>`);
					_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope4_id, "a1", $cg__input_id);
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_id__closures, _scope($scope4_id, { Cg: $wi__input_id && 1 }));
				}, 1, "a2", _unfilled_if($scope0_reason, 4));
				_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope3_id, "a6", 1);
				$wi__input_show__OR__input_id__OR__input_value && _subscribe(_unfilled_if($scope0_reason, 4) && $input_value__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }));
				$wi__input_show__OR__input_id__OR__input_value && _resume_branch($scope3_id);
			}, () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`loading ${_text_mark($scope2_id, "a", input.id, $wg__input_id * 2)}`);
				$cg__input_id && _patch_render($scope2_id, "a0");
				_subscribe($wi__input_id && $input_id__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			}, void 0, "a7", void 0, "a4");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
		}, $scope0_id)
	});
	_patch_child_end();
	$fg__input_id && _patch_subscribers($scope0_id, "a8", "e");
	$fg__input_value && _patch_subscribers($scope0_id, "a9", "f");
	_scope($scope0_id, {
		e: input.id,
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.value,
		g: $wi__input_id && $input_id__closures,
		h: _write_if($scope0_reason, 4) && $input_value__closures,
		a: _existing_scope($childScope)
	}) || ($fg__input_id && _patch_write($scope0_id, "xe", input.id, !_server_guard($scope0_reason, 3)), $fg__input_value && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.value, !_server_guard($scope0_reason, 4)));
}, 1);
