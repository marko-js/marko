// tags/one.marko
_shells({ b: "b;Db%;<i>one <!></i>" });
var one_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<i>one ${_text_resume($scope0_id, "a", input.id, 2, $scope0_reason, 0)}</i>`);
	_scope($scope0_id, {});
});

// tags/two.marko
_shells({ c: "c;Db%;<b>two <!></b>" });
var two_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<b>two ${_text_resume($scope0_id, "a", input.id, 2, $scope0_reason, 0)}</b>`);
	_scope($scope0_id, {});
});

// tags/wrap.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	d: "d !;b%;<!><!><!>",
	d1: "d1;D%;<section><!></section>"
});
var wrap_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_html("</section>");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "d0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["d1"], $scope0_reason, 1);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "vd2", input.content, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.content));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a3: "a3;D ;<p> </p>",
	a7: "a7",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 4), $wi__input_id = _write_if($scope0_reason, 4), $wg__input_which__OR__input_id = _write_guard($scope0_reason, 1), $cg__input_id = _client_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_id__closures = /* @__PURE__ */ new Set();
	const $input_which__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	wrap_default({
		show: input.show,
		content: _content_resume("a7", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.which ? one_default : two_default, { id: input.id }, 5, 0, 0, $wg__input_which__OR__input_id, $scope0_reason, 1);
			_try($scope1_id, "b", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html(`<p>${_text_resume($scope3_id, "a", input.id, 1, $scope0_reason, 4)}</p>`);
				_unfilled_if($scope0_reason, 4) && _patch_init($scope3_id, $cg__input_id ? "a0" : "a1");
				_subscribe(_unfilled_if($scope0_reason, 4) && $input_id__closures, _scope($scope3_id, {
					_: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id),
					Ch: $wi__input_id && 2
				}));
			}, () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`loading ${_text_resume($scope2_id, "a", input.id, $wg__input_id * 2)}`);
				_subscribe($wi__input_id && $input_id__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					Ch: $wi__input_id && 1
				}));
				$wg__input_id || _resume_branch($scope2_id);
			}, void 0, "a2", void 0, "a3");
			(_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1)) && _patch_init($scope1_id, "a4");
			(_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 1)) && _patch_init($scope1_id, "a5");
			_patch_join_init($scope1_id, "a6", $scope0_reason, 1, _filled_guard($scope0_reason, 3) && ">e", _filled_guard($scope0_reason, 4) && ">f");
			_subscribe(_unfilled_if($scope0_reason, 4) && $input_id__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_which__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
			$wg__input_which__OR__input_id || _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_patch_child_end();
	_filled_guard($scope0_reason, 3) && $cg__input_show ? _patch_fill($scope0_id, "va10", input.which) : _filled_guard($scope0_reason, 3) && $cg__input_id && _patch_write($scope0_id, "xe", input.which);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.which,
		f: input.id,
		h: $wi__input_id && $input_id__closures,
		g: _write_if($scope0_reason, 3) && $input_which__closures,
		a: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 4) && ($cg__input_show ? _patch_fill($scope0_id, "va9", input.id) : _patch_fill($scope0_id, "va8", input.id, !_server_guard($scope0_reason, 4))), _client_guard($scope0_reason, 3) && _content_withhold(input.id));
}, 1);
