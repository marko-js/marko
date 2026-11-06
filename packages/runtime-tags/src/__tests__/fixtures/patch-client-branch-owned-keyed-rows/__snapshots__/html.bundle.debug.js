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
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content !__tests__/template.marko_3",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content|2;b%b%;<!><!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_rows = _write_if($scope0_reason, 1), $cg__input_rows = _client_guard($scope0_reason, 1), $wg__input_rows__OR__input_tag = _write_guard($scope0_reason, 0), $wg__input_tag = _write_guard($scope0_reason, 3), $cg__input_tag = _client_guard($scope0_reason, 3), $sg__input_rows = _server_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2), $fg__input_tag = _filled_guard($scope0_reason, 3), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_tag__closures = new Set();
	_for_of(input.rows, (r) => {
		const $scope1_id = _scope_id();
		const $for_content__r_label__closures = new Set();
		_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "PatchMarkedWrite:r_label", r?.label, !$sg__input_rows);
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 2);
		card_default({ content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			const Inner = { content: _content_resume("__tests__/template.marko_3*content", () => {
				const $scope3_id = _scope_id();
				const $scope3_reason = _scope_reason();
				_html(`<b>${_text_mark($scope3_id, "#text/1", r.label, 1, $scope0_reason, 1)}${_text_mark($scope3_id, "#text/2", input.label, 2, $scope0_reason, 2)}</b>${_el_mark($scope3_id, "#b/0")}`);
				_script($scope3_id, "__tests__/template.marko_3");
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_label#0:4/subscribe", _client_guard($scope0_reason, 2));
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_r_label#1:3/subscribe", $cg__input_rows);
				_subscribe($wi__input_rows && $for_content__r_label__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope2_id),
					"ClosureSignalIndex:r_label/8": $wi__input_rows && 1
				}, "__tests__/template.marko", "3:6")));
			}, $scope2_id) };
			_dynamic_tag($scope2_id, "#text/0", input.tag, { content: Inner }, 1, 0, 0, $wg__input_tag, $scope0_reason, 3);
			_dynamic_tag($scope2_id, "#text/1", input.tag, { onClick: _bind_resume(function() {
				console.log("direct", r.label);
			}, "__tests__/template.marko_2/onClick", $scope2_id) }, 9, _content_resume("__tests__/template.marko_4*content", () => {
				const $scope4_id = _scope_id();
				const $scope4_reason = _scope_reason();
				_html(_text_mark($scope4_id, "#text/0", r.label, 2, $scope0_reason, 1));
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope4_id, "__tests__/template.marko_4_r_label#1:3/subscribe", $cg__input_rows);
				_subscribe(_unfilled_if($scope0_reason, 1) && $for_content__r_label__closures, _scope($scope4_id, {
					_: _write_if($scope0_reason, 0) && _scope_with_id($scope2_id),
					"ClosureSignalIndex:r_label/8": $wi__input_rows && 2
				}, "__tests__/template.marko", "5:8"));
			}, $scope2_id), 0, $wg__input_rows__OR__input_tag, $scope0_reason, 0, 0, 3);
			$cg__input_tag && _patch_write($scope2_id, "PatchWrite:Inner", Inner, 1);
			_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_tag#0:5/subscribe");
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_r_label#1:3/subscribe");
			_patch_render($scope2_id, "__tests__/template.marko_2_input_tag#0:5_r_label#1:3/setup", [_filled_guard($scope0_reason, 3) && ">>input_tag", _filled_guard($scope0_reason, 1) && ">r_label"], $scope0_reason, 0);
			$cg__input_tag && _patch_render($scope2_id, "__tests__/template.marko_2_input_tag#0:5_Inner#3/setup");
			_subscribe(_unfilled_if($scope0_reason, 1) && $for_content__r_label__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_tag__closures, _scope($scope2_id, {
				Inner: _unfilled_if($scope0_reason, 3) && Inner,
				_: _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "2:4", { Inner: "3:13" })));
			$wg__input_rows__OR__input_tag || $wg__input_tag || _resume_branch($scope2_id);
		}, $scope1_id, 2) });
		_patch_child_end();
		_filled_guard($scope0_reason, 1) && _patch_subscribers($scope1_id, "__tests__/template.marko_1_r_label#3/subscribers", "r_label");
		_scope($scope1_id, {
			r_label: r?.label,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:r_label/8": $wi__input_rows && $for_content__r_label__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2", { r_label: ["r.label", "1:6"] });
	}, "id", $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 1);
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#4/subscribers", "input_label");
	$fg__input_tag && $cg__input_rows && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_tag#5/subscribers", "input_tag");
	_scope($scope0_id, {
		input_label: input.label,
		input_tag: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.tag,
		"ClosureScopes:input_label/6": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_tag/7": _write_if($scope0_reason, 3) && (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && $input_tag__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_tag: ["input.tag"]
	}) || ($fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)), $fg__input_tag && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 3)));
}, 1);
