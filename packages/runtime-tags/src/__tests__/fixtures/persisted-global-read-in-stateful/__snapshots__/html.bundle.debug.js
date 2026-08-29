// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>t</button><!><!>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let on = true;
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_reason) _if(() => {
		if (on) {
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "#text/0", $global$1.brand)}</em>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		on,
		$global_brand: $global$1?.brand
	}, "__tests__/template.marko", 0, {
		on: "1:6",
		$global_brand: ["$global.brand"]
	}) : _patch_value($scope0_id, "__tests__/template.marko0", $global$1?.brand);
	_resume_branch($scope0_id);
}, 1, 1);
