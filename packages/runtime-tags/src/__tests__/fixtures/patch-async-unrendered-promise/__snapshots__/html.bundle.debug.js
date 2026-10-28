// tags/card.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko;D ;<div> </div>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.user.name, void 0, $scope0_reason, 0)}</div>`);
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = "<button class=inc> </button><!><!><!><p>end</p>";
const $walks = " D l%b%b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_8*content": "__tests__/template.marko_8*content;D ;<p> </p>",
	"__tests__/template.marko_7*content": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_7*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$1),
	"__tests__/template.marko_6*content": "__tests__/template.marko_6*content",
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content;D ;<p> </p>",
	"__tests__/template.marko_4_#text#0/await": "__tests__/template.marko_4_#text#0/await;D ;<p> </p>",
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content __tests__/template.marko_4_input_boxed#0:11/subscribe",
	"__tests__/template.marko_3_#text#0/await": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_3_#text#0/await${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$1),
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%b%b%;<button class=inc> </button><!><!><!><p>end</p>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<p> </p>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_card = _client_guard($scope0_reason, 5), $wi__input_show__OR__input_card = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 3), $scope0_page = _page_render(), $wi__input_tag__OR__input_boxed = _write_if($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_card__closures = new Set();
	const $input_boxed__closures = new Set();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", input.user, (user) => {
				const $scope5_id = _scope_id();
				_html(`<p>${_text_resume($scope5_id, "#text/0", user.name, void 0, $scope0_reason, 4)}</p>`);
				_scope($scope5_id, {}, "__tests__/template.marko", "4:4");
			}, 1, "__tests__/template.marko_5*content");
			_client_guard($scope0_reason, 4) && _patch_init($scope1_id, "__tests__/template.marko_1_input_user#0:8/init");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 4) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 3);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_try($scope2_id, "#text/0", () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_await($scope3_id, "#text/0", input.card, (user) => {
					const $scope7_id = _scope_id();
					_set_scope_reason(_mask_group($scope0_reason, 5) << 1);
					const $childScope = _peek_scope_id($scope7_id, "#childScope/0", 0);
					card_default({ user });
					_patch_child_end();
					_scope($scope7_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "8:6");
				}, 1, "__tests__/template.marko_7*content");
				_unfilled_if($scope0_reason, 5) && _patch_init($scope3_id, $cg__input_card ? "__tests__/template.marko_3_input_card#0:9/init" : "__tests__/template.marko_3_input_card#0:9/subscribe");
				$wi__input_show__OR__input_card && _subscribe(_unfilled_if($scope0_reason, 5) && $input_card__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "7:4"), $cg__input_card && "__tests__/template.marko_3_input_card#0:9/subscribe", 0);
				$wi__input_show__OR__input_card && _resume_branch($scope3_id);
			}, void 0, (err) => {
				const $scope6_reason = _scope_reason();
				const $scope6_id = _scope_id();
				_html("<b>failed</b>");
			}, void 0, "__tests__/template.marko_6*content", "__tests__/template.marko_3*content", void 0, void 0, 1);
			$wi__input_show__OR__input_card && _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/3", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 3);
	_dynamic_tag($scope0_id, "#text/4", input.tag, { class: "box" }, 9, _content_resume("__tests__/template.marko_4*content", () => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason();
		_await($scope4_id, "#text/0", input.boxed, (user) => {
			const $scope8_id = _scope_id();
			_html(`<p>${_text_resume($scope8_id, "#text/0", user.name, void 0, $scope0_reason, 7)}</p>`);
			_scope($scope8_id, {}, "__tests__/template.marko", "13:4");
		}, 1, "__tests__/template.marko_8*content");
		_client_guard($scope0_reason, 7) && _patch_init($scope4_id, "__tests__/template.marko_4_input_boxed#0:11/init");
		$wi__input_tag__OR__input_boxed && _subscribe(_unfilled_if($scope0_reason, 7) && $input_boxed__closures, _scope($scope4_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "12:4"));
		$wi__input_tag__OR__input_boxed && _resume_branch($scope4_id);
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_boxed: input.boxed }] : []), 0, _write_guard($scope0_reason, 6), $scope0_reason, 6);
	_html("<p>end</p>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_user: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.user,
		input_card: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.card,
		input_boxed: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 7)) && input.boxed,
		n,
		"ClosureScopes:input_card/14": _write_if($scope0_reason, 5) && _unfilled_if($scope0_reason, 5) && $input_card__closures,
		"ClosureScopes:input_boxed/15": _write_if($scope0_reason, 7) && $input_boxed__closures
	}, "__tests__/template.marko", 0, {
		input_user: ["input.user"],
		input_card: ["input.card"],
		input_boxed: ["input.boxed"],
		n: "1:6"
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.user, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.card, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 7) && _content_withheld("__tests__/template.marko_4*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.boxed, !_server_guard($scope0_reason, 7)));
}, 1);
