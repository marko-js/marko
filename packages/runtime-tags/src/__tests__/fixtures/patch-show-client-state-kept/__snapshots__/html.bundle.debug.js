// template.marko
const $template = "<button>toggle</button><p> </p><!><!>";
const $walks = " bD l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; bD l%;<button>toggle</button><p> </p><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_show_start(open, 0);
	_html(`<p>${_text_mark($scope0_id, "#text/1", input.label, 1, $scope0_reason, 0)}</p>`);
	_show_end($scope0_id, "#text/2", open, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
