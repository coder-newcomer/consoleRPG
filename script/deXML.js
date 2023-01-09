/**
 * # deXML.js
 * ---
 * A simple JavaScript library for processing XML, now work natively.
 * 
 * For apostrophe `attribute='value'` support, please use apostrophe `'` as `&apos;` and quotes `"` as `&quot;` in every element value when possible.
 * 
 * Note: This script cannot parse multiple same element since as properties data **it's a bad idea** and will cause unexpected behavior also will destroy the script functionality.
 * @version alpha **(Not yet complete)**.
 * @copyright © 2023 coder-newcomer
 */

var deXML = {};

/**
 * An example XML data. **Use this only for testing!**
 */
var exampleML = `
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<root>
  <system lang="en" user="admin">userAgent</system>
  <profile>
    <user id="1">
      <name>admin</name>
      <nickname>Admin</nickname>
      <password>admin</password>
      <data level="60" xp="9999999" money="9999999">
        <inventory>yes</inventory>
        <armor>yes</armor>
        <weapon>yes</weapon>
      </data>
    </user>
  </profile>
</root>
`;

class XML {
  constructor (XMLString) {
    if (!(XMLString.charAt(0) == '<' && XMLString.substring(XMLString.lastIndexOf('/>')) == '/>')) {
      throw SyntaxError('Basic syntax error reported a SyntaxError from your given XMLString', {
        cause: { code: 'BasicSyntaxError', cause: XMLString }
      });
    };
    this.raw = XMLString;
    this.query = {
      array: this.minify().substring(this.minify().indexOf('<?'), this.minify().lastIndexOf('?>') + 2).replaceAll('><', '>${split}<').split('${split}'),
    };
    { // this.query.array.xml
      let match = [this.raw, '<?xml ', '?>', 'version="','encoding="'];
      let returned = match[0].substring(match[0].indexOf(match[1]) + (match[1].length - 1));
      { // version
        returned = returned.substring(returned.indexOf(match[3]) + match[3].length - 1);
        returned = returned.substring(returned.indexOf('"'), 0);
        this.query.array.xml.version = returned;
      };
      {
        returned = 
      };
    };
    this.value = () => {
      var returned = this.raw;
      this.query.array.forEach(e => {
        returned = returned.replace(e, '');
      });
      return returned;
    };

    /**
     * Minify, remove space indent and newline.
     * 
     * Note: this will also remove any space ("   ") inside element value,\
     * like `<element>   <element/>`
     */
    this.minify = () => { return this.raw.trim().replaceAll('  ', '').replaceAll('><', '><').replaceAll('\n', ''); };

    /**
     * All node element and it's value which turned into object. Use `update()` function to update `value` instance. This feature may unusable.
     */
    this.object = {};
  };
  update() {

  };


  data = {
    /**
     * Returns raw element node as string.
     * @param {string} elementTarget Target element selector and their children seperated by space ' ', only match the first occurence.
     */
    nodeParse: (elementTarget) => {
      var returned = this.value();
      elementTarget = elementTarget.trim().split(' ');
      for (let i = 0; i < elementTarget.length; i++) {
        let e = elementTarget[i];
        let match = [`<${ e }`, `<${ e }/>`, `<${ e } />`];
        // Check element existence
        if (returned.indexOf(match[0] < 0)) { return null; };
        returned = returned.substring();
      }
    }
  };

};

/**
 * Side Utility function for this script works, can be used globally.
 */
var sideUtil = {

  /**
   * Returns element from target node selector.
   * @param {string} node Target node selector and their children seperated by space ' ', only match the first node selector.
   * @example sideUtil.nodeSelector('div button img').src = 'img/foo.png';
   */
  nodeSelector: (node) => { // this function can be extended
    var node = node.trim().split(' ');
    var currentnode = document.querySelector(node[0]);
    for (let i = 1; i < node.length; i++) {
      currentnode = currentnode.querySelector(node[i]);
    };
    return currentnode;
  },

  /**
   * Same as nodeSelector, but extended to match more type of node selector like jQuery. Please read the usage instruction.
   * @param {string} node Target node selector and their children seperated by space ' ', Supported node selector `element`, `.class`, `#id`, `[attr=value]`.
   */
  nodeQuery: (node) => { // working later, need to finish main project

  },

  /**
   * Returns number or global property from a string. Suitable for string only returned property or function (such like `getAttribute()` or `innerText`).
   * @param {string} string Any string within valid value, except that will does nothing (return the same value).
   * @example console.log(sideUtil.deString('string'), sideUtil.deString('60'), sideUtil.deString('true'), sideUtil.deString('null'));
   * // return 'string' 60 true null
   */
  deString: (string) => { // code looks short and simple, but it's need hard thinking!
    var keyword = [true, false, NaN, Infinity, null, undefined, ''];
    var keywordstr = ['true', 'false', 'NaN', 'Infinity', 'null', 'undefined', ''];
    if (keywordstr.includes(string)) {
      if (isFinite(string) && !isNaN(Number(string))) { return Number(string); };
      return keyword[keywordstr.indexOf(string)];
    } else { return string; };
  }
};
