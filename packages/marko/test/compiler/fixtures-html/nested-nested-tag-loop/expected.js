"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/nested-nested-tag-loop/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_loadNestedTag = require("marko/src/runtime/helpers/load-nested-tag"),
    my_list_body_item_nested_tag = marko_loadNestedTag("item", 1),
    marko_mergeNestedTagsHelper = require("marko/src/runtime/helpers/merge-nested-tags"),
    my_list_body_nested_tag = marko_loadNestedTag("body"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    my_list_tag = marko_loadTag(require("./tags/my-list/renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  const items = ["a", "b", "c"]

  my_list_tag(marko_mergeNestedTagsHelper({
      renderBody: function(out, $nestedTagmy_list$0) {
        my_list_body_nested_tag(marko_mergeNestedTagsHelper({
            renderBody: function(out, $nestedTagmy_list_body$0) {
              var $for$0 = 0;

              marko_forOf(items, function(content) {
                var $keyScope$0 = "[" + (($for$0++) + "]");

                my_list_body_item_nested_tag({
                    content: content
                  }, $nestedTagmy_list_body$0);
              });
            }
          }), $nestedTagmy_list$0);
      }
    }), out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/nested-nested-tag-loop/template.marko",
    tags: [
      "./tags/my-list/renderer"
    ]
  };
