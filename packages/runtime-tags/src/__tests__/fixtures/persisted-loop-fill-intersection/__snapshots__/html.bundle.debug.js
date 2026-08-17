// template.marko
const $template = "<main><ul></ul><button class=add>+</button><button class=inc>c</button></main>";
const $walks = "D b b l";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let items = ["a"];
	let count = 0;
	_html("<main><ul>");
	if ($scope0_reason) _for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(input.note + item + count)}${_el_resume($scope1_id, "#text/0")}</li>`);
		writeScope($scope1_id, { item }, "__tests__/template.marko", "5:6", { item: "5:10" });
	}, 0, $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button class=add>+</button>${_el_resume($scope0_id, "#button/1")}<button class=inc>c</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_note: input.note,
		items,
		count
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		items: "1:6",
		count: "2:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.note);
	_resume_branch($scope0_id);
}, 1, 0);
