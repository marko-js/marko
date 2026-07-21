// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_recs = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_recs__closures = /* @__PURE__ */ new Set();
	let qty = 1;
	_html(`<h1>${_escape(_hole_value($scope0_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</h1><input${_attr_input_value($scope0_id, "b", qty, _resume((_new_qty) => {
		qty = _new_qty;
	}, "a0", $scope0_id))} type=number>${_el_resume($scope0_id, "b")}<button>add <!>${_escape(qty)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}<section>`);
	_try($scope0_id, "e", _content_resume("a6", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(input.recs, 1), (recs) => {
			const $scope3_id = _scope_id();
			_html("<div>");
			_for_of(recs, (rec) => {
				const $scope4_id = _scope_id();
				_html(`<span>${_escape(_hole_value($scope4_id, "Qa", rec.name, _persisted_reason()))}${_el_resume($scope4_id, "a", $sg__input_recs)}</span>`);
				$sg__input_recs && writeScope($scope4_id, {});
			}, function(rec) {
				return rec.id;
			}, $scope3_id, "a", $sg__input_recs, $sg__input_recs, $sg__input_recs, "</div>", 1, "a3");
			$sg__input_recs && writeScope($scope3_id, {});
		}, $sg__input_recs, "a4");
		$sg__input_recs && _subscribe($input_recs__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a5", () => {
		_scope_reason();
		_scope_id();
		_html("loading…");
	}, $scope0_id) }) }, "a1", "a7");
	_html("</section>");
	_script($scope0_id, "a8");
	writeScope($scope0_id, {
		j: _state_reason() && qty,
		k: $sg__input_recs && $input_recs__closures
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a3": ["<span> </span>", "D l"],
	"a9": ["<span> </span>", "D l"],
	"a4": ["<div></div>", " b"],
	"a10": ["<div></div>", " b"],
	"a11": ["loading…", "b"],
	"a5": ["loading…", "b"],
	"a7": ["<!><!><!>", "b%c"],
	"a6": ["<!><!><!>", "b%c"],
	"a2": ["<h1> </h1><input type=number><button>add <!></button><section><!></section>", "D l b Db%lD%l"],
	"a": ["<h1> </h1><input type=number><button>add <!></button><section><!></section>", "D l b Db%lD%l"]
});
