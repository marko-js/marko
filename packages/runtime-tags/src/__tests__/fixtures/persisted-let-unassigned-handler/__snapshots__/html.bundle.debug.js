// template.marko
const $template = "<main><em> </em><button>set</button></main>";
const $walks = "E l l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_x_length#6;E l ;<main><em> </em><button>set</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let x = input.foo;
	let count = 0;
	_html(`<main><em>${_text_resume($scope0_id, "#text/0", count)}</em><button>set</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0_x_length#6");
	_patch_effect($scope0_id, "__tests__/template.marko_0_x_length#6", "x_length");
	$scope0_reason ? _scope($scope0_id, { x_length: x?.length }, "__tests__/template.marko", 0, { x_length: ["x.length", "1:6"] }) : _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "x_length", x?.length);
}, 1, 0);
