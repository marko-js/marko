// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card.marko_1*content": "__tests__/tags/card.marko_1*content;D ;<p> </p>",
	"__tests__/tags/card.marko_0_#text#0/await": "__tests__/tags/card.marko_0_#text#0/await;D ;<p> </p>",
	"__tests__/tags/card.marko": "__tests__/tags/card.marko;b%;<!><!><!>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = input.n;
	_await($scope0_id, "#text/0", Promise.resolve(n), (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", x, 1, (_mask_group($scope0_reason, 0) & 1) << 1, 0)}</p>`);
		_scope($scope1_id, {}, "__tests__/tags/card.marko", "2:2");
	}, 1, "__tests__/tags/card.marko_1*content", 1);
});

// template.marko
const $template = "<button> </button><main><!></main>";
const $walks = " D lD%l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D lD%;<button> </button><main><!></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let c = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", c)}</button>${_el_resume($scope0_id, "#button/0")}<main>`);
	_dynamic_tag($scope0_id, "#text/2", input.on ? card_default : "div", { n: input.n }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.on,
		input_n: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.n,
		c
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_n: ["input.n"],
		c: "2:6"
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_n && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.on, !_server_guard($scope0_reason, 1)), $cg__input_n && _content_withhold(input.on), _filled_guard($scope0_reason, 2) && $cg__input_on && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.n, !_server_guard($scope0_reason, 2)), $cg__input_on && _content_withhold(input.n));
}, 1);
