/*!
 * VERSION: 0.20.0
 * DATE: 17-Aug-2015
 * UPDATES AND DOCS AT: https://prostyle.io/
 * 
 * @license Copyright (c) 2013-2015, Pro Graphics, Inc. All rights reserved. 
 * This work is subject to the terms at https://prostyle.io/licensing/
 * @author: Gary Chamberlain, gary@pro.graphics.
 * 
 **/

var ProStyle;

(function(ProStyle) {
 ProStyle.mediaRootUrl = undefined;
 ProStyle.defaultControllers = [ {
  controllerType:"auto"
 }, {
  controllerType:"resize"
 } ];

 var Stories;
 (function(Stories) {
  Stories._empty = true;
 })(Stories = ProStyle.Stories || (ProStyle.Stories = {}));

 var Svg;
 (function(Svg) {
  var fastForward;
  (function(fastForward) {
   fastForward.svg = '<svg viewBox="0 0 880 1000" xmlns="http://www.w3.org/2000/svg">  <g>    <path d="M866 476c9.333 6.667 14 14.667 14 24c0 9.333 -4.667 16.667 -14 22c0 0 -372 248 -372 248c-14.667 9.333 -27 11.333 -37 6c-10 -5.333 -15 -17.333 -15 -36c0 0 0 -482 0 -482c0 -18.667 5 -30.667 15 -36c10 -5.333 22.333 -3.333 37 6c0 0 372 248 372 248m-454 0c9.333 6.667 14 14.667 14 24c0 9.333 -4.667 16.667 -14 22c0 0 -360 248 -360 248c-13.333 9.333 -25.333 11.333 -36 6c-10.667 -5.333 -16 -17.333 -16 -36c0 0 0 -482 0 -482c0 -18.667 5.333 -30.667 16 -36c10.667 -5.333 22.667 -3.333 36 6c0 0 360 248 360 248" />  </g></svg>';
  })(fastForward = Svg.fastForward || (Svg.fastForward = {}));
 
  var logo;
  (function(logo) {
   logo.svg = '<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">  <g>    <path d="M 235.53172,912.14362 C 222.1737,911.65675 192.88213,908.97613 179.7563,907.0393 142.78725,901.5842 111.49908,892.23905 88.608558,879.81533 25.450284,845.53645 -2.363022,754.52992 11.595266,627.82372 25.966799,497.36601 84.182786,347.68421 159.54762,247.41661 197.38417,197.07776 237.03803,160.39415 278.89341,137.01036 374.98294,83.32699 506.9775,80.13258 647.3983,128.09214 c 49.55485,16.92505 104.25567,43.36958 148.76794,71.92026 67.85023,43.51989 124.36319,97.22188 156.87086,149.06805 18.94366,30.21307 31.87969,63.3221 38.06746,97.43144 2.33759,12.88545 2.53863,16.10095 2.59068,41.42752 0.0635,30.88207 -0.93881,40.20361 -6.88779,64.06813 -4.43071,17.77393 -9.49209,31.52197 -18.08915,49.13496 -8.23109,16.86308 -14.88167,27.71 -25.9912,42.39094 C 899.81543,700.24002 812.14549,761.98761 706.85748,809.66081 557.06683,877.48427 374.39035,917.2046 235.53172,912.14362 z m 20.199,-175.08151 c 6.38062,-2.666 6.29534,-1.92178 6.29534,-54.94359 0,-44.83349 0.10257,-47.73586 1.686,-47.70791 0.92731,0.0164 4.93759,0.46167 8.91174,0.9896 31.04792,4.12438 61.94393,2.5304 86.22704,-4.44863 37.74398,-10.8477 65.19426,-39.86566 76.5239,-80.89416 5.21836,-18.89745 5.3677,-20.86694 5.3677,-70.78889 0,-44.41671 -0.10617,-47.267 -2.14793,-57.66335 -10.62749,-54.11369 -43.50561,-87.90953 -95.15856,-97.81468 -34.23802,-6.56561 -88.65352,-3.28975 -141.91157,8.54321 -17.90378,3.97789 -23.30288,6.3891 -24.9484,11.14185 -0.87518,2.52775 -1.1629,48.97756 -1.2043,194.41663 -0.0485,170.42766 0.10664,191.43468 1.43437,194.23266 1.3611,2.86829 3.29589,4.39796 7.18213,5.67829 0.79484,0.26186 16.52472,0.51032 34.95531,0.55216 26.91396,0.0611 34.15522,-0.19347 36.78723,-1.29319 z m 36.16169,-170.6532 c -0.79483,-0.16956 -7.83992,-0.8255 -15.65574,-1.45764 l -14.21061,-1.14936 0,-84.09937 0,-84.09937 2.64944,-0.54561 c 4.32406,-0.89047 29.87188,-2.4793 39.7415,-2.47153 19.88057,0.0156 31.80455,5.28992 40.05624,17.71784 7.62813,11.4888 9.88532,23.73156 10.67225,57.88521 0.94764,41.1288 -1.53911,63.6562 -8.46381,76.6734 -5.72666,10.76513 -16.75587,18.88668 -28.66728,21.10972 -4.72311,0.88147 -22.63346,1.1809 -26.12199,0.43671 z m 525.851,69.28618 c 42.38495,-6.01923 75.22316,-29.25194 92.24766,-65.26424 11.84331,-25.05233 14.87524,-43.63329 14.87524,-91.16232 0,-40.01963 -1.78087,-55.69933 -8.65755,-76.22473 -13.90501,-41.50378 -45.23465,-69.21991 -89.13065,-78.85057 -28.6265,-6.28057 -64.499,-4.3605 -90.6127,4.85004 -45.55567,16.06787 -72.81618,52.13077 -79.95784,105.77608 -1.95361,14.67474 -1.92487,74.08051 0.043,89.09299 5.72313,43.65858 25.18804,75.73978 57.80606,95.27346 26.94864,16.13849 64.15813,22.08028 103.38668,16.50929 z m -38.93145,-72.11263 c -13.50019,-2.93712 -23.06811,-10.72915 -29.29281,-23.85582 -6.58723,-13.89118 -7.22294,-19.21222 -7.22294,-60.45811 0,-41.45888 0.64564,-46.8115 7.29042,-60.44081 8.16765,-16.7529 20.8752,-24.30337 40.94711,-24.32965 17.26097,-0.0226 28.83801,5.77322 37.13719,18.59198 8.46721,13.0783 10.47888,25.78284 10.47888,66.17848 0,38.81099 -1.53158,49.75666 -8.93668,63.86774 -8.79754,16.76446 -29.22827,25.05258 -50.40117,20.44619 z m -221.41931,65.75453 3.2969,-3.59872 0.03,-107.19579 0.03,-107.19581 8.93659,-4.08853 c 20.61319,-9.43061 36.60854,-13.59307 55.5365,-14.45218 11.51659,-0.52274 12.1389,-0.6588 14.69231,-3.2122 l 2.66628,-2.66634 0,-29.49265 c 0,-32.3359 -0.065,-32.73152 -5.87582,-35.73638 -4.84819,-2.50711 -19.8152,-1.095 -36.08282,3.40434 -9.76904,2.70194 -27.10272,11.03633 -34.87766,16.76991 -3.31328,2.44336 -6.2397,4.44247 -6.50316,4.44247 -0.26345,0 -0.47901,-3.43499 -0.47901,-7.63334 0,-7.23931 -0.15301,-7.78635 -2.9644,-10.59774 l -2.96441,-2.96439 -36.03933,0 -36.03934,0 -3.14635,2.81116 -3.14635,2.81117 -0.28573,145.31628 c -0.1992,101.30298 0.027,146.3959 0.74674,148.88076 1.02228,3.52923 4.48752,6.81938 8.20987,7.79506 1.05978,0.27777 17.45985,0.43678 36.44462,0.35334 l 34.51776,-0.1517 3.29689,-3.59872 z" />  </g></svg>';
  })(logo = Svg.logo || (Svg.logo = {}));
 
  var pause;
  (function(pause) {
   pause.svg = '<svg viewBox="0 0 530 1000" xmlns="http://www.w3.org/2000/svg">  <g>    <path d="M440 150c60 0 90 21.333 90 64c0 0 0 570 0 570c0 44 -30 66 -90 66c-60 0 -90 -22 -90 -66c0 0 0 -570 0 -570c0 -42.667 30 -64 90 -64c0 0 0 0 0 0m-350 0c60 0 90 21.333 90 64c0 0 0 570 0 570c0 44 -30 66 -90 66c-60 0 -90 -22 -90 -66c0 0 0 -570 0 -570c0 -42.667 30 -64 90 -64c0 0 0 0 0 0" />  </g></svg>';
  })(pause = Svg.pause || (Svg.pause = {}));
 
  var play;
  (function(play) {
   play.svg = '<svg viewBox="0 0 500 1000" xmlns="http://www.w3.org/2000/svg">  <g>    <path d="M486 474c9.333 6.667 14 15.333 14 26c0 9.333 -4.667 17.333 -14 24c0 0 -428 266 -428 266c-16 10.667 -29.667 12.667 -41 6c-11.333 -6.667 -17 -20 -17 -40c0 0 0 -514 0 -514c0 -20 5.667 -33.333 17 -40c11.333 -6.667 25 -4.667 41 6c0 0 428 266 428 266" />  </g></svg>';
  })(play = Svg.play || (Svg.play = {}));
 
  var toStart;
  (function(toStart) {
   toStart.svg = '<svg viewBox="0 0 600 1000" xmlns="http://www.w3.org/2000/svg">  <g>    <path d="M174 500c0 -9.333 4.667 -17.333 14 -24c0 0 364 -228 364 -228c13.333 -9.333 24.667 -11 34 -5c9.333 6 14 17.667 14 35c0 0 0 442 0 442c0 17.333 -4.667 29 -14 35c-9.333 6 -20.667 4.333 -34 -5c0 0 -364 -228 -364 -228c-9.333 -6.667 -14 -14 -14 -22c0 0 0 0 0 0m-174 -234c0 -38.667 25.333 -58 76 -58c49.333 0 74 19.333 74 58c0 0 0 466 0 466c0 38.667 -24.667 58 -74 58c-50.667 0 -76 -19.333 -76 -58c0 0 0 -466 0 -466c0 0 0 0 0 0" />  </g></svg>';
  })(toStart = Svg.toStart || (Svg.toStart = {}));
 })(Svg = ProStyle.Svg || (ProStyle.Svg = {}));

 var Util;
 (function(Util) {
  function setElementText(element, text) {
   var textProperty = document.body.textContent !== undefined ? "textContent" :"innerText";
   element[textProperty] = text;
  }
  Util.setElementText = setElementText;
 })(Util = ProStyle.Util || (ProStyle.Util = {}));

 var Models;
 (function(Models) {
  var Model = function() {
   function Model(initPropertyLists) {
    this.initPropertyLists = initPropertyLists;
    this.init = initPropertyLists[0];
   }
   return Model;
  }();
  Models.Model = Model;
 })(Models = ProStyle.Models || (ProStyle.Models = {}));

 var Types;
 (function(Types) {
  var Size = function() {
   function Size(width, height) {
    if (width === void 0) {
     width = Size.DEFAULT_WIDTH;
    }
    if (height === void 0) {
     height = Size.DEFAULT_HEIGHT;
    }
    this.width = width;
    this.height = height;
    this.width = Math.max(Size.MIN, Math.min(width, Size.MAX));
    this.height = Math.max(Size.MIN, Math.min(height, Size.MAX));
   }
   Size.prototype.aspectRatio = function() {
    if (this.height) {
     return this.width / this.height;
    }
    return 1;
   };
   Size.prototype.getContainedSize = function(innerAspectRatio) {
    var aspectRatio = this.aspectRatio();
    if (innerAspectRatio < aspectRatio) {
     return new Size(this.height * innerAspectRatio, this.height);
    } else if (innerAspectRatio > aspectRatio) {
     return new Size(this.width, this.width / innerAspectRatio);
    } else {
     return new Size(this.width, this.height);
    }
   };
   Size.DEFAULT_WIDTH = 1024;
   Size.DEFAULT_HEIGHT = 768;
   Size.MIN = 1;
   Size.MAX = 4096;
   return Size;
  }();
  Types.Size = Size;
 })(Types = ProStyle.Types || (ProStyle.Types = {}));

 var Util;
 (function(Util) {
  function splitNoParens(s) {
   var left = 0;
   var right = 0;
   var results = [];
   var M = s.match(/([^()]+)|([()])/g);
   var L = M.length;
   var next;
   var str = "";
   for (var i = 0; i < L; i++) {
    next = M[i];
    if (next === "(") left++; else if (next === ")") right++;
    if (left !== 0) {
     str += next;
     if (left === right) {
      results[results.length - 1] += str;
      left = right = 0;
      str = "";
     }
    } else results = results.concat(next.match(/([^,]+)/g));
   }
   return results;
  }
  Util.splitNoParens = splitNoParens;
 
  function isAbsoluteUrl(url) {
   if (url) {
    url = url.toString().trim();
    if (url.indexOf("//") === 0) return true;
    url = url.toLowerCase();
    if (url.indexOf("http://") === 0) return true;
    if (url.indexOf("https://") === 0) return true;
    if (url.indexOf("ftp://") === 0) return true;
   }
   return false;
  }
  Util.isAbsoluteUrl = isAbsoluteUrl;
 })(Util = ProStyle.Util || (ProStyle.Util = {}));
})(ProStyle || (ProStyle = {}));

var __extends = this && this.__extends || function(d, b) {
 for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
 function __() {
  this.constructor = d;
 }
 __.prototype = b.prototype;
 d.prototype = new __();
};

var ProStyle;

