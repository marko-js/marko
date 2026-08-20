// template.marko
_shells({ a: "a !a0;Db Db%;<main><h1>Static title</h1><button>Count <!></button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>Static title</h1><button>Count <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && writeScope($scope0_id, { c: count });
	_resume_branch($scope0_id);
}, 1, 0);
