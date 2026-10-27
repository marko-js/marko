// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_list = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let items = ["a"];
	_html("<main>");
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_for_of(input.list, (s) => {
			const $scope2_id = _scope_id();
			_html(`<li>${_text_resume($scope2_id, "#text/0", item)}${_text_resume($scope2_id, "#text/1", s, $wg__input_list * 2)}</li>`);
			_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:6");
		}, 0, $scope1_id, "#text/0", 1, $wg__input_list, 0, 0, 1);
		_scope($scope1_id, { item: _write_if($scope0_reason, 0) && item }, "__tests__/template.marko", "3:4", { item: "3:8" });
	}, 0, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_list: input.list,
		items
	}, "__tests__/template.marko", 0, {
		input_list: ["input.list"],
		items: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.list, !_server_guard($scope0_reason, 0));
}, 1);
