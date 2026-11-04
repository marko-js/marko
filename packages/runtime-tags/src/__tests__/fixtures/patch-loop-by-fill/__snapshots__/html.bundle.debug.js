// template.marko
const $template = "<main><ul></ul><button>+</button></main>";
const $walks = "D b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b ;<main><ul></ul><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_keyField = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let items = [{
		n: 1,
		id: "x"
	}, {
		n: 2,
		id: "y"
	}];
	_html("<main><ul>");
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "#text/0", item.n)}</li>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "4:6");
	}, function(item) {
		return item[input.keyField];
	}, $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_keyField#4_items#5/setup", $fg__input_keyField && "input_keyField");
	_scope($scope0_id, {
		input_keyField: input.keyField,
		items
	}, "__tests__/template.marko", 0, {
		input_keyField: ["input.keyField"],
		items: "1:6"
	}) || $fg__input_keyField && _patch_write($scope0_id, "PatchMarkedWrite:input_keyField", input.keyField, !_server_guard($scope0_reason, 0));
}, 1);
