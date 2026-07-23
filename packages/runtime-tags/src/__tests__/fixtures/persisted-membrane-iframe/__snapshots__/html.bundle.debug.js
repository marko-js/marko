// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_embed = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let nav = 0;
	_html(`<button class=nav>nav <!>${_escape(nav)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => input.embed ? 0 : undefined, $scope0_id, "#text/2", $sg__input_embed, $sg__input_embed, $sg__input_embed, 0, 1, "__tests__/template.marko_0/update_if_#text/2", [() => {
		const $scope1_id = _scope_id();
		_html("<iframe src=about:blank title=embed class=embed></iframe>");
		$sg__input_embed && writeScope($scope1_id, {}, "__tests__/template.marko", "3:2");
	}], ["__tests__/template.marko_1_update"]);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { nav: _state_reason() && nav }, "__tests__/template.marko", 0, { nav: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": ["<iframe src=about:blank title=embed class=embed></iframe>", "b"],
	"__tests__/template.marko_1_content": ["<iframe src=about:blank title=embed class=embed></iframe>", "b"],
	"__tests__/template.marko_0_update": ["<button class=nav>nav <!></button><!><!>", " Db%l%c"],
	"__tests__/template.marko": ["<button class=nav>nav <!></button><!><!>", " Db%l%c"]
});
