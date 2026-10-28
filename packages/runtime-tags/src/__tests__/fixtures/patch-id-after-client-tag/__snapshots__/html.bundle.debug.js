// tags/labeled.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/labeled.marko": "__tests__/tags/labeled.marko; D l ;<label> </label><input>" });
var labeled_default = _template("__tests__/tags/labeled.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = _id("uid");
	_html(`<label${_attr("for", uid, $scope0_id, "#label/0", 0, 0)}>${_text_resume($scope0_id, "#text/1", input.name, void 0, $scope0_reason, 0)}</label>${_el_resume($scope0_id, "#label/0", 0)}<input${_attr("id", uid, $scope0_id, "#input/2", 0, 0)}>${_el_resume($scope0_id, "#input/2", 0)}`);
	_scope($scope0_id, {}, "__tests__/tags/labeled.marko", 0);
});

// template.marko
const $template = "<button>toggle</button><!><input><label>after</label>";
const $walks = " b%b b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%b b ;<button>toggle</button><!><input><label>after</label>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", on ? labeled_default : null, { name: "client" });
	const after = _id("after");
	_html(`<input${_attr("id", after, $scope0_id, "#input/2", 0, 0)}>${_el_resume($scope0_id, "#input/2", 0)}<label${_attr("for", after, $scope0_id, "#label/3", 0, 0)}>after</label>${_el_resume($scope0_id, "#label/3", 0)}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { on }, "__tests__/template.marko", 0, { on: "2:6" });
}, 1);
