// tags/labeled.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/labeled.marko": "__tests__/tags/labeled.marko; D l ;<label> </label><input>" });
var labeled_default = _template("__tests__/tags/labeled.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const uid = _id("uid");
	_html(`<label${_patch_attr($scope0_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>${_patch_text($scope0_id, "#text/1", input.name, void 0, $scope0_reason, 0)}</label>${_el_resume($scope0_id, "#label/0", 0)}<input${_patch_attr($scope0_id, "PatchAttr:#input/2 id", "id", uid, 0, 0)}>${_el_resume($scope0_id, "#input/2", 0)}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/labeled.marko", 0);
});

// template.marko
const $template = "<button>toggle</button><!><!><input><label>own</label>";
const $walks = " b%b%b b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%b%b b ;<button>toggle</button><!><!><input><label>own</label>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", on ? labeled_default : null, { name: "a" });
	_dynamic_tag($scope0_id, "#text/2", on ? labeled_default : null, { name: "b" }, 8);
	const own = _id("own");
	_html(`<input${_patch_attr($scope0_id, "PatchAttr:#input/3 id", "id", own, 0, 0)}>${_el_resume($scope0_id, "#input/3", 0)}<label${_patch_attr($scope0_id, "PatchAttr:#label/4 for", "for", own, 0, 0)}>own</label>${_el_resume($scope0_id, "#label/4", 0)}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, { on }, "__tests__/template.marko", 0, { on: "2:6" });
}, 1);
