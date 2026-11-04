// tags/labeler.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/labeler.marko": "^__tests__/tags/labeler.marko;D ;<span> </span>" });
var labeler_default = _template("__tests__/tags/labeler.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "#text/0", input.title, 1, $scope0_reason, 0)}</span>`);
	const $return = "[" + input.title + "]";
	_scope($scope0_id, {}, "__tests__/tags/labeler.marko", 0);
	return $return;
});

// tags/list.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/list.marko": "__tests__/tags/list.marko;b%;<!><!><!>",
	"__tests__/tags/list.marko_1*shell": `__tests__/tags/list.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$2])};${/*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("D l")};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$2)}`
});
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_suffix = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id(), $ui__input_items__OR__input_suffix = _unfilled_if($scope0_reason, 0), $fg__input_items = _filled_guard($scope0_reason, 1);
		$fg__input_items && _unfilled_if($scope0_reason, 2) && _patch_write($scope1_id, "PatchMarkedWrite:item", item, !_server_guard($scope0_reason, 1));
		_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0, $ui__input_items__OR__input_suffix && 1);
		let label = labeler_default({ title: item + input.suffix });
		$ui__input_items__OR__input_suffix && _var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/tags/list.marko_1_label#6/var");
		_patch_child_end();
		_html(`<p>${_text_mark($scope1_id, "#text/2", label, 1, $scope0_reason, 0)}</p>`);
		_patch_render($scope1_id, "__tests__/tags/list.marko_1_input_suffix#0:4_item#4/setup", ((_filled_guard($scope0_reason, 2) ? " >input_suffix" : "") + ($fg__input_items ? " item" : "")).slice(1), $scope0_reason, 0);
		_scope($scope1_id, {
			item: _write_if($scope0_reason, 2) && $ui__input_items__OR__input_suffix && item,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/tags/list.marko", "1:2", { item: "1:6" });
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/list.marko_1*shell", $scope0_reason, 1);
	$fg__input_suffix && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/tags/list.marko_1_input_suffix#0:4/setup", "input_suffix");
	_scope($scope0_id, { input_suffix: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 0) && input.suffix }, "__tests__/tags/list.marko", 0, { input_suffix: ["input.suffix"] }) || $fg__input_suffix && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_suffix", input.suffix, !_server_guard($scope0_reason, 2));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button>+</button>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let items = ["x"];
	_set_scope_reason(14 | _updates_from($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	list_default({
		items,
		suffix: input.suffix
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
