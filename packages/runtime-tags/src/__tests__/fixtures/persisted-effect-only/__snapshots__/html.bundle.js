// template.marko
_shells({ a: "a !a0;Db Db%;<main><h1>Static title</h1><button>Count <!></button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>Static title</h1><button>Count ${_text_resume($scope0_id, "b", count, 2)}</button>${_el_resume($scope0_id, "a")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && _scope($scope0_id, { c: count });
}, 1, 0);
