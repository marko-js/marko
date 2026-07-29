// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0), $si__input_show = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Panel = { content: _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let hits = 0;
		_html(`<button class=hit>hits <!>${_escape(hits)}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, { hits: _seed_fill(_state_reason() && hits) }, "__tests__/template.marko", "1:2", { hits: "2:8" });
		_resume_branch($scope1_id);
	}, $scope0_id) };
	const Badge = { content: _content_resume("__tests__/template.marko_3_content", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html("<span class=badge>badge</span>");
	}, $scope0_id) };
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => input.show ? 0 : undefined, $scope0_id, "#text/2", $sg__input_show, $sg__input_show, $sg__input_show, void 0, void 0, "__tests__/template.marko_0/update_if_#text/2", [() => {
		const $scope2_id = _scope_id();
		let n = 0;
		_html(`<button class=tap>tap <!>${_escape(n)}${_el_resume($scope2_id, "#text/1")}</button>${_el_resume($scope2_id, "#button/0")}<div class=host>`);
		_attr_content("#div/2", $scope2_id, Panel);
		_html(`</div>${_el_resume($scope2_id, "#div/2")}<div class=aside>`);
		_attr_content("#div/3", $scope2_id, Badge);
		_html(`</div>${_el_resume($scope2_id, "#div/3")}`);
		_script($scope2_id, "__tests__/template.marko_2");
		writeScope($scope2_id, { n: _seed_fill(_state_reason() && n) }, "__tests__/template.marko", "11:2", { n: "12:8" });
	}], ["__tests__/template.marko_2_update"], "__tests__/template.marko_r0");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		Panel: ($si__input_show || _patch_reason()) && Panel,
		Badge: ($si__input_show || _patch_reason()) && Badge,
		count: _seed_fill(_state_reason() && count)
	}, "__tests__/template.marko", 0, {
		Panel: "1:9",
		Badge: "5:9",
		count: "9:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_2_update": ["<button class=tap>tap <!></button><div class=host></div><div class=aside></div>", " Db%l b b"],
	"__tests__/template.marko_2_content": ["<button class=tap>tap <!></button><div class=host></div><div class=aside></div>", " Db%l b b"],
	"__tests__/template.marko_1_update": ["<button class=hit>hits <!></button>", " Db%l"],
	"__tests__/template.marko_1_content": ["<button class=hit>hits <!></button>", " Db%l"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
