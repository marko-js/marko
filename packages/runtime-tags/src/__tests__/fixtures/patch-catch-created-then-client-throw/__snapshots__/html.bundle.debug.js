// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom() {
	throw new Error("boom");
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content !__tests__/template.marko_2; D%b%;<button><!><!></button>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_fail__closures = new Set();
		_try($scope1_id, "#text/0", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			let n = 0;
			_html(`<button>${_patch_text($scope2_id, "#text/1", item.fail ? boom() : item.id, void 0, $scope0_reason, 0)}${_text_resume($scope2_id, "#text/2", n ? boom() : "", 2)}</button>${_el_resume($scope2_id, "#button/0")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_items ? "__tests__/template.marko_2_item_fail#1:3/init" : "__tests__/template.marko_2_item_fail#1:3/subscribe");
			_patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill0", n, 1);
			_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__item_fail__closures, _scope($scope2_id, {
				n,
				_: $wi__input_items && _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "5:4", { n: "6:10" }), $cg__input_items && "__tests__/template.marko_2_item_fail#1:3/subscribe");
		}, void 0, (err) => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html(`<b>${_patch_text($scope3_id, "#text/0", err.message)}</b>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "8:6");
		}, void 0, "__tests__/template.marko_3*content", "__tests__/template.marko_2*content", void 0, 1, 1);
		$wi__input_items && _scope($scope1_id, { "ClosureScopes:item_fail/5": _unfilled_if($scope0_reason, 0) && $for_content__item_fail__closures }, "__tests__/template.marko", "4:2");
	}, "id", $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
