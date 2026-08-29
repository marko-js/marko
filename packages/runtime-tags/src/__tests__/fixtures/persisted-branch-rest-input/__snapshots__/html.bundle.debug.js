// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const { label, ...rest } = input;
	let on = true;
	_html(`<button>${_patch_text($scope0_id, "#text/1", label, void 0, $scope0_owned, 0)}</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_reason) _if(() => {
		if (rest.show && on) {
			const $scope1_id = _scope_id();
			_html("<span>shown</span>");
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_show: input.show,
		on
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		on: "2:6"
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko0", input.show);
	_resume_branch($scope0_id);
}, 1, 0);
