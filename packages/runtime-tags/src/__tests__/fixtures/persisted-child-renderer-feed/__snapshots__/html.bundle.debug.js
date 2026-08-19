// tags/widget/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
var widget_default = _template_persisted("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_patch_dynamic_tag($scope0_id, "#text/0", input.renderer, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "#text/0", input.renderer, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/widget/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html$1("<main>");
	if ($scope0_reason) _if$1(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			widget_default({ renderer: input.renderer });
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html$1(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script$1($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_renderer: input.renderer,
		open
	}, "__tests__/template.marko", 0, {
		input_renderer: ["input.renderer"],
		open: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.renderer);
	_resume_branch($scope0_id);
}, 1, () => [widget_default]);
