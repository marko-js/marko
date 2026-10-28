// tags/rowsy.marko
const $template$1 = "<button> </button><!><!>";
const $walks$1 = " D l%c";
const $setup$1 = [[], ["__tests__/tags/rowsy.marko_0"]];
_shells({
	"__tests__/tags/rowsy.marko_3*content": "__tests__/tags/rowsy.marko_3*content",
	"__tests__/tags/rowsy.marko_1*content": "__tests__/tags/rowsy.marko_1*content __tests__/tags/rowsy.marko_1_n#0:9/init",
	"__tests__/tags/rowsy.marko": "__tests__/tags/rowsy.marko !__tests__/tags/rowsy.marko_0; D l%;<button> </button><!><!>",
	"__tests__/tags/rowsy.marko_2*shell": "__tests__/tags/rowsy.marko_2*shell;b%;<!><!><!>",
	"__tests__/tags/rowsy.marko_4*shell": "__tests__/tags/rowsy.marko_4*shell;b%;<!><!><!>"
});
var rowsy_default = _template("__tests__/tags/rowsy.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tags__OR__input_card = _write_guard($scope0_reason, 0), $cg__input_tags = _client_guard($scope0_reason, 2), $cg__input_tags__OR__input_card = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $n__closures = new Set();
	const Card = { content: _content_resume("__tests__/tags/rowsy.marko_3*content", ({ label, content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__content = _write_guard($scope3_reason, 2);
		_html(`<p>${_text_resume($scope3_id, "#text/0", label, 1, 4, 0)}`);
		_if(() => {
			if (label) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "#text/0", content, {}, 2, 0, 0, $wg__content);
				_write_if($scope3_reason, 0) && _scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) }, "__tests__/tags/rowsy.marko", "2:15");
				return 0;
			}
		}, $scope3_id, "#text/1", 1, _write_guard($scope3_reason, 1), 1, 0, 0, ["__tests__/tags/rowsy.marko_4*shell"]);
		_html("</p>");
		_scope($scope3_id, { content: _unfilled_if($scope3_reason, 1) && content }, "__tests__/tags/rowsy.marko", "1:2", { content: "1:23" });
	}, $scope0_id) };
	let n = 0;
	const Label = { content: _content_resume("__tests__/tags/rowsy.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.label, 1, $scope0_reason, 1)} ${_text_resume($scope1_id, "#text/1", n, 2)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "__tests__/tags/rowsy.marko_1_input_label#0:5/init" : "__tests__/tags/rowsy.marko_1_input_label#0:5/subscribe");
		_subscribe($n__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/rowsy.marko", "5:2")));
	}, $scope0_id) };
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(input.tags, (tag) => {
		const $scope2_id = _scope_id();
		_filled_guard($scope0_reason, 2) && _unfilled_if($scope0_reason, 0) && _patch_write($scope2_id, "PatchMarkedWrite:tag", tag, !_server_guard($scope0_reason, 2));
		_dynamic_tag($scope2_id, "#text/0", input.card ? Card : "span", {
			label: tag,
			content: Label
		}, 9, 0, 0, $wg__input_tags__OR__input_card, $scope0_reason, 0);
		(_filled_guard($scope0_reason, 3) && !$cg__input_tags || !$cg__input_tags || !$cg__input_tags || _filled_guard($scope0_reason, 2)) && _patch_join_init($scope2_id, "__tests__/tags/rowsy.marko_2_input_card#0:7_Card#0:8_Label#0:10_tag#2/init", $scope0_reason, 0, _filled_guard($scope0_reason, 3) && ">input_card", _filled_guard($scope0_reason, 2) && "tag");
		_write_if($scope0_reason, 0) && _scope($scope2_id, {
			tag: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && tag,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/rowsy.marko", "7:2", { tag: "7:6" });
	}, 0, $scope0_id, "#text/2", 1, 1, 1, 0, 0, "__tests__/tags/rowsy.marko_2*shell", $scope0_reason, 2);
	_script($scope0_id, "__tests__/tags/rowsy.marko_0");
	_filled_guard($scope0_reason, 3) && $cg__input_tags ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/rowsy.marko_fill1/unpatched", input.card) : $cg__input_tags && _patch_write($scope0_id, "PatchMarkedWrite:input_card", input.card, 1);
	$cg__input_tags ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/rowsy.marko_fill2/unpatched", Card) : $cg__input_tags__OR__input_card && _patch_write($scope0_id, "PatchWrite:Card", Card, 1);
	$cg__input_tags ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/rowsy.marko_fill4/unpatched", Label) : $cg__input_tags__OR__input_card && _patch_write($scope0_id, "PatchWrite:Label", Label, 1);
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/rowsy.marko_fill3", n, 1);
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		input_card: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.card,
		Card: _unfilled_if($scope0_reason, 0) && Card,
		n,
		Label: _unfilled_if($scope0_reason, 0) && Label,
		"ClosureScopes:input_label/11": _write_if($scope0_reason, 1) && $input_label__closures,
		"ClosureScopes:n/14": $n__closures
	}, "__tests__/tags/rowsy.marko", 0, {
		input_label: ["input.label"],
		input_card: ["input.card"],
		Card: "1:9",
		n: "4:6",
		Label: "5:9"
	}) || _filled_guard($scope0_reason, 1) && (_content_withheld("__tests__/tags/rowsy.marko_1*content", $scope0_id) || $cg__input_tags__OR__input_card) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/rowsy.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button class=c>c</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks$1)};${((_w0) => `${_w0}<button class=c>c</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let card = true;
	_set_scope_reason(134 | (_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 5));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	rowsy_default({
		card,
		label: input.label,
		tags: input.tags
	});
	_patch_child_end();
	_html(`<button class=c>c</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		card,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { card: "1:6" });
}, 1);
