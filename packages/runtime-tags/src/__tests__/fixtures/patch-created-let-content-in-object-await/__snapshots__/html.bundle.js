// tags/card.marko
const $template$1 = "<section><!></section>";
const $setup$1 = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// tags/outer.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>x</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)("D%l");
const $setup = _shell_setup([[], ["c0"]], ["b>", $setup$1]);
_shells({ c: /*@__PURE__*/ (() => `c${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)("D%l")};${((_w0) => `<button>x</button>${_w0}`)($template$1)}`)() });
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let o = { content: input.content };
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	card_default({ content: o.content });
	_patch_child_end();
	_script($scope0_id, "c0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc1", o, 1);
	_scope($scope0_id, { b: _existing_scope($childScope) }) || _content_withhold(input.content);
});

// template.marko
_shells({
	a3: "a3;b%;<!><!><!>",
	a1: "a1;Db%;<em>static <!></em>",
	"~a1": "~a1;Db%;<em>static <!></em>",
	a4: "a4;b%;<!><!><!>",
	a: "a !;b%b%;<!><!><!><!>",
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a5: "a5;D ;<div> </div>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({ content: _content("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "a", input.label, 2, $scope0_reason, 2)}</em>`);
				$cg__input_label && _patch_init($scope2_id, "a0");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_label && _scope_with_id($scope1_id) }));
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 1);
	_await($scope0_id, "b", resolveAfter(input.label, 3), (v) => {
		const $scope3_id = _scope_id();
		_if(() => {
			if (input.show) {
				const $scope4_id = _scope_id();
				_html(`<div>${_text_resume($scope4_id, "a", v, 1, $scope0_reason, 2)}</div>`);
				$cg__input_label && _patch_init($scope4_id, "a6");
				_scope($scope4_id, { _: $wi__input_label && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "a", 1, $wg__input_show, 1, 0, 0, ["a5"], $scope0_reason, 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope3_id, $cg__input_show ? "a7" : "a8");
		$wi__input_show && _subscribe(_unfilled_if($scope0_reason, 1) && $input_show__closures, _scope($scope3_id, { c: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && v }), $cg__input_show && "a8", $wg__input_show);
		$wg__input_show || $wi__input_show && _resume_branch($scope3_id);
	}, 1, "a3", _unfilled_if($scope0_reason, 2), 1);
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		h: $wi__input_label && _unfilled_if($scope0_reason, 2) && $input_label__closures,
		g: $wi__input_show && _unfilled_if($scope0_reason, 1) && $input_show__closures
	}) || _filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va9", input.label, !_server_guard($scope0_reason, 2));
}, 1);
