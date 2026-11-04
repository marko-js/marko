// tags/card2.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $setup$1 = [[], ["__tests__/tags/card2.marko_0"]];
_shells({ "__tests__/tags/card2.marko": "__tests__/tags/card2.marko !__tests__/tags/card2.marko_0;D b%;<section><button>clear</button><!></section>" });
var card2_default = _template("__tests__/tags/card2.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.item;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_for_of(c, (i) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", i, {});
		_scope($scope1_id, {}, "__tests__/tags/card2.marko", "2:54");
	}, 0, $scope0_id, "#text/1");
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card2.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card2.marko_0_c#5/fill", c, 1);
	_scope($scope0_id, {}, "__tests__/tags/card2.marko", 0) || _client_branch(input.item);
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
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card2_default({ item: attrTags(attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<b>${_text_mark($scope2_id, "#text/0", input.label, $wg__input_label)}</b>`);
				$cg__input_label && _patch_render($scope2_id, "__tests__/template.marko_2_input_label#0:4/subscribe");
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"), $cg__input_label && "__tests__/template.marko_2_input_label#0:4/subscribe", $wg__input_label);
			}, $scope1_id) }), { content: _content_resume("__tests__/template.marko_3*content", () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_html(`<i>${_text_mark($scope3_id, "#text/0", input.label, $wg__input_label)}</i>`);
				$cg__input_label && _patch_render($scope3_id, "__tests__/template.marko_3_input_label#0:4/subscribe");
				_subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_label/5": $wi__input_label && 1
				}, "__tests__/template.marko", "4:6"), $cg__input_label && "__tests__/template.marko_3_input_label#0:4/subscribe", $wg__input_label);
			}, $scope1_id) }) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#4/subscribers", "input_label");
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1));
}, 1);
