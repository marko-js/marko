// data.js
function getProduct(id) {
	if (typeof window !== "undefined") throw new Error("getProduct is server-only");
	return {
		id,
		title: `Product ${id}`,
		price: id * 100 + .5,
		image: `/images/${id}.svg`
	};
}
function getRecommendations(id) {
	if (typeof window !== "undefined") throw new Error("getRecommendations is server-only");
	return resolveAfter([{
		id: id + 1,
		title: `Product ${id + 1}`
	}, {
		id: id + 2,
		title: `Product ${id + 2}`
	}], 1);
}
const getProducts = typeof window === "undefined" ? (ids) => ids.map((id) => ({
	id,
	title: `Product ${id}`,
	price: id * 100 + .5
})) : void 0;
const getTags = typeof window === "undefined" ? () => [
	"all",
	"dev",
	"news"
] : void 0;

// tags/shared-list.marko
const subsByKey = {};
var shared_list_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = $global().data[input.name];
	_script($scope0_id, "d1");
	writeScope($scope0_id, {
		c: input.name,
		U: _state_reason() && (_resume(function(next) {
			$global().data[input.name] = next;
			subsByKey[input.name]?.forEach((cb) => cb());
		}, "d0", $scope0_id) || void 0)
	});
	_resume_branch($scope0_id);
	return $return;
});

