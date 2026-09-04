// tags/widget/index.marko
const $template$1 = "<button class=c><!>:<!></button>";
const $walks$1 = " D%c%l";
_shells({ "__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko !__tests__/tags/widget/index.marko_0; D%c%;<button class=c><!>:<!></button>" });
var widget_default = _template_persisted("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=c>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_owned, 0)}:${_text_resume($scope0_id, "#text/2", n, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/widget/index.marko_0");
	_patch_value($scope0_id, "__tests__/tags/widget/index.marko0", n, 1);
	$scope0_reason && _scope($scope0_id, { n }, "__tests__/tags/widget/index.marko", 0, { n: "1:6" });
}, 0, 0);

// template.marko
const $template = "<main><!><button class=t>t</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button class=t>t</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			widget_default({ label: "fixed" });
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1, () => [widget_default]);
