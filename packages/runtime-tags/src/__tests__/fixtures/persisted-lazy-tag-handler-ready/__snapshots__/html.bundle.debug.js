// child.marko
const $template$1 = "<button>go</button>";
const $walks$1 = " b";
_shells({ "__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0_input_title#3_handler#4; ;<button>go</button>" });
var child_default = _template_persisted("__tests__/child.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const handler = _resume((event) => event.target.dataset.seen = input.title, "__tests__/child.marko_0/handler", $scope0_id);
	_html(`<button${_patch_attrs({
		title: input.title,
		onClick: handler
	}, "#button/0", $scope0_id, "button", void 0, $scope0_owned, 0)}>go</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0_input_title#3_handler#4");
	$scope0_reason ? _scope($scope0_id, {
		input_title: input.title,
		handler
	}, "__tests__/child.marko", 0, {
		input_title: ["input.title"],
		handler: "1:8",
		"EventAttributes:#button/0": ["...{ title: input.title, onClick: handler }", "2:12"]
	}) : _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "input_title", input.title);
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", [{
	type: "on-click",
	selector: "body"
}], 1);
const $template = "<main><!></main>";
const $walks = "D%/&l";
_shells({ "__tests__/template.marko": "__tests__/template.marko __tests__/template.marko_0_#text#0/init;D%/&;<main><!></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/1", $childScope);
	$Child_withLoadAssets({ title: input.title });
	_html("</main>");
	$scope0_reason && _scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [$Child_withLoadAssets]);
