// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_title = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $label__closures = new Set();
	let open = false;
	const label = "t:" + input.title;
	const show = input.title !== "hide";
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			if ($scope0_reason) _if(() => {
				if (show) {
					const $scope2_id = _scope_id();
					_html(`<p>${_text_resume($scope2_id, "#text/0", label)}</p>`);
					_subscribe(_source_if($scope0_reason, 0) && $label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:6"));
					return 0;
				}
			}, $scope1_id, "#text/0", $sg__input_title, $sg__input_title, $sg__input_title, 0, 1);
			_scope($scope1_id, {}, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		open,
		label,
		show,
		"ClosureScopes:label": $label__closures
	}, "__tests__/template.marko", 0, {
		open: "1:6",
		label: "2:8",
		show: "3:8"
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", label), _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko1", show));
	_resume_branch($scope0_id);
}, 1, 0);
