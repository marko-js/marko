// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_recs = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_recs__closures = new Set();
	let qty = 1;
	_html(`<h1>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</h1><input${_attr_input_value($scope0_id, "#input/1", qty, _resume((_new_qty) => {
		qty = _new_qty;
	}, "__tests__/template.marko_0/valueChange", $scope0_id))} type=number>${_el_resume($scope0_id, "#input/1")}<button>add <!>${_escape(qty)}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}<section>`);
	_try($scope0_id, "#text/4", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(input.recs, 1), (recs) => {
			const $scope3_id = _scope_id();
			_html("<div>");
			_for_of(recs, (rec) => {
				const $scope4_id = _scope_id();
				_html(`<span>${_escape(_hole_value($scope4_id, "PatchHole:#text/0", rec.name, _persisted_reason()))}${_el_resume($scope4_id, "#text/0", $sg__input_recs)}</span>`);
				$sg__input_recs && writeScope($scope4_id, {}, "__tests__/template.marko", "12:10");
			}, function(rec) {
				return rec.id;
			}, $scope3_id, "#div/0", $sg__input_recs, $sg__input_recs, $sg__input_recs, "</div>", 1, "__tests__/template.marko_4_update");
			$sg__input_recs && writeScope($scope3_id, {}, "__tests__/template.marko", "10:6");
		}, $sg__input_recs, "__tests__/template.marko_3_update");
		$sg__input_recs && _subscribe($input_recs__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:4"));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading…");
	}, $scope0_id) }) }, "__tests__/template.marko_0/update_boundary_#text/4", "__tests__/template.marko_1_update");
	_html("</section>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		qty: _state_reason() && qty,
		"ClosureScopes:input_recs": $sg__input_recs && $input_recs__closures
	}, "__tests__/template.marko", 0, { qty: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_4_update": ["<span> </span>", "D l"],
	"__tests__/template.marko_4_content": ["<span> </span>", "D l"],
	"__tests__/template.marko_3_update": ["<div></div>", " b"],
	"__tests__/template.marko_3_content": ["<div></div>", " b"],
	"__tests__/template.marko_2_update": ["loading…", "b"],
	"__tests__/template.marko_2_content": ["loading…", "b"],
	"__tests__/template.marko_1_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_1_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_0_update": ["<h1> </h1><input type=number><button>add <!></button><section><!></section>", "D l b Db%lD%l"],
	"__tests__/template.marko": ["<h1> </h1><input type=number><button>add <!></button><section><!></section>", "D l b Db%lD%l"]
});
