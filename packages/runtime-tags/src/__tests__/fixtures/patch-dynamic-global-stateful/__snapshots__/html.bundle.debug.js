// card.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/card.marko": "__tests__/card.marko;D ;<em> </em>" });
var card_default = _template("__tests__/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<em>${_text_resume($scope0_id, "#text/0", $global$1.brand, 1, 4, 0)}</em>`);
	_fill_global_subscribe("__tests__/card.marko_0_$global_brand#4", $scope0_id);
	_scope($scope0_id, {}, "__tests__/card.marko", 0);
});

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", on ? card_default : null, {});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { on }, "__tests__/template.marko", 0, { on: "2:6" });
}, 1);
