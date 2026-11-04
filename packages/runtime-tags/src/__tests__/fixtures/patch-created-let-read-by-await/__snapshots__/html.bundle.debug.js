// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content __tests__/template.marko_2_count#1:2/subscribe __tests__/template.marko_2_count#1:2_value#2/setup;D ;<span> </span>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1_#text#1/await": "__tests__/template.marko_1_#text#1/await __tests__/template.marko_2_count#1:2/subscribe __tests__/template.marko_2_count#1:2_value#2/setup;D ;<span> </span>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1; b%;<button>set</button><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__count__closures = new Set();
			let count = 1;
			_html(`<button>set</button>${_el_mark($scope1_id, "#button/0")}`);
			_await($scope1_id, "#text/1", resolveAfter(1, 1), (value) => {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_mark($scope2_id, "#text/0", count + value)}</span>`);
				_patch_write($scope2_id, "PatchWrite:value", value, 1);
				_subscribe($if_content__count__closures, _scope($scope2_id, { value }, "__tests__/template.marko", "5:4", { value: "5:10" }), "__tests__/template.marko_2_count#1:2/subscribe");
			}, 1, "__tests__/template.marko_2*content");
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_1_count#2/fill", count, 1);
			_scope($scope1_id, { "ClosureScopes:count/3": $if_content__count__closures }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
