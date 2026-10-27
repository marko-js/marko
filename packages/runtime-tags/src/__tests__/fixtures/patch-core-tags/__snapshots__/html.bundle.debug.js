// template.marko
const $template = "<main><p> </p><button>+</button></main>";
const $walks = " E l l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; E l ;<main><p> </p><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	const uid = _id("uid");
	console.log(input.title);
	_html(`<main${_attr("data-id", uid, $scope0_id, "#main/0", 0, 0)}><p>${_text_resume($scope0_id, "#text/1", count)}</p><button>+</button>${_el_resume($scope0_id, "#button/2")}</main>${_el_resume($scope0_id, "#main/0", 0)}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_input_value#5_count#7", 1, $sg__input_value && 2, "input_value");
	_scope($scope0_id, {
		input_value: input.value,
		count
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		count: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_value", input.value, !$sg__input_value);
}, 1);
