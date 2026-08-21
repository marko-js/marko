// template.marko
_shells({ a: "a !a0; b%;<button>t</button><!><!>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let on = true;
	_html(`<button>t</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<em>${_escape($global$1.brand)}${_el_resume($scope1_id, "a")}</em>`);
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_script($scope0_id, "a0");
	$scope0_reason ? writeScope($scope0_id, {
		c: on,
		d: $global$1?.brand
	}) : _patch_value($scope0_id, "a0", $global$1?.brand);
	_resume_branch($scope0_id);
}, 1, 1);
