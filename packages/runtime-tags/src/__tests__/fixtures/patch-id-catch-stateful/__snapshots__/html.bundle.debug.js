// tags/field.marko
const $template$1 = "<label> </label><input><button>+</button>";
const $walks$1 = " D l b b";
const $setup$1 = [[], ["__tests__/tags/field.marko_0"]];
_shells({ "__tests__/tags/field.marko": "^__tests__/tags/field.marko !__tests__/tags/field.marko_0; D l b ;<label> </label><input><button>+</button>" });
_stateful_return("__tests__/tags/field.marko");
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const uid = _id("uid");
	_html(`<label${_attr("for", uid, $scope0_id, "#label/0", 0, 0)}>${_text_resume($scope0_id, "#text/1", input.name, void 0, $scope0_reason, 0)}</label>${_el_resume($scope0_id, "#label/0", 0)}<input${_attr("id", uid, $scope0_id, "#input/2", 0, 0)}>${_el_resume($scope0_id, "#input/2", 0)}<button>+</button>${_el_resume($scope0_id, "#button/3")}`);
	const $return = count;
	_script($scope0_id, "__tests__/tags/field.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/field.marko_fill0", count, 1);
	_scope($scope0_id, { count }, "__tests__/tags/field.marko", 0, { count: "1:6" });
	return $return;
});

// template.marko
const $template = "<!><!><button>toggle</button>";
const $walks = "b%b b";
function fail() {
	throw new Error("caught");
}
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>toggle</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(_escape(fail()));
			}, void 0, (error) => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				const $childScope = _peek_scope_id($scope3_id, "#childScope/0", 0);
				let count = field_default({ name: error.message });
				_var($scope3_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_3_count#6/var");
				_patch_child_end();
				_html(`<p>${_text_resume($scope3_id, "#text/2", count)}</p>`);
				_scope($scope3_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:25");
			}, void 0, "__tests__/template.marko_3*content", "__tests__/template.marko_2*content");
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "2:6" });
}, 1);
