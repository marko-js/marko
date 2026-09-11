// child.marko
const $template$1 = "<button> </button>";
const $walks$1 = "D l";
_shells({ "__tests__/child.marko": "__tests__/child.marko;D ;<button> </button>" });
var child_default = _template_persisted("__tests__/child.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<button>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_owned, 0)}</button>`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/child.marko", 0);
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", void 0, 1);
const $template = "<button class=n> </button><main><!></main>";
const $walks = " D lD%l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D lD%;<button class=n> </button><main><!></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}<main>`);
	const $tag = input.show ? $Child_withLoadAssets : null;
	const $input2 = { label: input.label };
	_dynamic_tag($scope0_id, "#text/2", $tag, $input2, 0, 0, _source_guard($scope0_reason, 0), _patch_dynamic_tag($scope0_id, "#text/2", $tag, $input2, 0, 0, $scope0_owned, 0));
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		input_show: _source_if($scope0_reason, 2) && input.show,
		input_label: _source_if($scope0_reason, 1) && input.label,
		n
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_label: ["input.label"],
		n: "3:6"
	});
}, 1, 1);
