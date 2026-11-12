// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = 0;
	_script($scope0_id, "b0", 0);
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	const $m__closures = /* @__PURE__ */ new Set();
	const $known__closures = /* @__PURE__ */ new Set();
	const $dynamic__closures = /* @__PURE__ */ new Set();
	let n = 1;
	let m = 2;
	const $childScope = _peek_scope_id();
	let known = counter_default({});
	_var($scope0_id, "b", $childScope, "a0");
	const $inputshowCounter_scope = _peek_scope_id();
	let dynamic = _dynamic_tag($scope0_id, "c", input.show && counter_default, {});
	_var($scope0_id, "d", $inputshowCounter_scope, "a1");
	_html(`<button></button>${_el_mark($scope0_id, "e")}`);
	_try($scope0_id, "f", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter(0, 1), (v) => {
			const $scope2_id = _scope_id();
			let local = n;
			_html(`<p>${_text_mark($scope2_id, "a", 3)}</p><span>${_escape(local)}</span><b>${_text_mark($scope2_id, "c", known)} ${_text_mark($scope2_id, "d", dynamic, 2)}</b>`);
			_script($scope2_id, "a2");
			const $scope2_write = _scope($scope2_id, {});
			_subscribe($n__closures, $scope2_write, "a3");
			_subscribe($m__closures, $scope2_write, "a4");
			_subscribe($known__closures, $scope2_write, "a5");
			_subscribe($dynamic__closures, $scope2_write, "a6");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a7");
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		j: n,
		k: m,
		a: _existing_scope($childScope),
		n: $n__closures,
		o: $m__closures,
		p: $known__closures,
		q: $dynamic__closures
	});
}, 1);
