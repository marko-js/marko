// tags/address-view.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/address-view.marko": "__tests__/tags/address-view.marko;D ;<p> </p>" });
var address_view_default = _template("__tests__/tags/address-view.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.address.city, void 0, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/address-view.marko", 0);
});

// template.marko
const $template = "<main><!><output> </output></main>";
const $walks = "D%bD m";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content !__tests__/template.marko_1,",
	"__tests__/template.marko": "__tests__/template.marko !;D%bD ;<main><!><output> </output></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let picked = "";
	const Card = { content: _content_resume("__tests__/template.marko_1*content", ({ user }) => {
		const $scope1_id = _scope_id();
		_patch_write($scope1_id, "PatchWrite:user_name", user?.name);
		const $scope1_reason = _scope_reason();
		_html(`<h4>${_patch_text($scope1_id, "#text/0", user.name)}</h4>`);
		const $childScope = _patch_child($scope1_id, "#childScope/1");
		address_view_default({ address: user.address });
		_html(`<button class=pick>pick</button>${_el_resume($scope1_id, "#button/2")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			user_name: user?.name,
			_: _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope)
		}, "__tests__/template.marko", "2:2", { user_name: ["user.name", "2:16"] });
	}, $scope0_id) };
	const Other = { content: _content_resume("__tests__/template.marko_2*content", ({ user }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<h5>${_patch_text($scope2_id, "#text/0", user.name)}</h5>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "7:2");
	}, $scope0_id) };
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.useA ? Card : Other, { user: input.user }, 0, 0, _write_guard($scope0_reason, 0), void 0, 1, $scope0_reason, 0);
	_html(`<output>${_text_resume($scope0_id, "#text/1", picked)}</output></main>`);
	_patch_write($scope0_id, "PatchWrite:input_useA", input.useA, 1);
	_patch_write($scope0_id, "PatchWrite:input_user", input.user, 1);
	_patch_write($scope0_id, "PatchWrite:Card", Card, 1);
	_patch_write($scope0_id, "PatchWrite:Other", Other, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", picked, 1);
	$scope0_page && _scope($scope0_id, {
		input_useA: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.useA,
		input_user: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.user,
		Card: _unfilled_if($scope0_reason, 0) && Card,
		Other: _unfilled_if($scope0_reason, 0) && Other
	}, "__tests__/template.marko", 0, {
		input_useA: ["input.useA"],
		input_user: ["input.user"],
		Card: "2:9",
		Other: "7:9"
	});
}, 1);
