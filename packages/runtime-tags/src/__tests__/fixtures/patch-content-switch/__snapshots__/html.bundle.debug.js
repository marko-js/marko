// tags/widget/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko;D%;<section><!></section>" });
var widget_default = _template("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {}, "__tests__/tags/widget/index.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!><button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%b l`)("D%l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&%b l`)("D%l")};${((_w0) => `<main>${_w0}<!><button>+</button></main>`)($template$1)}`)(),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;Db%;<i>B:<!></i>",
	"__tests__/template.marko_6*shell": "__tests__/template.marko_6*shell,<b>A</b>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_kind = _write_if($scope0_reason, 0), $cg__input_kind = _client_guard($scope0_reason, 0), $wg__input_kind = _write_guard($scope0_reason, 0), $wg__input_inner = _write_guard($scope0_reason, 1), $wi__input_inner = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_kind__closures = new Set();
	const $input_inner__closures = new Set();
	let open = true;
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	widget_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.kind === "a") {
				const $scope6_id = _scope_id();
				_html("<b>A</b>");
				$wi__input_kind && _scope($scope6_id, {}, "__tests__/template.marko", "4:6");
				return 0;
			} else if (input.kind === "b") {
				const $scope2_id = _scope_id();
				_html(`<i>B:${_text_resume($scope2_id, "#text/0", input.kind, 2, $scope0_reason, 0)}</i>`);
				$cg__input_kind && _patch_init($scope2_id, "__tests__/template.marko_2_input_kind#0:5/init");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_kind__closures, _scope($scope2_id, {
					_: $wi__input_kind && _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_kind/8": $wi__input_kind && 1
				}, "__tests__/template.marko", "5:6"), $cg__input_kind && "__tests__/template.marko_2_input_kind#0:5/subscribe");
				return 1;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_kind, void 0, void 0, void 0, ["__tests__/template.marko_6*shell", "__tests__/template.marko_2*shell"], $scope0_reason, 0);
		$wi__input_kind && _subscribe(_unfilled_if($scope0_reason, 0) && $input_kind__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"), $cg__input_kind && "__tests__/template.marko_1_input_kind#0:5/subscribe", $wg__input_kind);
		$wg__input_kind || $wi__input_kind && _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_if(() => {
		if (open) {
			const $scope3_id = _scope_id();
			_set_scope_reason(0);
			_patch_child($scope3_id, "#childScope/0", 1);
			widget_default({ content: _content("__tests__/template.marko_4*content", () => {
				const $scope4_reason = _scope_reason();
				const $scope4_id = _scope_id();
				_if(() => {
					if (input.inner === "a") {
						const $scope7_id = _scope_id();
						_html("<b>A</b>");
						$wi__input_inner && _scope($scope7_id, {}, "__tests__/template.marko", "9:8");
						return 0;
					} else if (input.inner === "b") {
						const $scope5_id = _scope_id();
						_html(`<i>B:${_text_resume($scope5_id, "#text/0", input.inner, $wg__input_inner * 2)}</i>`);
						_subscribe($wi__input_inner && $input_inner__closures, _scope($scope5_id, {
							_: _scope_with_id($scope4_id),
							"ClosureSignalIndex:input_inner/9": $wi__input_inner && 1
						}, "__tests__/template.marko", "10:8"), "__tests__/template.marko_5_input_inner#0:6/subscribe", $wg__input_inner);
						return 1;
					}
				}, $scope4_id, "#text/0", $wg__input_inner, $wg__input_inner, 0, 0, 1);
				_subscribe($wi__input_inner && $input_inner__closures, _scope($scope4_id, { _: _scope_with_id($scope3_id) }, "__tests__/template.marko", "8:6"), "__tests__/template.marko_4_input_inner#0:6/subscribe", $wg__input_inner);
				$wg__input_inner || _resume_branch($scope4_id);
			}, $scope3_id) });
			_patch_child_end();
			_scope($scope3_id, {}, "__tests__/template.marko", "7:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_inner: input.inner,
		open,
		"ClosureScopes:input_kind/8": $wi__input_kind && _unfilled_if($scope0_reason, 0) && $input_kind__closures,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:input_inner/9": $wi__input_inner && $input_inner__closures
	}, "__tests__/template.marko", 0, {
		input_inner: ["input.inner"],
		open: "1:6"
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.inner, !_server_guard($scope0_reason, 1));
}, 1);
