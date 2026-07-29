// data.js
const getTint = typeof window === "undefined" ? () => "teal" : undefined;

// v:template.marko.css
var v_template_marko_default = "\n    .tinted {\n      color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19update-19construct-19style-1btemplate-1amarko_0);\n      padding: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19update-19construct-19style-1btemplate-1amarko_1);\n    }\n  ";

// tags/layout.marko
var layout_default = _template("__tests__/tags/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section class=shell>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content | _persisted_reason(), "__tests__/tags/layout.marko_0/update_dynamic_#text/0");
	_html("</section>");
	$sg__input_content && writeScope($scope0_id, {}, "__tests__/tags/layout.marko", 0);
});
_renderer_shells({
	"__tests__/tags/layout.marko_0_update": ["<section class=shell><!></section>", "D%l"],
	"__tests__/tags/layout.marko": ["<section class=shell><!></section>", "D%l"]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Panel = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let n = 0;
		let pad = "4px";
		_html(`<button class=tap>tap <!>${_escape(n)}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}<button class=grow>grow</button>${_el_resume($scope1_id, "#button/2")}${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19update-19construct-19style-1btemplate-1amarko_0:${_escape_style_value(_hole_value($scope1_id, "PatchAttr:style0:#style/3", getTint?.(), _persisted_reason()))};--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19update-19construct-19style-1btemplate-1amarko_1:${_escape_style_value(pad)};`)}${_el_resume($scope1_id, "#style/3")}<div class=tinted>styled</div>`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {
			n: _seed_fill(_state_reason() && n),
			pad: _seed_fill(_state_reason() && pad)
		}, "__tests__/template.marko", "6:2", {
			n: "7:8",
			pad: "8:8"
		});
		_resume_branch($scope1_id);
	}) };
	const About = { content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("<p class=about>about</p>");
	}) };
	_set_serialize_reason(_persisted_reason());
	const $childScope = _peek_scope_id();
	layout_default({ content: $global().view === "panel" ? Panel : About });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _seed_fill(_state_reason() && count),
		"#childScope/2": _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": ["<button class=tap>tap <!></button><button class=grow>grow</button><style></style><div class=tinted>styled</div>", " Db%l b b"],
	"__tests__/template.marko_1_content": ["<button class=tap>tap <!></button><button class=grow>grow</button><style></style><div class=tinted>styled</div>", " Db%l b b"],
	"__tests__/template.marko_0_update": [[
		"<button class=count>clicked <!></button>",
		["__tests__/tags/layout.marko"],
		"<!>"
	], [
		" Db%l/",
		["__tests__/tags/layout.marko"],
		"&%b"
	]],
	"__tests__/template.marko": [[
		"<button class=count>clicked <!></button>",
		["__tests__/tags/layout.marko"],
		"<!>"
	], [
		" Db%l/",
		["__tests__/tags/layout.marko"],
		"&%b"
	]]
});
