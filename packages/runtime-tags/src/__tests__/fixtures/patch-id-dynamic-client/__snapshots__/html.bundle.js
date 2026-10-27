// tags/labeled.marko
_shells({ b: "b; D l ;<label> </label><input>" });
var labeled_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const uid = _id("A");
	_html(`<label${_patch_attr($scope0_id, "aa$for", "for", uid, 0, 0)}>${_patch_text($scope0_id, "b", input.name, void 0, $scope0_reason, 0)}</label>${_el_resume($scope0_id, "a", 0)}<input${_patch_attr($scope0_id, "ac$id", "id", uid, 0, 0)}>${_el_resume($scope0_id, "c", 0)}`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a0; b%b%b b ;<button>toggle</button><!><!><input><label>own</label>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", labeled_default, { name: "a" });
	_dynamic_tag($scope0_id, "c", labeled_default, { name: "b" }, 8);
	const own = _id("A");
	_html(`<input${_patch_attr($scope0_id, "ad$id", "id", own, 0, 0)}>${_el_resume($scope0_id, "d", 0)}<label${_patch_attr($scope0_id, "ae$for", "for", own, 0, 0)}>own</label>${_el_resume($scope0_id, "e", 0)}`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, { f: on });
}, 1);
