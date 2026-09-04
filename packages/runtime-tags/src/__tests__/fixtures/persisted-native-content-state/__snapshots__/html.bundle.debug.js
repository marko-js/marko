// template.marko
const $template = "<main><section></section><button>+</button></main>";
const $walks = "D b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b ;<main><section></section><button>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html("<main><section>");
	_attr_content("#section/0", $scope0_id, open ? box_a_default : null);
	_html(`</section>${_el_resume($scope0_id, "#section/0")}<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "2:6" });
}, 1, 0);
