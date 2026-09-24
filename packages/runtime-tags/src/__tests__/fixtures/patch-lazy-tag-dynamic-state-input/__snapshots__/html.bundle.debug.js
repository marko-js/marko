// child.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
_shells({ "__tests__/child.marko": "__tests__/child.marko;D ;<span> </span>" });
var child_default = _template_patch("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</span>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/child.marko", 0);
}, 0, 0);

// template.marko
const $template = "<button class=n> </button><main><!></main>";
const $walks = " D lD%l";
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", void 0, 1);
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D lD%;<button class=n> </button><main><!></main>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}<main>`);
	_dynamic_tag($scope0_id, "#text/2", input.show ? $Child_withLoadAssets : null, { label: `${input.label}${n}` });
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_show: input.show,
		input_label: input.label,
		n
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_label: ["input.label"],
		n: "3:6"
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.show), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "__tests__/template.marko1", input.label));
}, 1, 1);
