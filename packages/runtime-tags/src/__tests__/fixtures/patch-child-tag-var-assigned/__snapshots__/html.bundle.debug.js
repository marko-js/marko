// tags/counter-box/index.marko
const $template$1 = "<span>box <!></span>";
const $walks$1 = "Db%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/counter-box/index.marko": "^__tests__/tags/counter-box/index.marko !;Db%;<span>box <!></span>" });
_stateful_return("__tests__/tags/counter-box/index.marko");
var counter_box_default = _template("__tests__/tags/counter-box/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = input.start;
	_html(`<span>box ${_text_resume($scope0_id, "#text/0", count, 2)}</span>`);
	const $return = count;
	const $valueChange2 = _patch_bind($scope0_id, "PatchWrite:#TagVariableChange", _resume(function(v) {
		count = v;
	}, "__tests__/tags/counter-box/index.marko_0/valueChange", $scope0_id) || void 0, 0, 0);
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/counter-box/index.marko_fill0", count, 1);
	_scope($scope0_id, { "#TagVariableChange": $valueChange2 }, "__tests__/tags/counter-box/index.marko", 0);
	return $return;
});

// template.marko
const $template = "<main><!><button class=toggle>t</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button class=toggle>t</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			let count = counter_box_default({ start: 1 });
			_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_count#4/var");
			_patch_child_end();
			_html(`<p>${_text_resume($scope1_id, "#text/2", count)}</p><button class=reset>r</button>${_el_resume($scope1_id, "#button/3")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
