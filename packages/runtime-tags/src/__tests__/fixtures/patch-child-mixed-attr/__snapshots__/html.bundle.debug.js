// tags/price-card/index.marko
const $template$1 = "<p><!> x<!></p>";
const $walks$1 = "D%c%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/price-card/index.marko": "__tests__/tags/price-card/index.marko;D%c%;<p><!> x<!></p>" });
var price_card_default = _template("__tests__/tags/price-card/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)} x${_patch_text($scope0_id, "#text/1", input.qty, 2, $scope0_reason, 1)}</p>`);
	_scope($scope0_id, {}, "__tests__/tags/price-card/index.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)($walks$1)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(8 | _mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	price_card_default({
		label: input.label,
		qty: count
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
