// child.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
_shells({ "__tests__/child.marko": "__tests__/child.marko;D ;<span> </span>" });
var child_default = _template_persisted("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</span>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/child.marko", 0);
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", void 0, 1);
const $template = "<button class=n> </button><main></main>";
const $walks = " D l b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l ;<button class=n> </button><main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_input_label#6/init __tests__/template.marko_1_n#7/init __tests__/template.marko_1_#text#0/init;b%/&;<!><!><!>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}<main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(6);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/1", $childScope);
			$Child_withLoadAssets({ label: `${input.label}${n}` });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#main/2", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/2", $sg__input_show)}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		n
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "3:6"
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "__tests__/template.marko0", input.label);
}, 1, () => [$Child_withLoadAssets]);
