// template.marko
_shells({ a: "a !a0;D b ;<main><section></section><button>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html("<main><section>");
	_attr_content("a", $scope0_id, null);
	_html(`</section>${_el_resume($scope0_id, "a")}<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && _scope($scope0_id, { c: open });
	_resume_branch($scope0_id);
}, 1, 0);
