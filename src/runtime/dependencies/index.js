var path = require('path');
var defaultResolveFrom = require('resolve-from');
var env = process.env.NODE_ENV;
var production = !env || env !== 'development';

function getRootDeps(template, context) {
    if (production && template.___depsArray) {
        return template.___depsArray;
    }

    attachDepsAndComponentsToTemplate(template, context);

    var deps = template.___depsArray = Object.values(template.___deps);
    var initModule = getInitModule(template.path, template.___components);

    if (initModule) deps.push(initModule);

    return deps;
}

function attachDepsAndComponentsToTemplate(target, context) {
    var template;

    if (!target.meta && target.template) {
        template = target.template;
    } else {
        template = target;
    }

    if (typeof template.createOut !== 'function') return;
    if (production && target.___deps) return;

    var deps = target.___deps = {};
    var components = target.___components = {};

    if (!template.meta) {
        console.error('Metadata not set for template at ', template.path);
        return;
    }

    var meta = template.meta;
    var root = path.dirname(template.path);

    if (meta.deps) {
        meta.deps.forEach(dep => {
            dep = resolveDep(dep, root, context);
            deps[dep.virtualPath || dep.path] = dep;
        });
    }

    if (meta.id && meta.component) {
        var resolveFrom = (context && context.resolveFrom) || defaultResolveFrom;
        components[meta.id] = resolveFrom(root, meta.component);
    }

    if (meta.tags) {
        meta.tags.forEach(tagPath => {
            var resolveFrom = context.resolveFrom || defaultResolveFrom;
            var tag = resolveFrom(root, tagPath);
            var ext = path.extname(tag);
            var req = context.require || require;

            try {
                tag = req.resolve(tag.slice(0, 0 - ext.length) + '.js');
            } catch(e) {}

            tag = req(tag);

            attachDepsAndComponentsToTemplate(tag, context);

            if (tag.___deps) Object.assign(deps, tag.___deps);
            if (tag.___components) Object.assign(components, tag.___components);
        });
    }
}

function getInitModule(path, components) {
    let module = null;

    if (components) {
        let componentIds = Object.keys(components);

        if (componentIds.length) {
            let virtualPath = path + '.init.js';
            let code = `
                var components = require('marko/components');
                ${componentIds.map(id => `
                    components.register('${id}', require('${components[id]}'));
                `).join('\n')}
                components.init();
            `;

            module = {
                type: 'require',
                run: true,
                virtualModule: {
                    path: virtualPath,
                    clientPath: virtualPath,
                    read: function(_, callback) {
                        // TODO: Check if read can just return string in lasso 2
                        if (callback) {
                            callback(null, code);
                        } else {
                            return code;
                        }
                    },
                    getDefaultBundleName: function(_, __) {
                        return virtualPath;
                    }
                }
            };
        }
    }

    return module;
}

function resolveDep(dep, root, context) {
    if (typeof dep === 'string') {
        dep = parseDependencyString(dep);
    }

    if (dep.path) {
        var resolveFrom = (context && context.resolveFrom) || defaultResolveFrom;
        dep.path = resolveFrom(root, dep.path);

        if(dep.path && !dep.type) {
            dep.type = dep.path.slice(dep.path.lastIndexOf('.')+1);
        }
    }

    if (dep.virtualPath) {
        dep.virtualPath = path.resolve(root, dep.virtualPath);
    }

    return dep;
}

function parseDependencyString(string) {
    var match = /^(?:([\w-]+)(?:\:\s*|\s+))?(.*?(?:\.(\w+))?)$/.exec(string);
    return {
        type: match[1] || match[3],
        path: match[2]
    };
}

function patch(Template) {
    Template.prototype.getDependencies = function(context) {
        context = context || {};

        return getRootDeps(this, context);
    };
}

exports.getDeps = getRootDeps;
exports.resolveDep = resolveDep;
exports.patch = patch;