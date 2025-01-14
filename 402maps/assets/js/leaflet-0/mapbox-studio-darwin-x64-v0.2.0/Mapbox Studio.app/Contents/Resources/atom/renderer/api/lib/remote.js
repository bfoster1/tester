// Generated by CoffeeScript 1.7.1
(function() {
  var CallbacksRegistry, callbacksRegistry, ipc, metaToValue, moduleCache, process, processCache, v8Util, windowCache, wrapArgs;

  process = global.process;

  ipc = require('ipc');

  v8Util = process.atomBinding('v8_util');

  CallbacksRegistry = require('callbacks-registry');

  callbacksRegistry = new CallbacksRegistry;

  wrapArgs = function(args) {
    var valueToMeta;
    valueToMeta = function(value) {
      var field, prop, ret;
      if (Array.isArray(value)) {
        return {
          type: 'array',
          value: wrapArgs(value)
        };
      } else if ((value != null) && typeof value === 'object' && v8Util.getHiddenValue(value, 'atomId')) {
        return {
          type: 'remote-object',
          id: v8Util.getHiddenValue(value, 'atomId')
        };
      } else if ((value != null) && typeof value === 'object') {
        ret = {
          type: 'object',
          name: value.constructor.name,
          members: []
        };
        for (prop in value) {
          field = value[prop];
          ret.members.push({
            name: prop,
            value: valueToMeta(field)
          });
        }
        return ret;
      } else if (typeof value === 'function' && v8Util.getHiddenValue(value, 'returnValue')) {
        return {
          type: 'function-with-return-value',
          value: valueToMeta(value())
        };
      } else if (typeof value === 'function') {
        return {
          type: 'function',
          id: callbacksRegistry.add(value)
        };
      } else {
        return {
          type: 'value',
          value: value
        };
      }
    };
    return Array.prototype.slice.call(args).map(valueToMeta);
  };

  metaToValue = function(meta) {
    var RemoteFunction, el, member, ret, _fn, _i, _j, _len, _len1, _ref, _ref1, _results;
    switch (meta.type) {
      case 'value':
        return meta.value;
      case 'array':
        _ref = meta.members;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          el = _ref[_i];
          _results.push(metaToValue(el));
        }
        return _results;
      case 'error':
        throw new Error("" + meta.message + "\n" + meta.stack);
        break;
      default:
        if (meta.type === 'function') {
          ret = RemoteFunction = (function() {
            function RemoteFunction() {
              var obj;
              if (this.constructor === RemoteFunction) {
                obj = ipc.sendChannelSync('ATOM_BROWSER_CONSTRUCTOR', meta.id, wrapArgs(arguments));
                return metaToValue(obj);
              } else {
                ret = ipc.sendChannelSync('ATOM_BROWSER_FUNCTION_CALL', meta.id, wrapArgs(arguments));
                return metaToValue(ret);
              }
            }

            return RemoteFunction;

          })();
        } else {
          ret = v8Util.createObjectWithName(meta.name);
        }
        _ref1 = meta.members;
        _fn = function(member) {
          var RemoteMemberFunction;
          if (member.type === 'function') {
            return ret[member.name] = RemoteMemberFunction = (function() {
              function RemoteMemberFunction() {
                var obj;
                if (this.constructor === RemoteMemberFunction) {
                  obj = ipc.sendChannelSync('ATOM_BROWSER_MEMBER_CONSTRUCTOR', meta.id, member.name, wrapArgs(arguments));
                  return metaToValue(obj);
                } else {
                  ret = ipc.sendChannelSync('ATOM_BROWSER_MEMBER_CALL', meta.id, member.name, wrapArgs(arguments));
                  return metaToValue(ret);
                }
              }

              return RemoteMemberFunction;

            })();
          } else {
            ret.__defineSetter__(member.name, function(value) {
              ipc.sendChannelSync('ATOM_BROWSER_MEMBER_SET', meta.id, member.name, value);
              return value;
            });
            return ret.__defineGetter__(member.name, function() {
              ret = ipc.sendChannelSync('ATOM_BROWSER_MEMBER_GET', meta.id, member.name);
              return metaToValue(ret);
            });
          }
        };
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          member = _ref1[_j];
          _fn(member);
        }
        v8Util.setDestructor(ret, function() {
          return ipc.sendChannel('ATOM_BROWSER_DEREFERENCE', meta.storeId);
        });
        v8Util.setHiddenValue(ret, 'atomId', meta.id);
        return ret;
    }
  };

  ipc.on('ATOM_RENDERER_CALLBACK', function(id, args) {
    return callbacksRegistry.apply(id, metaToValue(args));
  });

  ipc.on('ATOM_RENDERER_RELEASE_CALLBACK', function(id) {
    return callbacksRegistry.remove(id);
  });

  moduleCache = {};

  exports.require = function(module) {
    var meta;
    if (moduleCache[module] != null) {
      return moduleCache[module];
    }
    meta = ipc.sendChannelSync('ATOM_BROWSER_REQUIRE', module);
    return moduleCache[module] = metaToValue(meta);
  };

  windowCache = null;

  exports.getCurrentWindow = function() {
    var meta;
    if (windowCache != null) {
      return windowCache;
    }
    meta = ipc.sendChannelSync('ATOM_BROWSER_CURRENT_WINDOW', process.guestInstanceId);
    return windowCache = metaToValue(meta);
  };

  exports.getGlobal = function(name) {
    var meta;
    meta = ipc.sendChannelSync('ATOM_BROWSER_GLOBAL', name);
    return metaToValue(meta);
  };

  processCache = null;

  exports.__defineGetter__('process', function() {
    if (processCache == null) {
      processCache = exports.getGlobal('process');
    }
    return processCache;
  });

  exports.createFunctionWithReturnValue = function(returnValue) {
    var func;
    func = function() {
      return returnValue;
    };
    v8Util.setHiddenValue(func, 'returnValue', true);
    return func;
  };

  exports.getGuestWebContents = function(guestInstanceId) {
    var meta;
    meta = ipc.sendChannelSync('ATOM_BROWSER_GUEST_WEB_CONTENTS', guestInstanceId);
    return metaToValue(meta);
  };

}).call(this);
