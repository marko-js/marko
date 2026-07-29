// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_show = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<!doctype html><html lang=en><head><title>${_escape(_hole_value($scope0_id, "NtextContent:a", `Frame ${_to_text($global().search?.[0]?.q ?? "")}`, _persisted_reason()))}</title>${_el_resume($scope0_id, "a", _persisted_reason())}${_flush_head()}</head><body><header class=site>Store</header><button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_if(() => input.show ? 0 : void 0, $scope0_id, "d", 1 | _persisted_reason(), $sg__input_show, $sg__input_show, 0, 1, "a0", [() => {
		const $scope1_id = _scope_id();
		_html(`<button class=detail>detail <!>${_escape(count)}${_el_resume($scope1_id, "b")}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a2");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}], ["a3"], "a4");
	_trailers("</body></html>");
	_script($scope0_id, "a5");
	writeScope($scope0_id, { h: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a3": ["<button class=detail>detail <!></button>", " Db%l"],
	"a6": ["<button class=detail>detail <!></button>", " Db%l"],
	"a1": ["<!><html lang=en><head><title></title></head><body><header class=site>Store</header><button class=count>clicked <!></button><!></body></html>", "bE lDb Db%l%m"],
	"a": ["<!><html lang=en><head><title></title></head><body><header class=site>Store</header><button class=count>clicked <!></button><!></body></html>", "bE lDb Db%l%m"]
});
