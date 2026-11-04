// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_p = _client_guard($scope0_reason, 1), $wg__input_tag = _write_guard($scope0_reason, 3), $wi__input_tag = _write_if($scope0_reason, 3), $wi__input_p = _write_if($scope0_reason, 1), $wg__input_p = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_tag__closures = new Set();
	const $input_p__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 1);
			card_default({ content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", input.p, (v) => {
					const $scope3_id = _scope_id();
					const $await_content__v__closures = new Set();
					const Inner = { content: _content_resume("__tests__/template.marko_4*content", () => {
						const $scope4_id = _scope_id();
						const $scope4_reason = _scope_reason();
						_html(`<b>${_text_mark($scope4_id, "#text/1", v, $wg__input_p)}${_text_mark($scope4_id, "#text/2", input.label, _write_guard($scope0_reason, 2) * 2)}</b>${_el_mark($scope4_id, "#b/0")}`);
						_script($scope4_id, "__tests__/template.marko_4");
						$cg__input_label && _patch_render($scope4_id, "__tests__/template.marko_4_input_label#0:5/subscribe");
						$cg__input_p && _patch_render($scope4_id, "__tests__/template.marko_4_v#3:2/subscribe");
						_subscribe($wi__input_p && $await_content__v__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope4_id, { _: _scope_with_id($scope3_id) }, "__tests__/template.marko", "4:8"), $cg__input_label && "__tests__/template.marko_4_input_label#0:5/subscribe"), $cg__input_p && "__tests__/template.marko_4_v#3:2/subscribe");
					}, $scope3_id) };
					_dynamic_tag($scope3_id, "#text/0", input.tag, { content: Inner }, 0, 0, 0, $wg__input_tag);
					_subscribe($wi__input_tag && $input_tag__closures, _scope($scope3_id, {
						v,
						Inner: $wi__input_tag && Inner,
						"ClosureScopes:v/10": $wi__input_p && $await_content__v__closures
					}, "__tests__/template.marko", "3:6", {
						v: "3:12",
						Inner: "4:15"
					}), _client_guard($scope0_reason, 3) && "__tests__/template.marko_3_input_tag#0:6/subscribe", $wg__input_tag);
				}, void 0, void 0, 1);
				$cg__input_p && _patch_render($scope2_id, "__tests__/template.marko_2_input_p#0:4/subscribe");
				_subscribe($wi__input_p && $input_p__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4"), $cg__input_p && "__tests__/template.marko_2_input_p#0:4/subscribe", 0);
				$wg__input_p && _resume_branch($scope2_id);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_p: input.p,
		input_label: input.label,
		input_tag: input.tag,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_tag/9": $wi__input_tag && $input_tag__closures,
		"ClosureScopes:input_p/7": $wi__input_p && $input_p__closures
	}, "__tests__/template.marko", 0, {
		input_p: ["input.p"],
		input_label: ["input.label"],
		input_tag: ["input.tag"]
	}) || (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_p", input.p, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_p#4/subscribers", "input_p"), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#5/subscribers", "input_label"), _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 3)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_tag#6/subscribers", "input_tag"));
}, 1);