// tags/actions.marko
var actions_default = _template("b", (input) => {
	const $sg__input_id = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const productId = input.id;
	const $childScope = _peek_scope_id();
	let list = shared_list_default({ name: "cart" });
	_var($scope0_id, "b", $childScope, "b0");
	let added = 0;
	_html(`<button class=add>added <!>${_escape(added)}${_el_resume($scope0_id, "d")} of ${_sep($sg__input_id)}${_escape(productId)}${_el_resume($scope0_id, "e", $sg__input_id)} (<!>${_escape(list.length)}${_el_resume($scope0_id, "f")} in cart)</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b1");
	writeScope($scope0_id, {
		j: productId,
		k: _state_reason() && list,
		m: _state_reason() && added,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
});

// tags/layout.marko
var layout_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<aside><button class=toggle>expand${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}</aside><section>`);
	_dynamic_tag($scope0_id, "c", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason(), "c1");
	_html("</section>");
	_script($scope0_id, "c0");
	writeScope($scope0_id, { g: _state_reason() && open });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Cart = { content: _content("a4", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $childScope = _peek_scope_id();
		let list = shared_list_default({ name: "cart" });
		_var($scope1_id, "b", $childScope, "a2");
		let products = getProducts?.(list) || [];
		const entries = list.map((id) => ({
			product: products.find((p) => p.id === id),
			id
		}));
		_html("<nav class=tags>");
		_for_of(getTags?.(), (tag) => {
			const $scope3_id = _scope_id();
			const label = tag.toUpperCase();
			_html(`<b${_attr_class(_hole_value($scope3_id, "Nclass:a", tag === $global().tag && "on", _persisted_reason()))}${_attr("data-tag", _hole_value($scope3_id, "Ndata-tag:a", tag, _persisted_reason()))}>${_escape(_hole_value($scope3_id, "Qb", label, _persisted_reason()))}${_el_resume($scope3_id, "b", _persisted_reason())}</b>${_el_resume($scope3_id, "a", _persisted_reason())}`);
			_persisted_reason() && writeScope($scope3_id, {});
		}, 0, $scope1_id, "c", _persisted_reason(), _persisted_reason(), 0, "</nav>", 1);
		_if(() => {
			if (!entries.length) {
				const $scope4_id = _scope_id();
				_html("<p class=cart>cart is empty</p>");
				writeScope($scope4_id, {});
				return 0;
			} else {
				const $scope2_id = _scope_id();
				_html("<ul class=cart>");
				_for_of(entries, (entry) => {
					const $scope5_id = _scope_id();
					_html(`<li>${_escape(entry.product.title)}${_el_resume($scope5_id, "a")} $<!>${_escape(entry.product.price)}${_el_resume($scope5_id, "b")}</li>`);
					writeScope($scope5_id, {});
				}, function(entry) {
					return entry.id;
				}, $scope2_id, "a", 1, 1, 1, "</ul>", 1);
				_html(`<p class=total>total $<!>${_escape(entries.reduce((sum, e) => sum + e.product.price, 0))}${_el_resume($scope2_id, "b")}</p>`);
				writeScope($scope2_id, {});
				return 1;
			}
		}, $scope1_id, "d");
		writeScope($scope1_id, {
			f: _state_reason() && products,
			h: _state_reason() && entries,
			a: _existing_scope($childScope)
		});
		_resume_branch($scope1_id);
	}) };
	const Item = { content: _content("a6", () => {
		const $scope6_id = _scope_id();
		const $Item_content__product_id__closures = /* @__PURE__ */ new Set();
		_scope_reason();
		const product = $global().productId && getProduct($global().productId);
		_if(() => !product ? 0 : 1, $scope6_id, "a", _persisted_reason(), _persisted_reason(), _persisted_reason(), void 0, void 0, "a5", [() => {
			const $scope9_id = _scope_id();
			_html("<h2>not found</h2>");
			_persisted_reason() && writeScope($scope9_id, {});
		}, () => {
			const $scope7_id = _scope_id();
			_html(`<img${_attr("src", _hole_value($scope7_id, "Nsrc:a", product.image, _persisted_reason()))}${_attr("alt", _hole_value($scope7_id, "Nalt:a", product.title, _persisted_reason()))} class=thumb>${_el_resume($scope7_id, "a", _persisted_reason())}<h2 class=title>${_escape(_hole_value($scope7_id, "Qb", product.title, _persisted_reason()))}${_el_resume($scope7_id, "b", _persisted_reason())}</h2><div class=price>$${_sep(_persisted_reason())}${_escape(_hole_value($scope7_id, "Qc", product.price.toFixed(2), _persisted_reason()))}${_el_resume($scope7_id, "c", _persisted_reason())}</div>`);
			const $childScope2 = _peek_scope_id();
			_set_serialize_reason(_persisted_reason());
			actions_default({ id: product.id });
			_try($scope7_id, "e", _content_resume("a8", () => {
				const $scope8_id = _scope_id();
				_scope_reason();
				_await($scope8_id, "a", getRecommendations(product.id), (recs) => {
					const $scope11_id = _scope_id();
					_html("<ul class=recs>");
					_for_of(recs, (rec) => {
						const $scope12_id = _scope_id();
						_html(`<li>${_escape(_hole_value($scope12_id, "Qa", rec.title, _persisted_reason()))}${_el_resume($scope12_id, "a", _persisted_reason())}</li>`);
						_persisted_reason() && writeScope($scope12_id, {});
					}, function(rec) {
						return rec.id;
					}, $scope11_id, "a", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</ul>", 1, "a10");
					_persisted_reason() && writeScope($scope11_id, {});
				}, _persisted_reason());
				_persisted_reason() && _subscribe($Item_content__product_id__closures, writeScope($scope8_id, { _: _scope_with_id($scope7_id) }));
				_resume_branch($scope8_id);
			}, $scope7_id), { placeholder: attrTag({ content: _content_resume("a9", () => {
				_scope_reason();
				_scope_id();
				_html("loading recommendations…");
			}, $scope7_id) }) }, "a7");
			_persisted_reason() && writeScope($scope7_id, {
				_: _scope_with_id($scope6_id),
				d: _existing_scope($childScope2)
			});
		}]);
		_persisted_reason() && writeScope($scope6_id, { j: $Item_content__product_id__closures });
	}) };
	const $childScope3 = _peek_scope_id();
	_set_serialize_reason(_persisted_reason());
	layout_default({ content: $global().view === "item" ? Item : Cart });
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d: _state_reason() && count,
		c: _persisted_reason() && _existing_scope($childScope3)
	});
	_resume_branch($scope0_id);
}, 1);
