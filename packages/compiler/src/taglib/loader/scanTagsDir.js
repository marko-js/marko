"use strict";

const nodePath = require("path");
const taglibConfig = require("../config");
const jsonFileReader = require("./json-file-reader");
const loaders = require("./loaders");
const types = require("./types");

const tagFileTypes = [
  "template",
  "renderer",
  "migrate",
  "transform",
  "transformer",
  "code-generator",
  "translate",
  "node-factory",
  "parse",
];

const searchFiles = [
  { name: "index.marko", type: "template" },
  { name: "renderer", type: "renderer" },
  { name: "index", type: "renderer" },
  { name: "template.marko", type: "template" },
  { name: "template.html", type: "template" },
  { name: "migrate", type: "migrate" },
  { name: "code-generator", type: "translate" },
  { name: "translate", type: "translate" },
  { name: "node-factory", type: "parse" },
  { name: "parse", type: "parse" },
  { name: "transformer", type: "transform" },
  { name: "transform", type: "transform" },
];

function createDefaultTagDef() {
  return {
    attributes: {
      "*": {
        type: "string",
        targetProperty: null,
        preserveName: false,
      },
    },
  };
}

function getFileMap(dirname) {
  let fileMap = {};
  let files = taglibConfig.fs.readdirSync(dirname);

  files.forEach((file) => {
    let extName = nodePath.extname(file);
    let baseName = file.slice(0, -1 * extName.length);
    let fullPath = nodePath.join(dirname, file);
    fileMap[baseName] = fileMap[baseName] || {};
    fileMap[baseName][extName] = fullPath;
    fileMap[file] = fileMap[file] || {};
    fileMap[file].__path = fullPath;
  });

  return fileMap;
}

function getPath(filename, fileMap) {
  let file = fileMap[filename];

  if (!file) return;
  if (file.__path) return file.__path;
  if (file.js) return file[".js"];

  for (let key in file) {
    return file[key];
  }
}

function findAndSetFile(tagDef, tagDirname) {
  try {
    if (!taglibConfig.fs.statSync(tagDirname).isDirectory()) {
      return;
    }
  } catch (_) {
    return;
  }

  let tagName = nodePath.basename(tagDirname);
  let fileMap = getFileMap(tagDirname);

  for (let i = 0; i < searchFiles.length; i++) {
    let name = searchFiles[i].name;
    let type = searchFiles[i].type;
    let repeatedName = tagName + "." + name.replace("index.", "");
    let path = getPath(name, fileMap) || getPath(repeatedName, fileMap);

    if (path) {
      tagDef[type] = path;
      return true;
    }
  }
}

function hasFile(tagDef) {
  for (let i = 0; i < tagFileTypes.length; i++) {
    if (tagDef[tagFileTypes[i]]) return true;
  }
  return false;
}

/**
 * @param {String} tagsConfigPath path to tag definition file
 * @param {String} tagsConfigDirname path to directory of tags config file (should be path.dirname(tagsConfigPath))
 * @param {String|Object} dir the path to directory to scan
 * @param {String} taglib the taglib that is being loaded
 */
module.exports = function scanTagsDir(
  tagsConfigPath,
  tagsConfigDirname,
  dir,
  taglib,
  dependencyChain,
) {
  let prefix;

  if (typeof dir === "object") {
    prefix = dir.prefix;
    dir = dir.path;
  }

  if (prefix == null) {
    // no prefix by default
    prefix = "";
  }

  dir = nodePath.resolve(tagsConfigDirname, dir);
  let children = taglibConfig.fs.readdirSync(dir);

  for (let i = 0, len = children.length; i < len; i++) {
    let childFilename = children[i];
    if (childFilename === "node_modules") {
      continue;
    }

    let tagName;
    let tagDef = null;
    let tagDirname;
    let tagJsonPath;

    let ext = nodePath.extname(childFilename);
    if (ext === ".marko") {
      tagName = childFilename.slice(0, 0 - ext.length);
      tagDirname = dir;
      tagDef = createDefaultTagDef();
      tagDef.template = nodePath.join(dir, childFilename);
    } else {
      tagName = prefix + childFilename;

      tagDirname = nodePath.join(dir, childFilename);
      tagJsonPath = nodePath.join(tagDirname, "marko-tag.json");

      let hasTagJson = false;
      try {
        taglibConfig.fs.statSync(tagJsonPath);
        hasTagJson = true;
        // eslint-disable-next-line no-empty
      } catch (_) {}
      if (hasTagJson) {
        // marko-tag.json exists in the directory, use that as the tag definition
        tagDef = jsonFileReader.readFileSync(tagJsonPath);
      } else {
        tagJsonPath = null;
        tagDef = createDefaultTagDef();
      }

      if (!hasFile(tagDef)) {
        let fileWasSet = findAndSetFile(tagDef, tagDirname);
        if (!fileWasSet) {
          if (hasTagJson) {
            throw new Error(
              "Invalid tag file: " +
                tagJsonPath +
                ". Neither a renderer or a template was found for tag. " +
                JSON.stringify(tagDef, null, 2),
            );
          } else {
            // Skip this directory... there doesn't appear to be anything in it
            continue;
          }
        }
      }
    }

    let tagDependencyChain;

    if (tagJsonPath) {
      tagDependencyChain = dependencyChain.append(tagJsonPath);
    } else {
      tagDependencyChain = dependencyChain.append(tagDirname);
    }

    let tag = new types.Tag(tagJsonPath || tagDirname);
    loaders.loadTagFromProps(tag, tagDef, tagDependencyChain);
    tag.name = tag.name || tagName;
    taglib.addTag(tag);
  }
};
