// components/child.marko
const $template$2 = "<button><!>:<!></button>";
const $walks$2 = " D%c%l";
_shells({ "__tests__/components/child.marko": "__tests__/components/child.marko !__tests__/components/child.marko_0; D%c%;<button><!>:<!></button>" });
var child_default = _template_persisted("__tests__/components/child.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_owned, 0)}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/components/child.marko_0");
	_patch_value($scope0_id, "__tests__/components/child.marko0", count, 1);
	$scope0_reason && _scope($scope0_id, { count }, "__tests__/components/child.marko", 0, { count: "1:6" });
}, 0, 0);

// components/wrapper.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/components/child.marko", void 0, 1);
const $template$1 = "<section></section>";
const $walks$1 = " b";
_shells({
	"__tests__/components/wrapper.marko": "__tests__/components/wrapper.marko !; ;<section></section>",
	"__tests__/components/wrapper.marko_1*shell": "__tests__/components/wrapper.marko_1*shell __tests__/components/wrapper.marko_1_#text#0/init;b%/&;<!><!><!>"
});
var wrapper_default = _template_persisted("__tests__/components/wrapper.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/1", $childScope);
			$Child_withLoadAssets({ label: input.label });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/components/wrapper.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#section/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/components/wrapper.marko_1*shell"], $scope0_owned, 1);
	_html(`</section>${_el_resume($scope0_id, "#section/0", $sg__input_show)}`);
	$scope0_reason ? _scope($scope0_id, { input_label: input.label }, "__tests__/components/wrapper.marko", 0, { input_label: ["input.label"] }) : _owned_guard($scope0_owned, 2) && _client_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/components/wrapper.marko0", input.label);
}, 0, () => [$Child_withLoadAssets]);

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; ;<main></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let mounted = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (mounted) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			wrapper_default({
				show: input.show,
				label: input.label
			});
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, 1, 1, "</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_show: input.show,
		input_label: input.label
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_label: ["input.label"]
	}) : (_owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko0", input.show), _owned_guard($scope0_owned, 2) && _patch_value($scope0_id, "__tests__/template.marko1", input.label));
}, 1, () => [wrapper_default]);
