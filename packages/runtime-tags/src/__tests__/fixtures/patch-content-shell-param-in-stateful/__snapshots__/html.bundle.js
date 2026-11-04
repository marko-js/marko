// tags/note.marko
const $setup$1 = [[], []];
_shells({ b: "b,<i>note</i>" });
var note_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<i>note</i>");
});

// tags/wrap.marko
const $template = "<section><!></section>";
const $setup = [[], []];
_shells({ c: "c;D%;<section><!></section>" });
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_label = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, { label: input.label }, 1, 0, 0, $wg__input_content__OR__input_label, $scope0_reason, 0, 0, 1);
	_html("</section>");
	_patch_render($scope0_id, "c0", [$fg__input_content && "d", $fg__input_label && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.content,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.label
	}) || ($fg__input_content && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.content, !_server_guard($scope0_reason, 1)), $fg__input_label && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({
	a3: `a3${_shell_marker([[], ["a0"]], ["c>", $setup$1])}`,
	a: "a;b%;<!><!><!>",
	a5: `a5${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 1) << 5);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
			wrap_default({
				label: input.label,
				content: attrTag({ content: _content_resume("a3", ({ label }) => {
					const $scope2_reason = _scope_reason(), $wg__label = _write_guard($scope2_reason, 0);
					const $scope2_id = _scope_id();
					_patch_write($scope2_id, "xf", label);
					let open = true;
					_if(() => {
						{
							const $scope3_id = _scope_id();
							_html(`<p>${_text_mark($scope3_id, "a", label, $wg__label)}</p>`);
							_scope($scope3_id, {});
							return 0;
						}
					}, $scope2_id, "a", 1, 1, 0, 0, 1);
					_html(`<button>toggle</button>${_el_mark($scope2_id, "b")}`);
					const $childScope = _peek_scope_id($scope2_id, "c", 0);
					note_default({});
					_patch_child_end();
					_script($scope2_id, "a0");
					_patch_render($scope2_id, "a1", "f");
					_patch_fill($scope2_id, "va2", open, 1);
					_scope($scope2_id, {
						f: label,
						g: open,
						c: _existing_scope($childScope)
					});
				}, $scope1_id, void 0, 1) })
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a4");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a5"], $scope0_reason, 0);
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "a4", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }) || $fg__input_label && $cg__input_show && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1));
}, 1);
