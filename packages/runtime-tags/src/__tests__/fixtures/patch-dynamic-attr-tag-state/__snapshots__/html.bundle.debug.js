// card.marko
const $template$1 = "<section><em> </em><!></section>";
const $walks$1 = "E l%l";
const $setup$1 = [[], []];
_shells({ "__tests__/card.marko": "__tests__/card.marko;E l%;<section><em> </em><!></section>" });
var card_default = _template("__tests__/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_text_mark($scope0_id, "#text/0", input.meta.n, 1, $scope0_reason, 0)}</em>`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_html("</section>");
	_scope($scope0_id, {}, "__tests__/card.marko", 0);
});

// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_on = _filled_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let count = 0;
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : null, { meta: attrTag({ n: count }) }, 0, _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(_text_mark($scope1_id, "#text/0", input.label, $wg__input_label * 2));
		$cg__input_label && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:5/subscribe");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"), $cg__input_label && "__tests__/template.marko_1_input_label#0:5/subscribe", $wg__input_label);
	}, $scope0_id));
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#5/subscribers", "input_label");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_on#4_count#6/setup", $fg__input_on && "input_on");
	_scope($scope0_id, {
		input_on: input.on,
		input_label: input.label,
		count,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_label: ["input.label"],
		count: "2:6"
	}) || ($fg__input_on && _patch_write($scope0_id, "PatchMarkedWrite:input_on", input.on, !_server_guard($scope0_reason, 0)), $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1)));
}, 1);
