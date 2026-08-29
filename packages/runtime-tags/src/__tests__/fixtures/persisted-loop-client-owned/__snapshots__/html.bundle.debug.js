// template.marko
const $template = "<main><ul></ul><button>+</button></main>";
const $walks = "D b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b ;<main><ul></ul><button>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let items = ["a"];
	_html("<main><ul>");
	if ($scope0_reason) _for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "#text/0", item)}: ${_text_resume($scope1_id, "#text/1", input.note, 2)}</li>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "4:6");
	}, 0, $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_note: input.note,
		items
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		items: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.note);
	_resume_branch($scope0_id);
}, 1, 0);
