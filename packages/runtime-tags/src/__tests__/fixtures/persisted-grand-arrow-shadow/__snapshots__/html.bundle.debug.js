// tags/widget/index.marko
const $template$1 = "<p> </p><button>run</button>";
const $walks$1 = "D l b";
_shells({ "__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko !__tests__/tags/widget/index.marko_0;D l ;<p> </p><button>run</button>" });
var widget_default = _template_persisted("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const label = () => "t:" + input.title;
	_html(`<p>${_patch_text($scope0_id, "#text/0", label(), $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</p><button>run</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/widget/index.marko_0");
	$scope0_reason ? writeScope($scope0_id, { input_title: input.title }, "__tests__/tags/widget/index.marko", 0, { input_title: ["input.title"] }) : _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "input_title", input.title);
}, 0, 0);

// template.marko
const $template = "<main><!><button class=outer>+</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button class=outer>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			widget_default({ title: input.title });
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button class=outer>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_title: input.title,
		show
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		show: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
	_resume_branch($scope0_id);
}, 1, () => [widget_default]);
