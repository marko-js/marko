// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", $global().title, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _persisted_reason())}</h1><a${_attr("href", _hole_value($scope0_id, "PatchAttr:href:#a/1", `/items/${$global().params.id}`, _persisted_reason()))}>link</a>${_el_resume($scope0_id, "#a/1", _persisted_reason())}<button>${_escape(count)}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}<section${_attr_class(_hole_value($scope0_id, "PatchAttr:class:#section/4", count && $global().params.tag && "hot", _state_reason()))}>`);
	_if(() => $global().params.sale ? 0 : undefined, $scope0_id, "#section/4", _persisted_reason(), 1 | _persisted_reason(), _persisted_reason(), "</section>", void 0, "__tests__/template.marko_0/update_if_#section/4", [() => {
		const $scope1_id = _scope_id();
		_html(`<em>Sale ${_sep(_persisted_reason())}${_escape(_hole_value($scope1_id, "PatchHole:#text/0", $global().params.sale, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", _persisted_reason())}% off</em><button class=buy>buy</button>${_el_resume($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4");
	}], ["__tests__/template.marko_1_update"]);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": ["<em>Sale <!>% off</em><button class=buy>buy</button>", "Db%l b"],
	"__tests__/template.marko_1_content": ["<em>Sale <!>% off</em><button class=buy>buy</button>", "Db%l b"],
	"__tests__/template.marko_0_update": ["<h1> </h1><a>link</a><button> </button><section></section>", "D l b D l b"],
	"__tests__/template.marko": ["<h1> </h1><a>link</a><button> </button><section></section>", "D l b D l b"]
});
