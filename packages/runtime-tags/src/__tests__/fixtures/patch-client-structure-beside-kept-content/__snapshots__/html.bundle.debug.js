// tags/card.marko
const $template$2 = "<button>clear</button><!><!>";
const $walks$2 = " b%c";
const $setup$2 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button>clear</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0) || _client_branch(input.content);
});

// tags/badge.marko
const $template$1 = "<span> </span><!><!>";
const $walks$1 = "D l%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/badge.marko": "__tests__/tags/badge.marko;D l%;<span> </span><!><!>",
	"__tests__/tags/badge.marko_1*shell": "__tests__/tags/badge.marko_1*shell,<em>three</em>"
});
var badge_default = _template("__tests__/tags/badge.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "#text/0", input.tag, 1, $scope0_reason, 0)}</span>`);
	_if(() => {
		if (input.tag === "t3") {
			const $scope1_id = _scope_id();
			_html("<em>three</em>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/tags/badge.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/tags/badge.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/tags/badge.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!><button>toggle</button>`)($template$2);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%b%b b`)($walks$2);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&%b%b b`)($walks$2)};${((_w0) => `${_w0}<!><!><button>toggle</button>`)($template$2)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_tag = _updates_from($scope0_reason, 1), $cg__input_tag = _client_guard($scope0_reason, 1), $wi__input_tag = _write_if($scope0_reason, 1), $fg__input_tag = _filled_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let show = true;
	let items = [1, 2];
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_mark($scope1_id, "#text/0", input.label, 1, $scope0_reason, 0)}</em>`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_label#0:6/subscribe");
	}, $scope0_id, 1) });
	_patch_child_end();
	_if(() => {
		if (show) {
			const $scope2_id = _scope_id();
			_set_scope_reason($uf__input_tag << 1);
			const $childScope2 = _peek_scope_id($scope2_id, "#childScope/0", 1);
			badge_default({ tag: input.tag });
			_patch_child_end();
			$cg__input_tag && _patch_render($scope2_id, "__tests__/template.marko_2_input_tag#0:7/setup");
			_scope($scope2_id, { "#childScope/0": $wi__input_tag && _existing_scope($childScope2) }, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_for_of(items, (item) => {
		const $scope3_id = _scope_id();
		_set_scope_reason($uf__input_tag << 1);
		const $childScope3 = _peek_scope_id($scope3_id, "#childScope/0", 2);
		badge_default({ tag: input.tag });
		_patch_child_end();
		$cg__input_tag && _patch_render($scope3_id, "__tests__/template.marko_3_input_tag#0:7/setup");
		_scope($scope3_id, { "#childScope/0": $wi__input_tag && _existing_scope($childScope3) }, "__tests__/template.marko", "5:2");
	}, 0, $scope0_id, "#text/2");
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_tag && _patch_render($scope0_id, "__tests__/template.marko_2_input_tag#0:7/setup", "input_tag");
	$fg__input_tag && _patch_render($scope0_id, "__tests__/template.marko_3_input_tag#0:7/setup", "input_tag");
	_scope($scope0_id, {
		input_tag: input.tag,
		show,
		"ClosureScopes:input_label/10": $wi__input_label && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_tag: ["input.tag"],
		show: "1:6"
	}) || $fg__input_tag && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 1));
}, 1);
