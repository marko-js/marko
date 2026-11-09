// components/tags-if.marko
var import_html = require_html();
var tags_if_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_attr_content("a", $scope1_id, input.content, $wg__input_content);
			_html(`</div>${_el_mark($scope1_id, "a", $wg__input_content)}`);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.content });
});

// components/class-thing.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "b";
const _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button class=thing>thing ${(0, import_escape_xml.x)(state.clicks)}</button>`);
}, { t: _marko_componentType$1 }, {
	onCreate() {
		this.state = { clicks: 0 };
	},
	inc() {
		this.state.clicks++;
	}
});

// template.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
const _marko_componentType = "a";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class>show</button>");
	(0, import_dynamic_tag.default)(out, tags_if_default, () => ({ "show": state.show }), (out) => {
		out.w("Content");
	}, null, null, _componentDef, "1");
	(0, import_render_tag.default)(_marko_template$1, {}, out, _componentDef, "2");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "3");
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { show: false };
	},
	show() {
		this.state.show = true;
	}
});