(function(ProStyle) {
 var Models;
 (function(Models) {
  var CanvasModel = function(_super) {
   __extends(CanvasModel, _super);
   function CanvasModel(init, padding, canvasMediaUrl) {
    _super.call(this, [ init ]);
    this.padding = padding;
    this.canvasMediaUrl = canvasMediaUrl;
    this.setAdjustedImageRootUrl(canvasMediaUrl);
   }
   CanvasModel.prototype.setAdjustedImageRootUrl = function(canvasUrl) {
    if (canvasUrl) {
     canvasUrl = canvasUrl.toString().trim();
     if (ProStyle.Util.isAbsoluteUrl(canvasUrl)) {
      this.mediaUrl = canvasUrl;
      return;
     }
    }
    var rootUrl = ProStyle.mediaRootUrl;
    if (rootUrl) {
     var rootHasTrailingSlash = rootUrl.lastIndexOf("/") === rootUrl.length - 1;
     if (canvasUrl) {
      if (canvasUrl.indexOf("/") === 0) {
       if (!rootHasTrailingSlash) rootUrl += canvasUrl; else rootUrl += canvasUrl.substr(1);
      } else {
       if (rootHasTrailingSlash) rootUrl += canvasUrl; else rootUrl += "/" + canvasUrl;
      }
     }
    } else {
     rootUrl = canvasUrl;
    }
    if (rootUrl) {
     if (rootUrl.lastIndexOf("/") !== rootUrl.length - 1) rootUrl += "/";
    }
    this.mediaUrl = rootUrl;
   };
   CanvasModel.prototype.adjustBackgroundImage = function(bg, containerSize) {
    var _this = this;
    var parts = ProStyle.Util.splitNoParens(bg);
    var newParts = [];
    parts.forEach(function(part) {
     part = part.trim();
     if (part.toLowerCase().indexOf("url(") === 0) {
      part = "url(" + _this.adjustImageUrl(part) + ")";
     }
     newParts.push(part);
    });
    return newParts.join(",");
   };
   CanvasModel.prototype.adjustImageUrl = function(url) {
    if (url.toLowerCase().indexOf("url(") === 0) url = url.substr(4, url.length - 5).trim();
    if (this.mediaUrl) {
     if (!ProStyle.Util.isAbsoluteUrl(url)) {
      if (url.indexOf("/") === 0) {
       url = this.mediaUrl + url.substr(1);
      } else {
       url = this.mediaUrl + url;
      }
     }
    }
    return url;
   };
   return CanvasModel;
  }(Models.Model);
  Models.CanvasModel = CanvasModel;
 
  var FrameModel = function(_super) {
   __extends(FrameModel, _super);
   function FrameModel(init, aspectRatio, padding) {
    _super.call(this, [ init ]);
    this.aspectRatio = aspectRatio;
    this.padding = padding;
   }
   return FrameModel;
  }(Models.Model);
  Models.FrameModel = FrameModel;
 })(Models = ProStyle.Models || (ProStyle.Models = {}));

 var Types;
 (function(Types) {
  var Scale = function() {
   function Scale(x, y) {
    if (x === void 0) {
     x = 1;
    }
    this.x = x;
    this.y = y;
    if (y === undefined) this.y = x;
   }
   Scale.fromJson = function(json) {
    if (json === undefined || json === null) return new Scale();
    var x = 100;
    var y = undefined;
    if (typeof json === "number") {
     return new Scale(json / 100, json / 100);
    } else if (typeof json === "string") {
     var parts = json.split(",");
     if (parts.length > 0) x = ProStyle.Util.convertToNumber(parts[0].trim(), 100) / 100;
     if (parts.length > 1) y = ProStyle.Util.convertToNumber(parts[1].trim(), 100) / 100;
     return new Scale(x, y);
    } else if (json instanceof Array) {
     if (json.length > 0) x = ProStyle.Util.convertToNumber((json[0] || "").toString().trim(), 100) / 100;
     if (json.length > 1) y = ProStyle.Util.convertToNumber((json[1] || "").toString().trim(), 100) / 100;
     return new Scale(x, y);
    } else {
     return new Scale(ProStyle.Util.convertToNumber(json.x, 100) / 100, json.y === undefined ? undefined :ProStyle.Util.convertToNumber(json.y, 100) / 100);
    }
   };
   Scale.prototype.equals = function(other) {
    if (other === undefined) return false;
    return this.x === other.x && this.y === other.y;
   };
   return Scale;
  }();
  Types.Scale = Scale;
 })(Types = ProStyle.Types || (ProStyle.Types = {}));

 var Util;
 (function(Util) {
  function convertToNumber(n, fallback, stripTrailingNonDigits) {
   if (fallback === void 0) {
    fallback = 0;
   }
   if (stripTrailingNonDigits === void 0) {
    stripTrailingNonDigits = false;
   }
   if (typeof n == "string" && stripTrailingNonDigits) {
    n = parseFloat(n);
   }
   return isNaN(n) ? fallback :Number(n);
  }
  Util.convertToNumber = convertToNumber;
  function convertToNumber2(n) {
   if (n === "") return undefined;
   return isNaN(n) ? undefined :Number(n);
  }
  Util.convertToNumber2 = convertToNumber2;
 })(Util = ProStyle.Util || (ProStyle.Util = {}));

 var Types;
 (function(Types) {
  var Xyz = function() {
   function Xyz(x, y, z) {
    if (x === void 0) {
     x = 0;
    }
    if (y === void 0) {
     y = 0;
    }
    if (z === void 0) {
     z = 0;
    }
    this.x = x;
    this.y = y;
    this.z = z;
   }
   Xyz.fromJson = function(json) {
    if (json === undefined || json === null) return new Xyz();
    var x = 0;
    var y = 0;
    var z = 0;
    if (typeof json === "number") {
     return new Xyz(json);
    } else if (typeof json === "string") {
     var parts = json.split(",");
     if (parts.length > 0) x = ProStyle.Util.convertToNumber(parts[0].trim());
     if (parts.length > 1) y = ProStyle.Util.convertToNumber(parts[1].trim());
     if (parts.length > 2) z = ProStyle.Util.convertToNumber(parts[2].trim());
     return new Xyz(x, y, z);
    } else if (json instanceof Array) {
     if (json.length > 0) x = ProStyle.Util.convertToNumber((json[0] || "").toString().trim());
     if (json.length > 1) y = ProStyle.Util.convertToNumber((json[1] || "").toString().trim());
     if (json.length > 2) z = ProStyle.Util.convertToNumber((json[2] || "").toString().trim());
     return new Xyz(x, y, z);
    } else {
     return new Xyz(ProStyle.Util.convertToNumber(json.x), ProStyle.Util.convertToNumber(json.y), ProStyle.Util.convertToNumber(json.z));
    }
   };
   Xyz.prototype.equals = function(other) {
    if (other === undefined) return false;
    return this.x === other.x && this.y === other.y && this.z === other.z;
   };
   return Xyz;
  }();
  Types.Xyz = Xyz;
 
  var Placement = function() {
   function Placement(position, rotation, scale, opacity) {
    if (opacity === void 0) {
     opacity = 1;
    }
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
    this.opacity = opacity;
    opacity = Math.max(0, Math.min(opacity, 1));
   }
   Placement.prototype.duplicate = function() {
    return new Placement(new Types.Xyz(this.position.x, this.position.y, this.position.z), new Types.Xyz(this.rotation.x, this.rotation.y, this.rotation.z), new Types.Scale(this.scale.x, this.scale.y), this.opacity);
   };
   Placement.prototype.adjust = function(offset) {
    this.position.x += offset.position.x;
    this.position.y += offset.position.y;
    this.position.z += offset.position.z;
    this.rotation.x += offset.rotation.x;
    this.rotation.y += offset.rotation.y;
    this.rotation.z += offset.rotation.z;
    this.scale.x = Math.max(0, this.scale.x * offset.scale.x);
    this.scale.y = Math.max(0, this.scale.y * offset.scale.y);
    this.opacity = Math.max(0, Math.min(this.opacity * offset.opacity, 1));
   };
   Placement.prototype.renderCss = function(containerSize, bucket, centerAlignment) {
    if (bucket === void 0) {
     bucket = {};
    }
    if (centerAlignment === void 0) {
     centerAlignment = true;
    }
    if (centerAlignment) {
     bucket.xPercent = -50;
     bucket.yPercent = -50;
    }
    var depth = (containerSize.width + containerSize.height) / 2;
    bucket.x = this.position.x / 100 * containerSize.width;
    bucket.y = this.position.y / 100 * containerSize.height;
    bucket.z = this.position.z / 100 * depth;
    bucket.zIndex = this.position.z * 10;
    bucket.rotationX = this.rotation.x;
    bucket.rotationY = this.rotation.y;
    bucket.rotationZ = this.rotation.z;
    bucket.scaleX = this.scale.x;
    bucket.scaleY = this.scale.y;
    bucket.autoAlpha = this.opacity;
    return bucket;
   };
   Placement.fromJson = function(json) {
    json = json || {};
    var xyzPos = new Types.Xyz();
    var xyzRot = new Types.Xyz();
    var scale = new Types.Scale();
    var opacity = 1;
    for (var prop in json) {
     if (json.hasOwnProperty(prop)) {
      var propLower = prop.trim().toLowerCase();
      if (propLower === "position" || propLower === "pos") {
       xyzPos = Types.Xyz.fromJson(json[prop]);
      } else if (propLower === "rotation" || propLower === "rotate" || propLower === "rot") {
       xyzRot = Types.Xyz.fromJson(json[prop]);
      } else if (propLower === "scale") {
       scale = Types.Scale.fromJson(json[prop]);
      } else if (propLower === "opacity") {
       var o = json[prop];
       if (typeof o === "number") opacity = o / 100; else if (typeof o === "string") opacity = ProStyle.Util.convertToNumber(o, 100) / 100; else if (o instanceof Array) {
        if (o.length > 0) opacity = ProStyle.Util.convertToNumber(o[0], 100) / 100;
       } else {
        opacity = ProStyle.Util.convertToNumber(o.percent, 100) / 100;
       }
      }
     }
    }
    return new Placement(xyzPos, xyzRot, scale, Math.max(0, Math.min(opacity, 1)));
   };
   Placement.prototype.equals = function(other) {
    if (other === undefined) return false;
    if (other.position === undefined) return false;
    if (other.rotation === undefined) return false;
    if (other.scale === undefined) return false;
    if (other.opacity === undefined) return false;
    if (this.position.equals(other.position) === false) return false;
    if (this.rotation.equals(other.rotation) === false) return false;
    if (this.scale.equals(other.scale) === false) return false;
    return this.opacity === other.opacity;
   };
   return Placement;
  }();
  Types.Placement = Placement;
 })(Types = ProStyle.Types || (ProStyle.Types = {}));

 var Models;
 (function(Models) {
  var Properties;
  (function(Properties) {
   var PropertyList = function() {
    function PropertyList(propertyTypes, properties) {
     this.propertyTypes = propertyTypes;
     this.properties = properties;
    }
    PropertyList.prototype.getPropertyOfType = function(propertyType) {
     for (var c = 0; c < this.properties.length; c++) {
      var property = this.properties[c];
      if (property.type === propertyType) return property;
     }
     return undefined;
    };
    PropertyList.prototype.hasAnythingSet = function() {
     for (var p = 0; p < this.properties.length; p++) {
      var property = this.properties[p];
      for (var v = 0; v < property.type.variableTypes.length; v++) {
       var variableType = property.type.variableTypes[v];
       var variable = property[variableType.jsonNames[0]];
       var value = variable.getValue();
       if (value !== undefined) return true;
      }
     }
     return false;
    };
    return PropertyList;
   }();
   Properties.PropertyList = PropertyList;
  })(Properties = Models.Properties || (Models.Properties = {}));
 
  var PageModel = function(_super) {
   __extends(PageModel, _super);
   function PageModel(init, flow) {
    _super.call(this, [ init ]);
    this.flow = flow;
    this.steps = [];
    this.items = [];
    this.story = flow.story;
   }
   PageModel.prototype.insertStep = function(index) {
    ProStyle.Util.insertIntoArray(this.steps, index, new Models.Step());
    this.canvasScriptSet.insertStep(index);
    this.frameScriptSet.insertStep(index);
    this.pageScriptSet.insertStep(index);
    this.items.forEach(function(item) {
     item.scriptSets.forEach(function(scriptSet) {
      scriptSet.insertStep(index);
     });
    });
   };
   PageModel.prototype.deleteStep = function(index) {
    this.steps.splice(index, 1);
    this.canvasScriptSet.deleteStep(index);
    this.frameScriptSet.deleteStep(index);
    this.pageScriptSet.deleteStep(index);
    this.items.forEach(function(item) {
     item.scriptSets.forEach(function(scriptSet) {
      scriptSet.deleteStep(index);
     });
    });
   };
   PageModel.prototype.deleteItem = function(index) {
    this.items.splice(index, 1);
   };
   return PageModel;
  }(Models.Model);
  Models.PageModel = PageModel;
 
  var Flows;
  (function(Flows) {
   var FlowModel = function(_super) {
    __extends(FlowModel, _super);
    function FlowModel(story, flowType, placement, pageAspectRatio, defaultPageClass) {
     if (defaultPageClass === void 0) {
      defaultPageClass = undefined;
     }
     _super.call(this, []);
     this.story = story;
     this.flowType = flowType;
     this.placement = placement;
     this.pageAspectRatio = pageAspectRatio;
     this.defaultPageClass = defaultPageClass;
     this.pages = [];
    }
    FlowModel.prototype.getDefaultPageClassName = function() {
     return this.defaultPageClass;
    };
    FlowModel.prototype.getDefaultPageClassValue = function() {
     return undefined;
    };
    FlowModel.prototype.serialize = function() {
     ProStyle.Util.logError("ProStyle.Models.Flows.Flow.serialize", "Abstract base method called.");
    };
    FlowModel.prototype.createView = function(camera, flowIndex) {
     ProStyle.Util.logError("ProStyle.Models.Flows.Flow.createView", "Abstract base method called.");
     return undefined;
    };
    return FlowModel;
   }(Models.Model);
   Flows.FlowModel = FlowModel;
  })(Flows = Models.Flows || (Models.Flows = {}));
 
  var Story = function() {
   function Story(canvas, frame, flows, classes, controllers, usingDefaultControllers) {
    this.canvas = canvas;
    this.frame = frame;
    this.flows = flows;
    this.classes = classes;
    this.controllers = controllers;
    this.usingDefaultControllers = usingDefaultControllers;
   }
   return Story;
  }();
  Models.Story = Story;
 
  var Properties;
  (function(Properties) {
   var Property = function() {
    function Property(type) {
     var _this = this;
     this.type = type;
     type.variableTypes.forEach(function(variableType) {
      _this[variableType.jsonNames[0]] = variableType.createVariable();
     });
    }
    Property.prototype.getVariable = function(jsonName) {
     return this[jsonName];
    };
    Property.prototype.renderLabel = function() {
     return this.type.renderLabel(this);
    };
    Property.prototype.writeCssBuckets = function(story, model, containerSize, buckets, initializing) {
     var _this = this;
     this.type.variableTypes.forEach(function(variableType) {
      var variable = _this[variableType.jsonNames[0]];
      variable.type.writeCssBuckets(story, model, containerSize, variable, buckets, initializing);
     });
    };
    return Property;
   }();
   Properties.Property = Property;
  })(Properties = Models.Properties || (Models.Properties = {}));
 
  var Scripts;
  (function(Scripts) {
   (function(ScriptType) {
    ScriptType[ScriptType["InitEvent"] = 0] = "InitEvent";
    ScriptType[ScriptType["StepEvent"] = 1] = "StepEvent";
    ScriptType[ScriptType["SwitchEvent"] = 2] = "SwitchEvent";
    ScriptType[ScriptType["ActionsOrphan"] = 3] = "ActionsOrphan";
    ScriptType[ScriptType["PropertyOrphan"] = 4] = "PropertyOrphan";
   })(Scripts.ScriptType || (Scripts.ScriptType = {}));
   var ScriptType = Scripts.ScriptType;
  
   var ScriptType;
   (function(ScriptType) {
    var INIT = "init";
    var STEP = "step";
    var SWITCH = "switch";
    var ACTIONS = "actionsorphan";
    var PROPERTY = "propertyorphan";
    function fromString(value) {
     value = (value || STEP).toString().toLowerCase().trim();
     if (value === INIT) return ScriptType.InitEvent;
     if (value.indexOf(STEP) === 0) return ScriptType.StepEvent;
     if (value === SWITCH) return ScriptType.SwitchEvent;
     if (value === ACTIONS) return ScriptType.ActionsOrphan;
     if (value === PROPERTY) return ScriptType.PropertyOrphan;
     ProStyle.Util.logError("ScriptType.fromString()", "Unknown script type: " + value);
     return ScriptType.StepEvent;
    }
    ScriptType.fromString = fromString;
    function toString(value) {
     if (value === ScriptType.InitEvent) return INIT;
     if (value === ScriptType.StepEvent) return STEP;
     if (value === ScriptType.SwitchEvent) return SWITCH;
     if (value === ScriptType.ActionsOrphan) return ACTIONS;
     if (value === ScriptType.PropertyOrphan) return PROPERTY;
     return INIT;
    }
    ScriptType.toString = toString;
   })(ScriptType = Scripts.ScriptType || (Scripts.ScriptType = {}));
  })(Scripts = Models.Scripts || (Models.Scripts = {}));
 })(Models = ProStyle.Models || (ProStyle.Models = {}));

 var Views;
 (function(Views) {
  var Models = ProStyle.Models;
  var Scripts = ProStyle.Models.Scripts;
  var Properties = ProStyle.Models.Properties;
  var View = function() {
   function View(model, element) {
    this.model = model;
    this.element = element;
    this.div = undefined;
    if (element instanceof HTMLDivElement || element instanceof HTMLBodyElement) {
     this.div = element;
    }
    element["proCache"] = {};
   }
   View.prototype.initializeProperties = function(story, elements, containerSize, timeline, init, centerAlignment, forceProps, afterCssBuckets) {
    var _this = this;
    if (forceProps === void 0) {
     forceProps = undefined;
    }
    if (afterCssBuckets === void 0) {
     afterCssBuckets = undefined;
    }
    TweenMax.set(elements, {
     clearProps:"all"
    });
    if (forceProps !== undefined) TweenMax.set(elements, forceProps);
    var buckets = [];
    for (var c = 0; c < elements.length; c++) {
     var bucket = {
      force3D:true,
      element:elements[c],
      elementIndex:c
     };
     if (centerAlignment) {
      bucket.xPercent = -50;
      bucket.yPercent = -50;
     }
     buckets.push(bucket);
    }
    var propertyBucket = [];
    init.properties.forEach(function(property) {
     propertyBucket["prostyle_" + property.type.jsonNames[0]] = property;
    });
    init.propertyTypes.forEach(function(propertyType) {
     var property = propertyBucket["prostyle_" + propertyType.jsonNames[0]];
     if (property === undefined) property = new Properties.Property(propertyType);
     property.writeCssBuckets(story, _this, containerSize, buckets, true);
    });
    View.postProcessCssBuckets(buckets, afterCssBuckets, init.properties, containerSize);
    for (var c = 0; c < elements.length; c++) {
     timeline.set(elements[c], buckets[c], "initialize");
    }
   };
   View.prototype.generateEventTimeline = function(itemViewSet, divs, containerSize, event, rootTimeline, label, afterCssBuckets) {
    var _this = this;
    if (afterCssBuckets === void 0) {
     afterCssBuckets = undefined;
    }
    var timeline = new TimelineMax();
    event.actions.forEach(function(action) {
     if (action.actionType === Models.Actions.ActionType.SetProperties) {
      var actionStartTime = timeline.totalDuration();
      var moveToIndex = Views.Actions.SetPropertiesAction.generateTimeline(itemViewSet, _this, divs, action, timeline, containerSize, afterCssBuckets);
      if (moveToIndex !== undefined) {
       var actionEndTime = timeline.totalDuration();
       var div = moveToIndex > 0 ? itemViewSet.items[moveToIndex - 1].div :undefined;
       if (div) rootTimeline.seek(label + "+=" + actionEndTime);
       var moveToTimeline = new TimelineMax();
       Views.Actions.SetPropertiesAction.generateMoveTo(itemViewSet.div, div, moveToTimeline);
       timeline.add(moveToTimeline, actionStartTime);
      }
     }
    });
    rootTimeline.add(timeline, label);
   };
   View.prototype.generateActionsForStep = function(itemViewSet, divs, containerSize, timeline, stepIndex, label, scriptSet, afterCssBuckets) {
    var _this = this;
    if (afterCssBuckets === void 0) {
     afterCssBuckets = undefined;
    }
    scriptSet.scripts.forEach(function(script) {
     if (script.type === Scripts.ScriptType.StepEvent) {
      var stepEvent = script;
      if (stepEvent.stepIndex === stepIndex) {
       _this.generateEventTimeline(itemViewSet, divs, containerSize, stepEvent, timeline, label, afterCssBuckets);
      }
     }
    });
   };
   View.postProcessCssBuckets = function(buckets, afterCssBuckets, properties, containerSize) {
    for (var c = 0; c < buckets.length; c++) {
     var bucket = buckets[c];
     var proCache = bucket.element["proCache"];
     if (proCache !== undefined) {
      if (bucket["width"] !== undefined) proCache.width = bucket["width"];
      if (bucket["height"] !== undefined) proCache.height = bucket["height"];
     }
    }
    if (afterCssBuckets) afterCssBuckets(properties, buckets, containerSize);
    buckets.forEach(function(bucket) {
     delete bucket.element;
     delete bucket.elementIndex;
    });
   };
   return View;
  }();
  Views.View = View;
 })(Views = ProStyle.Views || (ProStyle.Views = {}));

 var Serialization;
 (function(Serialization) {
  var FlowReader = function() {
   function FlowReader() {}
   FlowReader.read = function(story, json) {
    json.setup = json.setup || {};
    var flowType = (json.flowType || "simple").trim().toLowerCase();
    var flow;
    var extension = FlowReader.lookupExtension(flowType);
    if (extension && extension["deserialize"]) {
     flow = extension["deserialize"](story, json);
    } else {
     ProStyle.Util.logError("FlowReader.read()", "Unknown Flow Type (" + flowType + ")");
     flow = ProStyle.Extensions.Flows.Unknown.deserialize(story, json);
    }
    if (json.pages instanceof Array) {
     json.pages.forEach(function(pageJson) {
      flow.pages.push(Serialization.PageReader.read(flow, pageJson));
     });
    } else {
     flow.pages.push(Serialization.PageReader.read(flow, json.page || {}));
    }
    return flow;
   };
   FlowReader.lookupExtension = function(itemType) {
    for (var e in ProStyle.Extensions.Flows) {
     var name = e.toLowerCase();
     if (itemType === name) {
      return ProStyle.Extensions.Flows[e];
     }
    }
    return undefined;
   };
   return FlowReader;
  }();
  Serialization.FlowReader = FlowReader;
 })(Serialization = ProStyle.Serialization || (ProStyle.Serialization = {}));

 var Views;
 (function(Views) {
  var Util = ProStyle.Util;
  var CameraView = function(_super) {
   __extends(CameraView, _super);
   function CameraView(story, frame) {
    var _this = this;
    _super.call(this, story.frame, Util.createChildDivElement(frame.div, "prostyle prostyle-camera"));
    this.story = story;
    this.frame = frame;
    this.flows = [];
    this.resize();
    story.flows.forEach(function(flow, flowIndex) {
     _this.flows.push(flow.createView(_this, flowIndex));
    });
   }
   CameraView.prototype.resize = function() {
    var frameSize = this.frame.size;
    var framePadding = this.story.frame.padding;
    var padding = (100 - framePadding) / 100;
    var size = new ProStyle.Types.Size(frameSize.width * padding, frameSize.height * padding);
    if (size.width < 1) size.width = 1;
    if (size.height < 1) size.height = 1;
    this.size = size;
    TweenLite.set(this.div, {
     width:this.size.width,
     height:this.size.height,
     clearProps:"transform"
    });
   };
   CameraView.prototype.stepStopped = function(timeline, step) {
    timeline.pause(step.stopLabel);
   };
   return CameraView;
  }(Views.View);
  Views.CameraView = CameraView;
 
  var Util = ProStyle.Util;
  var FrameView = function(_super) {
   __extends(FrameView, _super);
   function FrameView(story, canvas) {
    _super.call(this, story.frame, Util.createChildDivElement(canvas.div, "prostyle prostyle-frame"));
    this.story = story;
    this.canvas = canvas;
    this.resize();
    this.camera = new Views.CameraView(story, this);
   }
   FrameView.prototype.stepStopped = function(timeline, step) {
    timeline.pause(step.stopLabel);
   };
   FrameView.prototype.resize = function() {
    var canvasSize = this.canvas.size;
    var canvasPadding = this.story.canvas.padding;
    var aspectRatio = this.story.frame.aspectRatio;
    var padding = (100 - canvasPadding) / 100;
    var size = new ProStyle.Types.Size(canvasSize.width * padding, canvasSize.height * padding);
    if (size.width < 1) size.width = 1;
    if (size.height < 1) size.height = 1;
    var ar = size.aspectRatio();
    if (ar > aspectRatio) {
     size.width = size.height * aspectRatio;
    } else if (ar < aspectRatio) {
     size.height = size.width / aspectRatio;
    }
    this.size = size;
    TweenLite.set(this.div, {
     width:this.size.width,
     height:this.size.height,
     clearProps:"transform"
    });
    if (this.camera !== undefined) this.camera.resize();
   };
   return FrameView;
  }(Views.View);
  Views.FrameView = FrameView;
 })(Views = ProStyle.Views || (ProStyle.Views = {}));

 var Util;
 (function(Util) {
  var Events;
  (function(Events) {
   var LiteEvent = function() {
    function LiteEvent() {
     this.handlers = [];
    }
    LiteEvent.prototype.on = function(handler) {
     this.handlers.push(handler);
    };
    LiteEvent.prototype.off = function(handler) {
     this.handlers = this.handlers.filter(function(h) {
      return h !== handler;
     });
    };
    LiteEvent.prototype.trigger = function(data) {
     if (this.handlers) {
      this.handlers.slice(0).forEach(function(h) {
       return h(data);
      });
     }
    };
    LiteEvent.prototype.dispose = function() {
     this.handlers = [];
    };
    return LiteEvent;
   }();
   Events.LiteEvent = LiteEvent;
  })(Events = Util.Events || (Util.Events = {}));
 })(Util = ProStyle.Util || (ProStyle.Util = {}));

 var Play;
 (function(Play) {
  var Events = ProStyle.Util.Events;
  var Views = ProStyle.Views;
  var Player = function() {
   function Player(frame) {
    this.frame = frame;
    this.steps = [];
    this.animating = false;
    this.currentSubStep = 0;
    this.state = {
     progress:0,
     time:0,
     step:undefined,
     subStep:0
    };
    this.progressChanged = new Events.LiteEvent();
    this.stateChanged = new Events.LiteEvent();
    this.stepComplete = new Events.LiteEvent();
    this.refreshTimeline(frame);
    this.currentStep = this.getStepAtTime(0);
   }
   Player.prototype.refreshTimeline = function(frame) {
    var _this = this;
    var time = 0;
    var isPaused = true;
    if (this.timeline !== undefined) {
     time = this.timeline.time();
     isPaused = this.isPaused();
     this.timeline.kill();
    }
    this.timeline = new Views.Timeline(frame, this.triggerProgressChanged.bind(this)).timeline;
    this.steps = [];
    var stepIndex = 0;
    frame.camera.flows.forEach(function(flow) {
     flow.pages.forEach(function(page) {
      page.steps.forEach(function(step) {
       step.playerStepIndex = stepIndex;
       stepIndex++;
       _this.steps.push(step);
       _this.timeline.addCallback(_this.triggerStepComplete.bind(_this), step.stopLabel, [ step ]);
      });
     });
    });
    if (this.currentStep === undefined) {
     this.currentStep = this.steps[0];
    } else {
     this.currentStep = this.steps[Math.min(this.currentStep.playerStepIndex, this.steps.length - 1)];
    }
    this.moveTo(time, false, !isPaused);
   };
   Player.prototype.isAtStoryStart = function() {
    var time = this.timeline.time();
    return time < .02;
   };
   Player.prototype.isAtStoryEnd = function() {
    var time = this.timeline.time();
    var duration = this.timeline.duration();
    return Math.abs(duration - time) < .02;
   };
   Player.prototype.isAtStepStart = function(nudgeToStart) {
    if (nudgeToStart === void 0) {
     nudgeToStart = false;
    }
    if (this.currentStep.isAtStart(this.timeline.time())) {
     if (nudgeToStart) this.timeline.seek(this.currentStep.startLabel);
     return true;
    }
    return false;
   };
   Player.prototype.isAtStepEnd = function() {
    return this.currentStep.isAtEnd(this.timeline.time());
   };
   Player.prototype.isPaused = function() {
    return this.timeline.paused();
   };
   Player.prototype.isFirstStep = function() {
    return this.currentStep.playerStepIndex === 0;
   };
   Player.prototype.isLastStep = function() {
    return this.currentStep.playerStepIndex === this.steps.length - 1;
   };
   Player.prototype.triggerStateChanged = function() {
    this.stateChanged.trigger(this.timeline.paused());
   };
   Player.prototype.triggerProgressChanged = function() {
    var state = this.state;
    state.time = this.timeline.time();
    state.progress = this.timeline.progress();
    if (state.time < this.currentStep.startTime || state.time > this.currentStep.stopTime) {
     this.currentStep = this.getStepAtTime(state.time);
    }
    state.step = this.currentStep;
    this.progressChanged.trigger(state);
   };
   Player.prototype.triggerStepComplete = function(step) {
    if (this.animating) return;
    this.timeline.pause(step.stopTime);
    this.stepComplete.trigger(step);
   };
   Player.prototype.getNextStep = function(cycle) {
    if (cycle === void 0) {
     cycle = true;
    }
    var nextStepIndex = this.currentStep.playerStepIndex + 1;
    if (nextStepIndex >= this.steps.length) nextStepIndex = cycle ? 0 :this.currentStep.playerStepIndex;
    return this.steps[nextStepIndex];
   };
   Player.prototype.getPriorStep = function() {
    var priorStepIndex = this.currentStep.playerStepIndex - 1;
    if (priorStepIndex < 0) priorStepIndex = this.steps.length - 1;
    return this.steps[priorStepIndex];
   };
   Player.prototype.getStepAtTime = function(time) {
    if (time >= this.currentStep.startTime && time <= this.currentStep.stopTime) {
     return this.currentStep;
    }
    var seekStep = this.steps[0];
    for (var index = 1; index < this.steps.length; index++) {
     var step = this.steps[index];
     if (step.startTime > time) break;
     seekStep = step;
    }
    return seekStep;
   };
   Player.prototype.moveTo = function(time, animate, thenPlay) {
    var _this = this;
    if (time < .01) time = .01;
    var destStep = this.getStepAtTime(time);
    var isAtStepStart = destStep.isAtStart(time);
    var isAtStepEnd = destStep.isAtEnd(time);
    var timeDistance = Math.abs(this.timeline.time() - time);
    if (timeDistance > 0 && animate) {
     var duration = Math.max(.1, Math.min(timeDistance / 5, 1.5));
     this.alignSequencedItemsToStep(destStep, isAtStepStart, isAtStepEnd, true);
     this.animating = true;
     var tl = new TimelineLite();
     tl.to(this.timeline, duration, {
      time:time,
      ease:Circ.easeOut,
      onComplete:function() {
       _this.timeline.pause(time);
       _this.animating = false;
       if (thenPlay) _this.thenPlay(isAtStepEnd, true);
       _this.triggerProgressChanged();
       _this.triggerStateChanged();
      }
     });
    } else {
     this.timeline.pause(time);
     if (thenPlay) this.thenPlay(isAtStepEnd);
     this.triggerProgressChanged();
    }
   };
   Player.prototype.thenPlay = function(isAtStepEnd, playNextStep) {
    if (playNextStep === void 0) {
     playNextStep = true;
    }
    if (isAtStepEnd) {
     if (this.getRemainingSubStepCount() > 0) {
      this.playSubStep(this.currentSubStep + 1);
     } else {
      this.currentStep = this.getNextStep(true);
      this.timeline.seek(this.currentStep.startTime, true);
      if (this.isFirstStep()) this.alignSequencedItemsToStep(this.currentStep, true, false, false); else this.playSubStep(0, false);
      if (playNextStep) {
       this.timeline.play();
       this.playSubStep(1);
      }
     }
    } else {
     this.timeline.play();
     this.playSubStep(1);
    }
    this.triggerStateChanged();
   };
   Player.prototype.seek = function(progress, animate) {
    if (animate === void 0) {
     animate = false;
    }
    progress = Math.max(0, Math.min(progress, 1));
    var time = this.timeline.duration() * progress;
    this.moveTo(time, animate, false);
    this.currentStep = this.getStepAtTime(time);
    this.alignSequencedItemsToStep(this.currentStep, this.currentStep.isAtStart(time), this.currentStep.isAtEnd(time), false);
   };
   Player.prototype.seekStep = function(step, animate) {
    if (animate === void 0) {
     animate = false;
    }
    this.timeline.pause();
    this.timeline.seek(step.startLabel);
    this.currentStep = step;
    this.alignSequencedItemsToStep(step, true, false, animate);
    this.triggerProgressChanged();
    this.triggerStateChanged();
   };
   Player.prototype.alignSequencedItemsToStep = function(destStep, atStepStart, atStepEnd, animate) {
    var _this = this;
    if (animate === void 0) {
     animate = false;
    }
    var before = true;
    this.steps.forEach(function(step) {
     var isStep = step === destStep;
     if (isStep) before = false;
     if (!isStep || !atStepEnd) {
      var position = 0;
      if (step === destStep) {
       if (atStepStart) position = 0; else position = 1;
      } else {
       position = before ? -1 :0;
      }
      step.sequencedItems.forEach(function(item) {
       item.moveToSubStep(position, animate, _this.frame.camera.size);
      });
     }
    });
   };
   Player.prototype.playSubStep = function(subStep, animate) {
    var _this = this;
    if (animate === void 0) {
     animate = true;
    }
    this.currentSubStep = subStep;
    this.currentStep.sequencedItems.forEach(function(item) {
     item.moveToSubStep(subStep, animate, _this.frame.camera.size);
    });
    this.state.subStep = Math.max(0, this.currentSubStep - 1);
    this.progressChanged.trigger(this.state);
   };
   Player.prototype.getRemainingSubStepCount = function() {
    return Math.max(0, this.currentStep.getSubStepCount() - this.currentSubStep);
   };
   Player.prototype.togglePlay = function() {
    if (this.isPaused()) {
     if (this.isAtStoryEnd()) this.seekStep(this.steps[0]); else this.playCurrentStep();
    } else this.pause();
   };
   Player.prototype.playCurrentStep = function() {
    if (this.isAtStepStart(true)) this.playSubStep(1);
    this.timeline.play();
    this.triggerStateChanged();
   };
   Player.prototype.playCurrentStepDelayed = function(delay) {
    var _this = this;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(function() {
     _this.playCurrentStep();
    }, delay);
   };
   Player.prototype.playNextStep = function(animate) {
    if (animate === void 0) {
     animate = false;
    }
    if (this.isAtStepStart()) {
     this.moveTo(this.currentStep.startTime, false, true);
    } else {
     var playNext = !this.isLastStep() || this.isAtStoryEnd();
     this.moveTo(this.currentStep.stopTime, animate, playNext);
    }
   };
   Player.prototype.playNextStepDelayed = function(delay) {
    var _this = this;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(function() {
     _this.playNextStep();
    }, delay);
   };
   Player.prototype.backStep = function(animate) {
    if (animate === void 0) {
     animate = false;
    }
    if (this.isAtStepEnd() && this.currentSubStep > 1) {
     this.playSubStep(this.currentSubStep - 1);
    } else if (this.isFirstStep() && (this.currentSubStep > 0 || this.timeline.time() > this.currentStep.startTime)) {
     if (!this.animating) {
      this.moveTo(this.currentStep.startTime, true, false);
      this.playSubStep(0);
     }
    } else if (this.isAtStoryStart()) {
     if (!this.animating) {
      this.currentStep = this.steps[this.steps.length - 1];
      this.timeline.pause(this.currentStep.stopTime);
      this.alignSequencedItemsToStep(this.currentStep, false, true, false);
      this.playSubStep(this.currentStep.getSubStepCount());
      this.triggerProgressChanged();
     }
    } else {
     this.currentStep = this.getPriorStep();
     this.playSubStep(this.currentStep.getSubStepCount());
     this.moveTo(this.currentStep.stopTime, animate, false);
    }
   };
   Player.prototype.getCurrentStep = function() {
    return this.currentStep;
   };
   Player.prototype.pause = function() {
    clearTimeout(this.timeout);
    this.timeline.pause();
    this.triggerStateChanged();
   };
   return Player;
  }();
  Play.Player = Player;
 })(Play = ProStyle.Play || (ProStyle.Play = {}));

 var Util;
 (function(Util) {
  var throttleTimer = null;
  function throttle(fn, delay) {
   var context = this, args = arguments;
   return function() {
    clearTimeout(throttleTimer);
    throttleTimer = setTimeout(function() {
     fn.apply(context, args);
    }, delay);
   };
  }
  Util.throttle = throttle;
 })(Util = ProStyle.Util || (ProStyle.Util = {}));

 var Views;
 (function(Views) {
  var Util = ProStyle.Util;
  var CanvasView = function(_super) {
   __extends(CanvasView, _super);
   function CanvasView(story, div) {
    _super.call(this, story.canvas, div);
    this.story = story;
    Util.setElementText(div, "");
    this.fullScreen = div instanceof HTMLBodyElement;
    this.generateStyles();
    this.setCanvasSize();
    this.frame = new Views.FrameView(this.story, this);
    this.player = new ProStyle.Play.Player(this.frame);
    this.hideContextMenu();
   }
   CanvasView.prototype.startControllers = function() {
    var _this = this;
    this.story.controllers.forEach(function(controller) {
     controller.start(_this, _this.player);
    });
   };
   CanvasView.prototype.stopControllers = function() {
    this.story.controllers.forEach(function(controller) {
     controller.stop();
    });
   };
   CanvasView.prototype.resize = function(force) {
    if (force === void 0) {
     force = false;
    }
    if (this.setCanvasSize() || force) {
     this.frame.resize();
     this.player.refreshTimeline(this.frame);
     this.story.controllers.forEach(function(controller) {
      controller.resize();
     });
    }
   };
   CanvasView.prototype.setCanvasSize = function() {
    if (this.fullScreen) {
     this.size = new ProStyle.Types.Size(this.div.clientWidth, this.div.clientHeight);
     return true;
    }
    var width = this.div.clientWidth;
    if (this.size !== undefined && width === this.size.width) return false;
    var padding = this.story.canvas.padding / 100 * width;
    this.div.style.height = (width - padding) / this.story.frame.aspectRatio + padding + "px";
    TweenLite.set(this.div, {
     clearProps:"transform"
    });
    this.size = new ProStyle.Types.Size(this.div.clientWidth, this.div.clientHeight);
    return true;
   };
   CanvasView.prototype.generateStyles = function() {
    var styleElement = Util.getStyleElement("prostyle-styles");
    var selectors = [];
    var styles = {
     selectors:selectors
    };
    if (this.fullScreen) {
     styles.selectors.push("html");
     styles["html"] = {
      height:"100%"
     };
     styles.selectors.push("body");
     styles["body"] = {
      height:"100%",
      margin:0,
      overflow:"hidden"
     };
    }
    styles.selectors.push(".prostyle");
    styles[".prostyle"] = {
     position:"absolute",
     transform:"translate(-50%,-50%) translate3d(0, 0, 0)",
     top:"50%",
     left:"50%"
    };
    styles.selectors.push(".prostyle.prostyle-frame");
    styles[".prostyle.prostyle-frame"] = {
     position:"relative"
    };
    styles.selectors.push(".prostyle.prostyle-camera");
    styles[".prostyle.prostyle-camera"] = {
     position:"relative",
     transformStyle:"preserve-3d"
    };
    styles.selectors.push(".prostyle.prostyle-flow");
    styles[".prostyle.prostyle-flow"] = {
     width:"100%",
     height:"100%",
     transformStyle:"preserve-3d"
    };
    styles.selectors.push(".prostyle.prostyle-page");
    styles[".prostyle.prostyle-page"] = {
     width:"100%",
     height:"100%",
     transformStyle:"preserve-3d"
    };
    styles.selectors.push(".prostyle.prostyle-item");
    styles[".prostyle.prostyle-item"] = {
     userSelect:"none",
     whiteSpace:"nowrap"
    };
    styles.selectors.push(".prostyle.prostyle-item.unknown");
    styles[".prostyle.prostyle-item.unknown"] = {
     fontSize:"24px",
     fontWeight:"bold",
     color:"#C00",
     padding:"1% 1%",
     backgroundColor:"#FFF",
     border:"solid 3px #C00",
     opacity:.6
    };
    styles.selectors.push(".prostyle.prostyle-layer");
    styles[".prostyle.prostyle-layer"] = {
     transformStyle:"preserve-3d"
    };
    styles.selectors.push(".prostyle.prostyle-text");
    styles[".prostyle.prostyle-text"] = {
     userSelect:"none",
     whiteSpace:"nowrap",
     transformStyle:"preserve-3d"
    };
    styles.selectors.push(".prostyle-text-line");
    styles[".prostyle-text-line"] = {
     position:"relative",
     display:"block",
     transformStyle:"preserve-3d"
    };
    styles.selectors.push(".prostyle-text-line-stacked");
    styles[".prostyle-text-line-stacked"] = {
     position:"absolute",
     display:"block",
     transformStyle:"preserve-3d"
    };
    styles.selectors.push(".prostyle-text-word");
    styles[".prostyle-text-word"] = {
     position:"relative",
     display:"inline-block",
     transformStyle:"preserve-3d"
    };
    styles.selectors.push(".prostyle-text-word-stacked");
    styles[".prostyle-text-word-stacked"] = {
     position:"absolute",
     display:"inline-block",
     transformStyle:"preserve-3d"
    };
    styles.selectors.push(".prostyle-text-char");
    styles[".prostyle-text-char"] = {
     position:"relative",
     display:"inline-block"
    };
    styles.selectors.push(".prostyle-text-char-stacked");
    styles[".prostyle-text-char-stacked"] = {
     position:"absolute",
     display:"inline-block"
    };
    styleElement.innerHTML = Util.encodeStyleSheet(styles);
   };
   CanvasView.prototype.hideContextMenu = function() {
    this.div.oncontextmenu = function(e) {};
   };
   return CanvasView;
  }(Views.View);
  Views.CanvasView = CanvasView;
 })(Views = ProStyle.Views || (ProStyle.Views = {}));

 var Controllers;
 (function(Controllers) {
  var Controller = function() {
   function Controller(name) {
    this.name = name;
   }
   Controller.prototype.start = function(canvas, player) {
    ProStyle.Util.logError("ProStyle.Controllers.Controller.start", "Abstract base method called");
   };
   Controller.prototype.stop = function() {
    ProStyle.Util.logError("ProStyle.Controllers.Controller.stop", "Abstract base method called");
   };
   Controller.prototype.resize = function() {};
   Controller.prototype.serialize = function() {
    ProStyle.Util.logError("ProStyle.Controllers.Controller.serialize", "Abstract base method called");
   };
   return Controller;
  }();
  Controllers.Controller = Controller;
 })(Controllers = ProStyle.Controllers || (ProStyle.Controllers = {}));

 var Extensions;
 (function(Extensions) {
  var Controllers;
  (function(Controllers) {
   var Auto;
   (function(Auto) {
    var AutoController = function(_super) {
     __extends(AutoController, _super);
     function AutoController(_start, _stepAdvance, _restart) {
      if (_start === void 0) {
       _start = true;
      }
      if (_stepAdvance === void 0) {
       _stepAdvance = false;
      }
      if (_restart === void 0) {
       _restart = false;
      }
      _super.call(this, "auto");
      this._start = _start;
      this._stepAdvance = _stepAdvance;
      this._restart = _restart;
      this.autoStart = true;
      this.autoStartDelay = 0;
      this.autoStepAdvance = false;
      this.autoStepAdvanceDelay = 0;
      this.autoRestart = false;
      this.autoRestartDelay = 0;
      this.stepCompleteBound = undefined;
      this.canvas = undefined;
      this.player = undefined;
      this.stepCompleteBound = this.stepComplete.bind(this);
      if (typeof _start == "boolean") {
       this.autoStart = _start;
      } else if (typeof _start == "number") {
       this.autoStartDelay = Math.max(0, _start);
      }
      if (typeof _stepAdvance == "boolean") {
       this.autoStepAdvance = _stepAdvance;
      } else if (typeof _stepAdvance == "number") {
       this.autoStepAdvance = true;
       this.autoStepAdvanceDelay = Math.max(0, _stepAdvance);
      }
      if (typeof _restart == "boolean") {
       this.autoRestart = _restart;
      } else if (typeof _restart == "number") {
       this.autoRestart = true;
       this.autoRestartDelay = Math.max(0, _restart);
      }
     }
     AutoController.prototype.start = function(canvas, player) {
      this.stop();
      this.canvas = canvas;
      this.player = player;
      player.stepComplete.on(this.stepCompleteBound);
      player.pause();
      if (this.autoStart) {
       player.playCurrentStepDelayed(this.autoRestartDelay);
      }
     };
     AutoController.prototype.stop = function() {
      if (this.player !== undefined) {
       this.player.stepComplete.off(this.stepCompleteBound);
       this.canvas = undefined;
       this.player = undefined;
      }
     };
     AutoController.prototype.stepComplete = function(step) {
      var player = this.player;
      player.pause();
      var isAtStoryEnd = player.isAtStoryEnd();
      var advance = isAtStoryEnd ? this.autoRestart :this.autoStepAdvance;
      var advanceDelay = isAtStoryEnd ? this.autoRestartDelay :this.autoStepAdvanceDelay;
      if (advance) {
       var delayTime = step.step.autoAdvanceDelay == undefined ? advanceDelay :ProStyle.Util.convertToNumber(step.step.autoAdvanceDelay);
       player.playNextStepDelayed(Math.max(0, delayTime));
      } else {
       player.timeline.seek(step.stopTime, true);
      }
     };
     AutoController.prototype.resize = function() {};
     AutoController.prototype.serialize = function() {
      return Auto.serialize(this);
     };
     return AutoController;
    }(ProStyle.Controllers.Controller);
    Auto.AutoController = AutoController;
   })(Auto = Controllers.Auto || (Controllers.Auto = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Controllers;
  (function(Controllers) {
   var Auto;
   (function(Auto) {
    function deserialize(json) {
     return new Auto.AutoController(json.start, json.stepAdvance, json.restart);
    }
    Auto.deserialize = deserialize;
   })(Auto = Controllers.Auto || (Controllers.Auto = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Controllers;
  (function(Controllers) {
   var Auto;
   (function(Auto) {
    function serialize(controller) {
     var json = {};
     json.start = controller._start;
     json.stepAdvance = controller._stepAdvance;
     json.restart = controller._restart;
     return json;
    }
    Auto.serialize = serialize;
   })(Auto = Controllers.Auto || (Controllers.Auto = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Controllers;
  (function(Controllers) {
   var Debug;
   (function(Debug) {
    var DebugController = function(_super) {
     __extends(DebugController, _super);
     function DebugController(cssClass) {
      if (cssClass === void 0) {
       cssClass = "";
      }
      _super.call(this, "track");
      this.cssClass = cssClass;
      this.progressBound = undefined;
      this.canvas = undefined;
      this.player = undefined;
      this.div = undefined;
      this.progressBound = this.progress.bind(this);
     }
     DebugController.prototype.start = function(canvas, player) {
      this.stop();
      this.canvas = canvas;
      this.player = player;
      this.div = ProStyle.Util.createChildDivElement(canvas.div);
      if (this.cssClass) {
       this.div.classList.add(this.cssClass);
      } else {
       TweenLite.set(this.div, {
        position:"absolute",
        backgroundColor:"black",
        color:"white",
        fontSize:14,
        padding:3,
        top:0,
        left:0
       });
      }
      this.player.progressChanged.on(this.progressBound);
     };
     DebugController.prototype.stop = function() {
      if (this.player !== undefined) {
       this.player.progressChanged.off(this.progressBound);
       this.canvas.div.removeChild(this.div);
       this.div = undefined;
       this.canvas = undefined;
       this.player = undefined;
      }
     };
     DebugController.prototype.progress = function(state) {
      this.div.innerHTML = state.time.toFixed(3) + " (" + Math.round(state.progress * 100) + "%) " + state.step.label + state.subStep;
     };
     DebugController.prototype.resize = function() {};
     DebugController.prototype.serialize = function() {
      return Debug.serialize(this);
     };
     return DebugController;
    }(ProStyle.Controllers.Controller);
    Debug.DebugController = DebugController;
   })(Debug = Controllers.Debug || (Controllers.Debug = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Controllers;
  (function(Controllers) {
   var Debug;
   (function(Debug) {
    function deserialize(json) {
     return new Debug.DebugController(json.cssClass);
    }
    Debug.deserialize = deserialize;
   })(Debug = Controllers.Debug || (Controllers.Debug = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Controllers;
  (function(Controllers) {
   var Debug;
   (function(Debug) {
    function serialize(controller) {
     var json = {};
     if (controller.cssClass) json.cssClass = controller.cssClass;
     return json;
    }
    Debug.serialize = serialize;
   })(Debug = Controllers.Debug || (Controllers.Debug = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Controllers;
  (function(Controllers) {
   var Keyboard;
   (function(Keyboard) {
    var Util = ProStyle.Util;
    var KeyboardListener = function() {
     function KeyboardListener(player, controller) {
      this.player = player;
      this.controller = controller;
      this.keydownBound = undefined;
      this.keyupBound = undefined;
      this.map = {};
      this.keydownBound = this.keydown.bind(this);
      this.keyupBound = this.keyup.bind(this);
      var keys = controller.keyMap || {};
      var defaultKeys = this.getDefaultKeys();
      var map = {};
      var count = 0;
      count += this.mapKeys(map, keys.end || defaultKeys.end, this.end.bind(this));
      count += this.mapKeys(map, keys.start || defaultKeys.start, this.start.bind(this));
      count += this.mapKeys(map, keys.back || defaultKeys.back, this.back.bind(this));
      count += this.mapKeys(map, keys.pause || defaultKeys.pause, this.pause.bind(this));
      count += this.mapKeys(map, keys.play || defaultKeys.play, this.play.bind(this));
      count += this.mapKeys(map, keys.togglePlay || defaultKeys.togglePlay, this.togglePlay.bind(this));
      count += this.mapKeys(map, keys.playNext || defaultKeys.playNext, this.playNext.bind(this));
      this.map = map;
      if (count > 0) this.listenForKeyPresses();
     }
     KeyboardListener.prototype.getDefaultKeys = function() {
      return {
       play:[ 13, 116 ],
       pause:[ 19, 27 ],
       togglePlay:[ 32 ],
       back:[ 8, 33, 37, 38, 188 ],
       playNext:[ 34, 39, 40, 9 ],
       start:[ 36, 190 ],
       end:[ 35 ]
      };
     };
     KeyboardListener.prototype.listenForKeyPresses = function() {
      document.addEventListener("keydown", this.keydownBound, false);
      document.addEventListener("keyup", this.keyupBound, false);
     };
     KeyboardListener.prototype.keydown = function(event) {
      if (event.ctrlKey) return;
      var c = event.keyCode;
      var f = this.map[c];
      if (f instanceof Function || c === 9) {
       event.preventDefault();
      }
     };
     KeyboardListener.prototype.keyup = function(event) {
      if (event.ctrlKey) return;
      var c = event.keyCode;
      var f = this.map[c];
      if (f instanceof Function || c === 9) {
       if (f instanceof Function) f();
       event.preventDefault();
      }
     };
     KeyboardListener.prototype.stop = function() {
      document.removeEventListener("keydown", this.keydownBound, false);
      document.removeEventListener("keyup", this.keyupBound, false);
     };
     KeyboardListener.prototype.mapKeys = function(map, keys, func) {
      var c = 0;
      if (keys instanceof Array) {
       keys.forEach(function(k) {
        var key = Util.convertToNumber(k);
        if (key > 0) {
         map[key] = func;
         c++;
        }
       });
      }
      return c;
     };
     KeyboardListener.prototype.play = function() {
      this.player.playCurrentStep();
     };
     KeyboardListener.prototype.pause = function() {
      this.player.pause();
     };
     KeyboardListener.prototype.togglePlay = function() {
      this.player.togglePlay();
     };
     KeyboardListener.prototype.back = function() {
      this.player.backStep(true);
     };
     KeyboardListener.prototype.playNext = function() {
      this.player.playNextStep(true);
     };
     KeyboardListener.prototype.start = function() {
      this.player.seekStep(this.player.steps[0], false);
     };
     KeyboardListener.prototype.end = function() {
      this.player.seekStep(this.player.steps[0], false);
      this.player.backStep(false);
     };
     return KeyboardListener;
    }();
    Keyboard.KeyboardListener = KeyboardListener;
   })(Keyboard = Controllers.Keyboard || (Controllers.Keyboard = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Controllers;
  (function(Controllers) {
   var Keyboard;
   (function(Keyboard) {
    var KeyboardController = function(_super) {
     __extends(KeyboardController, _super);
     function KeyboardController(keyMap) {
      _super.call(this, "keyboard");
      this.keyMap = keyMap;
      this.canvas = undefined;
      this.player = undefined;
      this.listener = undefined;
     }
     KeyboardController.prototype.start = function(canvas, player) {
      this.stop();
      this.canvas = canvas;
      this.player = player;
      this.listener = new Keyboard.KeyboardListener(this.player, this);
     };
     KeyboardController.prototype.stop = function() {
      if (this.player !== undefined) {
       this.listener.stop();
       this.listener = undefined;
       this.canvas = undefined;
       this.player = undefined;
      }
     };
     KeyboardController.prototype.serialize = function() {
      return Keyboard.serialize(this);
     };
     return KeyboardController;
    }(ProStyle.Controllers.Controller);
    Keyboard.KeyboardController = KeyboardController;
   })(Keyboard = Controllers.Keyboard || (Controllers.Keyboard = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Controllers;
  (function(Controllers) {
   var Keyboard;
   (function(Keyboard) {
    function deserialize(json) {
     return new Keyboard.KeyboardController(json.keys);
    }
    Keyboard.deserialize = deserialize;
   })(Keyboard = Controllers.Keyboard || (Controllers.Keyboard = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Controllers;
  (function(Controllers) {
   var Keyboard;
   (function(Keyboard) {
    function serialize(controller) {
     var json = {};
     return json;
    }
    Keyboard.serialize = serialize;
   })(Keyboard = Controllers.Keyboard || (Controllers.Keyboard = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Controllers;
  (function(Controllers) {
   var Resize;
   (function(Resize) {
    var ResizeController = function(_super) {
     __extends(ResizeController, _super);
     function ResizeController(throttleDelay) {
      if (throttleDelay === void 0) {
       throttleDelay = .01;
      }
      _super.call(this, "resize");
      this.throttleDelay = throttleDelay;
      this.canvasResize = undefined;
      if (throttleDelay < 0) throttleDelay = 0;
     }
     ResizeController.prototype.start = function(canvas, player) {
      this.stop();
      this.canvasResize = canvas.resize.bind(canvas);
      if (this.throttleDelay > 0) {
       window.addEventListener("resize", ProStyle.Util.throttle(this.canvasResize, this.throttleDelay * 1e3), false);
      } else {
       window.addEventListener("resize", this.canvasResize, false);
      }
     };
     ResizeController.prototype.stop = function() {
      if (this.canvasResize !== undefined) {
       window.removeEventListener("resize", this.canvasResize, false);
       this.canvasResize = undefined;
      }
     };
     ResizeController.prototype.resize = function() {};
     ResizeController.prototype.serialize = function() {
      return Resize.serialize(this);
     };
     return ResizeController;
    }(ProStyle.Controllers.Controller);
    Resize.ResizeController = ResizeController;
   })(Resize = Controllers.Resize || (Controllers.Resize = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Controllers;
  (function(Controllers) {
   var Resize;
   (function(Resize) {
    function deserialize(json) {
     var throttleDelay = ProStyle.Util.convertToNumber(json.throttleDelay);
     return new Resize.ResizeController(throttleDelay);
    }
    Resize.deserialize = deserialize;
   })(Resize = Controllers.Resize || (Controllers.Resize = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Controllers;
  (function(Controllers) {
   var Resize;
   (function(Resize) {
    function serialize(controller) {
     var json = {};
     return json;
    }
    Resize.serialize = serialize;
   })(Resize = Controllers.Resize || (Controllers.Resize = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));

 var Util;
 (function(Util) {
  function logError(method, message) {
   console.log("ProStyle Error: " + method + " - " + message);
  }
  Util.logError = logError;
 
  function querySelector(selector, context) {
   if (context === void 0) {
    context = document;
   }
   try {
    return context.querySelector(selector);
   } catch (e) {
    Util.logError("Util.querySelector", e.message);
   }
  }
  Util.querySelector = querySelector;
 
  function createChildDivElement(parentDiv, cssClass) {
   if (cssClass === void 0) {
    cssClass = undefined;
   }
   var div = document.createElement("div");
   if (cssClass) div.className = cssClass;
   parentDiv.appendChild(div);
   return div;
  }
  Util.createChildDivElement = createChildDivElement;
 })(Util = ProStyle.Util || (ProStyle.Util = {}));

 var Extensions;
 (function(Extensions) {
  var Controllers;
  (function(Controllers) {
   var Track;
   (function(Track) {
    var Util = ProStyle.Util;
    var Svg = ProStyle.Svg;
    var TrackBar = function() {
     function TrackBar(canvas, player, controller) {
      this.canvas = canvas;
      this.player = player;
      this.controller = controller;
      this.COLOR = "#BBB";
      this.HIGHLIGHT_COLOR = "#FFF";
      this.BACK_COLOR = "rgba(0,0,0,0.5)";
      this.STEP_COLOR_1 = "#222";
      this.STEP_COLOR_2 = "#000";
      this.divScrubberStep = [];
      this.progress = 0;
      this.generateStyles();
      this.setupButtons();
      this.setupScrubber();
      this.setupPlayerEvents();
      this.setupMenuOnMouseMove();
      this.resize();
     }
     TrackBar.prototype.setupButtons = function() {
      var player = this.canvas.player;
      this.bgDiv = Util.createChildDivElement(this.canvas.div, this.bgClass);
      this.logoDiv = this.addButton("ProStyle", Svg.logo.svg, function() {
       window.open("http://prostyle.io/", "_blank");
      });
      this.backDiv = this.addButton("Back", Svg.toStart.svg, function() {
       player.backStep(true);
      });
      this.playDiv = this.addButton("Play", Svg.play.svg, function() {
       player.togglePlay();
      });
      this.nextDiv = this.addButton("Play Next", Svg.fastForward.svg, function() {
       player.playNextStep(true);
      });
     };
     TrackBar.prototype.setupScrubber = function() {
      var player = this.canvas.player;
      this.divScrubber = Util.createChildDivElement(this.bgDiv, this.scrubberClass);
      this.divScrubberBar = Util.createChildDivElement(this.divScrubber, this.scrubberBarClass);
      for (var i = player.steps.length - 1; i >= 0; i--) {
       this.divScrubberStep.push(Util.createChildDivElement(this.divScrubberBar, this.scrubberStepClass));
      }
      this.divScrubberProgress = Util.createChildDivElement(this.divScrubberBar, this.scrubberProgressClass);
      this.divScrubberHoverPoint = Util.createChildDivElement(this.divScrubberBar, this.scrubberHoverPointClass);
      this.divScrubberHoverText = Util.createChildDivElement(this.divScrubber, this.scrubberHoverTextClass);
      this.divScrubber.onmousemove = this.scrubberMouseMove.bind(this);
      this.divScrubber.onclick = this.scrubberMouseClick.bind(this);
     };
     TrackBar.prototype.scrubberMouseMove = function(e) {
      var rect = this.canvas.div.getBoundingClientRect();
      var player = this.canvas.player;
      var s = this.scrubberSize;
      var barWidth = s.width - s.barHeight;
      var barHeight2 = s.barHeight / 2;
      var x = Math.max(barHeight2, Math.min(e.clientX - rect.left - s.left, s.width - barHeight2)) - s.barHeight;
      this.divScrubberHoverPoint.style.left = (x + barHeight2 + barHeight2 / 2 - 1).toString() + "px";
      var duration = player.timeline.duration();
      var t = duration * (x + barHeight2) / barWidth;
      this.divScrubberHoverText.style.left = x.toString() + "px";
      Util.setElementText(this.divScrubberHoverText, t.toFixed(2));
     };
     TrackBar.prototype.scrubberMouseClick = function(e) {
      var rect = this.canvas.div.getBoundingClientRect();
      var player = this.canvas.player;
      var s = this.scrubberSize;
      var barWidth = s.width - s.barHeight;
      var barHeight2 = s.barHeight / 2;
      var x = Math.max(barHeight2, Math.min(e.clientX - rect.left - s.left, s.width - barHeight2)) - s.barHeight;
      player.seek((x + barHeight2) / barWidth, true);
     };
     TrackBar.prototype.setupPlayerEvents = function() {
      var player = this.canvas.player;
      player.progressChanged.on(this.progressChanged.bind(this));
      player.stateChanged.on(this.stateChanged.bind(this));
     };
     TrackBar.prototype.setupMenuOnMouseMove = function() {
      var div = this.canvas.div;
      var fullScreen = this.canvas.fullScreen;
      var hideMenu = Util.throttle(function() {
       div.classList.remove("mouseMovement");
       if (fullScreen) div.style.cursor = "none";
      }, 1500);
      div.onmousemove = function(e) {
       div.classList.add("mouseMovement");
       if (fullScreen) div.style.cursor = "auto";
       hideMenu();
      };
     };
     TrackBar.prototype.progressChanged = function(state) {
      this.progress = state.progress;
      this.updateScrubberProgress();
     };
     TrackBar.prototype.stateChanged = function(isPaused) {
      if (isPaused) {
       this.playDiv.innerHTML = Svg.play.svg;
      } else {
       this.playDiv.innerHTML = Svg.pause.svg;
      }
     };
     TrackBar.prototype.resize = function() {
      var w = this.canvas.div.clientWidth;
      var h = this.canvas.div.clientHeight;
      var s = Math.min(Math.max(40, Math.min(w / 12, 200)), Math.max(40, Math.min(h / 12, 200)));
      var m = Math.max(5, s / 3);
      TweenMax.set(this.bgDiv, {
       left:0,
       top:h - s,
       width:w,
       height:s
      });
      var logoW = s * .9;
      var nextW = s * .88;
      var playW = s * .53;
      var backW = s * .6;
      var backL = w - nextW - playW - backW - m * 3.2;
      TweenMax.set(this.logoDiv, {
       left:m / 2,
       top:0,
       height:s,
       width:logoW
      });
      TweenMax.set(this.nextDiv, {
       left:w - nextW - m,
       top:0,
       height:s,
       width:nextW
      });
      TweenMax.set(this.playDiv, {
       left:w - nextW - playW - m * 2,
       top:0,
       height:s,
       width:playW
      });
      TweenMax.set(this.backDiv, {
       left:backL,
       top:0,
       height:s,
       width:backW
      });
      this.scrubberSize = {
       left:logoW + m,
       width:backL - logoW - m * 2,
       height:s,
       barHeight:s / 3
      };
      this.resizeScrubber();
      this.updateScrubberProgress();
     };
     TrackBar.prototype.resizeScrubber = function() {
      var _this = this;
      var s = this.scrubberSize;
      var player = this.canvas.player;
      var stepCount = player.steps.length - 1;
      var duration = player.timeline.duration();
      var radius = s.barHeight / 2;
      var barWidth = s.width - s.barHeight;
      this.divScrubber.style.left = s.left + "px";
      this.divScrubber.style.width = s.width + "px";
      this.divScrubber.style.height = s.height + "px";
      this.divScrubberBar.style.width = s.width + "px";
      this.divScrubberBar.style.top = (s.height - s.barHeight) / 2 + "px";
      this.divScrubberBar.style.height = s.barHeight + "px";
      this.divScrubberBar.style.borderRadius = radius + "px";
      player.steps.forEach(function(step, index) {
       var back = _this.divScrubberStep[stepCount - index];
       back.style.left = (barWidth * step.startTime / duration).toString() + "px";
       back.style.width = (barWidth * step.time / duration + s.barHeight).toString() + "px";
       back.style.height = s.barHeight + "px";
       back.style.borderRadius = radius + "px";
      });
      this.divScrubberHoverPoint.style.height = radius + "px";
      this.divScrubberHoverPoint.style.width = radius + "px";
      this.divScrubberHoverPoint.style.top = (s.barHeight / 4 - 1).toString() + "px";
      this.divScrubberHoverPoint.style.borderRadius = radius + "px";
      this.divScrubberHoverText.style.fontSize = s.barHeight * .9 + "px";
      this.divScrubberProgress.style.height = s.barHeight + "px";
      this.divScrubberProgress.style.borderRadius = radius + "px";
      this.updateScrubberProgress();
     };
     TrackBar.prototype.updateScrubberProgress = function() {
      var s = this.scrubberSize;
      var barWidth = s.width - s.barHeight + 2;
      this.divScrubberProgress.style.width = (barWidth * this.progress + s.barHeight).toString() + "px";
     };
     TrackBar.prototype.generateStyles = function() {
      var unique = new Date().getTime().toString();
      this.bgClass = "controls-bg-" + unique;
      this.btnClass = "controls-btn-" + unique;
      this.scrubberClass = "scrubber-" + unique;
      this.scrubberBarClass = "scrubber-back-" + unique;
      this.scrubberStepClass = "scrubber-step-" + unique;
      this.scrubberProgressClass = "scrubber-progress-" + unique;
      this.scrubberHoverPointClass = "scrubber-point-" + unique;
      this.scrubberHoverTextClass = "scrubber-text-" + unique;
      var styleElement = Util.getStyleElement("prostyle-track-controls-" + unique);
      var selectors = [];
      var styles = {
       selectors:selectors
      };
      styles.selectors.push("." + this.bgClass);
      styles["." + this.bgClass] = {
       transition:"opacity 300ms ease-in-out, transform 300ms ease-in-out",
       backgroundColor:this.controller.backColor || this.BACK_COLOR,
       position:"absolute",
       display:"inline-block",
       opacity:0,
       transform:"translate3d(0, 0, 20px)"
      };
      styles.selectors.push(".mouseMovement ." + this.bgClass);
      styles[".mouseMovement ." + this.bgClass] = {
       opacity:.3,
       transform:"translate3d(0, 0, 0)"
      };
      styles.selectors.push("." + this.bgClass + ":hover");
      styles["." + this.bgClass + ":hover"] = {
       opacity:1
      };
      styles.selectors.push(".prostyle:hover + ." + this.bgClass);
      styles[".prostyle:hover + ." + this.bgClass] = {
       opacity:.5
      };
      styles.selectors.push("." + this.bgClass + " div");
      styles["." + this.bgClass + " div"] = {
       position:"absolute"
      };
      styles.selectors.push("." + this.btnClass);
      styles["." + this.btnClass] = {
       cursor:"pointer"
      };
      styles.selectors.push("." + this.btnClass + " svg");
      styles["." + this.btnClass + " svg"] = {
       fill:this.controller.color || this.COLOR,
       width:"100%",
       height:"100%"
      };
      styles.selectors.push("." + this.btnClass + ":hover svg");
      styles["." + this.btnClass + ":hover svg"] = {
       fill:this.controller.highlightColor || this.HIGHLIGHT_COLOR
      };
      styles.selectors.push("." + this.scrubberClass);
      styles["." + this.scrubberClass] = {
       cursor:"none"
      };
      styles.selectors.push("." + this.scrubberBarClass);
      styles["." + this.scrubberBarClass] = {};
      styles.selectors.push("." + this.scrubberStepClass);
      styles["." + this.scrubberStepClass] = {
       borderRight:"solid 2px " + (this.controller.backColor || this.BACK_COLOR),
       backgroundColor:this.controller.stepColor1 || this.STEP_COLOR_1,
       background:"linear-gradient(to right, " + (this.controller.stepColor1 || this.STEP_COLOR_1) + ", " + (this.controller.stepColor2 || this.STEP_COLOR_2) + ")"
      };
      styles.selectors.push("." + this.scrubberProgressClass);
      styles["." + this.scrubberProgressClass] = {
       backgroundColor:this.controller.color || this.COLOR
      };
      styles.selectors.push("." + this.scrubberClass + ":hover ." + this.scrubberProgressClass);
      styles["." + this.scrubberClass + ":hover ." + this.scrubberProgressClass] = {
       backgroundColor:this.controller.highlightColor || this.HIGHLIGHT_COLOR
      };
      styles.selectors.push("." + this.scrubberHoverPointClass);
      styles["." + this.scrubberHoverPointClass] = {
       border:"solid 1px " + (this.controller.backColor || this.BACK_COLOR),
       backgroundColor:this.controller.highlightColor || this.HIGHLIGHT_COLOR,
       display:"none"
      };
      styles.selectors.push("." + this.scrubberClass + ":hover ." + this.scrubberHoverPointClass);
      styles["." + this.scrubberClass + ":hover ." + this.scrubberHoverPointClass] = {
       display:"block"
      };
      styles.selectors.push("." + this.scrubberHoverTextClass);
      styles["." + this.scrubberHoverTextClass] = {
       color:this.controller.color || this.COLOR,
       fontFamily:"font-family: arial, helvetica, sans-serif",
       display:"none"
      };
      styles.selectors.push("." + this.scrubberClass + ":hover ." + this.scrubberHoverTextClass);
      styles["." + this.scrubberClass + ":hover ." + this.scrubberHoverTextClass] = {
       display:"block"
      };
      styleElement.innerHTML = Util.encodeStyleSheet(styles);
     };
     TrackBar.prototype.addButton = function(tooltip, svg, clickEvent) {
      var button = Util.createChildDivElement(this.bgDiv, this.btnClass);
      button.className = this.btnClass;
      button.innerHTML = svg;
      button.title = tooltip;
      button.addEventListener("mousedown", function(e) {
       clickEvent();
       e.preventDefault();
       e.stopPropagation();
       return false;
      });
      return button;
     };
     return TrackBar;
    }();
    Track.TrackBar = TrackBar;
   })(Track = Controllers.Track || (Controllers.Track = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Controllers;
  (function(Controllers) {
   var Track;
   (function(Track) {
    var TrackController = function(_super) {
     __extends(TrackController, _super);
     function TrackController(autoHide, color, highlightColor, backColor, stepColor1, stepColor2) {
      if (autoHide === void 0) {
       autoHide = true;
      }
      if (color === void 0) {
       color = undefined;
      }
      if (highlightColor === void 0) {
       highlightColor = undefined;
      }
      if (backColor === void 0) {
       backColor = undefined;
      }
      if (stepColor1 === void 0) {
       stepColor1 = undefined;
      }
      if (stepColor2 === void 0) {
       stepColor2 = undefined;
      }
      _super.call(this, "track");
      this.autoHide = autoHide;
      this.color = color;
      this.highlightColor = highlightColor;
      this.backColor = backColor;
      this.stepColor1 = stepColor1;
      this.stepColor2 = stepColor2;
      this.canvas = undefined;
      this.player = undefined;
      this.trackBar = undefined;
     }
     TrackController.prototype.start = function(canvas, player) {
      this.stop();
      this.canvas = canvas;
      this.player = player;
      this.trackBar = new Track.TrackBar(canvas, player, this);
     };
     TrackController.prototype.stop = function() {
      if (this.player !== undefined) {
       this.trackBar = undefined;
       this.canvas = undefined;
       this.player = undefined;
      }
     };
     TrackController.prototype.resize = function() {
      if (this.trackBar !== undefined) this.trackBar.resize();
     };
     TrackController.prototype.serialize = function() {
      return Track.serialize(this);
     };
     return TrackController;
    }(ProStyle.Controllers.Controller);
    Track.TrackController = TrackController;
   })(Track = Controllers.Track || (Controllers.Track = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Controllers;
  (function(Controllers) {
   var Track;
   (function(Track) {
    function deserialize(json) {
     return new Track.TrackController(json.autoHide, json.color, json.highlightColor, json.backColor, json.stepColor1, json.stepColor2);
    }
    Track.deserialize = deserialize;
   })(Track = Controllers.Track || (Controllers.Track = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Controllers;
  (function(Controllers) {
   var Track;
   (function(Track) {
    function serialize(controller) {
     var json = {};
     json.autoHide = controller.autoHide;
     if (controller.color) json.color = controller.color;
     if (controller.highlightColor) json.highlightColor = controller.highlightColor;
     if (controller.backColor) json.backColor = controller.backColor;
     if (controller.stepColor1) json.stepColor1 = controller.stepColor1;
     if (controller.stepColor2) json.stepColor2 = controller.stepColor2;
     return json;
    }
    Track.serialize = serialize;
   })(Track = Controllers.Track || (Controllers.Track = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Controllers;
  (function(Controllers) {
   var Unknown;
   (function(Unknown) {
    var UnknownController = function(_super) {
     __extends(UnknownController, _super);
     function UnknownController(originalJson) {
      _super.call(this, originalJson.controllerType);
      this.originalJson = originalJson;
     }
     UnknownController.prototype.start = function(canvas, player) {};
     UnknownController.prototype.stop = function() {};
     UnknownController.prototype.resize = function() {};
     UnknownController.prototype.serialize = function() {
      return Unknown.serialize(this);
     };
     return UnknownController;
    }(ProStyle.Controllers.Controller);
    Unknown.UnknownController = UnknownController;
   })(Unknown = Controllers.Unknown || (Controllers.Unknown = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Controllers;
  (function(Controllers) {
   var Unknown;
   (function(Unknown) {
    function deserialize(json) {
     return new Unknown.UnknownController(json);
    }
    Unknown.deserialize = deserialize;
   })(Unknown = Controllers.Unknown || (Controllers.Unknown = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Controllers;
  (function(Controllers) {
   var Unknown;
   (function(Unknown) {
    function serialize(controller) {
     return controller.originalJson;
    }
    Unknown.serialize = serialize;
   })(Unknown = Controllers.Unknown || (Controllers.Unknown = {}));
  })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
 
  var Flows;
  (function(Flows) {
   var Simple;
   (function(Simple) {
    var Models = ProStyle.Models;
    var SimpleFlowModel = function(_super) {
     __extends(SimpleFlowModel, _super);
     function SimpleFlowModel(story, placement, defaultPageClass, pageAspectRatio) {
      _super.call(this, story, "simple", placement, pageAspectRatio, defaultPageClass);
     }
     SimpleFlowModel.prototype.getDefaultPageClassName = function() {
      return this.defaultPageClass || "page";
     };
     SimpleFlowModel.prototype.serialize = function() {
      return Simple.serialize(this);
     };
     SimpleFlowModel.prototype.createView = function(camera, flowIndex) {
      return new Simple.SimpleFlowView(this, camera, flowIndex);
     };
     return SimpleFlowModel;
    }(Models.Flows.FlowModel);
    Simple.SimpleFlowModel = SimpleFlowModel;
   })(Simple = Flows.Simple || (Flows.Simple = {}));
  })(Flows = Extensions.Flows || (Extensions.Flows = {}));
 })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));

 var Views;
 (function(Views) {
  var Items;
  (function(Items) {
   var Util = ProStyle.Util;
   var ItemView = function(_super) {
    __extends(ItemView, _super);
    function ItemView(model, itemViewSet, element) {
     if (element === void 0) {
      element = undefined;
     }
     _super.call(this, model, element || Util.createChildDivElement(itemViewSet.div, "prostyle prostyle-item"));
     this.model = model;
     this.itemViewSet = itemViewSet;
    }
    ItemView.prototype.initializeItem = function(timeline, cameraSize) {
     var pageAspectRatio = this.model.itemModelSet.flow.pageAspectRatio;
     var pageSize = cameraSize.getContainedSize(pageAspectRatio);
     this.initializeProperties(this.model.itemModelSet.flow.story, [ this.element ], pageSize, timeline, this.model.init, false);
    };
    ItemView.prototype.generateStepActions = function(itemViewSet, pageSize, timeline, stepIndex, label) {
     this.generateActionsForStep(itemViewSet, [ this.element ], pageSize, timeline, stepIndex, label, this.model.scriptSet);
    };
    return ItemView;
   }(Views.View);
   Items.ItemView = ItemView;
  })(Items = Views.Items || (Views.Items = {}));
 })(Views = ProStyle.Views || (ProStyle.Views = {}));

 var Util;
 (function(Util) {
  function logWarning(method, message) {
   console.log("ProStyle Warning: " + method + " - " + message);
  }
  Util.logWarning = logWarning;
 })(Util = ProStyle.Util || (ProStyle.Util = {}));

 var Models;
 (function(Models) {
  var Properties;
  (function(Properties) {
   var Variables;
   (function(Variables) {
    var VariableType = function() {
     function VariableType(label, jsonNames, cssName, text, defaultValue, alwaysInitializeCss) {
      this.label = label;
      this.jsonNames = jsonNames;
      this.cssName = cssName;
      this.text = text;
      this.defaultValue = defaultValue;
      this.alwaysInitializeCss = alwaysInitializeCss;
      if (defaultValue === undefined) {
       ProStyle.Util.logWarning("VariableType<T>", cssName + " has a default value of undefined.");
      }
     }
     VariableType.prototype.createVariable = function() {
      return new Variables.Variable(this);
     };
     VariableType.prototype.scrubValue = function(value) {
      return value;
     };
     VariableType.prototype.writeCssBuckets = function(story, model, containerSize, variable, buckets, initializing) {
      var _this = this;
      if (this.cssName === undefined) return;
      var value = variable.getValue(initializing);
      if (value === undefined) return;
      if (!initializing || value !== this.defaultValue || this.alwaysInitializeCss) {
       buckets.forEach(function(bucket) {
        _this.writeCssBucket(story, model, containerSize, bucket, value);
       });
      }
     };
     VariableType.prototype.writeCssBucket = function(story, model, containerSize, bucket, value) {
      bucket[this.cssName] = value;
     };
     return VariableType;
    }();
    Variables.VariableType = VariableType;
   
    var StringVariableType = function(_super) {
     __extends(StringVariableType, _super);
     function StringVariableType(label, jsonNames, cssName, defaultValue, alwaysInitializeCss) {
      _super.call(this, label, jsonNames, cssName, "", defaultValue, alwaysInitializeCss);
     }
     StringVariableType.prototype.scrubValue = function(value) {
      if (value === undefined) return "";
      return value.toString();
     };
     return StringVariableType;
    }(Variables.VariableType);
    Variables.StringVariableType = StringVariableType;
   
    var BackgroundImageVariableType = function(_super) {
     __extends(BackgroundImageVariableType, _super);
     function BackgroundImageVariableType(label, jsonNames, cssName, defaultValue, alwaysInitializeCss) {
      _super.call(this, label, jsonNames, cssName, defaultValue, alwaysInitializeCss);
     }
     BackgroundImageVariableType.prototype.writeCssBucket = function(story, model, containerSize, bucket, value) {
      bucket[this.cssName] = story.canvas.adjustBackgroundImage(value, containerSize);
     };
     return BackgroundImageVariableType;
    }(Variables.StringVariableType);
    Variables.BackgroundImageVariableType = BackgroundImageVariableType;
   
    var BooleanVariableType = function(_super) {
     __extends(BooleanVariableType, _super);
     function BooleanVariableType(label, jsonNames, cssName, falseValue, trueValue, alwaysInitializeCss) {
      if (alwaysInitializeCss === void 0) {
       alwaysInitializeCss = false;
      }
      _super.call(this, label, jsonNames, cssName, "", false, alwaysInitializeCss);
      this.falseValue = falseValue;
      this.trueValue = trueValue;
     }
     BooleanVariableType.prototype.scrubValue = function(value) {
      return !!value;
     };
     BooleanVariableType.prototype.writeCssBucket = function(story, model, containerSize, bucket, value) {
      bucket[this.cssName] = value ? this.trueValue :this.falseValue;
     };
     return BooleanVariableType;
    }(Variables.VariableType);
    Variables.BooleanVariableType = BooleanVariableType;
   
    var EnumVariableType = function(_super) {
     __extends(EnumVariableType, _super);
     function EnumVariableType(label, jsonNames, cssName, defaultValue, enumValues, alwaysInitializeCss) {
      _super.call(this, label, jsonNames, cssName, defaultValue, alwaysInitializeCss);
      this.enumValues = enumValues;
     }
     EnumVariableType.prototype.scrubValue = function(value) {
      if (value === undefined) return this.defaultValue;
      value = value.toString().trim().toLocaleLowerCase();
      for (var c = 0; c < this.enumValues.length; c++) {
       if (value === this.enumValues[c]) return value;
      }
      for (var c = 0; c < this.enumValues.length; c++) {
       if (this.enumValues[c].indexOf(value) === 0) return this.enumValues[c];
      }
      return this.defaultValue;
     };
     EnumVariableType.prototype.getValueByIndex = function(index) {
      if (index < 0) return undefined;
      if (index >= this.enumValues.length) return undefined;
      return this.enumValues[index];
     };
     return EnumVariableType;
    }(Variables.StringVariableType);
    Variables.EnumVariableType = EnumVariableType;
   
    var BulletsVariableType = function(_super) {
     __extends(BulletsVariableType, _super);
     function BulletsVariableType() {
      _super.call(this, "bullets", [ "style" ], "listStyleType", "none", [ "arabic-indic", "armenian", "bengali", "cambodian", "circle", "cjk-ideographic", "decimal", "decimal-leading-zero", "devanagari", "disc", "georgian", "gujarati", "gurmukhi", "hebrew", "hiragana", "hiragana-iroha", "kannada", "katakana", "katakana-iroha", "khmer", "lao", "lower-alpha", "lower-armenian", "lower-greek", "lower-latin", "lower-roman", "malayalam", "mongolian", "myanmar", "oriya", "persian", "telugu", "thai", "tibetan", "square", "upper-alpha", "upper-latin", "upper-roman" ], false);
     }
     BulletsVariableType.prototype.writeCssBucket = function(story, model, containerSize, bucket, value) {
      bucket[this.cssName] = value;
      bucket["display"] = value == "none" ? "block" :"list-item";
     };
     return BulletsVariableType;
    }(Variables.EnumVariableType);
    Variables.BulletsVariableType = BulletsVariableType;
   
    var ColorVariableType = function(_super) {
     __extends(ColorVariableType, _super);
     function ColorVariableType(label, jsonNames, cssName, defaultValue, alwaysInitializeCss) {
      _super.call(this, label, jsonNames, cssName, defaultValue, alwaysInitializeCss);
     }
     ColorVariableType.prototype.scrubValue = function(value) {
      if (typeof value === "boolean") {
       return value ? "white" :this.defaultValue;
      } else if (typeof value === "number") {
       var hue = Math.abs(value % 360);
       return "hsl(" + hue.toString() + ", 50%, 50%)";
      } else if (typeof value === "string") {
       return value;
      } else if (value instanceof Array) {
       return "black";
      } else {
       return "black";
      }
     };
     return ColorVariableType;
    }(Variables.StringVariableType);
    Variables.ColorVariableType = ColorVariableType;
   
    var NumberVariableType = function(_super) {
     __extends(NumberVariableType, _super);
     function NumberVariableType(label, jsonNames, cssName, minValue, maxValue, defaultValue, decimalPlaces, text, alwaysInitializeCss) {
      _super.call(this, label, jsonNames, cssName, text, defaultValue, alwaysInitializeCss);
      this._minValue = minValue;
      this._maxNumber = maxValue;
      this._decimalPlaces = decimalPlaces;
     }
     NumberVariableType.prototype.scrubValue = function(value) {
      var v = ProStyle.Util.convertToNumber(value, this.defaultValue);
      var placeMultiplier = Math.pow(10, this._decimalPlaces);
      v = Math.round(v * placeMultiplier) / placeMultiplier;
      v = Math.max(this._minValue, Math.min(v, this._maxNumber));
      return v;
     };
     return NumberVariableType;
    }(Variables.VariableType);
    Variables.NumberVariableType = NumberVariableType;
   
    var ContainerDepthPctVariableType = function(_super) {
     __extends(ContainerDepthPctVariableType, _super);
     function ContainerDepthPctVariableType(label, jsonNames, cssName, minValue, maxValue, defaultValue, decimalPlaces, text, alwaysInitializeCss) {
      _super.call(this, label, jsonNames, cssName, minValue, maxValue, defaultValue, decimalPlaces, text, alwaysInitializeCss);
     }
     ContainerDepthPctVariableType.prototype.writeCssBucket = function(story, model, containerSize, bucket, value) {
      var height = containerSize.height;
      var width = containerSize.width;
      var depth = (height + width) / 2;
      bucket[this.cssName] = value / 100 * depth + 1;
      if (this.cssName === "z") bucket.zIndex = value + 1;
     };
     return ContainerDepthPctVariableType;
    }(Variables.NumberVariableType);
    Variables.ContainerDepthPctVariableType = ContainerDepthPctVariableType;
   
    var ContainerHeightPctVariableType = function(_super) {
     __extends(ContainerHeightPctVariableType, _super);
     function ContainerHeightPctVariableType(label, jsonNames, cssName, minValue, maxValue, defaultValue, decimalPlaces, text, alwaysInitializeCss) {
      _super.call(this, label, jsonNames, cssName, minValue, maxValue, defaultValue, decimalPlaces, text, alwaysInitializeCss);
     }
     ContainerHeightPctVariableType.prototype.writeCssBucket = function(story, model, containerSize, bucket, value) {
      var val = value / 100 * containerSize.height;
      if (value > 0 && val < 1) val = 1;
      bucket[this.cssName] = val;
     };
     return ContainerHeightPctVariableType;
    }(Variables.NumberVariableType);
    Variables.ContainerHeightPctVariableType = ContainerHeightPctVariableType;
   
    var ContainerWidthPctVariableType = function(_super) {
     __extends(ContainerWidthPctVariableType, _super);
     function ContainerWidthPctVariableType(label, jsonNames, cssName, minValue, maxValue, defaultValue, decimalPlaces, text, alwaysInitializeCss) {
      _super.call(this, label, jsonNames, cssName, minValue, maxValue, defaultValue, decimalPlaces, text, alwaysInitializeCss);
     }
     ContainerWidthPctVariableType.prototype.writeCssBucket = function(story, model, containerSize, bucket, value) {
      bucket[this.cssName] = value / 100 * containerSize.width;
     };
     return ContainerWidthPctVariableType;
    }(Variables.NumberVariableType);
    Variables.ContainerWidthPctVariableType = ContainerWidthPctVariableType;
   })(Variables = Properties.Variables || (Properties.Variables = {}));
  })(Properties = Models.Properties || (Models.Properties = {}));
 })(Models = ProStyle.Models || (ProStyle.Models = {}));

 var Types;
 (function(Types) {
  (function(EazeEffect) {
   EazeEffect[EazeEffect["Back"] = 0] = "Back";
   EazeEffect[EazeEffect["Bounce"] = 1] = "Bounce";
   EazeEffect[EazeEffect["Circle"] = 2] = "Circle";
   EazeEffect[EazeEffect["Curve"] = 3] = "Curve";
   EazeEffect[EazeEffect["Elastic"] = 4] = "Elastic";
   EazeEffect[EazeEffect["Expo"] = 5] = "Expo";
   EazeEffect[EazeEffect["Linear"] = 6] = "Linear";
   EazeEffect[EazeEffect["Sine"] = 7] = "Sine";
   EazeEffect[EazeEffect["SlowMo"] = 8] = "SlowMo";
   EazeEffect[EazeEffect["SlowMoBack"] = 9] = "SlowMoBack";
   EazeEffect[EazeEffect["Stepped"] = 10] = "Stepped";
   EazeEffect[EazeEffect["Stop"] = 11] = "Stop";
   EazeEffect[EazeEffect["StopAndReturn"] = 12] = "StopAndReturn";
  })(Types.EazeEffect || (Types.EazeEffect = {}));
  var EazeEffect = Types.EazeEffect;
 
  (function(EazeAmount) {
   EazeAmount[EazeAmount["Less"] = 0] = "Less";
   EazeAmount[EazeAmount["Normal"] = 1] = "Normal";
   EazeAmount[EazeAmount["More"] = 2] = "More";
   EazeAmount[EazeAmount["Extra"] = 3] = "Extra";
  })(Types.EazeAmount || (Types.EazeAmount = {}));
  var EazeAmount = Types.EazeAmount;
 
  (function(EazeEnding) {
   EazeEnding[EazeEnding["In"] = 0] = "In";
   EazeEnding[EazeEnding["Out"] = 1] = "Out";
   EazeEnding[EazeEnding["InOut"] = 2] = "InOut";
  })(Types.EazeEnding || (Types.EazeEnding = {}));
  var EazeEnding = Types.EazeEnding;
 
  var Eaze = function() {
   function Eaze(effect, amount, ending) {
    if (effect === void 0) {
     effect = undefined;
    }
    if (amount === void 0) {
     amount = undefined;
    }
    if (ending === void 0) {
     ending = undefined;
    }
    this.effect = undefined;
    this.amount = undefined;
    this.ending = undefined;
    this.ease = undefined;
    this.effect = effect == undefined ? Eaze.DEFAULT_EFFECT :effect;
    this.amount = amount == undefined ? Eaze.DEFAULT_AMOUNT :amount;
    this.ending = ending == undefined ? Eaze.DEFAULT_ENDING :ending;
    var inOut = "easeOut";
    if (this.ending == Types.EazeEnding.InOut) inOut = "easeInOut"; else if (this.ending == Types.EazeEnding.In) inOut = "easeIn";
    if (effect == Types.EazeEffect.Linear) this.ease = Linear.easeNone; else if (effect == Types.EazeEffect.Back) this.setBackEase(inOut); else if (effect == Types.EazeEffect.Bounce) this.ease = Bounce[inOut]; else if (effect == Types.EazeEffect.Circle) this.ease = Circ[inOut]; else if (effect == Types.EazeEffect.Curve) this.setCurveEase(inOut); else if (effect == Types.EazeEffect.Elastic) this.setElasticEase(inOut); else if (effect == Types.EazeEffect.Expo) this.ease = Expo[inOut]; else if (effect == Types.EazeEffect.Sine) this.ease = Sine[inOut]; else if (effect == Types.EazeEffect.SlowMo) this.setSlowMoEase(0); else if (effect == Types.EazeEffect.SlowMoBack) this.setSlowMoEase(1); else if (effect == Types.EazeEffect.Stepped) this.setSteppedEase(); else if (effect == Types.EazeEffect.Stop) this.setSlowMoEase(2); else if (effect == Types.EazeEffect.StopAndReturn) this.setSlowMoEase(2, true);
   }
   Eaze.prototype.setBackEase = function(inOut) {
    var overshoot = [ 1, 1.9, 3, 4.1 ][this.amount];
    this.ease = Back[inOut].config(overshoot);
   };
   Eaze.prototype.setCurveEase = function(inOut) {
    var power = [ Power1, Power2, Power3, Power4 ][this.amount];
    this.ease = power[inOut];
   };
   Eaze.prototype.setElasticEase = function(inOut) {
    var amplitude = [ .8, 1.1, 1.25, 1.75 ][this.amount];
    var period = [ .3, .26, .2, .15 ][this.amount];
    this.ease = Elastic[inOut].config(amplitude, period);
   };
   Eaze.prototype.setSlowMoEase = function(index, yoyo) {
    if (yoyo === void 0) {
     yoyo = false;
    }
    var ratio = [ .05, .5, .7, .9 ][this.amount];
    var power = [ .7, .6, .5, .4 ][this.amount];
    if (index == 1) power = 1 / [ .7, .682, .655, .64 ][this.amount]; else if (index == 2) power = 1;
    this.ease = SlowMo.ease.config(ratio, power, yoyo);
   };
   Eaze.prototype.setSteppedEase = function() {
    var steps = [ 3, 6, 12, 24 ][this.amount];
    this.ease = SteppedEase.config(steps);
   };
   Eaze.getByText = function(text) {
    var parts = text.trim().toLowerCase().split(" ");
    var effect = Eaze.DEFAULT_EFFECT;
    var amount = Eaze.DEFAULT_AMOUNT;
    var ending = Eaze.DEFAULT_ENDING;
    parts.forEach(function(part) {
     part = part.trim();
     if (part == "back") effect = Types.EazeEffect.Back;
     if (part == "bounce") effect = Types.EazeEffect.Bounce;
     if (part == "circle") effect = Types.EazeEffect.Circle;
     if (part == "curve") effect = Types.EazeEffect.Curve;
     if (part == "elastic") effect = Types.EazeEffect.Elastic;
     if (part == "expo") effect = Types.EazeEffect.Expo;
     if (part == "linear") effect = Types.EazeEffect.Linear;
     if (part == "sine") effect = Types.EazeEffect.Sine;
     if (part == "slowmo") effect = Types.EazeEffect.SlowMo;
     if (part == "slowmoback") effect = Types.EazeEffect.SlowMoBack;
     if (part == "stepped") effect = Types.EazeEffect.Stepped;
     if (part == "stop") effect = Types.EazeEffect.Stop;
     if (part == "stopandreturn") effect = Types.EazeEffect.StopAndReturn;
     if (part == "less") amount = Types.EazeAmount.Less;
     if (part == "normal") amount = Types.EazeAmount.Normal;
     if (part == "more") amount = Types.EazeAmount.More;
     if (part == "extra") amount = Types.EazeAmount.Extra;
     if (part == "in") ending = Types.EazeEnding.In;
     if (part == "out") ending = Types.EazeEnding.Out;
     if (part == "inout") ending = Types.EazeEnding.InOut;
    });
    return new Eaze(effect, amount, ending);
   };
   Eaze.DEFAULT_EFFECT = Types.EazeEffect.Expo;
   Eaze.DEFAULT_AMOUNT = Types.EazeAmount.Normal;
   Eaze.DEFAULT_ENDING = Types.EazeEnding.Out;
   Eaze.DEFAULT = new Eaze();
   return Eaze;
  }();
  Types.Eaze = Eaze;
 })(Types = ProStyle.Types || (ProStyle.Types = {}));

 var Models;
 (function(Models) {
  var Properties;
  (function(Properties) {
   var Variables;
   (function(Variables) {
    var Types = ProStyle.Types;
    var EaseVariableType = function(_super) {
     __extends(EaseVariableType, _super);
     function EaseVariableType() {
      _super.call(this, "ease", [ "ease" ], "ease", "", Types.Eaze.DEFAULT, false);
     }
     EaseVariableType.prototype.scrubValue = function(value) {
      if (typeof value === "string") {
       return Types.Eaze.getByText(value);
      } else {
       return undefined;
      }
     };
     EaseVariableType.prototype.writeCssBucket = function(story, model, containerSize, bucket, value) {
      bucket[this.cssName] = value.ease;
     };
     return EaseVariableType;
    }(Variables.VariableType);
    Variables.EaseVariableType = EaseVariableType;
   
    var NumberOffsetVariableType = function(_super) {
     __extends(NumberOffsetVariableType, _super);
     function NumberOffsetVariableType(label, jsonNames, cssName, minValue, maxValue, defaultValue, decimalPlaces, offset, inverted, text, alwaysInitializeCss) {
      _super.call(this, label, jsonNames, cssName, minValue, maxValue, defaultValue, decimalPlaces, text, alwaysInitializeCss);
      this.inverted = inverted;
      this.offset = offset;
     }
     NumberOffsetVariableType.prototype.writeCssBucket = function(story, model, containerSize, bucket, value) {
      value += this.offset;
      if (this.inverted) value = -value;
      bucket[this.cssName] = value;
     };
     return NumberOffsetVariableType;
    }(Variables.NumberVariableType);
    Variables.NumberOffsetVariableType = NumberOffsetVariableType;
   
    var Types = ProStyle.Types;
    var OriginVariableType = function(_super) {
     __extends(OriginVariableType, _super);
     function OriginVariableType(transform) {
      _super.call(this, transform ? "transform origin" :"perspective origin", transform ? [ "transformOrigin", "origin" ] :[ "perspectiveOrigin", "origin" ], transform ? "transformOrigin" :"perspectiveOrigin", "", new Types.Xyz(0, 0, 0), false);
      this.transform = transform;
     }
     OriginVariableType.prototype.scrubValue = function(value) {
      if (typeof value == "boolean") {
       return this.defaultValue;
      } else if (typeof value == "number") {
       return this.scrubArray([ value ], false);
      } else if (typeof value == "string") {
       return this.scrubArray(value.split(" "), false);
      }
      if (value instanceof Array) {
       return this.scrubArray(value, false);
      } else {
       return this.scrubArray([ value.x, value.y, value.z ], !!(value.expand | value.expanded));
      }
     };
     OriginVariableType.prototype.scrubArray = function(a, expand) {
      var v = new Types.Xyz(this.defaultValue.x, this.defaultValue.y, this.defaultValue.z);
      v["useContainer"] = expand;
      if (a.length > 0) v.x = this.scrubString(a[0]);
      if (a.length > 1) v.y = this.scrubString(a[1]);
      if (this.transform && a.length > 2) v.z = ProStyle.Util.convertToNumber(a[2], 0, true);
      return v;
     };
     OriginVariableType.prototype.scrubString = function(s) {
      s = (s || "").toString().trim().toLocaleLowerCase();
      if (s === "left") return 0;
      if (s === "right") return 100;
      if (s === "top") return 0;
      if (s === "bottom") return 100;
      if (s === "center") return 50;
      return ProStyle.Util.convertToNumber(s, 0, true);
     };
     OriginVariableType.prototype.writeCssBuckets = function(story, model, containerSize, variable, buckets, initializing) {
      var _this = this;
      var xyz = variable.getValue(initializing);
      if (xyz === undefined) return;
      var useContainer = xyz["useContainer"];
      if (!initializing || !xyz.equals(this.defaultValue) || this.alwaysInitializeCss) {
       var v;
       if (useContainer) {
        v = Math.round(xyz.x / 100 * containerSize.width) + "px " + Math.round(xyz.y / 100 * containerSize.height) + "px";
       } else {
        v = Math.round(xyz.x * 100) / 100 + 50 + "%" + " " + (Math.round(xyz.y * 100) / 100 + 50) + "%";
       }
       if (this.transform) {
        var height = containerSize.height;
        var width = containerSize.width;
        var depth = (height + width) / 2;
        v += " " + Math.round(depth * xyz.z / 100) + "px";
       }
       buckets.forEach(function(bucket) {
        bucket[_this.cssName] = v;
       });
      }
     };
     return OriginVariableType;
    }(Variables.VariableType);
    Variables.OriginVariableType = OriginVariableType;
   
    var PercentVariableType = function(_super) {
     __extends(PercentVariableType, _super);
     function PercentVariableType(label, jsonNames, cssName, minValue, maxValue, defaultValue, alwaysInitializeCss) {
      _super.call(this, label, jsonNames, cssName, minValue, maxValue, defaultValue, 0, "%", alwaysInitializeCss);
     }
     PercentVariableType.prototype.writeCssBucket = function(story, model, containerSize, bucket, value) {
      bucket[this.cssName] = value / 100;
     };
     return PercentVariableType;
    }(Variables.NumberVariableType);
    Variables.PercentVariableType = PercentVariableType;
   })(Variables = Properties.Variables || (Properties.Variables = {}));
  })(Properties = Models.Properties || (Models.Properties = {}));
 })(Models = ProStyle.Models || (ProStyle.Models = {}));

 var Util;
 (function(Util) {
  function getSign(n) {
   return n ? n < 0 ? -1 :1 :0;
  }
  Util.getSign = getSign;
 })(Util = ProStyle.Util || (ProStyle.Util = {}));

 var Types;
 (function(Types) {
  var Shadow = function() {
   function Shadow(x, y, blur, color, spread, inset) {
    if (x === void 0) {
     x = 0;
    }
    if (y === void 0) {
     y = 0;
    }
    if (blur === void 0) {
     blur = 0;
    }
    if (color === void 0) {
     color = "rgba(0,0,0,0.7)";
    }
    if (spread === void 0) {
     spread = 0;
    }
    if (inset === void 0) {
     inset = false;
    }
    this.x = x;
    this.y = y;
    this.blur = blur;
    this.color = color;
    this.spread = spread;
    this.inset = inset;
   }
   Shadow.prototype.render = function(xScale, yScale, isBoxShadow) {
    var avgScale = (xScale + yScale) / 2;
    var x = Math.round(this.x / 10 * avgScale) / 10;
    var y = Math.round(this.y / 10 * avgScale) / 10;
    var blur = Math.round(this.blur / 10 * avgScale) / 10;
    var spread = Math.round(this.spread / 10 * avgScale) / 10;
    if (x === 0 && this.x !== 0) x = ProStyle.Util.getSign(this.x);
    if (y === 0 && this.y !== 0) y = ProStyle.Util.getSign(this.y);
    if (blur === 0 && this.blur !== 0) blur = ProStyle.Util.getSign(this.blur);
    if (spread === 0 && this.spread !== 0) spread = ProStyle.Util.getSign(this.spread);
    blur = Math.abs(blur);
    var parts = [];
    if (isBoxShadow && this.inset) parts.push("inset");
    parts.push(x.toString() + "px");
    parts.push(y.toString() + "px");
    parts.push(blur.toString() + "px");
    if (isBoxShadow) parts.push(spread.toString() + "px");
    if (typeof this.color === "number") {
     parts.push("hsl(" + Math.abs(this.color % 360) + ", 50%, 50%)");
    } else parts.push(this.color);
    return parts.join(" ");
   };
   Shadow.fromJson = function(json) {
    json = json || [];
    if (!(json instanceof Array)) {
     return new Shadow();
    }
    var x = undefined;
    var y = undefined;
    var blur = undefined;
    var color = undefined;
    var spread = undefined;
    var inset = undefined;
    if (json.length > 0 && json[0] !== undefined) x = ProStyle.Util.convertToNumber(json[0], 0);
    if (json.length > 1 && json[1] !== undefined) y = ProStyle.Util.convertToNumber(json[1], 0);
    if (json.length > 2 && json[2] !== undefined) blur = Math.max(0, ProStyle.Util.convertToNumber(json[2], 0));
    if (json.length > 3 && json[3] !== undefined) color = json[3];
    if (json.length > 4 && json[4] !== undefined) spread = ProStyle.Util.convertToNumber(json[4], 0);
    if (json.length > 5 && json[5] !== undefined) inset = !!json[5];
    return new Shadow(x, y, blur, color, spread, inset);
   };
   Shadow.prototype.toJson = function() {
    var len = 6;
    if (this.inset !== true) {
     len--;
     if (this.color !== "rgba(0,0,0,0.5)") {
      len--;
      if (this.spread !== 0) {
       len--;
       if (this.blur !== 0) {
        len--;
       }
      }
     }
    }
    var a = [];
    a.push(this.x);
    a.push(this.y);
    if (len >= 3) a.push(this.blur);
    if (len >= 4) a.push(this.spread);
    if (len >= 5) a.push(this.color.toString());
    if (len >= 6) a.push(!!this.inset);
    return a;
   };
   Shadow.prototype.equals = function(other) {
    if (other === undefined) return false;
    if (other.x !== this.x) return false;
    if (other.y !== this.y) return false;
    if (other.blur !== this.blur) return false;
    if (other.color !== this.color) return false;
    if (other.spread !== this.spread) return false;
    if (other.inset !== this.inset) return false;
    return true;
   };
   return Shadow;
  }();
  Types.Shadow = Shadow;
 })(Types = ProStyle.Types || (ProStyle.Types = {}));

 var Models;
 (function(Models) {
  var Properties;
  (function(Properties) {
   var Variables;
   (function(Variables) {
    var ShadowVariableType = function(_super) {
     __extends(ShadowVariableType, _super);
     function ShadowVariableType(cssName, isBoxShadow) {
      _super.call(this, "shadow", [ "value" ], cssName, "", [], false);
      this.isBoxShadow = isBoxShadow;
     }
     ShadowVariableType.prototype.scrubValue = function(value) {
      if (value === undefined) return [];
      if (!(value instanceof Array)) return [];
      var valueArr = value;
      if (valueArr.length === 0) return [];
      var shadows = [];
      if (valueArr[0] instanceof Array) {
       valueArr.forEach(function(v) {
        shadows.push(ProStyle.Types.Shadow.fromJson(v));
       });
      } else {
       shadows.push(ProStyle.Types.Shadow.fromJson(valueArr));
      }
      return shadows;
     };
     ShadowVariableType.prototype.writeCssBucket = function(story, model, containerSize, bucket, shadows) {
      var _this = this;
      var shadowList = [];
      shadows.forEach(function(shadow) {
       shadowList.push(shadow.render(containerSize.width, containerSize.height, _this.isBoxShadow));
      });
      bucket[this.cssName] = shadowList.length === 0 ? "none" :shadowList.join(", ");
     };
     return ShadowVariableType;
    }(Variables.VariableType);
    Variables.ShadowVariableType = ShadowVariableType;
   
    var TextAlignVariableType = function(_super) {
     __extends(TextAlignVariableType, _super);
     function TextAlignVariableType() {
      _super.call(this, "align", [ "align" ], "textAlign", "inherit", [ "left", "center", "right", "justify" ], false);
     }
     return TextAlignVariableType;
    }(Variables.EnumVariableType);
    Variables.TextAlignVariableType = TextAlignVariableType;
   
    var TextWidthVariableType = function(_super) {
     __extends(TextWidthVariableType, _super);
     function TextWidthVariableType() {
      _super.call(this, "width", [ "width" ], "width", 0, Number.MAX_VALUE, Number.MAX_VALUE, 2, "", false);
     }
     TextWidthVariableType.prototype.writeCssBucket = function(story, model, containerSize, bucket, value) {
      if (value === Number.MAX_VALUE) {
       bucket["clearProps"] = "whiteSpace,width";
      } else {
       bucket["width"] = value / 100 * containerSize.width;
       bucket["whiteSpace"] = "normal";
      }
     };
     return TextWidthVariableType;
    }(Variables.NumberVariableType);
    Variables.TextWidthVariableType = TextWidthVariableType;
   })(Variables = Properties.Variables || (Properties.Variables = {}));
  
   var PropertyType = function() {
    function PropertyType(label, jsonNames, variableTypes) {
     this.label = label;
     this.jsonNames = jsonNames;
     this.variableTypes = variableTypes;
    }
    PropertyType.prototype.createPropertyFromArray = function(json) {
     ProStyle.Util.logWarning("PropertyType.createPropertyFromArray()", "Abstract method called");
     return new Properties.Property(this);
    };
    PropertyType.prototype.createPropertyFromNumber = function(json) {
     ProStyle.Util.logWarning("PropertyType.createPropertyFromNumber()", "Abstract method called");
     return new Properties.Property(this);
    };
    PropertyType.prototype.createPropertyFromString = function(json) {
     ProStyle.Util.logWarning("PropertyType.createPropertyFromString()", "Abstract method called");
     return new Properties.Property(this);
    };
    PropertyType.prototype.createPropertyFromBoolean = function(json) {
     var property = new Properties.Property(this);
     if (json === false) {
      this.variableTypes.forEach(function(variableType) {
       property[variableType.jsonNames[0]].setValue(variableType.defaultValue);
      });
     } else if (json === true) {}
     return property;
    };
    PropertyType.prototype.createPropertyFromObject = function(json) {
     var property = new Properties.Property(this);
     if (json === undefined) return property;
     var json2 = ProStyle.Util.lowercaseProperties(json);
     this.variableTypes.forEach(function(variableType) {
      for (var i = 0; i < variableType.jsonNames.length; i++) {
       var jsonName = variableType.jsonNames[i];
       if (json2.hasOwnProperty(jsonName)) {
        property[variableType.jsonNames[0]].setValue(json2[jsonName]);
        break;
       }
      }
     });
     return property;
    };
    PropertyType.prototype.renderLabel = function(property) {
     ProStyle.Util.logWarning("PropertyType.renderLabel()", "Abstract method called");
     return "xxx";
    };
    PropertyType.prototype.countOfValues = function(property) {
     var count = 0;
     this.variableTypes.forEach(function(variableType) {
      var variable = property[variableType.jsonNames[0]];
      if (variable.getValue() !== undefined) count++;
     });
     return count;
    };
    PropertyType.prototype.renderVariables = function(property, includeLabel, includeText) {
     var renderings = [];
     this.variableTypes.forEach(function(variableType) {
      var variable = property[variableType.jsonNames[0]];
      var rendering = variable.render(includeLabel, includeText);
      if (rendering !== undefined) renderings.push(rendering);
     });
     var text = renderings.join(", ");
     if (text.length > 0) text = (includeLabel ? " " :": ") + text;
     return this.label + text;
    };
    return PropertyType;
   }();
   Properties.PropertyType = PropertyType;
  })(Properties = Models.Properties || (Models.Properties = {}));
 
  var Items;
  (function(Items) {
   var ItemModel = function(_super) {
    __extends(ItemModel, _super);
    function ItemModel(itemModelSet, itemType, typeLabel, initPropertyLists, scriptSets) {
     _super.call(this, initPropertyLists);
     this.itemModelSet = itemModelSet;
     this.itemType = itemType;
     this.typeLabel = typeLabel;
     this.scriptSets = scriptSets;
     this.scriptSet = scriptSets[0];
    }
    ItemModel.prototype.getScriptSet = function(index) {
     var scriptSets = this.scriptSets;
     if (index < 0 || index >= scriptSets.length) index = 0;
     return scriptSets[index];
    };
    ItemModel.prototype.getCountOfStepsUsed = function() {
     var stepsUsed = 1;
     this.scriptSets.forEach(function(scriptSet) {
      stepsUsed = Math.max(stepsUsed, scriptSet.getCountOfStepsUsed());
     });
     return stepsUsed;
    };
    ItemModel.prototype.serialize = function() {
     ProStyle.Util.logError("ProStyle.Models.Items.Item.serialize", "Abstract base method called.");
    };
    ItemModel.prototype.createView = function(itemViewSet) {
     ProStyle.Util.logError("ProStyle.Models.Items.Item.createView", "Abstract base method called.");
     return undefined;
    };
    return ItemModel;
   }(Models.Model);
   Items.ItemModel = ItemModel;
  })(Items = Models.Items || (Models.Items = {}));
 })(Models = ProStyle.Models || (ProStyle.Models = {}));

 var Views;
 (function(Views) {
  var Items;
  (function(Items) {
   var SequencedItemView = function(_super) {
    __extends(SequencedItemView, _super);
    function SequencedItemView(model, itemViewSet) {
     _super.call(this, model, itemViewSet);
     this.model = model;
    }
    SequencedItemView.prototype.moveToSubStep = function(position, animate, cameraSize) {};
    SequencedItemView.prototype.getCountOfSubSteps = function() {
     return 0;
    };
    return SequencedItemView;
   }(Items.ItemView);
   Items.SequencedItemView = SequencedItemView;
  })(Items = Views.Items || (Views.Items = {}));
 })(Views = ProStyle.Views || (ProStyle.Views = {}));

 var Models;
 (function(Models) {
  var Scripts;
  (function(Scripts) {
   var Script = function() {
    function Script(scriptSet, type) {
     this.scriptSet = scriptSet;
     this.type = type;
     this.x = 0;
     this.y = 0;
    }
    return Script;
   }();
   Scripts.Script = Script;
  
   var ScriptSet = function() {
    function ScriptSet(itemModelSet, name, itemProperties) {
     this.itemModelSet = itemModelSet;
     this.name = name;
     this.itemProperties = itemProperties;
     this.scripts = [];
    }
    ScriptSet.prototype.getCountOfStepsUsed = function() {
     var highestIndex = 0;
     this.scripts.forEach(function(script) {
      if (script.type === Scripts.ScriptType.StepEvent) {
       var stepEvent = script;
       highestIndex = Math.max(highestIndex, stepEvent.stepIndex);
      }
     });
     return highestIndex + 1;
    };
    ScriptSet.prototype.insertStep = function(index) {};
    ScriptSet.prototype.deleteStep = function(index) {
     var _this = this;
     var eventsOfThisStep = [];
     this.scripts.forEach(function(script) {
      if (script.type === Scripts.ScriptType.StepEvent) {
       var stepEvent = script;
       if (stepEvent.stepIndex === index) {
        eventsOfThisStep.push(stepEvent);
       }
      }
     });
     eventsOfThisStep.forEach(function(stepEvent) {
      var index = _this.scripts.indexOf(stepEvent);
      _this.scripts.splice(index, 1);
     });
    };
    return ScriptSet;
   }();
   Scripts.ScriptSet = ScriptSet;
  })(Scripts = Models.Scripts || (Models.Scripts = {}));
 })(Models = ProStyle.Models || (ProStyle.Models = {}));

 var Extensions;
 (function(Extensions) {
  var Items;
  (function(Items_1) {
   var Unknown;
   (function(Unknown) {
    var Models = ProStyle.Models;
    var Items = Models.Items;
    var Properties = Models.Properties;
    var Scripts = Models.Scripts;
    var UnknownItemModel = function(_super) {
     __extends(UnknownItemModel, _super);
     function UnknownItemModel(itemModelSet, unknownType) {
      _super.call(this, itemModelSet, "unknown", "Unknown", [ new Properties.PropertyList([], []) ], [ new Scripts.ScriptSet(itemModelSet, "unknown", []) ]);
      this.unknownType = unknownType;
     }
     UnknownItemModel.prototype.serialize = function() {
      return Unknown.serialize(this);
     };
     return UnknownItemModel;
    }(Items.ItemModel);
    Unknown.UnknownItemModel = UnknownItemModel;
   })(Unknown = Items_1.Unknown || (Items_1.Unknown = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 
  var Items;
  (function(Items) {
   var Unknown;
   (function(Unknown) {
    function deserialize(itemModelSet, json) {
     console.log(json);
     return new Unknown.UnknownItemModel(itemModelSet, json.itemType);
    }
    Unknown.deserialize = deserialize;
   })(Unknown = Items.Unknown || (Items.Unknown = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));

 var Serialization;
 (function(Serialization) {
  var Util = ProStyle.Util;
  var ItemReader = function() {
   function ItemReader() {}
   ItemReader.read = function(itemSet, json) {
    json = json || {};
    var itemType = (json.itemType || "text").trim().toLowerCase();
    var extension = ItemReader.lookupExtension(itemType);
    if (extension && extension["deserialize"]) {
     return extension["deserialize"](itemSet, json);
    }
    Util.logError("ItemReader.read()", "Unknown Item Type (" + json.itemType + ")");
    return ProStyle.Extensions.Items.Unknown.deserialize(itemSet, json);
   };
   ItemReader.lookupExtension = function(itemType) {
    for (var e in ProStyle.Extensions.Items) {
     var name = e.toLowerCase();
     if (itemType === name) {
      return ProStyle.Extensions.Items[e];
     }
    }
    return undefined;
   };
   return ItemReader;
  }();
  Serialization.ItemReader = ItemReader;
 })(Serialization = ProStyle.Serialization || (ProStyle.Serialization = {}));

 var Views;
 (function(Views) {
  var Util = ProStyle.Util;
  var PageView = function(_super) {
   __extends(PageView, _super);
   function PageView(model, flow, flowIndex, pageIndex) {
    var _this = this;
    _super.call(this, model, Util.createChildDivElement(flow.div, "prostyle prostyle-page"));
    this.model = model;
    this.flow = flow;
    this.flowIndex = flowIndex;
    this.pageIndex = pageIndex;
    this.steps = [];
    this.items = [];
    PageView.createItems(this, model.items);
    model.steps.forEach(function(step, stepIndex) {
     var sequencedItems = [];
     _this.items.forEach(function(item) {
      if (item instanceof Views.Items.SequencedItemView) {
       var seqItem = item;
       if (seqItem.model.sequenceOnStepIndex === stepIndex) {
        sequencedItems.push(seqItem);
       }
      }
     });
     _this.steps.push(new Views.Step(step, flowIndex, pageIndex, stepIndex, sequencedItems));
    });
   }
   PageView.createItems = function(itemViewSet, items) {
    if (items instanceof Array) {
     items.forEach(function(item) {
      itemViewSet.items.push(item.createView(itemViewSet));
     });
    }
   };
   PageView.prototype.generateStepsActions = function(timeline, priorStep) {
    var _this = this;
    this.steps.forEach(function(step, stepIndex) {
     step.startTime = (priorStep === undefined ? 0 :priorStep.stopTime) + .01;
     priorStep = step;
     if (stepIndex > 0) timeline.addLabel(step.startLabel, step.startTime);
     var cameraSize = _this.flow.camera.size;
     var view = _this.flow.camera.frame.canvas;
     view.generateActionsForStep(_this, [ view.div ], cameraSize, timeline, stepIndex, step.startLabel, _this.model.canvasScriptSet);
     view = _this.flow.camera.frame;
     view.generateActionsForStep(_this, [ view.div ], cameraSize, timeline, stepIndex, step.startLabel, _this.model.frameScriptSet);
     view = _this;
     view.generateActionsForStep(_this, [ view.div ], cameraSize, timeline, stepIndex, step.startLabel, _this.model.pageScriptSet);
     var pageAspectRatio = _this.model.flow.pageAspectRatio;
     var pageSize = _this.flow.camera.size.getContainedSize(pageAspectRatio);
     _this.items.forEach(function(item) {
      item.generateStepActions(_this, pageSize, timeline, stepIndex, step.startLabel);
     });
     step.stopTime = timeline.duration();
     if (step.stopTime < step.startTime) step.stopTime = step.startTime;
     timeline.addLabel(step.stopLabel, step.stopTime);
     step.time = step.stopTime - step.startTime;
    });
    return priorStep;
   };
   return PageView;
  }(Views.View);
  Views.PageView = PageView;
 
  var Flows;
  (function(Flows) {
   var Util = ProStyle.Util;
   var FlowView = function(_super) {
    __extends(FlowView, _super);
    function FlowView(model, camera, flowIndex) {
     var _this = this;
     _super.call(this, camera.model, Util.createChildDivElement(camera.div, "prostyle prostyle-flow"));
     this.model = model;
     this.camera = camera;
     this.flowIndex = flowIndex;
     this.pages = [];
     model.pages.forEach(function(pageModel, pageIndex) {
      _this.pages.push(new Views.PageView(pageModel, _this, flowIndex, pageIndex));
     });
    }
    FlowView.prototype.initializePlacement = function(timeline) {
     this.initializePerspective();
     this.initializeFlowPlacement(timeline);
     this.initializePages(timeline);
    };
    FlowView.prototype.initializePerspective = function() {
     var cameraSize = this.camera.size;
     var depth = (cameraSize.width + cameraSize.height) / 2;
     TweenLite.set(this.div, {
      perspective:depth
     });
    };
    FlowView.prototype.initializeFlowPlacement = function(timeline) {
     var bucket = {};
     var pos = this.model.placement.position;
     var size = this.camera.frame.canvas.size;
     bucket.xPercent = -50;
     bucket.yPercent = -50;
     bucket.x = pos.x / 100 * size.width;
     bucket.y = pos.y / 100 * size.height;
     timeline.set(this.div, bucket, "initialize");
    };
    FlowView.prototype.generateCameraMovement = function(timeline, label) {
     var bucket = {};
     var pos = this.model.placement.position;
     var size = this.camera.frame.canvas.size;
     bucket.xPercent = -50;
     bucket.yPercent = -50;
     bucket.x = pos.x / 100 * -size.width;
     bucket.y = pos.y / 100 * -size.height;
     bucket.ease = Expo.easeOut;
     timeline.to(this.camera.div, 1, bucket, label);
    };
    FlowView.prototype.initializePages = function(timeline) {
     Util.logWarning("Views.Flows.Flow.initializePages()", "Abstract method called");
    };
    FlowView.prototype.generatePageMovement = function(timeline, label, pageIndex) {
     Util.logWarning("Views.Flows.Flow.generatePageMovement()", "Abstract method called");
    };
    FlowView.prototype.generateStepsActions = function(timeline, priorStep) {
     var _this = this;
     this.pages.forEach(function(page, pageIndex) {
      var label = page.steps[0].startLabel;
      timeline.addLabel(label, "+=0.01");
      if (pageIndex === 0) {
       _this.generateCameraMovement(timeline, label);
       label = "initialize";
      }
      _this.generatePageMovement(timeline, label, pageIndex);
      priorStep = page.generateStepsActions(timeline, priorStep);
     });
     return priorStep;
    };
    FlowView.prototype.pageAspectRatio = function() {
     return this.model.pageAspectRatio;
    };
    return FlowView;
   }(Views.View);
   Flows.FlowView = FlowView;
  })(Flows = Views.Flows || (Views.Flows = {}));
 })(Views = ProStyle.Views || (ProStyle.Views = {}));

 var Extensions;
 (function(Extensions) {
  var Flows;
  (function(Flows) {
   var Simple;
   (function(Simple) {
    var Views = ProStyle.Views;
    var SimpleFlowView = function(_super) {
     __extends(SimpleFlowView, _super);
     function SimpleFlowView(model, camera, flowIndex) {
      _super.call(this, model, camera, flowIndex);
      this.model = model;
     }
     SimpleFlowView.prototype.initializePages = function(timeline) {
      var pageSize = this.camera.size.getContainedSize(this.model.pageAspectRatio);
      var placement = new ProStyle.Types.Placement(new ProStyle.Types.Xyz(), new ProStyle.Types.Xyz(), new ProStyle.Types.Scale(), 1);
      this.pages.forEach(function(page, index) {
       placement.position.z = -index;
       placement.opacity = index === 0 ? 1 :0;
       var css = placement.renderCss(pageSize);
       css.width = pageSize.width;
       css.height = pageSize.height;
       timeline.set(page.div, css, "initialize");
      });
     };
     SimpleFlowView.prototype.generatePageMovement = function(timeline, label, pageIndex) {
      var _this = this;
      var pageSize = this.camera.size.getContainedSize(this.model.pageAspectRatio);
      var placement = new ProStyle.Types.Placement(new ProStyle.Types.Xyz(), new ProStyle.Types.Xyz(), new ProStyle.Types.Scale(), 1);
      this.pages.forEach(function(page, index) {
       placement.position.z = pageIndex - index;
       placement.opacity = index === pageIndex ? 1 :0;
       var css = placement.renderCss(pageSize);
       css.width = pageSize.width;
       css.height = pageSize.height;
       _this.applyCss(timeline, page.div, label, 1, css, Expo.easeOut);
      });
     };
     SimpleFlowView.prototype.applyCss = function(timeline, div, label, duration, css, ease) {
      if (label === "initialize") {
       timeline.set(div, css, label);
      } else {
       css.ease = ease;
       timeline.to(div, duration, css, label);
      }
     };
     return SimpleFlowView;
    }(Views.Flows.FlowView);
    Simple.SimpleFlowView = SimpleFlowView;
   })(Simple = Flows.Simple || (Flows.Simple = {}));
  })(Flows = Extensions.Flows || (Extensions.Flows = {}));
 
  var Flows;
  (function(Flows) {
   var Simple;
   (function(Simple) {
    var Util = ProStyle.Util;
    function deserialize(story, json) {
     var setup = json.setup || {};
     var placement = ProStyle.Types.Placement.fromJson(setup.placement);
     var pageAspectRatio = Util.convertToNumber(setup.pageAspectRatio, story.frame.aspectRatio);
     return new Simple.SimpleFlowModel(story, placement, setup.defaultPageClass, pageAspectRatio);
    }
    Simple.deserialize = deserialize;
   })(Simple = Flows.Simple || (Flows.Simple = {}));
  })(Flows = Extensions.Flows || (Extensions.Flows = {}));
 
  var Flows;
  (function(Flows) {
   var Simple;
   (function(Simple) {
    function serialize(flow) {
     var json = {};
     return json;
    }
    Simple.serialize = serialize;
   })(Simple = Flows.Simple || (Flows.Simple = {}));
  })(Flows = Extensions.Flows || (Extensions.Flows = {}));
 
  var Flows;
  (function(Flows) {
   var Unknown;
   (function(Unknown) {
    var UnknownFlowModel = function(_super) {
     __extends(UnknownFlowModel, _super);
     function UnknownFlowModel(story, placement, defaultPageClass, pageAspectRatio) {
      _super.call(this, story, placement, defaultPageClass, pageAspectRatio);
      this.flowType = "unknown";
     }
     UnknownFlowModel.prototype.serialize = function() {
      return Unknown.serialize(this);
     };
     return UnknownFlowModel;
    }(Flows.Simple.SimpleFlowModel);
    Unknown.UnknownFlowModel = UnknownFlowModel;
   })(Unknown = Flows.Unknown || (Flows.Unknown = {}));
  })(Flows = Extensions.Flows || (Extensions.Flows = {}));
 
  var Flows;
  (function(Flows) {
   var Unknown;
   (function(Unknown) {
    var UnknownFlowView = function(_super) {
     __extends(UnknownFlowView, _super);
     function UnknownFlowView(model, camera, flowIndex) {
      _super.call(this, model, camera, flowIndex);
     }
     return UnknownFlowView;
    }(Flows.Simple.SimpleFlowView);
    Unknown.UnknownFlowView = UnknownFlowView;
   })(Unknown = Flows.Unknown || (Flows.Unknown = {}));
  })(Flows = Extensions.Flows || (Extensions.Flows = {}));
 
  var Flows;
  (function(Flows) {
   var Unknown;
   (function(Unknown) {
    var Util = ProStyle.Util;
    function deserialize(story, json) {
     var setup = json.setup || {};
     var placement = ProStyle.Types.Placement.fromJson(setup.placement);
     var pageAspectRatio = Util.convertToNumber(setup.pageAspectRatio, story.frame.aspectRatio);
     return new Unknown.UnknownFlowModel(story, placement, setup.defaultPageClass, pageAspectRatio);
    }
    Unknown.deserialize = deserialize;
   })(Unknown = Flows.Unknown || (Flows.Unknown = {}));
  })(Flows = Extensions.Flows || (Extensions.Flows = {}));
 
  var Flows;
  (function(Flows) {
   var Unknown;
   (function(Unknown) {
    function serialize(flow) {
     var json = {};
     return json;
    }
    Unknown.serialize = serialize;
   })(Unknown = Flows.Unknown || (Flows.Unknown = {}));
  })(Flows = Extensions.Flows || (Extensions.Flows = {}));
 })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));

 var Models;
 (function(Models) {
  var Properties;
  (function(Properties) {
   var AnchorPropertyType = function(_super) {
    __extends(AnchorPropertyType, _super);
    function AnchorPropertyType() {
     var v = [];
     v.push(new Properties.Variables.NumberOffsetVariableType("x", [ "x" ], "xPercent", Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, 0, 2, 50, true, "%", true));
     v.push(new Properties.Variables.NumberOffsetVariableType("y", [ "y" ], "yPercent", Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, 0, 2, 50, true, "%", true));
     _super.call(this, "anchor", [ "anchor" ], v);
    }
    AnchorPropertyType.prototype.createPropertyFromBoolean = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json === true) property["x"].setValue(-50);
     return property;
    };
    AnchorPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     property["x"].setValue(json);
     return property;
    };
    AnchorPropertyType.prototype.createPropertyFromString = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     var parts = json.split(",");
     property["x"].setValue(this.parseString(parts[0]));
     if (parts.length > 1) property["y"].setValue(this.parseString(parts[1]));
     return property;
    };
    AnchorPropertyType.prototype.parseString = function(s) {
     s = s.trim().toLowerCase();
     if (s === "left") return -50;
     if (s === "center") return 0;
     if (s === "right") return 50;
     if (s === "top") return -50;
     if (s === "middle") return 0;
     if (s === "bottom") return 50;
     if (s === "l") return -50;
     if (s === "c") return 0;
     if (s === "r") return 50;
     if (s === "t") return -50;
     if (s === "m") return 0;
     if (s === "b") return 50;
     return ProStyle.Util.convertToNumber(s, 0, true);
    };
    AnchorPropertyType.prototype.createPropertyFromArray = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json.length > 0) property["x"].setValue(ProStyle.Util.convertToNumber(json[0], 0, true));
     if (json.length > 1) property["y"].setValue(ProStyle.Util.convertToNumber(json[1], 0, true));
     return property;
    };
    AnchorPropertyType.prototype.renderLabel = function(property) {
     return this.renderVariables(property, false, true);
    };
    return AnchorPropertyType;
   }(Properties.PropertyType);
   Properties.AnchorPropertyType = AnchorPropertyType;
  
   var AnimationPropertyType = function(_super) {
    __extends(AnimationPropertyType, _super);
    function AnimationPropertyType(initializeFontSize) {
     if (initializeFontSize === void 0) {
      initializeFontSize = false;
     }
     var v = [];
     v.push(new Properties.Variables.NumberVariableType("duration", [ "duration", "dur" ], undefined, 0, Number.POSITIVE_INFINITY, 0, 2, " secs", false));
     v.push(new Properties.Variables.EaseVariableType());
     v.push(new Properties.Variables.NumberVariableType("repeat", [ "repeat", "rep" ], "repeat", 0, Number.POSITIVE_INFINITY, 0, 0, " times", false));
     v.push(new Properties.Variables.NumberVariableType("repeat delay", [ "repeatdelay", "delay" ], "repeatDelay", 0, Number.POSITIVE_INFINITY, 0, 0, " secs", false));
     v.push(new Properties.Variables.BooleanVariableType("yoyo", [ "yoyo" ], "yoyo", false, true));
     v.push(new Properties.Variables.NumberVariableType("stagger", [ "stagger", "stag" ], undefined, 0, Number.POSITIVE_INFINITY, 0, 2, " secs", false));
     _super.call(this, "animation", [ "animation", "anim" ], v);
    }
    AnimationPropertyType.prototype.createPropertyFromBoolean = function(json) {
     var property = new Properties.Property(this);
     if (json) property["duration"].setValue(1);
     return property;
    };
    AnimationPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     property["duration"].setValue(json);
     return property;
    };
    AnimationPropertyType.prototype.createPropertyFromString = function(json) {
     var property = new Properties.Property(this);
     property["duration"].setValue(1);
     property["ease"].setValue(json);
     return property;
    };
    AnimationPropertyType.prototype.createPropertyFromArray = function(json) {
     var property = new Properties.Property(this);
     if (json.length > 0) property["duration"].setValue(json[0] === null ? undefined :json[0]);
     if (json.length > 1) property["ease"].setValue(json[1] === null ? undefined :json[1]);
     if (json.length > 2) property["repeat"].setValue(json[2] === null ? undefined :json[2]);
     if (json.length > 3) property["repeatdelay"].setValue(json[3] === null ? undefined :json[3]);
     if (json.length > 4) property["yoyo"].setValue(json[4] === null ? undefined :json[4]);
     if (json.length > 5) property["stagger"].setValue(json[5] === null ? undefined :json[5]);
     return property;
    };
    AnimationPropertyType.prototype.renderLabel = function(property) {
     var count = this.countOfValues(property);
     var includeText = count === 1;
     return this.renderVariables(property, true, includeText);
    };
    return AnimationPropertyType;
   }(Properties.PropertyType);
   Properties.AnimationPropertyType = AnimationPropertyType;
  
   var BackgroundPropertyType = function(_super) {
    __extends(BackgroundPropertyType, _super);
    function BackgroundPropertyType(backgroundColor) {
     if (backgroundColor === void 0) {
      backgroundColor = "transparent";
     }
     var v = [];
     v.push(new Properties.Variables.ColorVariableType("color", [ "color" ], "backgroundColor", backgroundColor, backgroundColor !== "transparent"));
     v.push(new Properties.Variables.BackgroundImageVariableType("image", [ "image" ], "backgroundImage", "none", false));
     v.push(new Properties.Variables.StringVariableType("repeat", [ "repeat", "rep" ], "backgroundRepeat", "repeat", false));
     v.push(new Properties.Variables.StringVariableType("position", [ "position", "pos" ], "backgroundPosition", "0% 0%", false));
     v.push(new Properties.Variables.StringVariableType("size", [ "size" ], "backgroundSize", "auto", false));
     _super.call(this, "background", [ "background", "back", "bg" ], v);
    }
    BackgroundPropertyType.prototype.createPropertyFromBoolean = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json === true) property["color"].setValue("#F7F7F7");
     return property;
    };
    BackgroundPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     property["color"].setValue(json);
     return property;
    };
    BackgroundPropertyType.prototype.createPropertyFromString = function(json) {
     json = json.trim();
     if (json.length === 0 || json === "none") {
      return _super.prototype.createPropertyFromBoolean.call(this, false);
     }
     var property;
     if (json.toLowerCase().indexOf("url(") === 0) {
      property = new Properties.Property(this);
      property["image"].setValue(json);
     } else {
      property = _super.prototype.createPropertyFromBoolean.call(this, false);
      property["color"].setValue(json);
     }
     return property;
    };
    BackgroundPropertyType.prototype.createPropertyFromArray = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json.length > 0) property["color"].setValue(json[0] === null ? undefined :json[0]);
     if (json.length > 1) property["image"].setValue(json[1] === null ? undefined :json[1]);
     if (json.length > 2) property["repeat"].setValue(json[2] === null ? undefined :json[2]);
     if (json.length > 3) property["position"].setValue(json[3] === null ? undefined :json[3]);
     if (json.length > 4) property["size"].setValue(json[4] === null ? undefined :json[4]);
     return property;
    };
    BackgroundPropertyType.prototype.renderLabel = function(property) {
     var parts = [];
     if (property["color"].getValue() !== undefined) parts.push("color");
     if (parts.length === 0) return this.label; else return this.label + ": " + parts.join(", ");
    };
    return BackgroundPropertyType;
   }(Properties.PropertyType);
   Properties.BackgroundPropertyType = BackgroundPropertyType;
  
   var BorderPropertyType = function(_super) {
    __extends(BorderPropertyType, _super);
    function BorderPropertyType() {
     var v = [];
     v.push(new Properties.Variables.StringVariableType("style", [ "style" ], "borderStyle", "none", false));
     v.push(new Properties.Variables.ContainerHeightPctVariableType("size", [ "size" ], "borderWidth", 0, 100, 0, 2, "%", false));
     v.push(new Properties.Variables.ColorVariableType("color", [ "color" ], "borderColor", "transparent", false));
     _super.call(this, "border", [ "border" ], v);
    }
    BorderPropertyType.prototype.createPropertyFromBoolean = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json === true) {
      property["style"].setValue("solid");
      property["size"].setValue(.5);
      property["color"].setValue("black");
     }
     return property;
    };
    BorderPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = this.createPropertyFromBoolean(true);
     property["size"].setValue(json);
     return property;
    };
    BorderPropertyType.prototype.createPropertyFromString = function(json) {
     var property = this.createPropertyFromBoolean(true);
     property["color"].setValue(json);
     return property;
    };
    BorderPropertyType.prototype.createPropertyFromArray = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json.length > 0) {
      property["size"].setValue(json[0] === null ? undefined :json[0]);
      property["color"].setValue("black");
      property["style"].setValue("solid");
     }
     if (json.length > 1) property["color"].setValue(json[1] === null ? undefined :json[1]);
     if (json.length > 2) property["style"].setValue(json[2] === null ? undefined :json[2]);
     return property;
    };
    BorderPropertyType.prototype.renderLabel = function(property) {
     var parts = [];
     var style = property["style"].getValue();
     var size = property["size"].getValue();
     var color = property["color"].getValue();
     if (style !== undefined) parts.push(style);
     if (size !== undefined) parts.push(size.toString() + "px");
     if (color !== undefined) parts.push("color");
     if (parts.length === 0) return this.label; else return this.label + ": " + parts.join(" ");
    };
    return BorderPropertyType;
   }(Properties.PropertyType);
   Properties.BorderPropertyType = BorderPropertyType;
  
   var BulletsPropertyType = function(_super) {
    __extends(BulletsPropertyType, _super);
    function BulletsPropertyType() {
     var v = [];
     v.push(new Properties.Variables.BulletsVariableType());
     _super.call(this, "bullets", [ "bullets" ], v);
    }
    BulletsPropertyType.prototype.createPropertyFromBoolean = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, json);
     if (json) property["style"].setValue("disc");
     return property;
    };
    BulletsPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     var variable = property["style"];
     var value = variable.type.getValueByIndex(json - 1);
     variable.setValue(value);
     return property;
    };
    BulletsPropertyType.prototype.createPropertyFromString = function(json) {
     var property = new Properties.Property(this);
     property["style"].setValue(json);
     return property;
    };
    BulletsPropertyType.prototype.createPropertyFromArray = function(json) {
     var property = new Properties.Property(this);
     var value = this.variableTypes[0].defaultValue;
     if (json.length > 0) value = json[0];
     property["style"].setValue(value);
     return property;
    };
    BulletsPropertyType.prototype.renderLabel = function(property) {
     return this.renderVariables(property, true, true);
    };
    return BulletsPropertyType;
   }(Properties.PropertyType);
   Properties.BulletsPropertyType = BulletsPropertyType;
  
   var ClassPropertyType = function(_super) {
    __extends(ClassPropertyType, _super);
    function ClassPropertyType() {
     var v = [];
     v.push(new Properties.Variables.StringVariableType("name", [ "name" ], undefined, "", false));
     _super.call(this, "class", [ "class" ], v);
    }
    ClassPropertyType.prototype.createPropertyFromBoolean = function(json) {
     return _super.prototype.createPropertyFromBoolean.call(this, false);
    };
    ClassPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     property["name"].setValue(json.toString());
     return property;
    };
    ClassPropertyType.prototype.createPropertyFromString = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     property["name"].setValue(json.trim());
     return property;
    };
    ClassPropertyType.prototype.createPropertyFromArray = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json.length > 0) property["name"].setValue(json[0].toString());
     return property;
    };
    return ClassPropertyType;
   }(Properties.PropertyType);
   Properties.ClassPropertyType = ClassPropertyType;
  
   var ColorPropertyType = function(_super) {
    __extends(ColorPropertyType, _super);
    function ColorPropertyType() {
     var v = [];
     v.push(new Properties.Variables.ColorVariableType("color", [ "color" ], "color", "black", false));
     _super.call(this, "color", [ "textcolor", "color" ], v);
    }
    ColorPropertyType.prototype.createPropertyFromBoolean = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json === true) property["color"].setValue("white");
     return property;
    };
    ColorPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     property["color"].setValue(json);
     return property;
    };
    ColorPropertyType.prototype.createPropertyFromString = function(json) {
     var property = new Properties.Property(this);
     property["color"].setValue(json);
     return property;
    };
    ColorPropertyType.prototype.createPropertyFromArray = function(json) {
     var property = new Properties.Property(this);
     if (json.length > 0) property["color"].setValue(json[0] === null ? undefined :json[0]);
     return property;
    };
    ColorPropertyType.prototype.renderLabel = function(property) {
     return this.renderVariables(property, true, true);
    };
    return ColorPropertyType;
   }(Properties.PropertyType);
   Properties.ColorPropertyType = ColorPropertyType;
  
   var CornersPropertyType = function(_super) {
    __extends(CornersPropertyType, _super);
    function CornersPropertyType() {
     var v = [];
     v.push(new Properties.Variables.ContainerHeightPctVariableType("tl", [ "topleft", "tl" ], "borderTopLeftRadius", 0, 100, 0, 2, "", false));
     v.push(new Properties.Variables.ContainerHeightPctVariableType("tr", [ "topright", "tr" ], "borderTopRightRadius", 0, 100, 0, 2, "", false));
     v.push(new Properties.Variables.ContainerHeightPctVariableType("bl", [ "bottomleft", "bl" ], "borderBottomLeftRadius", 0, 100, 0, 2, "", false));
     v.push(new Properties.Variables.ContainerHeightPctVariableType("br", [ "bottomright", "br" ], "borderBottomRightRadius", 0, 100, 0, 2, "", false));
     _super.call(this, "corners", [ "corners" ], v);
    }
    CornersPropertyType.prototype.createPropertyFromBoolean = function(json) {
     if (json === false) {
      return _super.prototype.createPropertyFromBoolean.call(this, false);
     } else {
      return this.createPropertyFromNumber(3);
     }
    };
    CornersPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     property["topleft"].setValue(json);
     property["topright"].setValue(json);
     property["bottomleft"].setValue(json);
     property["bottomright"].setValue(json);
     return property;
    };
    CornersPropertyType.prototype.createPropertyFromString = function(json) {
     var parts = json.split(",");
     for (var c = 0; c < parts.length; c++) {
      parts[c] = parts[c].trim();
     }
     return this.createPropertyFromArray(parts);
    };
    CornersPropertyType.prototype.createPropertyFromArray = function(json) {
     var tl = json.length > 0 && json[0] !== undefined ? ProStyle.Util.convertToNumber(json[0]) :undefined;
     var tr = json.length > 1 && json[1] !== undefined ? ProStyle.Util.convertToNumber(json[1]) :tl;
     var br = json.length > 2 && json[2] !== undefined ? ProStyle.Util.convertToNumber(json[2]) :tl;
     var bl = json.length > 3 && json[3] !== undefined ? ProStyle.Util.convertToNumber(json[3]) :tr;
     var property = new Properties.Property(this);
     property["topleft"].setValue(tl);
     property["topright"].setValue(tr);
     property["bottomright"].setValue(br);
     property["bottomleft"].setValue(bl);
     return property;
    };
    CornersPropertyType.prototype.renderLabel = function(property) {
     return this.renderVariables(property, false, true);
    };
    return CornersPropertyType;
   }(Properties.PropertyType);
   Properties.CornersPropertyType = CornersPropertyType;
  
   var CropPropertyType = function(_super) {
    __extends(CropPropertyType, _super);
    function CropPropertyType(isSvg) {
     if (isSvg === void 0) {
      isSvg = false;
     }
     var v = [];
     v.push(new Properties.Variables.BooleanVariableType("crop", [ "crop" ], "overflow", "visible", "hidden", isSvg));
     _super.call(this, "crop", [ "crop" ], v);
    }
    CropPropertyType.prototype.createPropertyFromBoolean = function(json) {
     var property = new Properties.Property(this);
     property["crop"].setValue(json);
     return property;
    };
    CropPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     property["crop"].setValue(!!json);
     return property;
    };
    CropPropertyType.prototype.createPropertyFromString = function(json) {
     var property = new Properties.Property(this);
     json = json.trim().toLocaleLowerCase();
     var crop = json.length > 0 && json !== "false" && json !== "0";
     property["crop"].setValue(crop);
     return property;
    };
    CropPropertyType.prototype.createPropertyFromArray = function(json) {
     var property = new Properties.Property(this);
     var crop = false;
     if (json.length > 0) {
      var v = json[0];
      crop = v !== "" && v !== "false" && v !== "0" && !!v;
     }
     property["crop"].setValue(crop);
     return property;
    };
    CropPropertyType.prototype.renderLabel = function(property) {
     var count = this.countOfValues(property);
     var includeText = count === 1;
     return this.renderVariables(property, true, includeText);
    };
    return CropPropertyType;
   }(Properties.PropertyType);
   Properties.CropPropertyType = CropPropertyType;
  
   var FontPropertyType = function(_super) {
    __extends(FontPropertyType, _super);
    function FontPropertyType(initializeFontSize) {
     if (initializeFontSize === void 0) {
      initializeFontSize = false;
     }
     var v = [];
     v.push(new Properties.Variables.StringVariableType("name", [ "family", "face" ], "font-family", "Arial, Helvetica, sans-serif", false));
     v.push(new Properties.Variables.ContainerHeightPctVariableType("size", [ "size" ], "fontSize", 0, Number.MAX_VALUE, 12, 1, " pixels", initializeFontSize));
     v.push(new Properties.Variables.PercentVariableType("line height", [ "lineheight", "lh" ], "lineHeight", 0, Number.MAX_VALUE, 120, true));
     _super.call(this, "font", [ "font" ], v);
    }
    FontPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     property["size"].setValue(json);
     return property;
    };
    FontPropertyType.prototype.createPropertyFromString = function(json) {
     var property = new Properties.Property(this);
     property["family"].setValue(json);
     return property;
    };
    FontPropertyType.prototype.createPropertyFromArray = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json.length > 0) property["family"].setValue(json[0] === null ? undefined :json[0]);
     if (json.length > 1) property["size"].setValue(json[1] === null ? undefined :json[1]);
     if (json.length > 2) property["lineheight"].setValue(json[2] === null ? undefined :json[2]);
     return property;
    };
    FontPropertyType.prototype.renderLabel = function(property) {
     var count = this.countOfValues(property);
     var includeText = count === 1;
     return this.renderVariables(property, true, includeText);
    };
    return FontPropertyType;
   }(Properties.PropertyType);
   Properties.FontPropertyType = FontPropertyType;
  
   var MoveToPropertyType = function(_super) {
    __extends(MoveToPropertyType, _super);
    function MoveToPropertyType() {
     var v = [];
     v.push(new Properties.Variables.NumberVariableType("item", [ "item" ], undefined, 0, Number.POSITIVE_INFINITY, 0, 0, "", false));
     _super.call(this, "move to", [ "moveto", "move" ], v);
    }
    MoveToPropertyType.prototype.createPropertyFromBoolean = function(json) {
     var property = new Properties.Property(this);
     property["item"].setValue(json ? 1 :0);
     return property;
    };
    MoveToPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     property["item"].setValue(json);
     return property;
    };
    MoveToPropertyType.prototype.createPropertyFromString = function(json) {
     var property = new Properties.Property(this);
     property["item"].setValue(ProStyle.Util.convertToNumber(json));
     return property;
    };
    MoveToPropertyType.prototype.createPropertyFromArray = function(json) {
     var property = new Properties.Property(this);
     if (json.length > 0) property["item"].setValue(json[0] === null ? undefined :ProStyle.Util.convertToNumber(json[0]));
     return property;
    };
    return MoveToPropertyType;
   }(Properties.PropertyType);
   Properties.MoveToPropertyType = MoveToPropertyType;
  
   var OpacityPropertyType = function(_super) {
    __extends(OpacityPropertyType, _super);
    function OpacityPropertyType() {
     var v = [];
     v.push(new Properties.Variables.PercentVariableType("percent", [ "percent", "pct" ], "autoAlpha", 0, 100, 100, false));
     _super.call(this, "opacity", [ "opacity", "opac" ], v);
    }
    OpacityPropertyType.prototype.createPropertyFromBoolean = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json === true) property["percent"].setValue(100);
     return property;
    };
    OpacityPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     property["percent"].setValue(json);
     return property;
    };
    OpacityPropertyType.prototype.createPropertyFromString = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     property["percent"].setValue(ProStyle.Util.convertToNumber(json, 100));
     return property;
    };
    OpacityPropertyType.prototype.createPropertyFromArray = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json.length > 0) property["percent"].setValue(ProStyle.Util.convertToNumber(json[0], 100));
     return property;
    };
    OpacityPropertyType.prototype.renderLabel = function(property) {
     return this.renderVariables(property, false, true);
    };
    return OpacityPropertyType;
   }(Properties.PropertyType);
   Properties.OpacityPropertyType = OpacityPropertyType;
  
   var PaddingPropertyType = function(_super) {
    __extends(PaddingPropertyType, _super);
    function PaddingPropertyType() {
     var v = [];
     v.push(new Properties.Variables.ContainerWidthPctVariableType("left", [ "left", "l" ], "paddingLeft", 0, 50, 0, 2, "%", false));
     v.push(new Properties.Variables.ContainerHeightPctVariableType("top", [ "top", "t" ], "paddingTop", 0, 50, 0, 2, "%", false));
     v.push(new Properties.Variables.ContainerWidthPctVariableType("right", [ "right", "r" ], "paddingRight", 0, 50, 0, 2, "%", false));
     v.push(new Properties.Variables.ContainerHeightPctVariableType("bottom", [ "bottom", "b" ], "paddingBottom", 0, 50, 0, 2, "%", false));
     _super.call(this, "padding", [ "padding", "pad" ], v);
    }
    PaddingPropertyType.prototype.createPropertyFromBoolean = function(json) {
     if (json === false) {
      return _super.prototype.createPropertyFromBoolean.call(this, false);
     } else {
      return this.createPropertyFromNumber(2);
     }
    };
    PaddingPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     property["left"].setValue(json);
     property["top"].setValue(json);
     property["right"].setValue(json);
     property["bottom"].setValue(json);
     return property;
    };
    PaddingPropertyType.prototype.createPropertyFromString = function(json) {
     var parts = json.split(",");
     for (var c = 0; c < parts.length; c++) {
      parts[c] = parts[c].trim();
     }
     return this.createPropertyFromArray(parts);
    };
    PaddingPropertyType.prototype.createPropertyFromArray = function(json) {
     var t = json.length > 0 && json[0] !== undefined ? ProStyle.Util.convertToNumber(json[0]) :undefined;
     var r = json.length > 1 && json[1] !== undefined ? ProStyle.Util.convertToNumber(json[1]) :t;
     var b = json.length > 2 && json[2] !== undefined ? ProStyle.Util.convertToNumber(json[2]) :t;
     var l = json.length > 3 && json[3] !== undefined ? ProStyle.Util.convertToNumber(json[3]) :r;
     var property = new Properties.Property(this);
     property["left"].setValue(l);
     property["top"].setValue(t);
     property["right"].setValue(r);
     property["bottom"].setValue(b);
     return property;
    };
    PaddingPropertyType.prototype.renderLabel = function(property) {
     var parts = [];
     var all = property["all"].getValue();
     var left = property["left"].getValue() || all;
     var top = property["top"].getValue() || all;
     var right = property["right"].getValue() || all;
     var bottom = property["bottom"].getValue() || all;
     var allEqual = left === top && top === right && right === bottom && bottom === left;
     var noParts = left === undefined && top === undefined && right === undefined && bottom === undefined;
     var missingParts = left === undefined || top === undefined || right === undefined || bottom === undefined;
     if (noParts) {
      return this.label;
     } else if (allEqual) {
      return this.label + ": " + left.toString() + "%";
     } else if (!missingParts) {
      return this.label + ": " + left.toString() + "% " + top.toString() + "% " + right.toString() + "% " + bottom.toString() + "%";
     } else {
      return this.label + ": " + (left === undefined ? "" :"left " + left.toString() + "% ") + (top === undefined ? "" :"top " + top.toString() + "% ") + (right === undefined ? "" :"right " + right.toString() + "% ") + (bottom === undefined ? "" :"bottom " + bottom.toString() + "% ");
     }
    };
    return PaddingPropertyType;
   }(Properties.PropertyType);
   Properties.PaddingPropertyType = PaddingPropertyType;
  
   var PositionPropertyType = function(_super) {
    __extends(PositionPropertyType, _super);
    function PositionPropertyType() {
     var NI = Number.NEGATIVE_INFINITY;
     var I = Number.POSITIVE_INFINITY;
     var v = [];
     v.push(new Properties.Variables.ContainerWidthPctVariableType("X", [ "x" ], "x", NI, I, 0, 2, " pixels", true));
     v.push(new Properties.Variables.ContainerHeightPctVariableType("Y", [ "y" ], "y", NI, I, 0, 2, " pixels", true));
     v.push(new Properties.Variables.ContainerDepthPctVariableType("Z", [ "z" ], "z", NI, I, 0, 2, " pixels", true));
     _super.call(this, "position", [ "position", "pos" ], v);
    }
    PositionPropertyType.prototype.createPropertyFromBoolean = function(json) {
     return _super.prototype.createPropertyFromBoolean.call(this, false);
    };
    PositionPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     property["x"].setValue(json);
     return property;
    };
    PositionPropertyType.prototype.createPropertyFromString = function(json) {
     var parts = json.split(",");
     for (var c = 0; c < parts.length; c++) {
      parts[c] = parts[c].trim();
     }
     return this.createPropertyFromArray(parts);
    };
    PositionPropertyType.prototype.createPropertyFromArray = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json.length > 0) property["x"].setValue(ProStyle.Util.convertToNumber(json[0]));
     if (json.length > 1) property["y"].setValue(ProStyle.Util.convertToNumber(json[1]));
     if (json.length > 2) property["z"].setValue(ProStyle.Util.convertToNumber(json[2]));
     return property;
    };
    PositionPropertyType.prototype.renderLabel = function(property) {
     var count = this.countOfValues(property);
     var includeLabel = count === 1;
     var includeText = count === 1;
     if (count === 2) {
      if (property["z"].getValue() !== undefined) includeLabel = true;
     }
     return this.renderVariables(property, includeLabel, includeText);
    };
    return PositionPropertyType;
   }(Properties.PropertyType);
   Properties.PositionPropertyType = PositionPropertyType;
  
   var RotationPropertyType = function(_super) {
    __extends(RotationPropertyType, _super);
    function RotationPropertyType() {
     var v = [];
     var deg = String.fromCharCode(176);
     v.push(new Properties.Variables.NumberVariableType("X", [ "x" ], "rotationX", -36e3, 36e3, 0, 2, deg, false));
     v.push(new Properties.Variables.NumberVariableType("Y", [ "y" ], "rotationY", -36e3, 36e3, 0, 2, deg, false));
     v.push(new Properties.Variables.NumberVariableType("Z", [ "z" ], "rotationZ", -36e3, 36e3, 0, 2, deg, true));
     _super.call(this, "rotation", [ "rotation", "rotate", "rot" ], v);
    }
    RotationPropertyType.prototype.createPropertyFromBoolean = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json === true) property["z"].setValue(360);
     return property;
    };
    RotationPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     property["z"].setValue(json);
     return property;
    };
    RotationPropertyType.prototype.createPropertyFromString = function(json) {
     var parts = json.split(",");
     for (var c = 0; c < parts.length; c++) {
      parts[c] = parts[c].trim();
     }
     return this.createPropertyFromArray(parts);
    };
    RotationPropertyType.prototype.createPropertyFromArray = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json.length > 0) property["x"].setValue(ProStyle.Util.convertToNumber(json[0]));
     if (json.length > 1) property["y"].setValue(ProStyle.Util.convertToNumber(json[1]));
     if (json.length > 2) property["z"].setValue(ProStyle.Util.convertToNumber(json[2]));
     return property;
    };
    RotationPropertyType.prototype.renderLabel = function(property) {
     var count = this.countOfValues(property);
     var includeLabel = count < 3;
     if (count === 1) {
      if (property["z"].getValue() !== undefined) includeLabel = false;
     }
     return this.renderVariables(property, includeLabel, true);
    };
    return RotationPropertyType;
   }(Properties.PropertyType);
   Properties.RotationPropertyType = RotationPropertyType;
  
   var ScalePropertyType = function(_super) {
    __extends(ScalePropertyType, _super);
    function ScalePropertyType() {
     var v = [];
     v.push(new Properties.Variables.PercentVariableType("X", [ "x" ], "scaleX", 0, 1e3, 100, false));
     v.push(new Properties.Variables.PercentVariableType("Y", [ "y" ], "scaleY", 0, 1e3, 100, false));
     _super.call(this, "scale", [ "scale" ], v);
    }
    ScalePropertyType.prototype.createPropertyFromBoolean = function(json) {
     if (json === false) {
      return _super.prototype.createPropertyFromBoolean.call(this, false);
     } else {
      return this.createPropertyFromNumber(200);
     }
    };
    ScalePropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     property["x"].setValue(json);
     property["y"].setValue(json);
     return property;
    };
    ScalePropertyType.prototype.createPropertyFromString = function(json) {
     var parts = json.split(",");
     for (var c = 0; c < parts.length; c++) {
      parts[c] = parts[c].trim();
     }
     return this.createPropertyFromArray(parts);
    };
    ScalePropertyType.prototype.createPropertyFromArray = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json.length > 0) property["x"].setValue(ProStyle.Util.convertToNumber(json[0]));
     if (json.length > 1) property["y"].setValue(ProStyle.Util.convertToNumber(json[1]));
     return property;
    };
    ScalePropertyType.prototype.renderLabel = function(property) {
     var count = this.countOfValues(property);
     var includeLabel = count === 1;
     if (count > 1) {
      var scaleX = property["x"].getValue();
      var scaleY = property["y"].getValue();
      if (scaleX === scaleY) {
       return this.label + ": " + scaleX.toString() + "%";
      }
     }
     return this.renderVariables(property, includeLabel, true);
    };
    return ScalePropertyType;
   }(Properties.PropertyType);
   Properties.ScalePropertyType = ScalePropertyType;
  
   var SizePropertyType = function(_super) {
    __extends(SizePropertyType, _super);
    function SizePropertyType() {
     var v = [];
     v.push(new Properties.Variables.ContainerWidthPctVariableType("Width", [ "width", "w" ], "width", 0, Number.POSITIVE_INFINITY, 0, 2, "", false));
     v.push(new Properties.Variables.ContainerHeightPctVariableType("Height", [ "height", "h" ], "height", 0, Number.POSITIVE_INFINITY, 0, 2, "", false));
     _super.call(this, "size", [ "size" ], v);
    }
    SizePropertyType.prototype.createPropertyFromBoolean = function(json) {
     if (json === false) {
      return _super.prototype.createPropertyFromBoolean.call(this, false);
     } else {
      return this.createPropertyFromNumber(100);
     }
    };
    SizePropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     property["width"].setValue(json);
     property["height"].setValue(json);
     return property;
    };
    SizePropertyType.prototype.createPropertyFromString = function(json) {
     var parts = json.split(",");
     for (var c = 0; c < parts.length; c++) {
      parts[c] = parts[c].trim();
     }
     return this.createPropertyFromArray(parts);
    };
    SizePropertyType.prototype.createPropertyFromArray = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json.length > 0) property["width"].setValue(ProStyle.Util.convertToNumber(json[0]));
     if (json.length > 1) property["height"].setValue(ProStyle.Util.convertToNumber(json[1]));
     return property;
    };
    SizePropertyType.prototype.renderLabel = function(property) {
     return this.renderVariables(property, false, true);
    };
    return SizePropertyType;
   }(Properties.PropertyType);
   Properties.SizePropertyType = SizePropertyType;
  
   var SkewPropertyType = function(_super) {
    __extends(SkewPropertyType, _super);
    function SkewPropertyType() {
     var v = [];
     var deg = String.fromCharCode(176);
     v.push(new Properties.Variables.NumberVariableType("X", [ "degrees", "deg" ], "skewX", Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, 0, 2, deg, false));
     _super.call(this, "skew", [ "skew" ], v);
    }
    SkewPropertyType.prototype.createPropertyFromBoolean = function(json) {
     if (json === false) {
      return _super.prototype.createPropertyFromBoolean.call(this, false);
     } else {
      return this.createPropertyFromNumber(-30);
     }
    };
    SkewPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     property["degrees"].setValue(json);
     return property;
    };
    SkewPropertyType.prototype.createPropertyFromString = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     property["degrees"].setValue(ProStyle.Util.convertToNumber(json));
     return property;
    };
    SkewPropertyType.prototype.createPropertyFromArray = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json.length > 0) property["degrees"].setValue(json[0] === null ? undefined :ProStyle.Util.convertToNumber(json[0]));
     return property;
    };
    SkewPropertyType.prototype.renderLabel = function(property) {
     var count = this.countOfValues(property);
     return this.renderVariables(property, true, true);
    };
    return SkewPropertyType;
   }(Properties.PropertyType);
   Properties.SkewPropertyType = SkewPropertyType;
  
   var ShadowPropertyType = function(_super) {
    __extends(ShadowPropertyType, _super);
    function ShadowPropertyType(label, jsonNames, cssName) {
     if (label === void 0) {
      label = "shadow";
     }
     if (jsonNames === void 0) {
      jsonNames = [ "shadow", "shadows" ];
     }
     if (cssName === void 0) {
      cssName = "boxShadow";
     }
     var v = [];
     v.push(new Properties.Variables.ShadowVariableType(cssName, cssName === "boxShadow"));
     _super.call(this, label, jsonNames, v);
    }
    ShadowPropertyType.prototype.createPropertyFromBoolean = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json === true) property[this.variableTypes[0].jsonNames[0]].setValue([ .5, .5, 2 ]);
     return property;
    };
    ShadowPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     property[this.variableTypes[0].jsonNames[0]].setValue([ json, json, 2 ]);
     return property;
    };
    ShadowPropertyType.prototype.parseString = function(s) {
     var parts = [];
     var arr = [];
     var partsTemp = s.split(",");
     var parenDepth = 0;
     partsTemp.forEach(function(p) {
      if (parenDepth > 0) parts[parts.length - 1] += "," + p; else parts.push(p);
      if (p.indexOf("(") > -1) parenDepth++;
      if (p.indexOf(")") > -1) parenDepth--;
     });
     parts.forEach(function(part, index) {
      part = part.trim().toLowerCase();
      if (index === 3) arr.push(isNaN(part) ? part :Number(part)); else if (index === 5) arr.push(part === "1" || part === "true"); else arr.push(ProStyle.Util.convertToNumber(part));
     });
     return arr;
    };
    ShadowPropertyType.prototype.createPropertyFromString = function(json) {
     var property = new Properties.Property(this);
     property[this.variableTypes[0].jsonNames[0]].setValue(this.parseString(json));
     return property;
    };
    ShadowPropertyType.prototype.createPropertyFromArray = function(json) {
     var _this = this;
     var property = new Properties.Property(this);
     if (json.length === 0) return property;
     if (json[0] instanceof Array || typeof json[0] === "number") {
      property[this.variableTypes[0].jsonNames[0]].setValue(json);
     } else {
      var arr = [];
      json.forEach(function(shadowData) {
       if (typeof shadowData === "string") {
        arr.push(_this.parseString(shadowData));
       } else if (typeof json[0] === "object") {
        arr.push(_this.parseObject(shadowData));
       }
      });
      property[this.variableTypes[0].jsonNames[0]].setValue(arr);
     }
     return property;
    };
    ShadowPropertyType.prototype.parseObject = function(o) {
     return [ o.x, o.y, o.blur, o.color, o.spread, o.inset ];
    };
    ShadowPropertyType.prototype.createPropertyFromObject = function(json) {
     var property = new Properties.Property(this);
     if (json === undefined) return property;
     property[this.variableTypes[0].jsonNames[0]].setValue(this.parseObject(json));
     return property;
    };
    ShadowPropertyType.prototype.renderLabel = function(property) {
     return this.label;
    };
    return ShadowPropertyType;
   }(Properties.PropertyType);
   Properties.ShadowPropertyType = ShadowPropertyType;
  
   var SvgFillPropertyType = function(_super) {
    __extends(SvgFillPropertyType, _super);
    function SvgFillPropertyType(backgroundColor) {
     if (backgroundColor === void 0) {
      backgroundColor = "transparent";
     }
     var v = [];
     v.push(new Properties.Variables.ColorVariableType("color", [ "color" ], "fill", backgroundColor, backgroundColor !== "transparent"));
     _super.call(this, "fill", [ "fill" ], v);
    }
    SvgFillPropertyType.prototype.createPropertyFromBoolean = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json === true) property["color"].setValue("#F7F7F7");
     return property;
    };
    SvgFillPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     property["color"].setValue(json);
     return property;
    };
    SvgFillPropertyType.prototype.createPropertyFromString = function(json) {
     json = json.trim();
     if (json.length === 0 || json === "none") {
      return _super.prototype.createPropertyFromBoolean.call(this, false);
     }
     var property;
     property = _super.prototype.createPropertyFromBoolean.call(this, false);
     property["color"].setValue(json);
     return property;
    };
    SvgFillPropertyType.prototype.createPropertyFromArray = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json.length > 0) property["color"].setValue(json[0] === null ? undefined :json[0]);
     return property;
    };
    return SvgFillPropertyType;
   }(Properties.PropertyType);
   Properties.SvgFillPropertyType = SvgFillPropertyType;
  
   var TextAlignPropertyType = function(_super) {
    __extends(TextAlignPropertyType, _super);
    function TextAlignPropertyType() {
     var v = [];
     v.push(new Properties.Variables.TextAlignVariableType());
     _super.call(this, "textAlign", [ "textalign", "align" ], v);
    }
    TextAlignPropertyType.prototype.createPropertyFromBoolean = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, json);
     if (json) property["align"].setValue("justify");
     return property;
    };
    TextAlignPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     if (json === 0) property["align"].setValue("inherit");
     if (json === 1) property["align"].setValue("left");
     if (json === 2) property["align"].setValue("center");
     if (json === 3) property["align"].setValue("right");
     if (json === 4) property["align"].setValue("justify");
     return property;
    };
    TextAlignPropertyType.prototype.createPropertyFromString = function(json) {
     var property = new Properties.Property(this);
     property["align"].setValue(json);
     return property;
    };
    TextAlignPropertyType.prototype.createPropertyFromArray = function(json) {
     var property = new Properties.Property(this);
     var value = this.variableTypes[0].defaultValue;
     if (json.length > 0) value = json[0];
     property["align"].setValue(value);
     return property;
    };
    TextAlignPropertyType.prototype.renderLabel = function(property) {
     return this.renderVariables(property, true, true);
    };
    return TextAlignPropertyType;
   }(Properties.PropertyType);
   Properties.TextAlignPropertyType = TextAlignPropertyType;
  
   var TextShadowPropertyType = function(_super) {
    __extends(TextShadowPropertyType, _super);
    function TextShadowPropertyType() {
     _super.call(this, "text shadow", [ "textshadow", "textshadows" ], "textShadow");
    }
    return TextShadowPropertyType;
   }(Properties.ShadowPropertyType);
   Properties.TextShadowPropertyType = TextShadowPropertyType;
  
   var TextStylePropertyType = function(_super) {
    __extends(TextStylePropertyType, _super);
    function TextStylePropertyType() {
     var v = [];
     v.push(new Properties.Variables.BooleanVariableType("bold", [ "bold" ], "font-weight", "normal", "bold"));
     v.push(new Properties.Variables.BooleanVariableType("italic", [ "italic" ], "font-style", "normal", "italic"));
     v.push(new Properties.Variables.StringVariableType("line", [ "line", "lines" ], "text-decoration", "none", false));
     v.push(new Properties.Variables.BooleanVariableType("smallCaps", [ "smallcaps", "caps" ], "font-variant", "normal", "small-caps"));
     _super.call(this, "style", [ "textstyle", "textstyles", "styles", "style" ], v);
    }
    TextStylePropertyType.prototype.createPropertyFromBoolean = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     if (json === true) {
      property["bold"].setValue(true);
      property["italic"].setValue(true);
     }
     return property;
    };
    TextStylePropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     property["bold"].setValue((json & 1) > 0);
     property["italic"].setValue((json & 2) > 0);
     property["smallcaps"].setValue((json & 4) > 0);
     var lines = [];
     if ((json & 8) > 0) lines.push("underline");
     if ((json & 16) > 0) lines.push("line-through");
     if ((json & 32) > 0) lines.push("overline");
     if (lines.length === 0) lines.push("none");
     property["line"].setValue(lines.join(" "));
     return property;
    };
    TextStylePropertyType.prototype.createPropertyFromString = function(json) {
     var property = new Properties.Property(this);
     json = json.toLocaleLowerCase();
     property["bold"].setValue(json.indexOf("bold") > -1);
     property["italic"].setValue(json.indexOf("italic") > -1);
     property["smallcaps"].setValue(json.indexOf("caps") > -1);
     var lines = [];
     if (json.indexOf("under") > -1) lines.push("underline");
     if (json.indexOf("through") > -1) lines.push("line-through");
     if (json.indexOf("over") > -1) lines.push("overline");
     if (lines.length === 0) lines.push("none");
     property["line"].setValue(lines.join(" "));
     return property;
    };
    TextStylePropertyType.prototype.createPropertyFromArray = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, false);
     var lines = [];
     json.forEach(function(part) {
      var text = (part || "").toString().trim().toLocaleLowerCase();
      if (text.indexOf("b") === 0) property["bold"].setValue(true);
      if (text.indexOf("i") === 0) property["italic"].setValue(true);
      if (text.indexOf("c") === 0) property["smallCaps"].setValue(true);
      if (text.indexOf("u") === 0) lines.push("underline");
      if (text.indexOf("t") === 0) lines.push("line-through");
      if (text.indexOf("o") === 0) lines.push("overline");
     });
     if (lines.length === 0) lines.push("none");
     property["line"].setValue(lines.join(" "));
     return property;
    };
    TextStylePropertyType.prototype.renderLabel = function(property) {
     return this.renderVariables(property, true, true);
    };
    return TextStylePropertyType;
   }(Properties.PropertyType);
   Properties.TextStylePropertyType = TextStylePropertyType;
  
   var TextWidthPropertyType = function(_super) {
    __extends(TextWidthPropertyType, _super);
    function TextWidthPropertyType() {
     var v = [];
     v.push(new Properties.Variables.TextWidthVariableType());
     _super.call(this, "width", [ "textwidth", "width" ], v);
    }
    TextWidthPropertyType.prototype.createPropertyFromBoolean = function(json) {
     var property = _super.prototype.createPropertyFromBoolean.call(this, json);
     if (json) property["width"].setValue(100);
     return property;
    };
    TextWidthPropertyType.prototype.createPropertyFromNumber = function(json) {
     var property = new Properties.Property(this);
     property["width"].setValue(json);
     return property;
    };
    TextWidthPropertyType.prototype.createPropertyFromString = function(json) {
     var property = new Properties.Property(this);
     property["width"].setValue(ProStyle.Util.convertToNumber(json, this.variableTypes[0].defaultValue));
     return property;
    };
    TextWidthPropertyType.prototype.createPropertyFromArray = function(json) {
     var property = new Properties.Property(this);
     var value = this.variableTypes[0].defaultValue;
     if (json.length > 0) value = ProStyle.Util.convertToNumber(json[0], value);
     property["width"].setValue(value);
     return property;
    };
    TextWidthPropertyType.prototype.renderLabel = function(property) {
     return this.renderVariables(property, true, true);
    };
    return TextWidthPropertyType;
   }(Properties.PropertyType);
   Properties.TextWidthPropertyType = TextWidthPropertyType;
  
   var TransformOriginPropertyType = function(_super) {
    __extends(TransformOriginPropertyType, _super);
    function TransformOriginPropertyType() {
     var v = [];
     v.push(new Properties.Variables.OriginVariableType(true));
     _super.call(this, "transformOrigin", [ "transformorigin", "origin" ], v);
    }
    TransformOriginPropertyType.prototype.createProperty = function(json) {
     var property = new Properties.Property(this);
     property["transformOrigin"].setValue(json);
     return property;
    };
    TransformOriginPropertyType.prototype.createPropertyFromBoolean = function(json) {
     return this.createProperty(json);
    };
    TransformOriginPropertyType.prototype.createPropertyFromNumber = function(json) {
     return this.createProperty(json);
    };
    TransformOriginPropertyType.prototype.createPropertyFromString = function(json) {
     return this.createProperty(json);
    };
    TransformOriginPropertyType.prototype.createPropertyFromArray = function(json) {
     return this.createProperty(json);
    };
    TransformOriginPropertyType.prototype.createPropertyFromObject = function(json) {
     if (json.x == undefined && json.X !== undefined) json.x = json.X;
     if (json.y == undefined && json.Y !== undefined) json.y = json.Y;
     if (json.z == undefined && json.Z !== undefined) json.z = json.Z;
     return this.createProperty(json);
    };
    TransformOriginPropertyType.prototype.renderLabel = function(property) {
     return this.renderVariables(property, false, true);
    };
    return TransformOriginPropertyType;
   }(Properties.PropertyType);
   Properties.TransformOriginPropertyType = TransformOriginPropertyType;
  
   var Cache = function() {
    function Cache() {}
    Cache.ANCHOR = new Properties.AnchorPropertyType();
    Cache.ANIMATION = new Properties.AnimationPropertyType();
    Cache.BACKGROUND = new Properties.BackgroundPropertyType();
    Cache.BORDER = new Properties.BorderPropertyType();
    Cache.BULLET = new Properties.BulletsPropertyType();
    Cache.CLASS = new Properties.ClassPropertyType();
    Cache.CORNERS = new Properties.CornersPropertyType();
    Cache.CROP = new Properties.CropPropertyType();
    Cache.CROP_SVG = new Properties.CropPropertyType(true);
    Cache.FILL_SVG = new Properties.SvgFillPropertyType();
    Cache.FONT = new Properties.FontPropertyType();
    Cache.MOVE_TO = new Properties.MoveToPropertyType();
    Cache.OPACITY = new Properties.OpacityPropertyType();
    Cache.PADDING = new Properties.PaddingPropertyType();
    Cache.POSITION = new Properties.PositionPropertyType();
    Cache.ROTATION = new Properties.RotationPropertyType();
    Cache.SCALE = new Properties.ScalePropertyType();
    Cache.SIZE = new Properties.SizePropertyType();
    Cache.SKEW = new Properties.SkewPropertyType();
    Cache.SHADOW = new Properties.ShadowPropertyType();
    Cache.TEXT_ALIGN = new Properties.TextAlignPropertyType();
    Cache.TEXT_COLOR = new Properties.ColorPropertyType();
    Cache.TEXT_SHADOW = new Properties.TextShadowPropertyType();
    Cache.TEXT_STYLE = new Properties.TextStylePropertyType();
    Cache.TEXT_WIDTH = new Properties.TextWidthPropertyType();
    Cache.TRANSFORM_ORIGIN = new Properties.TransformOriginPropertyType();
    return Cache;
   }();
   Properties.Cache = Cache;
  })(Properties = Models.Properties || (Models.Properties = {}));
 })(Models = ProStyle.Models || (ProStyle.Models = {}));

 var Extensions;
 (function(Extensions) {
  var Items;
  (function(Items_2) {
   var Image;
   (function(Image) {
    var Models = ProStyle.Models;
    var Items = Models.Items;
    var ImageItemModel = function(_super) {
     __extends(ImageItemModel, _super);
     function ImageItemModel(itemModelSet, src, width, height, init, scriptSet) {
      _super.call(this, itemModelSet, "image", "Image", [ init ], [ scriptSet ]);
      this.src = src;
      this.width = width;
      this.height = height;
     }
     ImageItemModel.prototype.serialize = function() {
      return Image.serialize(this);
     };
     ImageItemModel.prototype.createView = function(itemViewSet) {
      return new Image.ImageItemView(this, itemViewSet);
     };
     return ImageItemModel;
    }(Items.ItemModel);
    Image.ImageItemModel = ImageItemModel;
   })(Image = Items_2.Image || (Items_2.Image = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 
  var Items;
  (function(Items_3) {
   var Image;
   (function(Image) {
    var Items = ProStyle.Views.Items;
    var Util = ProStyle.Util;
    var ImageItemView = function(_super) {
     __extends(ImageItemView, _super);
     function ImageItemView(model, itemSetElem) {
      _super.call(this, model, itemSetElem, Util.createChildImageElement(itemSetElem.div, "prostyle prostyle-item", model.itemModelSet.flow.story.canvas.adjustImageUrl(model.src), model.width, model.height));
      this.model = model;
     }
     ImageItemView.prototype.initializeItem = function(timeline, cameraSize) {
      var model = this.model;
      var pageAspectRatio = model.itemModelSet.flow.pageAspectRatio;
      var pageSize = cameraSize.getContainedSize(pageAspectRatio);
      var forceProps = {};
      if (model.width !== undefined) forceProps.width = model.width.toString() + "%";
      if (model.height !== undefined) forceProps.height = model.height.toString() + "%";
      this.initializeProperties(model.itemModelSet.flow.story, [ this.element ], pageSize, timeline, model.init, false, forceProps);
     };
     return ImageItemView;
    }(Items.ItemView);
    Image.ImageItemView = ImageItemView;
   })(Image = Items_3.Image || (Items_3.Image = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 
  var Items;
  (function(Items) {
   var Image;
   (function(Image) {
    var Properties = ProStyle.Models.Properties;
    var ImagePropertyTypes = function() {
     function ImagePropertyTypes() {}
     ImagePropertyTypes.get = function() {
      if (ImagePropertyTypes._propertyTypes === undefined) {
       var p = [];
       p.push(Properties.Cache.ANCHOR);
       p.push(Properties.Cache.ANIMATION);
       p.push(Properties.Cache.CLASS);
       p.push(Properties.Cache.CORNERS);
       p.push(Properties.Cache.OPACITY);
       p.push(Properties.Cache.POSITION);
       p.push(Properties.Cache.ROTATION);
       p.push(Properties.Cache.SCALE);
       p.push(Properties.Cache.SHADOW);
       p.push(Properties.Cache.SKEW);
       p.push(Properties.Cache.TRANSFORM_ORIGIN);
       ImagePropertyTypes._propertyTypes = p;
      }
      return ImagePropertyTypes._propertyTypes;
     };
     ImagePropertyTypes._propertyTypes = undefined;
     return ImagePropertyTypes;
    }();
    Image.ImagePropertyTypes = ImagePropertyTypes;
   })(Image = Items.Image || (Items.Image = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));

 var Serialization;
 (function(Serialization) {
  var PropertyReader = function() {
   function PropertyReader() {}
   PropertyReader.read = function(type, json) {
    if (typeof json === "boolean") {
     return type.createPropertyFromBoolean(json);
    } else if (typeof json === "number") {
     return type.createPropertyFromNumber(json);
    } else if (typeof json === "string") {
     return type.createPropertyFromString(json);
    } else if (json instanceof Array) {
     return type.createPropertyFromArray(json);
    } else {
     return type.createPropertyFromObject(json);
    }
   };
   return PropertyReader;
  }();
  Serialization.PropertyReader = PropertyReader;
 
  var Properties = ProStyle.Models.Properties;
  var PropertyListReader = function() {
   function PropertyListReader() {}
   PropertyListReader.read = function(story, json, propertyTypes, defaultClassName, defaultClassValue, priorClasses) {
    if (defaultClassName === void 0) {
     defaultClassName = undefined;
    }
    if (defaultClassValue === void 0) {
     defaultClassValue = undefined;
    }
    if (priorClasses === void 0) {
     priorClasses = [];
    }
    json = json || {};
    var json2 = ProStyle.Util.lowercaseProperties(json);
    var classNames = [];
    if (defaultClassName) {
     classNames = defaultClassName.split(",");
    }
    if (json["class"] !== undefined) {
     classNames.push.apply(classNames, json["class"].split(","));
    }
    var ambientPropList = undefined;
    if (defaultClassValue !== undefined) ambientPropList = PropertyListReader.read(story, defaultClassValue || {}, propertyTypes);
    classNames.forEach(function(className) {
     className = className.trim().toLowerCase();
     if (className && priorClasses.indexOf(className) === -1) {
      var localPriorClasses = priorClasses.slice();
      localPriorClasses.push(className);
      var classValue = (story.classes || {})[className] || undefined;
      if (classValue) {
       var classPropList = PropertyListReader.read(story, classValue, propertyTypes, undefined, undefined, localPriorClasses);
       if (ambientPropList === undefined) {
        ambientPropList = classPropList;
       } else {
        classPropList.properties.forEach(function(classProperty) {
         var ambientProperty = ambientPropList.getPropertyOfType(classProperty.type);
         if (ambientProperty == undefined) {
          ambientPropList.properties.push(classProperty);
         } else {
          classProperty.type.variableTypes.forEach(function(variableType) {
           var classVariable = classProperty[variableType.jsonNames[0]];
           var ambientVariable = ambientProperty[variableType.jsonNames[0]];
           if (classVariable !== undefined && ambientVariable !== undefined) {
            var classValue_1 = classVariable.getValue(false);
            if (classValue_1 !== undefined) ambientVariable.setValue(classValue_1);
           }
          });
         }
        });
       }
      }
     }
    });
    var properties = [];
    propertyTypes.forEach(function(propertyType) {
     var property = undefined;
     var ambientProperty = undefined;
     for (var i = 0; i < propertyType.jsonNames.length; i++) {
      var jsonName = propertyType.jsonNames[i];
      if (json2.hasOwnProperty(jsonName)) {
       property = Serialization.PropertyReader.read(propertyType, json2[jsonName]);
       break;
      }
     }
     if (ambientPropList !== undefined) {
      ambientProperty = ambientPropList.getPropertyOfType(propertyType);
     }
     if (ambientProperty !== undefined) {
      if (property === undefined) property = new Properties.Property(propertyType);
      propertyType.variableTypes.forEach(function(variableType) {
       var variable = property[variableType.jsonNames[0]];
       var ambientVariable = ambientProperty[variableType.jsonNames[0]];
       if (ambientVariable !== undefined) {
        var ambientValue = ambientVariable.getValue(false);
        if (ambientValue === undefined) ambientValue = ambientVariable.defaultValueOverride;
        if (ambientValue !== undefined) variable.defaultValueOverride = ambientValue;
       }
      });
     }
     if (property !== undefined) {
      properties.push(property);
     }
    });
    return new Properties.PropertyList(propertyTypes, properties);
   };
   return PropertyListReader;
  }();
  Serialization.PropertyListReader = PropertyListReader;
 
  var Scripts = ProStyle.Models.Scripts;
  var ScriptSetReader = function() {
   function ScriptSetReader() {}
   ScriptSetReader.read = function(itemModelSet, name, json, propertyTypes) {
    var scriptSet = new Scripts.ScriptSet(itemModelSet, name, propertyTypes);
    if (!(json instanceof Array)) return scriptSet;
    json.forEach(function(scriptJson) {
     scriptSet.scripts.push(Serialization.ScriptReader.read(scriptSet, scriptJson));
    });
    return scriptSet;
   };
   ScriptSetReader.readJson = function(itemModelSet, name, json, labels, propertyTypes) {
    json = ProStyle.Util.lowercaseProperties(json);
    var scriptSet = new Scripts.ScriptSet(itemModelSet, name, propertyTypes);
    for (var index = 0; index < labels.length; index++) {
     var label = labels[index];
     if (json[label + "scripts"] instanceof Array) {
      return ScriptSetReader.read(itemModelSet, name, json[label + "scripts"], propertyTypes);
     } else {
      if (json[label + "script"] !== undefined) {
       scriptSet.scripts.push(Serialization.ScriptReader.read(scriptSet, json[label + "script"]));
       return scriptSet;
      } else {
       var script = new Scripts.StepEvent(scriptSet, 0);
       if (json[label + "actions"] instanceof Array) {
        script.actions = Serialization.ActionReader.readArray(script, json[label + "actions"]);
       } else if (json[label + "action"] !== undefined) {
        script.actions = Serialization.ActionReader.readArray(script, [ json[label + "action"] ]);
       } else {
        continue;
       }
       scriptSet.scripts.push(script);
       return scriptSet;
      }
     }
     return scriptSet;
    }
    var scriptSet = new Scripts.ScriptSet(itemModelSet, name, propertyTypes);
    if (!(json instanceof Array)) return scriptSet;
    json.forEach(function(scriptJson) {
     scriptSet.scripts.push(Serialization.ScriptReader.read(scriptSet, scriptJson));
    });
    return scriptSet;
   };
   return ScriptSetReader;
  }();
  Serialization.ScriptSetReader = ScriptSetReader;
 })(Serialization = ProStyle.Serialization || (ProStyle.Serialization = {}));

 var Extensions;
 (function(Extensions) {
  var Items;
  (function(Items) {
   var Image;
   (function(Image) {
    var Util = ProStyle.Util;
    function deserialize(itemModelSet, json) {
     var src = (Util.getSetup(json, "src") || "").trim();
     var widthSetup = Util.getSetup(json, "width");
     var heightSetup = Util.getSetup(json, "height");
     var width = isNaN(widthSetup) ? undefined :Number(widthSetup);
     var height = isNaN(heightSetup) ? undefined :Number(heightSetup);
     var propertyTypes = Image.ImagePropertyTypes.get();
     var init = ProStyle.Serialization.PropertyListReader.read(itemModelSet.story, json.init, propertyTypes, "image");
     var scriptSet = ProStyle.Serialization.ScriptSetReader.readJson(itemModelSet, "Image", json, [ "" ], propertyTypes);
     var item = new Image.ImageItemModel(itemModelSet, src, width, height, init, scriptSet);
     return item;
    }
    Image.deserialize = deserialize;
   })(Image = Items.Image || (Items.Image = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));

 var Serialization;
 (function(Serialization) {
  var PropertyWriter = function() {
   function PropertyWriter() {}
   PropertyWriter.writeSet = function(json, properties) {
    properties.forEach(function(property) {
     json[property.type.jsonNames[property.type.jsonNames.length - 1]] = PropertyWriter.write(property);
    });
   };
   PropertyWriter.write = function(property) {
    var json = {};
    property.type.variableTypes.forEach(function(variableType) {
     var name = variableType.jsonNames[variableType.jsonNames.length - 1];
     var value = property[name].getValue();
     if (value !== undefined) json[name] = value;
    });
    return json;
   };
   return PropertyWriter;
  }();
  Serialization.PropertyWriter = PropertyWriter;
 
  var PropertyListWriter = function() {
   function PropertyListWriter() {}
   PropertyListWriter.write = function(propertyList) {
    var json = {};
    return json;
   };
   return PropertyListWriter;
  }();
  Serialization.PropertyListWriter = PropertyListWriter;
 
  var ScriptType = ProStyle.Models.Scripts.ScriptType;
  var ScriptWriter = function() {
   function ScriptWriter() {}
   ScriptWriter.write = function(script) {
    var type = script.type;
    var json = undefined;
    if (type === ScriptType.InitEvent) json = ScriptWriter.writeInitEvent(script); else if (type === ScriptType.StepEvent) json = ScriptWriter.writeStepEvent(script); else if (type === ScriptType.SwitchEvent) json = ScriptWriter.writeSwitchEvent(script); else if (type === ScriptType.ActionsOrphan) json = ScriptWriter.writeActionsOrphan(script); else if (type === ScriptType.PropertyOrphan) json = ScriptWriter.writePropertyOrphan(script); else json = {};
    json.type = ScriptType.toString(script.type);
    json.editor = {};
    json.editor.x = script.x;
    json.editor.y = script.y;
    return json;
   };
   ScriptWriter.writeInitEvent = function(script) {
    var json = {};
    Serialization.PropertyWriter.writeSet(json, script.properties);
    return json;
   };
   ScriptWriter.writeStepEvent = function(script) {
    var json = {};
    json.scriptType = "step";
    if (script.stepIndex > 0) json.scriptType += script.stepIndex + 1;
    json.actions = Serialization.ActionWriter.writeArray(script.actions);
    return json;
   };
   ScriptWriter.writeSwitchEvent = function(script) {
    var json = {};
    json.switch = script.switchName;
    json.actions = Serialization.ActionWriter.writeArray(script.actions);
    return json;
   };
   ScriptWriter.writeActionsOrphan = function(script) {
    var json = {};
    json.actions = Serialization.ActionWriter.writeArray(script.actions);
    return json;
   };
   ScriptWriter.writePropertyOrphan = function(script) {
    var json = {};
    Serialization.PropertyWriter.writeSet(json, script.properties);
    return json;
   };
   return ScriptWriter;
  }();
  Serialization.ScriptWriter = ScriptWriter;
 })(Serialization = ProStyle.Serialization || (ProStyle.Serialization = {}));

 var Extensions;
 (function(Extensions) {
  var Items;
  (function(Items) {
   var Image;
   (function(Image) {
    function serialize(item) {
     var json = {};
     json.setup = json.setup || {};
     json.setup.src = item.src;
     if (item.width) json.setup.class = item.width;
     if (item.height) json.setup.class = item.height;
     json.init = ProStyle.Serialization.PropertyListWriter.write(item.init);
     json.scripts = ProStyle.Serialization.ScriptSetWriter.write(item.scriptSet);
     return json;
    }
    Image.serialize = serialize;
   })(Image = Items.Image || (Items.Image = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 
  var Items;
  (function(Items) {
   var Layer;
   (function(Layer) {
    var LayerItemModel = function(_super) {
     __extends(LayerItemModel, _super);
     function LayerItemModel(itemModelSet, init, scriptSet) {
      _super.call(this, itemModelSet, "layer", "Layer", [ init ], [ scriptSet ]);
      this.items = [];
      this.flow = itemModelSet.flow;
      this.story = itemModelSet.flow.story;
     }
     LayerItemModel.prototype.getCountOfStepsUsed = function() {
      var stepsUsed = 1;
      this.scriptSets.forEach(function(scriptSet) {
       stepsUsed = Math.max(stepsUsed, scriptSet.getCountOfStepsUsed());
      });
      this.items.forEach(function(item) {
       stepsUsed = Math.max(stepsUsed, item.getCountOfStepsUsed());
      });
      return stepsUsed;
     };
     LayerItemModel.prototype.serialize = function() {
      return Layer.serialize(this);
     };
     LayerItemModel.prototype.createView = function(itemViewSet) {
      return new Layer.LayerItemView(this, itemViewSet);
     };
     return LayerItemModel;
    }(ProStyle.Models.Items.ItemModel);
    Layer.LayerItemModel = LayerItemModel;
   })(Layer = Items.Layer || (Items.Layer = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 
  var Items;
  (function(Items_4) {
   var Layer;
   (function(Layer) {
    var Util = ProStyle.Util;
    var LayerItemView = function(_super) {
     __extends(LayerItemView, _super);
     function LayerItemView(model, itemViewSet) {
      _super.call(this, model, itemViewSet, Util.createChildDivElement(itemViewSet.div, "prostyle prostyle-layer"));
      this.model = model;
      this.items = [];
      ProStyle.Views.PageView.createItems(this, model.items);
     }
     LayerItemView.prototype.initializeItem = function(timeline, cameraSize) {
      _super.prototype.initializeItem.call(this, timeline, cameraSize);
      this.items.forEach(function(item) {
       item.initializeItem(timeline, cameraSize);
      });
     };
     LayerItemView.prototype.generateStepActions = function(itemViewSet, pageSize, timeline, stepIndex, label) {
      var _this = this;
      this.items.forEach(function(item) {
       item.generateStepActions(_this, pageSize, timeline, stepIndex, label);
      });
      _super.prototype.generateStepActions.call(this, this, pageSize, timeline, stepIndex, label);
     };
     return LayerItemView;
    }(ProStyle.Views.Items.ItemView);
    Layer.LayerItemView = LayerItemView;
   })(Layer = Items_4.Layer || (Items_4.Layer = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 
  var Items;
  (function(Items) {
   var Layer;
   (function(Layer) {
    var Properties = ProStyle.Models.Properties;
    var LayerPropertyTypes = function() {
     function LayerPropertyTypes() {}
     LayerPropertyTypes.get = function() {
      if (LayerPropertyTypes._propertyTypes === undefined) {
       var p = [];
       p.push(Properties.Cache.ANCHOR);
       p.push(Properties.Cache.ANIMATION);
       p.push(Properties.Cache.BACKGROUND);
       p.push(Properties.Cache.BORDER);
       p.push(Properties.Cache.CLASS);
       p.push(Properties.Cache.CORNERS);
       p.push(Properties.Cache.CROP);
       p.push(Properties.Cache.MOVE_TO);
       p.push(Properties.Cache.OPACITY);
       p.push(Properties.Cache.POSITION);
       p.push(Properties.Cache.ROTATION);
       p.push(Properties.Cache.SCALE);
       p.push(Properties.Cache.SHADOW);
       p.push(Properties.Cache.SIZE);
       p.push(Properties.Cache.SKEW);
       p.push(Properties.Cache.TRANSFORM_ORIGIN);
       LayerPropertyTypes._propertyTypes = p;
      }
      return LayerPropertyTypes._propertyTypes;
     };
     LayerPropertyTypes._propertyTypes = undefined;
     return LayerPropertyTypes;
    }();
    Layer.LayerPropertyTypes = LayerPropertyTypes;
   })(Layer = Items.Layer || (Items.Layer = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));

 var Serialization;
 (function(Serialization) {
  var Models = ProStyle.Models;
  var Items = ProStyle.Models.Items;
  var PageReader = function() {
   function PageReader() {}
   PageReader.read = function(flow, json) {
    json = json || {};
    json.init = json.init || {};
    var canvasPropertyTypes = Models.CanvasPropertyTypes.get();
    var framePropertyTypes = Models.FramePropertyTypes.get();
    var pagePropertyTypes = Models.PagePropertyTypes.get();
    var init = Serialization.PropertyListReader.read(flow.story, json.init, pagePropertyTypes, flow.getDefaultPageClassName(), flow.getDefaultPageClassValue());
    var page = new Models.PageModel(init, flow);
    page.canvasScriptSet = Serialization.ScriptSetReader.readJson(page, "Canvas", json, [ "canvas" ], canvasPropertyTypes);
    page.frameScriptSet = Serialization.ScriptSetReader.readJson(page, "Frame", json, [ "frame" ], framePropertyTypes);
    page.pageScriptSet = Serialization.ScriptSetReader.readJson(page, "Page", json, [ "page" ], pagePropertyTypes);
    page.items = PageReader.readItems(page, json);
    page.steps = PageReader.readSteps(page, json, page.items);
    return page;
   };
   PageReader.readSteps = function(page, json, items) {
    json = json.steps || [];
    var steps = [];
    if (json instanceof Array) {
     json.forEach(function(stepJson) {
      steps.push(Serialization.StepReader.read(page, stepJson));
     });
    }
    var actualSteps = 1;
    items.forEach(function(item) {
     actualSteps = Math.max(actualSteps, item.getCountOfStepsUsed());
     if (item instanceof Items.SequencedItemModel) {
      actualSteps = Math.max(actualSteps, item.sequenceOnStepIndex + 1);
     }
    });
    actualSteps = Math.max(actualSteps, page.canvasScriptSet.getCountOfStepsUsed());
    actualSteps = Math.max(actualSteps, page.frameScriptSet.getCountOfStepsUsed());
    actualSteps = Math.max(actualSteps, page.pageScriptSet.getCountOfStepsUsed());
    if (steps.length < actualSteps) {
     var missingStepCount = actualSteps - steps.length;
     for (var s = 0; s < missingStepCount; s++) {
      steps.push(Serialization.StepReader.read(page, {}));
     }
    }
    return steps;
   };
   PageReader.readItems = function(itemModelSet, json) {
    var jsonItems = json.items;
    if (jsonItems === undefined && json.item !== undefined) jsonItems = [ json.item ];
    jsonItems = jsonItems || [];
    var items = [];
    if (jsonItems instanceof Array) {
     jsonItems.forEach(function(itemJson) {
      items.push(Serialization.ItemReader.read(itemModelSet, itemJson));
     });
    }
    return items;
   };
   return PageReader;
  }();
  Serialization.PageReader = PageReader;
 })(Serialization = ProStyle.Serialization || (ProStyle.Serialization = {}));

 var Extensions;
 (function(Extensions) {
  var Items;
  (function(Items) {
   var Layer;
   (function(Layer) {
    function deserialize(itemModelSet, json) {
     var propertyTypes = Layer.LayerPropertyTypes.get();
     var init = ProStyle.Serialization.PropertyListReader.read(itemModelSet.story, json.init, propertyTypes, "layer");
     var scriptSet = ProStyle.Serialization.ScriptSetReader.readJson(itemModelSet, "Layer", json, [ "" ], propertyTypes);
     var model = new Layer.LayerItemModel(itemModelSet, init, scriptSet);
     model.items = ProStyle.Serialization.PageReader.readItems(model, json);
     return model;
    }
    Layer.deserialize = deserialize;
   })(Layer = Items.Layer || (Items.Layer = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 
  var Items;
  (function(Items) {
   var Layer;
   (function(Layer) {
    function serialize(model) {
     var json = {};
     json.init = ProStyle.Serialization.PropertyListWriter.write(model.init);
     json.scripts = ProStyle.Serialization.ScriptSetWriter.write(model.scriptSet);
     ProStyle.Serialization.PageWriter.writeItems(model, json);
     return json;
    }
    Layer.serialize = serialize;
   })(Layer = Items.Layer || (Items.Layer = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 
  var Items;
  (function(Items_5) {
   var Text;
   (function(Text) {
    var Models = ProStyle.Models;
    var Items = Models.Items;
    var TextItemModel = function(_super) {
     __extends(TextItemModel, _super);
     function TextItemModel(itemModelSet, text, stackedLines, stackedWords, stackedChars, init, scriptSet, linesInit, linesScriptSet, wordsInit, wordsScriptSet, charsInit, charsScriptSet) {
      _super.call(this, itemModelSet, "text", "Text", [ init, linesInit, wordsInit, charsInit ], [ scriptSet, linesScriptSet, wordsScriptSet, charsScriptSet ]);
      this.text = text;
      this.stackedLines = stackedLines;
      this.stackedWords = stackedWords;
      this.stackedChars = stackedChars;
      this.linesInit = linesInit;
      this.linesScriptSet = linesScriptSet;
      this.wordsInit = wordsInit;
      this.wordsScriptSet = wordsScriptSet;
      this.charsInit = charsInit;
      this.charsScriptSet = charsScriptSet;
     }
     TextItemModel.prototype.serialize = function() {
      return Text.serialize(this);
     };
     TextItemModel.prototype.createView = function(itemViewSet) {
      return new Text.TextItemView(this, itemViewSet);
     };
     return TextItemModel;
    }(Items.ItemModel);
    Text.TextItemModel = TextItemModel;
   })(Text = Items_5.Text || (Items_5.Text = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 
  var Items;
  (function(Items_6) {
   var Text;
   (function(Text) {
    var Items = ProStyle.Views.Items;
    var Util = ProStyle.Util;
    var TextItemView = function(_super) {
     __extends(TextItemView, _super);
     function TextItemView(model, itemViewSet) {
      _super.call(this, model, itemViewSet, Util.createChildDivElement(itemViewSet.div, "prostyle prostyle-text"));
      this.model = model;
      this.splitText = undefined;
      this.lines = false;
      this.words = false;
      this.chars = false;
      this.div.innerHTML = model.text;
      this.lines = model.stackedLines || model.linesScriptSet.scripts.length > 0 || model.linesInit.hasAnythingSet();
      this.words = model.stackedWords || model.wordsScriptSet.scripts.length > 0 || model.wordsInit.hasAnythingSet();
      this.chars = model.stackedChars || model.charsScriptSet.scripts.length > 0 || model.charsInit.hasAnythingSet();
      if (this.lines || this.words || this.chars) {
       var parts = [];
       if (this.lines) parts.push("lines");
       if (this.words) parts.push("words");
       if (this.chars) parts.push("chars");
       var config = {
        type:parts.join(",")
       };
       if (this.lines) config.linesClass = model.stackedLines ? "prostyle-text-line-stacked" :"prostyle-text-line";
       if (this.words) config.wordsClass = model.stackedWords ? "prostyle-text-word-stacked" :"prostyle-text-word";
       if (this.chars) config.charsClass = model.stackedChars ? "prostyle-text-char-stacked" :"prostyle-text-char";
       this.splitText = new window["SplitText"](this.div, config);
      }
     }
     TextItemView.prototype.initializeItem = function(timeline, cameraSize) {
      var story = this.model.itemModelSet.flow.story;
      var pageAspectRatio = this.model.itemModelSet.flow.pageAspectRatio;
      var pageSize = cameraSize.getContainedSize(pageAspectRatio);
      var initProps = this.initializeProperties.bind(this);
      initProps(story, [ this.div ], pageSize, timeline, this.model.init, false);
      if (this.splitText !== undefined) {
       if (this.lines) initProps(story, this.splitText.lines, pageSize, timeline, this.model.linesInit, false);
       if (this.words) initProps(story, this.splitText.words, pageSize, timeline, this.model.wordsInit, false);
       if (this.chars) initProps(story, this.splitText.chars, pageSize, timeline, this.model.charsInit, false);
      }
     };
     TextItemView.prototype.generateStepActions = function(itemViewSet, pageSize, timeline, stepIndex, label) {
      var generate = this.generateActionsForStep.bind(this);
      generate(itemViewSet, [ this.div ], pageSize, timeline, stepIndex, label, this.model.scriptSet);
      if (this.splitText !== undefined) {
       if (this.lines) generate(itemViewSet, this.splitText.lines, pageSize, timeline, stepIndex, label, this.model.linesScriptSet);
       if (this.words) generate(itemViewSet, this.splitText.words, pageSize, timeline, stepIndex, label, this.model.wordsScriptSet);
       if (this.chars) generate(itemViewSet, this.splitText.chars, pageSize, timeline, stepIndex, label, this.model.charsScriptSet);
      }
     };
     return TextItemView;
    }(Items.ItemView);
    Text.TextItemView = TextItemView;
   })(Text = Items_6.Text || (Items_6.Text = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 
  var Items;
  (function(Items) {
   var Text;
   (function(Text) {
    var Properties = ProStyle.Models.Properties;
    var TextPropertyTypes = function() {
     function TextPropertyTypes() {}
     TextPropertyTypes.cacheProperties = function() {
      TextPropertyTypes._propertyTypes = [];
      TextPropertyTypes._linePropertyTypes = [];
      TextPropertyTypes._wordPropertyTypes = [];
      TextPropertyTypes._charPropertyTypes = [];
      var text = [ TextPropertyTypes._propertyTypes ];
      var line = [ TextPropertyTypes._linePropertyTypes ];
      var all = [ TextPropertyTypes._propertyTypes, TextPropertyTypes._linePropertyTypes, TextPropertyTypes._wordPropertyTypes, TextPropertyTypes._charPropertyTypes ];
      var allButText = [ TextPropertyTypes._linePropertyTypes, TextPropertyTypes._wordPropertyTypes, TextPropertyTypes._charPropertyTypes ];
      TextPropertyTypes.addPropertyType(text, Properties.Cache.ANCHOR);
      TextPropertyTypes.addPropertyType(all, Properties.Cache.ANIMATION);
      TextPropertyTypes.addPropertyType(all, Properties.Cache.BACKGROUND);
      TextPropertyTypes.addPropertyType(all, Properties.Cache.BORDER);
      TextPropertyTypes.addPropertyType(line, Properties.Cache.BULLET);
      TextPropertyTypes.addPropertyType(all, Properties.Cache.CLASS);
      TextPropertyTypes.addPropertyType(all, Properties.Cache.CORNERS);
      TextPropertyTypes.addPropertyType(text, Properties.Cache.CROP);
      TextPropertyTypes.addPropertyType(text, Properties.Cache.FONT);
      TextPropertyTypes.addPropertyType(all, Properties.Cache.OPACITY);
      TextPropertyTypes.addPropertyType(all, Properties.Cache.PADDING);
      TextPropertyTypes.addPropertyType(all, Properties.Cache.POSITION);
      TextPropertyTypes.addPropertyType(all, Properties.Cache.ROTATION);
      TextPropertyTypes.addPropertyType(all, Properties.Cache.SCALE);
      TextPropertyTypes.addPropertyType(all, Properties.Cache.SHADOW);
      TextPropertyTypes.addPropertyType(all, Properties.Cache.SKEW);
      TextPropertyTypes.addPropertyType(text, Properties.Cache.TEXT_ALIGN);
      TextPropertyTypes.addPropertyType(all, Properties.Cache.TEXT_COLOR);
      TextPropertyTypes.addPropertyType(all, Properties.Cache.TEXT_SHADOW);
      TextPropertyTypes.addPropertyType(all, Properties.Cache.TEXT_STYLE);
      TextPropertyTypes.addPropertyType(text, Properties.Cache.TEXT_WIDTH);
      TextPropertyTypes.addPropertyType(all, Properties.Cache.TRANSFORM_ORIGIN);
     };
     TextPropertyTypes.addPropertyType = function(arrays, propertyType) {
      arrays.forEach(function(a) {
       a.push(propertyType);
      });
     };
     TextPropertyTypes.get = function() {
      if (TextPropertyTypes._propertyTypes === undefined) TextPropertyTypes.cacheProperties();
      return TextPropertyTypes._propertyTypes;
     };
     TextPropertyTypes.getForLines = function() {
      if (TextPropertyTypes._linePropertyTypes === undefined) TextPropertyTypes.cacheProperties();
      return TextPropertyTypes._linePropertyTypes;
     };
     TextPropertyTypes.getForWords = function() {
      if (TextPropertyTypes._wordPropertyTypes === undefined) TextPropertyTypes.cacheProperties();
      return TextPropertyTypes._wordPropertyTypes;
     };
     TextPropertyTypes.getForChars = function() {
      if (TextPropertyTypes._charPropertyTypes === undefined) TextPropertyTypes.cacheProperties();
      return TextPropertyTypes._charPropertyTypes;
     };
     TextPropertyTypes._propertyTypes = undefined;
     TextPropertyTypes._linePropertyTypes = undefined;
     TextPropertyTypes._wordPropertyTypes = undefined;
     TextPropertyTypes._charPropertyTypes = undefined;
     return TextPropertyTypes;
    }();
    Text.TextPropertyTypes = TextPropertyTypes;
   })(Text = Items.Text || (Items.Text = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 
  var Items;
  (function(Items) {
   var Text;
   (function(Text) {
    var Util = ProStyle.Util;
    function deserialize(itemModelSet, json) {
     var textSetup = Util.getSetup(json, "text");
     var text = "";
     if (textSetup instanceof Array) {
      var parts = [];
      textSetup.forEach(function(part) {
       parts.push(part.toString());
      });
      text = parts.join("<br>");
     } else text = (textSetup || "").toString();
     var stackedLines = !!Util.getSetup(json, "stackedLines");
     var stackedWords = !!Util.getSetup(json, "stackedWords");
     var stackedChars = !!Util.getSetup(json, "stackedChars");
     var propertyTypes = Text.TextPropertyTypes.get();
     var linePropertyTypes = Text.TextPropertyTypes.getForLines();
     var wordPropertyTypes = Text.TextPropertyTypes.getForWords();
     var charPropertyTypes = Text.TextPropertyTypes.getForChars();
     var init = ProStyle.Serialization.PropertyListReader.read(itemModelSet.story, json.init, propertyTypes, "text");
     var linesInit = ProStyle.Serialization.PropertyListReader.read(itemModelSet.story, json.lineInit || json.linesInit, linePropertyTypes);
     var wordsInit = ProStyle.Serialization.PropertyListReader.read(itemModelSet.story, json.wordInit || json.wordsInit, wordPropertyTypes);
     var charsInit = ProStyle.Serialization.PropertyListReader.read(itemModelSet.story, json.charInit || json.charsInit, charPropertyTypes);
     var scriptSet = ProStyle.Serialization.ScriptSetReader.readJson(itemModelSet, "Text", json, [ "" ], propertyTypes);
     var linesScriptSet = ProStyle.Serialization.ScriptSetReader.readJson(itemModelSet, "Lines", json, [ "line", "lines" ], linePropertyTypes);
     var wordsScriptSet = ProStyle.Serialization.ScriptSetReader.readJson(itemModelSet, "Words", json, [ "word", "words" ], wordPropertyTypes);
     var charsScriptSet = ProStyle.Serialization.ScriptSetReader.readJson(itemModelSet, "Characters", json, [ "char", "chars" ], charPropertyTypes);
     var item = new Text.TextItemModel(itemModelSet, text, stackedLines, stackedWords, stackedChars, init, scriptSet, linesInit, linesScriptSet, wordsInit, wordsScriptSet, charsInit, charsScriptSet);
     return item;
    }
    Text.deserialize = deserialize;
   })(Text = Items.Text || (Items.Text = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 
  var Items;
  (function(Items) {
   var Text;
   (function(Text) {
    function serialize(model) {
     var json = {};
     json.setup = {};
     var lines = model.text.split("<br>");
     if (lines.length > 1) json.setup.text = lines; else json.setup.text = model.text;
     if (model.stackedLines) json.setup.stackedLines = true;
     if (model.stackedWords) json.setup.stackedWords = true;
     if (model.stackedChars) json.setup.stackedChars = true;
     json.init = ProStyle.Serialization.PropertyListWriter.write(model.init);
     json.scripts = ProStyle.Serialization.ScriptSetWriter.write(model.scriptSet);
     json.lineInit = ProStyle.Serialization.PropertyListWriter.write(model.linesInit);
     json.lineScripts = ProStyle.Serialization.ScriptSetWriter.write(model.linesScriptSet);
     json.wordInit = ProStyle.Serialization.PropertyListWriter.write(model.wordsInit);
     json.wordScripts = ProStyle.Serialization.ScriptSetWriter.write(model.wordsScriptSet);
     json.charInit = ProStyle.Serialization.PropertyListWriter.write(model.charsInit);
     json.charScripts = ProStyle.Serialization.ScriptSetWriter.write(model.charsScriptSet);
     return json;
    }
    Text.serialize = serialize;
   })(Text = Items.Text || (Items.Text = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 
  var Items;
  (function(Items_7) {
   var Unknown;
   (function(Unknown) {
    var Items = ProStyle.Views.Items;
    var UnknownItemView = function(_super) {
     __extends(UnknownItemView, _super);
     function UnknownItemView(model, itemViewSetElem) {
      _super.call(this, model, itemViewSetElem);
      this.model = model;
      this.divs = [];
      this.div.innerText = model.unknownType + "?";
      this.div.classList.add("unknown");
     }
     return UnknownItemView;
    }(Items.ItemView);
    Unknown.UnknownItemView = UnknownItemView;
   })(Unknown = Items_7.Unknown || (Items_7.Unknown = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 
  var Items;
  (function(Items) {
   var Unknown;
   (function(Unknown) {
    function serialize(model) {
     var json = {};
     return json;
    }
    Unknown.serialize = serialize;
   })(Unknown = Items.Unknown || (Items.Unknown = {}));
  })(Items = Extensions.Items || (Extensions.Items = {}));
 })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));

 var Models;
 (function(Models) {
  var Scripts;
  (function(Scripts) {
   var ActionsScript = function(_super) {
    __extends(ActionsScript, _super);
    function ActionsScript(scriptSet, type) {
     _super.call(this, scriptSet, type);
     this.actions = [];
    }
    ActionsScript.prototype.removeAction = function(action) {
     var index = this.actions.indexOf(action);
     this.actions.splice(index, 1);
    };
    return ActionsScript;
   }(Scripts.Script);
   Scripts.ActionsScript = ActionsScript;
  })(Scripts = Models.Scripts || (Models.Scripts = {}));
 
  var Actions;
  (function(Actions) {
   (function(ActionType) {
    ActionType[ActionType["SetProperties"] = 0] = "SetProperties";
   })(Actions.ActionType || (Actions.ActionType = {}));
   var ActionType = Actions.ActionType;
  
   var ActionType;
   (function(ActionType) {
    var PROPERTIES = "properties";
    function fromString(value) {
     value = (value || PROPERTIES).toString().trim();
     if (value === PROPERTIES) return ActionType.SetProperties;
     ProStyle.Util.logError("ActionType.fromString()", "Unknown action type: " + value);
     return ActionType.SetProperties;
    }
    ActionType.fromString = fromString;
    function toString(value) {
     if (value === ActionType.SetProperties) return PROPERTIES;
     return PROPERTIES;
    }
    ActionType.toString = toString;
   })(ActionType = Actions.ActionType || (Actions.ActionType = {}));
  
   var Action = function() {
    function Action(script, actionType, delay) {
     this.script = script;
     this.actionType = actionType;
     this.delay = delay;
     delay = Math.max(0, delay);
    }
    Action.prototype.saveJson = function() {
     ProStyle.Util.logWarning("Action.saveJson()", "Abstract method called");
     return {};
    };
    return Action;
   }();
   Actions.Action = Action;
  
   var SetPropertiesAction = function(_super) {
    __extends(SetPropertiesAction, _super);
    function SetPropertiesAction(script, delay, properties) {
     _super.call(this, script, Actions.ActionType.SetProperties, delay);
     this.properties = properties;
    }
    return SetPropertiesAction;
   }(Actions.Action);
   Actions.SetPropertiesAction = SetPropertiesAction;
  })(Actions = Models.Actions || (Models.Actions = {}));
 
  var CanvasPropertyTypes = function() {
   function CanvasPropertyTypes() {}
   CanvasPropertyTypes.get = function() {
    if (CanvasPropertyTypes._propertyTypes === undefined) {
     var p = [];
     p.push(Models.Properties.Cache.ANIMATION);
     p.push(Models.Properties.Cache.BACKGROUND);
     p.push(Models.Properties.Cache.BORDER);
     p.push(Models.Properties.Cache.CORNERS);
     p.push(Models.Properties.Cache.CROP);
     p.push(Models.Properties.Cache.FONT);
     p.push(Models.Properties.Cache.OPACITY);
     p.push(Models.Properties.Cache.SHADOW);
     p.push(Models.Properties.Cache.TEXT_COLOR);
     CanvasPropertyTypes._propertyTypes = p;
    }
    return CanvasPropertyTypes._propertyTypes;
   };
   CanvasPropertyTypes._propertyTypes = undefined;
   return CanvasPropertyTypes;
  }();
  Models.CanvasPropertyTypes = CanvasPropertyTypes;
 
  var Flows;
  (function(Flows) {
   var PlacementFlowModel = function(_super) {
    __extends(PlacementFlowModel, _super);
    function PlacementFlowModel(story, flowType, placement, defaultPageClass, pageAspectRatio, defaultPageClassIfNotGiven) {
     _super.call(this, story, flowType, placement, pageAspectRatio, defaultPageClass);
     this.defaultPageClassIfNotGiven = defaultPageClassIfNotGiven;
    }
    PlacementFlowModel.prototype.getDefaultPageClassName = function() {
     return this.defaultPageClass || this.defaultPageClassIfNotGiven;
    };
    PlacementFlowModel.prototype.getDefaultPageClassValue = function() {
     return {
      background:"#FFF",
      corners:{
       topLeft:2,
       bottomRight:2,
       bottomLeft:2,
       topRight:2
      },
      shadow:[ 0, 0, 1.5, "rgba(0,0,0,0.5)", .1 ]
     };
    };
    return PlacementFlowModel;
   }(Flows.FlowModel);
   Flows.PlacementFlowModel = PlacementFlowModel;
  })(Flows = Models.Flows || (Models.Flows = {}));
 
  var FramePropertyTypes = function() {
   function FramePropertyTypes() {}
   FramePropertyTypes.get = function() {
    if (FramePropertyTypes._propertyTypes === undefined) {
     var p = [];
     p.push(Models.Properties.Cache.ANIMATION);
     p.push(Models.Properties.Cache.BACKGROUND);
     p.push(Models.Properties.Cache.BORDER);
     p.push(Models.Properties.Cache.CORNERS);
     p.push(Models.Properties.Cache.CROP);
     p.push(Models.Properties.Cache.OPACITY);
     p.push(Models.Properties.Cache.SCALE);
     p.push(Models.Properties.Cache.SHADOW);
     FramePropertyTypes._propertyTypes = p;
    }
    return FramePropertyTypes._propertyTypes;
   };
   FramePropertyTypes._propertyTypes = undefined;
   return FramePropertyTypes;
  }();
  Models.FramePropertyTypes = FramePropertyTypes;
 })(Models = ProStyle.Models || (ProStyle.Models = {}));

 var Types;
 (function(Types) {
  var Stacks = function() {
   function Stacks(current, future, futureOffset, past, pastOffset) {
    this.current = current;
    this.future = future;
    this.futureOffset = futureOffset;
    this.past = past;
    this.pastOffset = pastOffset;
   }
   Stacks.fromJson = function(json) {
    json = json || {};
    json.future = json.future || {};
    json.past = json.past || {};
    return new Stacks(Types.Placement.fromJson(json.current), Types.Placement.fromJson(json.future), Types.Placement.fromJson(json.future.offset), Types.Placement.fromJson(json.past), Types.Placement.fromJson(json.past.offset));
   };
   return Stacks;
  }();
  Types.Stacks = Stacks;
 })(Types = ProStyle.Types || (ProStyle.Types = {}));

 var Models;
 (function(Models) {
  var Items;
  (function(Items) {
   var SequencedItemModel = function(_super) {
    __extends(SequencedItemModel, _super);
    function SequencedItemModel(itemModelSet, itemType, typeLabel, sequenceOnStepIndex, init, scriptSet) {
     _super.call(this, itemModelSet, itemType, typeLabel, [ init ], [ scriptSet ]);
     this.sequenceOnStepIndex = sequenceOnStepIndex;
    }
    return SequencedItemModel;
   }(Items.ItemModel);
   Items.SequencedItemModel = SequencedItemModel;
  })(Items = Models.Items || (Models.Items = {}));
 
  var PagePropertyTypes = function() {
   function PagePropertyTypes() {}
   PagePropertyTypes.get = function() {
    if (PagePropertyTypes._propertyTypes === undefined) {
     var p = [];
     p.push(Models.Properties.Cache.ANIMATION);
     p.push(Models.Properties.Cache.BACKGROUND);
     p.push(Models.Properties.Cache.BORDER);
     p.push(Models.Properties.Cache.CORNERS);
     p.push(Models.Properties.Cache.CROP);
     p.push(Models.Properties.Cache.FONT);
     p.push(Models.Properties.Cache.OPACITY);
     p.push(new Models.Properties.FontPropertyType(true));
     p.push(Models.Properties.Cache.SHADOW);
     p.push(Models.Properties.Cache.TEXT_COLOR);
     p.push(Models.Properties.Cache.TEXT_SHADOW);
     PagePropertyTypes._propertyTypes = p;
    }
    return PagePropertyTypes._propertyTypes;
   };
   PagePropertyTypes._propertyTypes = undefined;
   return PagePropertyTypes;
  }();
  Models.PagePropertyTypes = PagePropertyTypes;
 
  var Properties;
  (function(Properties) {
   var Variables;
   (function(Variables) {
    var Variable = function() {
     function Variable(type) {
      this.type = type;
     }
     Variable.prototype.getValue = function(getDefaultIfMissing) {
      if (getDefaultIfMissing === void 0) {
       getDefaultIfMissing = false;
      }
      if (this._value !== undefined) return this._value;
      if (this.defaultValueOverride !== undefined) return this.defaultValueOverride;
      if (getDefaultIfMissing) return this.type.defaultValue;
      return undefined;
     };
     Variable.prototype.setValue = function(value) {
      if (value === undefined) {
       this._value = undefined;
      } else {
       this._value = this.type.scrubValue(value);
      }
     };
     Variable.prototype.render = function(includeLabel, includeText) {
      var value = this.getValue();
      if (value === undefined) return undefined;
      var s = [];
      if (includeLabel) {
       s.push(this.type.label);
       s.push(": ");
      }
      s.push(value.toString());
      if (includeText) s.push(this.type.text);
      return s.join("");
     };
     return Variable;
    }();
    Variables.Variable = Variable;
   })(Variables = Properties.Variables || (Properties.Variables = {}));
  })(Properties = Models.Properties || (Models.Properties = {}));
 
  var Scripts;
  (function(Scripts) {
   var ActionsOrphan = function(_super) {
    __extends(ActionsOrphan, _super);
    function ActionsOrphan(scriptSet) {
     _super.call(this, scriptSet, Scripts.ScriptType.ActionsOrphan);
     this.scriptSet = scriptSet;
     this.actions = [];
    }
    return ActionsOrphan;
   }(Scripts.ActionsScript);
   Scripts.ActionsOrphan = ActionsOrphan;
  
   var PropertiesScript = function(_super) {
    __extends(PropertiesScript, _super);
    function PropertiesScript(scriptSet, type) {
     _super.call(this, scriptSet, type);
     this.properties = [];
    }
    return PropertiesScript;
   }(Scripts.Script);
   Scripts.PropertiesScript = PropertiesScript;
  
   var InitEvent = function(_super) {
    __extends(InitEvent, _super);
    function InitEvent(scriptSet) {
     _super.call(this, scriptSet, Scripts.ScriptType.InitEvent);
     this.scriptSet = scriptSet;
    }
    return InitEvent;
   }(Scripts.PropertiesScript);
   Scripts.InitEvent = InitEvent;
  
   var PropertyOrphan = function(_super) {
    __extends(PropertyOrphan, _super);
    function PropertyOrphan(scriptSet) {
     _super.call(this, scriptSet, Scripts.ScriptType.PropertyOrphan);
     this.scriptSet = scriptSet;
    }
    return PropertyOrphan;
   }(Scripts.PropertiesScript);
   Scripts.PropertyOrphan = PropertyOrphan;
  
   var StepEvent = function(_super) {
    __extends(StepEvent, _super);
    function StepEvent(scriptSet, stepIndex) {
     _super.call(this, scriptSet, Scripts.ScriptType.StepEvent);
     this.stepIndex = stepIndex;
    }
    return StepEvent;
   }(Scripts.ActionsScript);
   Scripts.StepEvent = StepEvent;
  
   var SwitchEvent = function(_super) {
    __extends(SwitchEvent, _super);
    function SwitchEvent(scriptSet, switchName) {
     _super.call(this, scriptSet, Scripts.ScriptType.SwitchEvent);
     this.switchName = switchName;
    }
    return SwitchEvent;
   }(Scripts.ActionsScript);
   Scripts.SwitchEvent = SwitchEvent;
  })(Scripts = Models.Scripts || (Models.Scripts = {}));
 
  var Step = function() {
   function Step(autoAdvanceDelay) {
    if (autoAdvanceDelay === void 0) {
     autoAdvanceDelay = undefined;
    }
    this.autoAdvanceDelay = autoAdvanceDelay;
    this.startLabel = "";
    this.stopLabel = "";
    this.time = 0;
   }
   return Step;
  }();
  Models.Step = Step;
 })(Models = ProStyle.Models || (ProStyle.Models = {}));

 var Serialization;
 (function(Serialization) {
  var Actions = ProStyle.Models.Actions;
  var Util = ProStyle.Util;
  var ActionReader = function() {
   function ActionReader() {}
   ActionReader.readArray = function(script, json) {
    var actions = [];
    if (json instanceof Array) {
     json.forEach(function(actionJson) {
      actions.push(ActionReader.read(script, actionJson));
     });
    }
    return actions;
   };
   ActionReader.read = function(script, json) {
    json = json || {};
    var actionType = Actions.ActionType.fromString(json.actionType);
    return ActionReader.readPropertiesAction(script, json);
   };
   ActionReader.readPropertiesAction = function(script, json) {
    var properties = Serialization.PropertyListReader.read(script.scriptSet.itemModelSet.story, json, script.scriptSet.itemProperties).properties;
    return new Actions.SetPropertiesAction(script, Util.convertToNumber(json.delay), properties);
   };
   return ActionReader;
  }();
  Serialization.ActionReader = ActionReader;
 
  var Actions = ProStyle.Models.Actions;
  var ActionWriter = function() {
   function ActionWriter() {}
   ActionWriter.writeArray = function(actions) {
    var jsonArray = [];
    actions.forEach(function(action) {
     jsonArray.push(action.saveJson());
    });
    return jsonArray;
   };
   ActionWriter.write = function(action) {
    var json = {};
    return ActionWriter.writePropertiesAction(action);
   };
   ActionWriter.writePropertiesAction = function(action) {
    var json = {
     actionType:Actions.ActionType.toString(action.actionType)
    };
    Serialization.PropertyWriter.writeSet(json, action.properties);
    if (action.delay) json.delay = action.delay;
    return json;
   };
   return ActionWriter;
  }();
  Serialization.ActionWriter = ActionWriter;
 
  var CanvasReader = function() {
   function CanvasReader() {}
   CanvasReader.read = function(json) {
    json = json || {};
    json.init = json.init || {};
    json.init.crop = json.init.crop === undefined ? true :json.init.crop;
    var init = Serialization.PropertyListReader.read(undefined, json.init, ProStyle.Models.CanvasPropertyTypes.get());
    var padding = Math.max(0, Math.min(ProStyle.Util.convertToNumber(ProStyle.Util.getSetup(json, "padding"), 0), 50));
    return new ProStyle.Models.CanvasModel(init, padding, ProStyle.Util.getSetup(json, "mediaUrl"));
   };
   return CanvasReader;
  }();
  Serialization.CanvasReader = CanvasReader;
 
  var CanvasWriter = function() {
   function CanvasWriter() {}
   CanvasWriter.write = function(canvas) {
    var o = {
     setup:{}
    };
    if (canvas.padding) o.setup.padding = canvas.padding;
    if (canvas.canvasMediaUrl) o.setup.mediaUrl = canvas.canvasMediaUrl;
    return o;
   };
   return CanvasWriter;
  }();
  Serialization.CanvasWriter = CanvasWriter;
 
  var ControllerReader = function() {
   function ControllerReader() {}
   ControllerReader.read = function(json) {
    var controller;
    var controllerType = (json.controllerType || "auto").trim().toLowerCase();
    var extension = ControllerReader.lookupExtension(controllerType);
    if (extension && extension["deserialize"]) {
     controller = extension["deserialize"](json);
    } else {
     ProStyle.Util.logError("ControllerReader.read()", "Unknown Controller Type (" + controllerType + ")");
     controller = ProStyle.Extensions.Controllers.Unknown.deserialize(json);
    }
    return controller;
   };
   ControllerReader.lookupExtension = function(itemType) {
    for (var e in ProStyle.Extensions.Controllers) {
     var name = e.toLowerCase();
     if (itemType === name) {
      return ProStyle.Extensions.Controllers[e];
     }
    }
    return undefined;
   };
   return ControllerReader;
  }();
  Serialization.ControllerReader = ControllerReader;
 
  var FlowWriter = function() {
   function FlowWriter() {}
   FlowWriter.write = function(flow) {
    var json = flow.serialize();
    json.flowType = flow.flowType;
    json.pages = [];
    flow.pages.forEach(function(page) {
     json.pages.push(Serialization.PageWriter.write(page));
    });
    return json;
   };
   return FlowWriter;
  }();
  Serialization.FlowWriter = FlowWriter;
 
  var FrameReader = function() {
   function FrameReader() {}
   FrameReader.read = function(json) {
    json = json || {};
    json.init = json.init || {};
    var init = Serialization.PropertyListReader.read(undefined, json.init, ProStyle.Models.FramePropertyTypes.get());
    var aspectRatio = ProStyle.Util.convertToNumber(ProStyle.Util.getSetup(json, "aspectRatio") || FrameReader.DEFAULT_ASPECT_RATIO, FrameReader.DEFAULT_ASPECT_RATIO);
    var padding = Math.max(0, Math.min(ProStyle.Util.convertToNumber(ProStyle.Util.getSetup(json, "padding"), 0), 50));
    return new ProStyle.Models.FrameModel(init, aspectRatio, padding);
   };
   FrameReader.DEFAULT_ASPECT_RATIO = 16 / 9;
   return FrameReader;
  }();
  Serialization.FrameReader = FrameReader;
 
  var FrameWriter = function() {
   function FrameWriter() {}
   FrameWriter.write = function(frame) {
    var o = {
     setup:{}
    };
    o.setup.aspectRatio = frame.aspectRatio;
    o.setup.padding = frame.padding;
    return o;
   };
   return FrameWriter;
  }();
  Serialization.FrameWriter = FrameWriter;
 
  var ItemWriter = function() {
   function ItemWriter() {}
   ItemWriter.write = function(item) {
    var json;
    var extension = ProStyle.Extensions.Items[item.itemType];
    if (extension && extension["serialize"]) {
     json = extension["serialize"](item);
    } else {
     ProStyle.Util.logError("ItemWriter.write()", "Unknown Item Type (" + json.itemType + ")");
     json = {};
    }
    json.itemType = item.itemType;
    json.scripts = Serialization.ScriptSetWriter.write(item.scriptSet);
    return json;
   };
   return ItemWriter;
  }();
  Serialization.ItemWriter = ItemWriter;
 
  var PageWriter = function() {
   function PageWriter() {}
   PageWriter.write = function(page) {
    var json = {};
    json.steps = [];
    page.steps.forEach(function(step) {
     json.steps.push(Serialization.StepWriter.write(step));
    });
    json.items = [];
    PageWriter.writeItems(page, json);
    return json;
   };
   PageWriter.writeItems = function(itemModelSet, json) {
    itemModelSet.items.forEach(function(item) {
     json.items.push(Serialization.ItemWriter.write(item));
    });
   };
   return PageWriter;
  }();
  Serialization.PageWriter = PageWriter;
 
  var Scripts = ProStyle.Models.Scripts;
  var ScriptType = ProStyle.Models.Scripts.ScriptType;
  var Util = ProStyle.Util;
  var ScriptReader = function() {
   function ScriptReader() {}
   ScriptReader.read = function(scriptSet, json) {
    json = json || {};
    json.scriptType = json.scriptType || ScriptType.toString(ScriptType.StepEvent);
    var type = ScriptType.fromString(json.scriptType);
    var script = undefined;
    if (type === ScriptType.StepEvent) script = ScriptReader.readStepEvent(scriptSet, json); else if (type === ScriptType.SwitchEvent) script = ScriptReader.readSwitchEvent(scriptSet, json); else if (type === ScriptType.ActionsOrphan) script = ScriptReader.readActionsOrphan(scriptSet, json); else if (type === ScriptType.PropertyOrphan) script = ScriptReader.readPropertyOrphan(scriptSet, json); else script = ScriptReader.readInitEvent(scriptSet, json);
    json.editor = json.editor || {};
    script.x = Util.convertToNumber(json.editor.x);
    script.y = Util.convertToNumber(json.editor.y);
    return script;
   };
   ScriptReader.readInitEvent = function(scriptSet, json) {
    var initEvent = new Scripts.InitEvent(scriptSet);
    initEvent.properties = Serialization.PropertyListReader.read(scriptSet.itemModelSet.story, json, scriptSet.itemProperties).properties;
    return initEvent;
   };
   ScriptReader.readStepEvent = function(scriptSet, json) {
    var numPart = json.scriptType.slice(4);
    var stepIndex = Math.max(0, Util.convertToNumber(numPart, 1) - 1);
    var stepEvent = new Scripts.StepEvent(scriptSet, stepIndex);
    var actions = undefined;
    if (json.actions !== undefined) actions = json.actions; else if (json.action !== undefined) actions = [ json.action ];
    stepEvent.actions = Serialization.ActionReader.readArray(stepEvent, actions);
    return stepEvent;
   };
   ScriptReader.readSwitchEvent = function(scriptSet, json) {
    var switchName = json.switch || "";
    var switchEvent = new Scripts.SwitchEvent(scriptSet, switchName);
    switchEvent.actions = Serialization.ActionReader.readArray(switchEvent, json.actions);
    return switchEvent;
   };
   ScriptReader.readActionsOrphan = function(scriptSet, json) {
    var actionsOrphan = new Scripts.ActionsOrphan(scriptSet);
    actionsOrphan.actions = Serialization.ActionReader.readArray(actionsOrphan, json.actions);
    return actionsOrphan;
   };
   ScriptReader.readPropertyOrphan = function(scriptSet, json) {
    var orphan = new Scripts.PropertyOrphan(scriptSet);
    orphan.properties = Serialization.PropertyListReader.read(scriptSet.itemModelSet.story, json, scriptSet.itemProperties).properties;
    return orphan;
   };
   return ScriptReader;
  }();
  Serialization.ScriptReader = ScriptReader;
 
  var ScriptSetWriter = function() {
   function ScriptSetWriter() {}
   ScriptSetWriter.write = function(scriptSet) {
    var json = [];
    scriptSet.scripts.forEach(function(script) {
     json.push(Serialization.ScriptWriter.write(script));
    });
    return json;
   };
   return ScriptSetWriter;
  }();
  Serialization.ScriptSetWriter = ScriptSetWriter;
 
  var Models = ProStyle.Models;
  var StepReader = function() {
   function StepReader() {}
   StepReader.read = function(page, json) {
    return new Models.Step(json.autoAdvanceDelay);
   };
   return StepReader;
  }();
  Serialization.StepReader = StepReader;
 
  var StepWriter = function() {
   function StepWriter() {}
   StepWriter.write = function(step) {
    var json = {};
    if (step.autoAdvanceDelay !== undefined) json.autoAdvanceDelay = step.autoAdvanceDelay;
    return json;
   };
   return StepWriter;
  }();
  Serialization.StepWriter = StepWriter;
 
  var Models = ProStyle.Models;
  var StoryReader = function() {
   function StoryReader() {}
   StoryReader.read = function(json) {
    json = json || {};
    var canvas = Serialization.CanvasReader.read(json.canvas || {});
    var frame = Serialization.FrameReader.read(json.frame || {});
    var flows = [];
    var controllers = [];
    var story = new Models.Story(canvas, frame, flows, ProStyle.Util.lowercaseProperties(json.classes), controllers, false);
    if (json.flows instanceof Array) {
     json.flows.forEach(function(flowJson) {
      flows.push(Serialization.FlowReader.read(story, flowJson));
     });
    } else if (json.flow !== undefined) {
     flows.push(Serialization.FlowReader.read(story, json.flow));
    } else if (json.pages instanceof Array) {
     flows.push(Serialization.FlowReader.read(story, {
      pages:json.pages
     }));
    } else if (json.page !== undefined) {
     flows.push(Serialization.FlowReader.read(story, {
      pages:[ json.page ]
     }));
    } else if (json.items instanceof Array) {
     flows.push(Serialization.FlowReader.read(story, {
      pages:[ {
       items:json.items
      } ]
     }));
    } else if (json.item !== undefined) {
     flows.push(Serialization.FlowReader.read(story, {
      pages:[ {
       items:[ json.item ]
      } ]
     }));
    }
    if (flows.length === 0) {
     flows.push(Serialization.FlowReader.read(story, {}));
    }
    if (json.controllers instanceof Array) {
     json.controllers.forEach(function(controllerJson) {
      controllers.push(Serialization.ControllerReader.read(controllerJson));
     });
    } else if (json.controller !== undefined) {
     controllers.push(Serialization.ControllerReader.read(json.controller));
    } else if (ProStyle.defaultControllers instanceof Array) {
     story.usingDefaultControllers = true;
     ProStyle.defaultControllers.forEach(function(controllerJson) {
      controllers.push(Serialization.ControllerReader.read(controllerJson));
     });
    }
    return story;
   };
   return StoryReader;
  }();
  Serialization.StoryReader = StoryReader;
 
  var StoryWriter = function() {
   function StoryWriter() {}
   StoryWriter.write = function(story) {
    var o = {};
    o.canvas = Serialization.CanvasWriter.write(story.canvas);
    o.frame = Serialization.FrameWriter.write(story.frame);
    o.flows = [];
    story.flows.forEach(function(flow) {
     o.flows.push(Serialization.FlowWriter.write(flow));
    });
    return o;
   };
   StoryWriter.stringify = function(story) {
    return JSON.stringify(StoryWriter.write(story));
   };
   return StoryWriter;
  }();
  Serialization.StoryWriter = StoryWriter;
 })(Serialization = ProStyle.Serialization || (ProStyle.Serialization = {}));

 var Util;
 (function(Util) {
  function autoButton(btn, action, start, speedup) {
   if (start === void 0) {
    start = 1e3;
   }
   if (speedup === void 0) {
    speedup = 2;
   }
   var t;
   var s = start;
   var repeat = function() {
    action(false);
    t = setTimeout(repeat, s);
    s = s / speedup;
   };
   var stop = function() {
    if (t !== undefined) {
     clearTimeout(t);
     t = undefined;
     action(true);
    }
   };
   btn.onmousedown = function() {
    s = start;
    repeat();
   };
   btn.onmouseup = function() {
    stop();
   };
   btn.onmouseout = function() {
    stop();
   };
  }
  Util.autoButton = autoButton;
 
  function checkBrowserSupport() {
   var body = document.body;
   return body.classList && body.dataset && Util.prefixCssStyleIfNeeded("perspective") !== null;
  }
  Util.checkBrowserSupport = checkBrowserSupport;
 
  function configureMetaViewport() {
   var meta = Util.querySelector("meta[name='viewport']") || document.createElement("meta");
   meta.content = "width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no";
   if (meta.parentNode !== document.head) {
    meta.name = "viewport";
    document.head.appendChild(meta);
   }
  }
  Util.configureMetaViewport = configureMetaViewport;
 
  function contentLoaded(win, fn) {
   var done = false, top = true, doc = win.document, root = doc.documentElement, modern = doc.addEventListener, add = modern ? "addEventListener" :"attachEvent", rem = modern ? "removeEventListener" :"detachEvent", pre = modern ? "" :"on", init = function(e) {
    if (e.type == "readystatechange" && doc.readyState != "complete") return;
    (e.type == "load" ? win :doc)[rem](pre + e.type, init, false);
    if (!done && (done = true)) fn.call(win, e.type || e);
   }, poll = function() {
    try {
     root.doScroll("left");
    } catch (e) {
     setTimeout(poll, 50);
     return;
    }
    init("poll");
   };
   if (doc.readyState == "complete") fn.call(win, "lazy"); else {
    if (!modern && root.doScroll) {
     try {
      top = !win.frameElement;
     } catch (e) {}
     if (top) poll();
    }
    doc[add](pre + "DOMContentLoaded", init, false);
    doc[add](pre + "readystatechange", init, false);
    win[add](pre + "load", init, false);
   }
  }
  Util.contentLoaded = contentLoaded;
 
  function createChildImageElement(parentDiv, cssClass, src, width, height) {
   if (width === void 0) {
    width = undefined;
   }
   if (height === void 0) {
    height = undefined;
   }
   var img = document.createElement("img");
   img.setAttribute("class", cssClass);
   img.setAttribute("src", src);
   if (width === undefined && height === undefined) height = 100;
   if (width !== undefined) img.setAttribute("width", width.toString() + "%");
   if (height !== undefined) img.setAttribute("height", height.toString() + "%");
   parentDiv.appendChild(img);
   return img;
  }
  Util.createChildImageElement = createChildImageElement;
 
  function createStyleElement(id) {
   var element = document.createElement("style");
   element.type = "text/css";
   element.id = id;
   var head = Util.querySelector("head");
   head.appendChild(element);
   return element;
  }
  Util.createStyleElement = createStyleElement;
 
  function createSvgElement(name, attrs, opt_parent) {
   var svgElement = document.createElementNS("http://www.w3.org/2000/svg", name);
   for (var key in attrs) {
    svgElement.setAttribute(key, attrs[key]);
   }
   if (opt_parent) {
    opt_parent.appendChild(svgElement);
   }
   return svgElement;
  }
  Util.createSvgElement = createSvgElement;
 
  var style = document.createElement("dummy").style, prefixes = "Webkit Moz O ms Khtml".split(" "), memory = {};
  function prefixCssStyleIfNeeded(cssStyle) {
   if (typeof memory[cssStyle] === "undefined") {
    var upperCaseCssStyle = cssStyle.charAt(0).toUpperCase() + cssStyle.substr(1), prefixedCssStyles = (cssStyle + " " + prefixes.join(upperCaseCssStyle + " ") + upperCaseCssStyle).split(" ");
    memory[cssStyle] = null;
    for (var i in prefixedCssStyles) {
     if (style[prefixedCssStyles[i]] !== undefined) {
      memory[cssStyle] = prefixedCssStyles[i];
      break;
     }
    }
   }
   return memory[cssStyle];
  }
  Util.prefixCssStyleIfNeeded = prefixCssStyleIfNeeded;
 
  var style = document.createElement("dummy").style;
  function encodeStyle(cssStyle, value) {
   style.cssText = "";
   cssStyle = Util.prefixCssStyleIfNeeded(cssStyle);
   style[cssStyle] = value;
   return style.cssText;
  }
  Util.encodeStyle = encodeStyle;
 
  var style = document.createElement("dummy").style;
  function encodeStyles(cssStyles) {
   style.cssText = "";
   var cssStyle, prefixedCssStyle;
   for (cssStyle in cssStyles) {
    if (cssStyles.hasOwnProperty(cssStyle)) {
     prefixedCssStyle = Util.prefixCssStyleIfNeeded(cssStyle);
     if (prefixedCssStyle !== null) {
      style[prefixedCssStyle] = cssStyles[cssStyle];
     }
    }
   }
   return style.cssText;
  }
  Util.encodeStyles = encodeStyles;
 
  var style = document.createElement("dummy").style;
  function encodeStyleSheet(styles) {
   var encodings = [];
   var selector;
   styles.selectors.forEach(function(selector) {
    if (styles.hasOwnProperty(selector)) {
     if (typeof styles[selector] === "string") {
      encodings.push(selector + " { " + styles[selector] + " }\n");
     } else {
      encodings.push(selector + " { " + Util.encodeStyles(styles[selector]) + " }\n");
     }
    }
   });
   return encodings.join("");
  }
  Util.encodeStyleSheet = encodeStyleSheet;
 
  function getElementText(element) {
   var textProperty = document.body.textContent ? "textContent" :"innerText";
   return element[textProperty];
  }
  Util.getElementText = getElementText;
 
  function lowercaseProperties(json) {
   var json2 = {};
   for (var prop in json) {
    if (json.hasOwnProperty(prop)) {
     json2[prop.toString().trim().toLowerCase()] = json[prop];
    }
   }
   return json2;
  }
  Util.lowercaseProperties = lowercaseProperties;
 
  function getSetup(json, name) {
   if (json === undefined) return undefined;
   name = name.toLowerCase();
   json = Util.lowercaseProperties(json);
   var setup = json["setup"];
   if (setup !== undefined) {
    setup = Util.lowercaseProperties(setup);
    if (setup[name] !== undefined) return setup[name];
   }
   return json[name];
  }
  Util.getSetup = getSetup;
 
  function getGSTransform(div) {
   var v = {
    x:0,
    y:0,
    z:0,
    xPercent:0,
    yPercent:0,
    rotationX:0,
    rotationY:0,
    rotation:0,
    scaleX:1,
    scaleY:1,
    skewX:0
   };
   if (div) {
    var t = div["_gsTransform"];
    if (t) {
     if (t.x !== undefined) v.x = t.x;
     if (t.y !== undefined) v.y = t.y;
     if (t.z !== undefined) v.z = t.z;
     if (t.xPercent !== undefined) v.xPercent = t.xPercent;
     if (t.yPercent !== undefined) v.yPercent = t.yPercent;
     if (t.rotationX !== undefined) v.rotationX = t.rotationX;
     if (t.rotationY !== undefined) v.rotationY = t.rotationY;
     if (t.rotation !== undefined) v.rotation = t.rotation;
     if (t.scaleX !== undefined) v.scaleX = t.scaleX;
     if (t.scaleY !== undefined) v.scaleY = t.scaleY;
     if (t.skewX !== undefined) v.skewX = t.skewX;
    }
   }
   return v;
  }
  Util.getGSTransform = getGSTransform;
 
  function getStyleElement(styleId) {
   var styleElement = Util.querySelector("#" + styleId);
   return styleElement || Util.createStyleElement(styleId);
  }
  Util.getStyleElement = getStyleElement;
 
  function insertIntoArray(array, index, item) {
   array.splice(index, 0, item);
  }
  Util.insertIntoArray = insertIntoArray;
 
  function logStepValues(flowIndex, pageIndex, itemIndex, stepIndex, values) {
   var out = [];
   out.push("f");
   out.push(flowIndex.toString());
   out.push("p");
   out.push(pageIndex.toString());
   out.push("i");
   out.push(itemIndex.toString());
   out.push("s");
   out.push(stepIndex.toString());
   out.push(" ");
   out.push(JSON.stringify(values));
   console.log(out.join(""));
  }
  Util.logStepValues = logStepValues;
 
  function makeArray(a) {
   return [].slice.call(a);
  }
  Util.makeArray = makeArray;
 
  function querySelectorAll(selector, context) {
   if (context === void 0) {
    context = document;
   }
   try {
    return Util.makeArray(context.querySelectorAll(selector));
   } catch (e) {
    Util.logError("Util.querySelector", e.message);
   }
  }
  Util.querySelectorAll = querySelectorAll;
 
  function svgAddClass(svgElement, className) {
   Util.svgRemoveClass(svgElement, className);
   var classAttr = svgElement.getAttribute("class") || "";
   classAttr = classAttr + (classAttr.length === 0 ? "" :" ") + className;
   svgElement.setAttribute("class", classAttr);
  }
  Util.svgAddClass = svgAddClass;
 
  function svgGetBounds(svgElement) {
   try {
    var rect = svgElement["getBBox"]();
   } catch (error) {
    console.error(error);
   }
   if (rect.width === 0) {
    Util.logWarning("svgGetBounds", "getBBox returned an empty rect");
   }
   return rect;
  }
  Util.svgGetBounds = svgGetBounds;
 
  function svgRemoveClass(svgElement, className) {
   var classAttr = svgElement.getAttribute("class") || "";
   classAttr = classAttr.replace(new RegExp("\\s?" + className), "");
   svgElement.setAttribute("class", classAttr);
  }
  Util.svgRemoveClass = svgRemoveClass;
 
  function createChildSvgElement(parent, tag, attrs) {
   if (attrs === void 0) {
    attrs = undefined;
   }
   var svg = document.createElementNS("http://www.w3.org/2000/svg", tag);
   for (var attr in attrs) {
    svg.setAttribute(attr, attrs[attr]);
   }
   parent.appendChild(svg);
   return svg;
  }
  Util.createChildSvgElement = createChildSvgElement;
 
  function getOffset(elem) {
   var box = elem.getBoundingClientRect();
   var body = document.body;
   var docElem = document.documentElement;
   var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
   var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
   var clientTop = docElem.clientTop || body.clientTop || 0;
   var clientLeft = docElem.clientLeft || body.clientLeft || 0;
   var top = box.top + scrollTop - clientTop;
   var left = box.left + scrollLeft - clientLeft;
   return {
    top:Math.round(top),
    left:Math.round(left)
   };
  }
  Util.getOffset = getOffset;
 })(Util = ProStyle.Util || (ProStyle.Util = {}));

 var Views;
 (function(Views) {
  var Actions;
  (function(Actions_1) {
   var Util = ProStyle.Util;
   var Properties = ProStyle.Models.Properties;
   var SetPropertiesAction = function() {
    function SetPropertiesAction() {}
    SetPropertiesAction.generateTimeline = function(itemViewSet, view, divs, action, timeline, containerSize, afterCssBuckets) {
     if (afterCssBuckets === void 0) {
      afterCssBuckets = undefined;
     }
     var moveToIndex = SetPropertiesAction.getMoveTo(action.properties, itemViewSet.items);
     var buckets = [];
     for (var c = 0; c < divs.length; c++) {
      buckets.push({
       force3D:true,
       immediateRender:false,
       delay:action.delay,
       element:divs[c],
       elementIndex:c
      });
     }
     var stagger = 0;
     var duration = 0;
     var story = action.script.scriptSet.itemModelSet.flow.story;
     var pageAspectRatio = action.script.scriptSet.itemModelSet.flow.pageAspectRatio;
     action.properties.forEach(function(property) {
      if (property.type instanceof Properties.AnimationPropertyType) {
       duration = property["duration"].getValue() || 0;
       stagger = property["stagger"].getValue() || 0;
       if (duration > 0) {
        property.writeCssBuckets(story, view.model, containerSize, buckets, false);
       }
      } else {
       if (moveToIndex !== undefined && (property.type instanceof Properties.MoveToPropertyType || property.type instanceof Properties.PositionPropertyType || property.type instanceof Properties.RotationPropertyType || property.type instanceof Properties.ScalePropertyType || property.type instanceof Properties.SkewPropertyType)) {} else {
        property.writeCssBuckets(story, view.model, containerSize, buckets, false);
       }
      }
     });
     Views.View.postProcessCssBuckets(buckets, afterCssBuckets, action.properties, containerSize);
     var time = timeline.totalDuration();
     for (var c = 0; c < divs.length; c++) {
      if (duration > 0) {
       timeline.to(divs[c], duration, buckets[c], time);
      } else {
       timeline.set(divs[c], buckets[c], time);
      }
      time += stagger;
     }
     return moveToIndex;
    };
    SetPropertiesAction.getMoveTo = function(properties, items) {
     var index = undefined;
     properties.forEach(function(property) {
      if (property.type instanceof Properties.MoveToPropertyType) {
       index = property.getVariable("item").getValue();
       if (index !== undefined) {
        if (index < 0 || index > items.length) index = undefined;
       }
      }
     });
     return index;
    };
    SetPropertiesAction.generateMoveTo = function(div, targetDiv, timeline) {
     if (targetDiv) {
      var t = Util.getGSTransform(targetDiv);
      var transforms = [];
      if (t.x || t.y || t.z) transforms.push("translate3d(" + -t.x + "px," + -t.y + "px," + -t.z + "px)");
      if (t.rotationX) transforms.push("rotateX(" + -t.rotationX + "deg)");
      if (t.rotationY) transforms.push("rotateY(" + -t.rotationY + "deg)");
      if (t.rotation) transforms.push("rotate(" + -t.rotation + "deg)");
      var scaleX = Math.max(0, Math.min(t.scaleX === 0 ? 1 :1 / t.scaleX, 10));
      var scaleY = Math.max(0, Math.min(t.scaleY === 0 ? 1 :1 / t.scaleY, 10));
      if (t.scaleX !== 1) transforms.push("scaleX(" + scaleX + ")");
      if (t.scaleY !== 1) transforms.push("scaleY(" + scaleY + ")");
      if (t.skewX) transforms.push("skewX(" + -t.skewX + "deg)");
      console.log(transforms.join(" "));
      console.log(targetDiv["_gsTransform"]);
      var vars = {
       transform:transforms.join(" "),
       xPercent:-50,
       yPercent:-50
      };
      timeline.to(div, 1.2, vars);
     }
    };
    return SetPropertiesAction;
   }();
   Actions_1.SetPropertiesAction = SetPropertiesAction;
  })(Actions = Views.Actions || (Views.Actions = {}));
 
  var Flows;
  (function(Flows) {
   var PlacementFlowView = function(_super) {
    __extends(PlacementFlowView, _super);
    function PlacementFlowView(model, camera, flowIndex) {
     _super.call(this, model, camera, flowIndex);
     this.model = model;
    }
    return PlacementFlowView;
   }(Flows.FlowView);
   Flows.PlacementFlowView = PlacementFlowView;
  })(Flows = Views.Flows || (Views.Flows = {}));
 
  var Step = function() {
   function Step(step, flowIndex, pageIndex, stepIndex, sequencedItems) {
    this.step = step;
    this.flowIndex = flowIndex;
    this.pageIndex = pageIndex;
    this.stepIndex = stepIndex;
    this.sequencedItems = sequencedItems;
    this.time = 0;
    this.playerStepIndex = 0;
    this.label = flowIndex.toString() + "-" + pageIndex.toString() + "-" + stepIndex.toString() + "-";
    this.startLabel = this.label + "start";
    this.stopLabel = this.label + "stop";
    step.startLabel = this.startLabel;
    step.stopLabel = this.stopLabel;
   }
   Step.prototype.isAtStart = function(time) {
    return Math.abs(time - this.startTime) < .02;
   };
   Step.prototype.isAtEnd = function(time) {
    return Math.abs(time - this.stopTime) < .02;
   };
   Step.prototype.getSubStepCount = function() {
    var subStepCount = 0;
    this.sequencedItems.forEach(function(item) {
     subStepCount = Math.max(subStepCount, item.getCountOfSubSteps());
    });
    return subStepCount;
   };
   return Step;
  }();
  Views.Step = Step;
 
  var Types = ProStyle.Types;
  var Timeline = function() {
   function Timeline(frame, positionChanged) {
    this.generateTimeline(frame, positionChanged);
   }
   Timeline.prototype.generateTimeline = function(frame, positionChanged) {
    var _this = this;
    TweenMax.defaultOverwrite = "none";
    TweenMax.defaultEase = Types.Eaze.DEFAULT.ease;
    if (this.timeline !== undefined) this.timeline.kill();
    this.timeline = new TimelineMax({
     autoRemoveChildren:false,
     onUpdate:positionChanged
    });
    this.timeline.addLabel("initialize", 0);
    var story = frame.story;
    var canvas = frame.canvas;
    var canvasSize = canvas.size;
    var frameSize = frame.size;
    var camera = frame.camera;
    var cameraSize = camera.size;
    var forceProps = {
     fontFamily:"arial"
    };
    if (!canvas.fullScreen) forceProps.height = canvasSize.height;
    canvas.initializeProperties(story, [ canvas.div ], cameraSize, this.timeline, story.canvas.init, false, forceProps);
    forceProps = {
     width:frameSize.width,
     height:frameSize.height
    };
    frame.initializeProperties(story, [ frame.div ], cameraSize, this.timeline, story.frame.init, false, forceProps);
    camera.flows.forEach(function(flow) {
     var pageSize = cameraSize.getContainedSize(flow.pageAspectRatio());
     flow.pages.forEach(function(page) {
      page.initializeProperties(story, [ page.div ], pageSize, _this.timeline, page.model.init, false);
      page.items.forEach(function(item) {
       item.initializeItem(_this.timeline, frame.camera.size);
      });
     });
     flow.initializePlacement(_this.timeline);
    });
    var priorStep = undefined;
    camera.flows.forEach(function(flow) {
     priorStep = flow.generateStepsActions(_this.timeline, priorStep);
    });
    return this.timeline;
   };
   return Timeline;
  }();
  Views.Timeline = Timeline;
 })(Views = ProStyle.Views || (ProStyle.Views = {}));

 function preprocess(div) {
  var storyName = div.dataset["prostyle"];
  if (storyName !== undefined) {
   if (div.style.position !== "relative" && div.style.position !== "absolute") div.style.position = "relative";
   var progress = document.createElement("progress");
   progress.value = 1;
   progress.max = 2;
   progress.style.position = "absolute";
   progress.style.left = "50%";
   progress.style.top = "50%";
   progress.style.transform = "translate(-50%,-50%)";
   div.innerHTML = "";
   div.appendChild(progress);
  }
 }
 function preprocessAll() {
  var body = document.body;
  if (body) {
   if (body.dataset["prostyle"] !== undefined) {
    preprocess(body);
   } else {
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
     preprocess(divs[i]);
    }
   }
  }
 }
 function initCanvas(div) {
  var storyName = div.dataset["prostyle"];
  if (storyName !== undefined) {
   var storyJson = ProStyle.Stories[storyName];
   if (storyJson === undefined) {
    div.innerHTML = "<strong style='background-color: #FFF;color:#C00'>Missing story at ProStyle.Stories." + storyName + "</strong>";
   } else {
    div.innerHTML = "";
    var story = ProStyle.Serialization.StoryReader.read(storyJson);
    var canvas = new ProStyle.Views.CanvasView(story, div);
    canvas.startControllers();
    div["proStyleCanvas"] = canvas;
   }
  }
 }
 function reload() {
  var body = document.body;
  if (body) {
   if (body.dataset["prostyle"] !== undefined) {
    initCanvas(body);
   } else {
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
     initCanvas(divs[i]);
    }
   }
  }
 }
 ProStyle.reload = reload;
 function bootstrap() {
  preprocessAll();
  window.addEventListener("load", function() {
   if (ProStyle.mediaRootUrl === undefined) {
    ProStyle.mediaRootUrl = window["ProStyle_mediaRootUrl"];
   }
   preprocessAll();
   reload();
  });
 }
 ProStyle.bootstrap = bootstrap;
 bootstrap();
})(ProStyle || (ProStyle = {}));