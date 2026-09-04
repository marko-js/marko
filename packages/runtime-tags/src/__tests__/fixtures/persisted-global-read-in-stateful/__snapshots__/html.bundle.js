// template.marko
_shells({ a: "a !a1; b%;<button>t</button><!><!>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let on = true;
	_html(`<button>t</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "a", $global$1.brand)}</em>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_global_subscribe("a0", $scope0_id);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, { c: on });
}, 1, 1);
