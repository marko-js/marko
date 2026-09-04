// template.marko
_shells({ a: "a !a1;E l ;<div><h1> </h1><button>+</button></div>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html(`<div><h1>${_text_resume($scope0_id, "a", $global$1.brand + " #0")}</h1><button>+</button>${_el_resume($scope0_id, "b")}</div>`);
	_global_subscribe("a0", $scope0_id);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, { c: count });
}, 1, 1);
