// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (count > 1) {
			const $scope1_id = _scope_id();
			_html(`<p>${_escape($global$1.brand)}${_el_resume($scope1_id, "#text/0")}</p>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		count,
		$global_brand: $global$1?.brand
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		$global_brand: ["$global.brand"]
	}) : _patch_value($scope0_id, "__tests__/template.marko0", $global$1?.brand);
	_resume_branch($scope0_id);
}, 1, 1);
