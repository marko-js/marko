// tags/card.marko
const $template$1 = "<div class=card><h2> </h2><p> </p><button class=t> </button></div>";
const $walks$1 = "E lD l D m";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;E lD l D ;<div class=card><h2> </h2><p> </p><button class=t> </button></div>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<div class=card><h2>${_text_mark($scope0_id, "#text/0", input.title, 1, $scope0_reason, 0)}</h2><p>${_text_mark($scope0_id, "#text/1", input.note, 1, $scope0_reason, 1)}</p><button class=t>${_text_mark($scope0_id, "#text/3", open ? "hide" : "show")}</button>${_el_mark($scope0_id, "#button/2")}</div>`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", open, 1);
	_scope($scope0_id, { open }, "__tests__/tags/card.marko", 0, { open: "1:6" });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!><button id=c> </button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%b D m`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&%b D m`)($walks$1)};${((_w0) => `<main>${_w0}<!><button id=c> </button></main>`)($template$1)}`,
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_more = _filled_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(_updates_from($scope0_reason, 2) << 1 | _updates_from($scope0_reason, 3) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default(input.props);
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 1) << 3);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/0", 1);
			card_default({
				title: "fixed",
				...input.more
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_more#0:8/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<button id=c>${_text_mark($scope0_id, "#text/3", count)}</button>${_el_mark($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_more && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_more#0:8/setup", "input_more");
	_scope($scope0_id, {
		input_more: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.more,
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_more: ["input.more"],
		count: "1:6"
	}) || $fg__input_more && $cg__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_more", input.more, !_server_guard($scope0_reason, 1));
}, 1);
