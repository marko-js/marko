// tags/card.marko
const $template$2 = "<button>clear</button><!><!><!>";
const $walks$2 = " b%b%c";
const $setup$2 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%b%;<button>clear</button><!><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	let o = input.other;
	_html(`<button>clear</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, void 0, void 0, void 0, (_mask_group($scope0_reason, 0) & 1) << 1, 0, 1);
	_dynamic_tag($scope0_id, "#text/2", o, {}, 10, void 0, void 0, void 0, (_mask_group($scope0_reason, 1) & 1) << 1, 0, 1);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0) || (_content_withhold(input.content), _content_withhold(input.other));
});

// tags/relay.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2);
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({
	"__tests__/tags/relay.marko_1*content": "__tests__/tags/relay.marko_1*content; b ;<input><label>relay</label>",
	"__tests__/tags/relay.marko": /*@__PURE__*/ (() => `__tests__/tags/relay.marko${_shell_marker($setup$1)};${((_w0) => `/${_w0}&b`)($walks$2)};${((_w0) => `${_w0}<!>`)($template$2)}`)()
});
var relay_default = _template("__tests__/tags/relay.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	card_default({
		other: input.content,
		content: _content_kept("__tests__/tags/relay.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			const rid = _id("rid");
			_html(`<input${_patch_attr($scope1_id, "PatchAttr:#input/0 id", "id", rid, 0, 0)}>${_el_resume($scope1_id, "#input/0", 0)}<label${_patch_attr($scope1_id, "PatchAttr:#label/1 for", "for", rid, 0, 0)}>relay</label>${_el_resume($scope1_id, "#label/1", 0)}`);
			_scope($scope1_id, {}, "__tests__/tags/relay.marko", "1:2");
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/relay.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content; b Db%;<input><label>p <!></label>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
		relay_default({ content: _content_kept("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			const uid = _id("uid");
			_html(`<input${_patch_attr($scope2_id, "PatchAttr:#input/0 id", "id", uid, 0, 0)}>${_el_resume($scope2_id, "#input/0", 0)}<label${_patch_attr($scope2_id, "PatchAttr:#label/1 for", "for", uid, 0, 0)}>p ${_patch_text($scope2_id, "#text/2", row.id, 2, $scope0_reason, 0)}</label>${_el_resume($scope2_id, "#label/1", 0)}`);
			_scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4");
		}, $scope1_id) });
		_patch_child_end();
		_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "1:2");
	}, "id", $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
