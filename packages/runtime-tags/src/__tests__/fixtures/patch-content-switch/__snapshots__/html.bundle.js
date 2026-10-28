// tags/widget/index.marko
const $template = "<section><!></section>";
const $setup$1 = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var widget_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a9"]], ["a>", $setup$1]);
_shells({
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&%b l`)("D%l")};${((_w0) => `<main>${_w0}<!><button>+</button></main>`)($template)}`)(),
	a3: "a3;Db%;<i>B:<!></i>",
	a2: "a2,<b>A</b>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_kind = _write_if($scope0_reason, 0), $cg__input_kind = _client_guard($scope0_reason, 0), $wg__input_kind = _write_guard($scope0_reason, 0), $wg__input_inner = _write_guard($scope0_reason, 1), $wi__input_inner = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_kind__closures = /* @__PURE__ */ new Set();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	let open = true;
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	widget_default({ content: _content("a5", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.kind === "a") {
				const $scope6_id = _scope_id();
				_html("<b>A</b>");
				$wi__input_kind && _scope($scope6_id, {});
				return 0;
			} else if (input.kind === "b") {
				const $scope2_id = _scope_id();
				_html(`<i>B:${_text_resume($scope2_id, "a", input.kind, 2, $scope0_reason, 0)}</i>`);
				$cg__input_kind && _patch_init($scope2_id, "a0");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_kind__closures, _scope($scope2_id, {
					_: $wi__input_kind && _scope_with_id($scope1_id),
					Ci: $wi__input_kind && 1
				}), $cg__input_kind && "a1");
				return 1;
			}
		}, $scope1_id, "a", 1, $wg__input_kind, 1, 0, 0, ["a2", "a3"], $scope0_reason, 0);
		$wi__input_kind && _subscribe(_unfilled_if($scope0_reason, 0) && $input_kind__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_kind && "a4", $wg__input_kind);
		$wg__input_kind || $wi__input_kind && _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_if(() => {
		{
			const $scope3_id = _scope_id();
			_set_scope_reason(0);
			_patch_child(1);
			widget_default({ content: _content("a8", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_if(() => {
					if (input.inner === "a") {
						const $scope7_id = _scope_id();
						_html("<b>A</b>");
						$wi__input_inner && _scope($scope7_id, {});
						return 0;
					} else if (input.inner === "b") {
						const $scope5_id = _scope_id();
						_html(`<i>B:${_text_resume($scope5_id, "a", input.inner, $wg__input_inner * 2)}</i>`);
						_subscribe($wi__input_inner && $input_inner__closures, _scope($scope5_id, {
							_: _scope_with_id($scope4_id),
							Cj: $wi__input_inner && 1
						}), "a6", $wg__input_inner);
						return 1;
					}
				}, $scope4_id, "a", $wg__input_inner, $wg__input_inner, 0, 0, 1);
				_subscribe($wi__input_inner && $input_inner__closures, _scope($scope4_id, { _: _scope_with_id($scope3_id) }), "a7", $wg__input_inner);
				$wg__input_inner || _resume_branch($scope4_id);
			}, $scope3_id) });
			_patch_child_end();
			_scope($scope3_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a9");
	_scope($scope0_id, {
		g: input.inner,
		h: open,
		i: $wi__input_kind && _unfilled_if($scope0_reason, 0) && $input_kind__closures,
		a: _existing_scope($childScope),
		j: $wi__input_inner && $input_inner__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va10", input.inner, !_server_guard($scope0_reason, 1));
}, 1);
