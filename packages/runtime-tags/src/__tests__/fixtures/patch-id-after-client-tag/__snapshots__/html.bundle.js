// tags/labeled.marko
_shells({ b: "b; D l ;<label> </label><input>" });
var labeled_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = _id("A");
	_html(`<label${_attr("for", uid, $scope0_id, "aa$for", 0, 0)}>${_text_resume($scope0_id, "b", input.name, 1, $scope0_reason, 0)}</label>${_el_resume($scope0_id, "a", 0)}<input${_attr("id", uid, $scope0_id, "ac$id", 0, 0)}>${_el_resume($scope0_id, "c", 0)}`);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a0; b%b b ;<button>toggle</button><!><input><label>after</label>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", labeled_default, { name: "client" });
	const after = _id("A");
	_html(`<input${_attr("id", after, $scope0_id, "ac$id", 0, 0)}>${_el_resume($scope0_id, "c", 0)}<label${_attr("for", after, $scope0_id, "ad$for", 0, 0)}>after</label>${_el_resume($scope0_id, "d", 0)}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { e: on });
}, 1);
