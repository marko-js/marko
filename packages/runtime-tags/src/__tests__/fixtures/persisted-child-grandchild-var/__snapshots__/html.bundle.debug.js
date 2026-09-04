// tags/widget/tags/inner/index.marko
const $template$2 = "<button class=bump>+</button>";
const $walks$2 = " b";
_shells({ "__tests__/tags/widget/tags/inner/index.marko": "__tests__/tags/widget/tags/inner/index.marko !__tests__/tags/widget/tags/inner/index.marko_0; ;<button class=bump>+</button>" });
var inner_default = _template_persisted("__tests__/tags/widget/tags/inner/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button class=bump>+</button>${_el_resume($scope0_id, "#button/0")}`);
	const $return = n;
	_script($scope0_id, "__tests__/tags/widget/tags/inner/index.marko_0");
	_patch_value($scope0_id, "__tests__/tags/widget/tags/inner/index.marko0", n, 1);
	$scope0_reason && _scope($scope0_id, { n }, "__tests__/tags/widget/tags/inner/index.marko", 0, { n: "1:6" });
	return $return;
}, 0, 0);

// tags/widget/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<em> </em>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)(" b");
_shells({ "__tests__/tags/widget/index.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/widget/index.marko;${_w0};${_w1}`)(((_w0) => `0${_w0}&D l`)(" b"), ((_w0) => `${_w0}<em> </em>`)($template$2)) });
var widget_default = _template_persisted("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	let v = inner_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/widget/index.marko_0_v#3/var");
	_owned_guard(0, 0) && _patch_write($scope0_id, "v", v, 1);
	_html(`<em>${_text_resume($scope0_id, "#text/2", v)}</em>`);
	$scope0_reason && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/widget/index.marko", 0);
}, 0, () => [inner_default]);

// template.marko
const $template = "<main><!><button class=toggle>t</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button class=toggle>t</button></main>" });
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
	}, $scope0_id, "#text/0");
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1, () => [widget_default]);
