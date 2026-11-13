// note.marko
const $template$2 = "<button> </button>";
const $walks$2 = " D l";
const $setup$2 = [[], ["__tests__/note.marko_0"]];
_shells({ "__tests__/note.marko": "__tests__/note.marko !__tests__/note.marko_0; D ;<button> </button>" });
var note_default = _template("__tests__/note.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", n)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/note.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/note.marko_0_n#2/fill", n, 1);
	_scope($scope0_id, { n }, "__tests__/note.marko", 0, { n: "1:6" });
});

// tags/card.marko
const $template$1 = "<button>clear</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button>clear</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><button class=toggle>toggle</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%b b`)($walks$1);
const $Note_withLoadAssets = withLoadAssets(() => note_default, "__tests__/note.marko", flush, "ready:__tests__/note.marko");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&%b b`)($walks$1)};${((_w0) => `${_w0}<!><button class=toggle>toggle</button>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let show = true;
	let T = $Note_withLoadAssets;
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_mark($scope1_id, "#text/0", input.label, $wg__input_label)}</em>`);
		$cg__input_label && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:5/subscribe");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"), $cg__input_label && "__tests__/template.marko_1_input_label#0:5/subscribe", $wg__input_label);
	}, $scope0_id) });
	_patch_child_end();
	_if(() => {
		if (show) {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "#text/0", T, {}, 8);
			_scope($scope2_id, {}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		show,
		T,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		show: "3:6",
		T: "4:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#5/subscribers", "input_label");
}, 1);
