// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1;D l ;<p> </p><button>c</button>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const label = input.title + "!";
			_owned_guard($scope0_owned, 2) && _patch_write($scope1_id, "label", label);
			_html(`<p>${_patch_text($scope1_id, "#text/0", label, void 0, $scope0_owned, 2)}</p><button>c</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {
				label,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "2:4", { label: "3:12" });
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 1);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, { input_title: input.title }, "__tests__/template.marko", 0, { input_title: ["input.title"] });
}, 1, 0);
