// template.marko
const $template = "<main><p> </p><button>+</button></main>";
const $walks = " E l l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; E l ;<main><p> </p><button>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const uid = _id();
	console.log(input.title);
	_html(`<main${_patch_attr($scope0_id, "#main/0", "data-id", uid, 0, 0)}><p>${_text_resume($scope0_id, "#text/1", count)}</p><button>+</button>${_el_resume($scope0_id, "#button/2")}</main>${_el_resume($scope0_id, "#main/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_input_value#5_count#7");
	_patch_effect($scope0_id, "__tests__/template.marko_0_input_value#5_count#7", "input_value");
	$scope0_reason ? _scope($scope0_id, {
		input_value: input.value,
		count
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "input_value", input.value);
	_resume_branch($scope0_id);
}, 1, 0);
