// tags/card.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko;D ;<em> </em>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/outer.marko": "__tests__/tags/outer.marko !;b%;<!><!><!>",
	"__tests__/tags/outer.marko_1*shell": "__tests__/tags/outer.marko_1*shell __tests__/tags/outer.marko_1_n#0:8/init __tests__/tags/outer.marko_1_input_label#0:7_T#0:9/init __tests__/tags/outer.marko_1_input_label#0:7_f#0:10/init;D l%bD ;<p> </p><!><i> </i>"
});
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more = _write_guard($scope0_reason, 4), $cg__input_more__OR__input_label = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = input.n;
	let T = input.tag;
	let f = input.fmt;
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", n)}</p>`);
			_dynamic_tag($scope1_id, "#text/1", T, { label: input.label }, 1, 0, 0, 1, (_mask_group($scope0_reason, 5) | _mask_group($scope0_reason, 2)) << 1, 0, "^T");
			_html(`<i>${_text_resume($scope1_id, "#text/2", f(input.label), 1, (_mask_group($scope0_reason, 5) | _mask_group($scope0_reason, 3)) << 1, 0, 1, "^f")}</i>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/outer.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_more, 1, 0, 0, ["__tests__/tags/outer.marko_1*shell"], $scope0_reason, 4);
	_filled_guard($scope0_reason, 2) && $cg__input_more__OR__input_label && _patch_write($scope0_id, "PatchWrite:T", T, 1);
	_filled_guard($scope0_reason, 3) && $cg__input_more__OR__input_label && _patch_write($scope0_id, "PatchWrite:f", f, 1);
	!_client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill1", n, 1);
	_scope($scope0_id, {
		input_label: input.label,
		n: _write_if($scope0_reason, 4) && n,
		T: _unfilled_if($scope0_reason, 0) && T,
		f: _unfilled_if($scope0_reason, 0) && f
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		n: "1:6",
		T: "2:6",
		f: "3:6"
	}) || _filled_guard($scope0_reason, 5) && (_client_guard($scope0_reason, 2) || _client_guard($scope0_reason, 3)) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", input.label, !_server_guard($scope0_reason, 5));
	$wg__input_more || _resume_branch($scope0_id);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const wrap = _resume((v) => "w-" + v, "__tests__/template.marko_0/wrap");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 9 | _mask_group($scope0_reason, 1) << 11);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	outer_default({
		n: 1,
		tag: card_default,
		fmt: wrap,
		label: input.label,
		more: input.more
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
