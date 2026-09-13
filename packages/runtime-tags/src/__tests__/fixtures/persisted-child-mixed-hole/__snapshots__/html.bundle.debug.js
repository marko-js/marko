// tags/combo/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/combo/index.marko": "__tests__/tags/combo/index.marko;D ;<p> </p>" });
var combo_default = _template_persisted("__tests__/tags/combo/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.label + input.qty, void 0, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, {
		input_label: _source_if($scope0_reason, 2) && input.label,
		input_qty: _source_if($scope0_reason, 1) && input.qty
	}, "__tests__/tags/combo/index.marko", 0, {
		input_label: ["input.label"],
		input_qty: ["input.qty"]
	});
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D l");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)("D l"), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	combo_default({
		label: input.title,
		qty: count
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" }) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
}, 1, () => [combo_default]);
