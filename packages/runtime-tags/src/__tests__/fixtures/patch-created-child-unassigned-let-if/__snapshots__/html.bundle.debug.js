// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !;b%;<!><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 0), $fg__input_n = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = input.n;
	_if(() => {
		if (n) {
			const $scope1_id = _scope_id();
			_html(`<p><b>yes</b> ${_text_mark($scope1_id, "#text/0", input.n, $wg__input_n * 2)}</p>`);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/tags/card.marko_1_input_n#0:3/setup");
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	$fg__input_n && _patch_render($scope0_id, "__tests__/tags/card.marko_1_input_n#0:3/setup", "input_n");
	$fg__input_n && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_0_n#4/fill", n, 1);
	_scope($scope0_id, { input_n: input.n }, "__tests__/tags/card.marko", 0, { input_n: ["input.n"] }) || $fg__input_n && _patch_write($scope0_id, "PatchMarkedWrite:input_n", input.n, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<button> </button><main><!></main>";
const $walks = " D lD%l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D lD%;<button> </button><main><!></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_on__OR__input_n = _unfilled_if($scope0_reason, 0), $fg__input_on = _filled_guard($scope0_reason, 1), $fg__input_n = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let c = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", c)}</button>${_el_mark($scope0_id, "#button/0")}<main>`);
	_dynamic_tag($scope0_id, "#text/2", input.on ? card_default : "div", { n: input.n }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_on#5_input_n#6/setup", (($fg__input_on ? " input_on" : "") + ($fg__input_n ? " input_n" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_on: $ui__input_on__OR__input_n && input.on,
		input_n: $ui__input_on__OR__input_n && input.n,
		c
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_n: ["input.n"],
		c: "2:6"
	}) || ($fg__input_on && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_on", input.on, !_server_guard($scope0_reason, 1)), $fg__input_n && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_n", input.n, !_server_guard($scope0_reason, 2)));
}, 1);
