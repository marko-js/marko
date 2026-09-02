// tags/widget/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko;D ;<em> </em>" });
var widget_default = _template_persisted("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<em>${_patch_text($scope0_id, "#text/0", $global$1.brand)}</em>`);
	_global_subscribe("__tests__/tags/widget/index.marko_0_$global_brand#1/global", $scope0_id);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/widget/index.marko", 0);
}, 0, 1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			widget_default({});
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
	_resume_branch($scope0_id);
}, 1, () => [widget_default]);
