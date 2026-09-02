// template.marko
const $template = "<button>inc</button><!><!>";
const $walks = " b%c";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>inc</button><!><!>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const greeting = $global$1.prefix + ":" + input.name;
	let count = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_reason) _if(() => {
		if (count < 2) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "#text/0", greeting)} ${_text_resume($scope1_id, "#text/1", count, 2)}</span>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		greeting,
		count
	}, "__tests__/template.marko", 0, {
		greeting: "1:8",
		count: "2:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", greeting);
	_resume_branch($scope0_id);
}, 1, 1);
