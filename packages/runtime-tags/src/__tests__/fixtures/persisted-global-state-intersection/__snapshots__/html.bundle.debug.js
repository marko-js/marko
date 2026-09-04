// template.marko
const $template = "<div><h1> </h1><button>+</button></div>";
const $walks = "E l l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l ;<div><h1> </h1><button>+</button></div>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html(`<div><h1>${_text_resume($scope0_id, "#text/0", $global$1.brand + " #" + count)}</h1><button>+</button>${_el_resume($scope0_id, "#button/1")}</div>`);
	_global_subscribe("__tests__/template.marko_0_count#2_$global_brand#3/global", $scope0_id);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1, 1);
