// tags/badge.marko
const $template$2 = "<b class=badge> </b>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/badge.marko": "__tests__/tags/badge.marko;D ;<b class=badge> </b>" });
var badge_default = _template("__tests__/tags/badge.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<b class=badge>${_text_mark($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</b>`);
	_scope($scope0_id, {}, "__tests__/tags/badge.marko", 0);
});

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
const $template = /*@__PURE__*/ ((_w0) => `<main><!>${_w0}<button id=o>o</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D%b/${_w0}& l`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D%b/${_w0}& l`)($walks$1)};${((_w0) => `<main><!>${_w0}<button id=o>o</button></main>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_badge_label = _filled_guard($scope0_reason, 1), $fg__input_props = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let on = false;
	_html("<main>");
	_if(() => {
		if (on) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			badge_default(input.badge);
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_badge_label#0:9/setup");
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 1) && _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_set_scope_reason(30);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	card_default({
		...input.props,
		note: on ? "on" : "off"
	});
	_patch_child_end();
	_html(`<button id=o>o</button>${_el_mark($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_badge_label && _patch_render($scope0_id, "__tests__/template.marko_1_input_badge_label#0:9/setup", "input_badge_label");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_props#6_on#7/setup", $fg__input_props && "input_props");
	_scope($scope0_id, {
		input_props: input.props,
		on,
		input_badge_label: input.badge?.label,
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_props: ["input.props"],
		on: "1:6",
		input_badge_label: ["input.badge.label"]
	}) || ($fg__input_props && _patch_write($scope0_id, "PatchMarkedWrite:input_props", input.props, !_server_guard($scope0_reason, 0)), $fg__input_badge_label && _patch_write($scope0_id, "PatchMarkedWrite:input_badge_label", input.badge?.label, !_server_guard($scope0_reason, 1)));
}, 1);
