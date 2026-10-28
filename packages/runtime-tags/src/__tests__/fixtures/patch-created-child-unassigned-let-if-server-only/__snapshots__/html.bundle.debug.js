// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card.marko": "__tests__/tags/card.marko;b%;<!><!><!>",
	"__tests__/tags/card.marko_1*shell": "__tests__/tags/card.marko_1*shell;Dc%;<p><b>yes</b> <!></p>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = input.n;
	_if(() => {
		if (n) {
			const $scope1_id = _scope_id();
			_html(`<p><b>yes</b> ${_text_resume($scope1_id, "#text/0", input.n, 2, $scope0_reason, 0)}</p>`);
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/tags/card.marko_1_input_n#0:3/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 0, ["__tests__/tags/card.marko_1*shell"], (_mask_group($scope0_reason, 0) & 1) << 1, 0);
	_patch_write($scope0_id, "PatchWrite:input_n", input.n, 1);
	_scope($scope0_id, { input_n: input.n }, "__tests__/tags/card.marko", 0, { input_n: ["input.n"] });
});

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;D%;<main><!></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_n = _write_guard($scope0_reason, 0), $cg__input_n = _client_guard($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", { n: input.n }, 1, 0, 0, $wg__input_on__OR__input_n, $scope0_reason, 0);
	_html("</main>");
	_scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.on,
		input_n: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.n
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_n: ["input.n"]
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_n && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.on, !_server_guard($scope0_reason, 1)), $cg__input_n && _content_withhold(input.on), _filled_guard($scope0_reason, 2) && $cg__input_on && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.n, !_server_guard($scope0_reason, 2)), $cg__input_on && _content_withhold(input.n));
}, 1);
