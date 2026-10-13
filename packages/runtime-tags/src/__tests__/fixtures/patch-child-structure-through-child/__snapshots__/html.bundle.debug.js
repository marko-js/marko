// tags/leaf.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
_shells({
	"__tests__/tags/leaf.marko": "__tests__/tags/leaf.marko !;b%;<!><!><!>",
	"__tests__/tags/leaf.marko_1*shell": "__tests__/tags/leaf.marko_1*shell;D ;<em> </em>"
});
var leaf_default = _template("__tests__/tags/leaf.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_flag = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.flag) {
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", input.label, void 0, $scope0_reason, 1)}</em>`);
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/leaf.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_flag, void 0, void 0, void 0, ["__tests__/tags/leaf.marko_1*shell"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { input_label: _unfilled_if($scope0_reason, 0) && input.label }, "__tests__/tags/leaf.marko", 0, { input_label: ["input.label"] }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/tags/leaf.marko_fill0", input.label);
});

// tags/mid.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/mid.marko": "__tests__/tags/mid.marko !;b%;<!><!><!>",
	"__tests__/tags/mid.marko_1*shell": /*@__PURE__*/ (() => `__tests__/tags/mid.marko_1*shell;${/*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c")};${/*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template$2)}`)()
});
var mid_default = _template("__tests__/tags/mid.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 3) << 3);
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			leaf_default({
				flag: input.flag,
				label: input.label
			});
			_html("</section>");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/mid.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/mid.marko_1*shell"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		input_flag: input.flag,
		input_label: input.label
	}, "__tests__/tags/mid.marko", 0, {
		input_flag: ["input.flag"],
		input_label: ["input.label"]
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/tags/mid.marko_fill0", input.flag), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/tags/mid.marko_fill1", input.label));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `D/${_w0}& l`)("b%c")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(8 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 7));
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	mid_default({
		show: count % 2 === 0,
		flag: input.flag,
		label: input.label
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
