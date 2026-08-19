// tags/banner/index.marko
const $template$2 = "<b>banner</b>";
const $walks$2 = "b";
var banner_default = _template_persisted("__tests__/tags/banner/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<b>banner</b>");
}, 0, 0);

// tags/widget/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
var widget_default = _template_persisted("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<section>");
	_patch_dynamic_tag($scope0_id, "#text/0", input.renderer, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "#text/0", input.renderer, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html$1("</section>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/widget/index.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!><button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%b l`)("D%l");
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html$1("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	widget_default({ renderer: input.kind === "banner" ? banner_default : input.kind });
	if ($scope0_reason) _if$1(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope2 = _peek_scope_id();
			widget_default({ renderer: input.kind === "banner" ? banner_default : input.kind });
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_html$1(`<button>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script$1($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_kind: input.kind,
		open,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_kind: ["input.kind"],
		open: "2:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.kind);
	_resume_branch($scope0_id);
}, 1, () => [widget_default]);
