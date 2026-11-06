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
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0) || _client_branch(input.content);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content|2;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag__OR__input_label = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 3), $fg__input_tag = _filled_guard($scope0_reason, 4), $fg__input_label = _filled_guard($scope0_reason, 5), $wi__input_label = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_tag__closures = new Set();
	$fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 5));
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 1);
			card_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", input.tag, { onClick: _bind_resume(function() {
					console.log("clicked", input.label);
				}, "__tests__/template.marko_2/onClick", $scope2_id) }, 1, _content_resume("__tests__/template.marko_3*content", () => {
					const $scope3_id = _scope_id();
					const $scope3_reason = _scope_reason();
					_html(_text_mark($scope3_id, "#text/0", input.label, 2, $scope0_reason, 5));
					_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_label#0:5/subscribe", _client_guard($scope0_reason, 5));
					_subscribe(_unfilled_if($scope0_reason, 5) && $input_label__closures, _scope($scope3_id, {
						_: _write_if($scope0_reason, 2) && _scope_with_id($scope2_id),
						"ClosureSignalIndex:input_label/7": $wi__input_label && 1
					}, "__tests__/template.marko", "3:8"));
				}, $scope2_id), 0, $wg__input_tag__OR__input_label, $scope0_reason, 1, 0, 4);
				_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_tag#0:4/subscribe");
				_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_label#0:5/subscribe");
				_patch_render($scope2_id, "__tests__/template.marko_2_input_tag#0:4_input_label#0:5/setup", [_filled_guard($scope0_reason, 4) && ">>input_tag", _filled_guard($scope0_reason, 5) && ">>input_label"], $scope0_reason, 1);
				_subscribe(_unfilled_if($scope0_reason, 5) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_tag__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4")));
				$wg__input_tag__OR__input_label || _resume_branch($scope2_id);
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 3);
	$fg__input_tag && _client_guard($scope0_reason, 3) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_tag#4/subscribers", "input_tag");
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#5/subscribers", "input_label");
	_scope($scope0_id, {
		input_tag: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.tag,
		input_label: input.label,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_tag/6": _write_if($scope0_reason, 4) && (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && $input_tag__closures
	}, "__tests__/template.marko", 0, {
		input_tag: ["input.tag"],
		input_label: ["input.label"]
	}) || $fg__input_tag && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 4));
}, 1);
