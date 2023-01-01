/**
 * deXML.js alpha © 2023 coder-newcomer
 * A simple JavaScript library for processing XML.
 * 
 * This script can only work with DOM (Document Object Model) Web API.
 * For native use, isn't yet available but will be made soon.
 * 
 * This version not yet complete, use it wisely as is.
 */

var exampleML = `
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<?xml-model href="file.dtd" type="application/xml-dtd"?>
<?xml-model href="file.xsd" type="application/xml" schematypens="http://www.w3.org/2001/XMLSchema"?>
<?xml-stylesheet href="file.xsl" type="text/xsl"?>
<?xml-stylesheet href="file.css" type="text/css"?>
<!DOCTYPE root [<!ELEMENT root (#PCDATA)>]>
<!DOCTYPE root PUBLIC "public-id" "file.dtd">
<!DOCTYPE root PUBLIC "public-id" "file.dtd" []>
<!DOCTYPE root SYSTEM "file.dtd">
<!DOCTYPE root SYSTEM "file.dtd" []>
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
`; // This is only example even it's illegal

class XML {
  constructor (XMLString) { // need to extends and fix this
    this.value = XMLString.trim().replaceAll('  ', '').replaceAll('\n', ''); // Minify, remove space indent and newline
    this.query = this.value.substring(this.value.indexOf('<?'), this.value.lastIndexOf('?>') + 2).replaceAll('><', '>${split}<').split('${split}');
    this._toArray_ = this.value.replaceAll('><', '>${split}<').split('${split}');
    this.bind = {
      xml: {
        value: this.value.substring(this.value.indexOf('<?xml '), this.value.indexOf('?>') + 2)
      }
    }
  };
  document = {
    attach: () => {
      document.querySelector('html').append(document.createElement('xml'));
      document.querySelector('xml').innerHTML(this.value);
    },
    dettach: () => {
      document.querySelector('xml').remove();
    },
    element: document.querySelector('xml'),
    text: document.querySelector('xml').innerHTML
  };
  getAttributes(node, attr) {
    this.document.element
  };
}