// child.marko
const $template$1 = "<button><!>:<!></button>";
const $walks$1 = " D%c%l";
_shells({ "__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0; D%c%;<button><!>:<!></button>" });
var child_default = _template_persisted("__tests__/child.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_owned, 0)}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	_patch_value($scope0_id, "__tests__/child.marko0", count, 1);
	$scope0_reason && _scope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "1:6" });
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", void 0, 1);
const $template = "<button class=toggle>toggle</button><main></main>";
const $walks = " b b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b ;<button class=toggle>toggle</button><main></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let open = false;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}<main>`);
	if ($scope0_reason) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			if ($scope0_reason) _if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_set_serialize_reason(1);
					const $childScope = _peek_scope_id();
					$Child_withLoadAssets({ label: input.label });
					_subscribe(_source_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
						_: _scope_with_id($scope1_id),
						"#childScope/1": _existing_scope($childScope)
					}, "__tests__/template.marko", "7:6"));
					return 0;
				}
			}, $scope1_id, "#text/0", $sg__input_show, $sg__input_show, $sg__input_show);
			_scope($scope1_id, {}, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#main/1", 1, 1, 1, "</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_show: input.show,
		input_label: input.label,
		open,
		"ClosureScopes:input_label": $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_label: ["input.label"],
		open: "3:6"
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.show), _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko1", input.label));
}, 1, () => [$Child_withLoadAssets]);
