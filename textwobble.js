{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // <![CDATA[\
var speed=200; // speed of wobbling, lower is faster\
var height=3; // height of wobbling in pixels\
var alink="http://www.mf2fm.com/rv"; // page to link text to (set to ="" for no link)\
\
/****************************\
*    Wobbly Text Effect     *\
*(c) 2003-6 mf2fm web-design*\
*  http://www.mf2fm.com/rv  *\
* DON'T EDIT BELOW THIS BOX *\
****************************/\
var wobtxt, wobble, wobcnt=0;\
window.onload=function() \{ if (document.getElementById) \{\
  var i, wobli;\
  wobble=document.getElementById("wobble");\
  wobtxt=wobble.firstChild.nodeValue;\
  while (wobble.childNodes.length) wobble.removeChild(wobble.childNodes[0]);\
  for (i=0; i<wobtxt.length; i++) \{\
    wobli=document.createElement("span");\
    wobli.setAttribute("id", "wobb"+i);\
    wobli.style.position="relative";\
    wobli.appendChild(document.createTextNode(wobtxt.charAt(i)));\
    if (alink) \{\
      wobli.style.cursor="pointer";\
      wobli.onclick=function() \{ top.location.href=alink; \}\
    \}\
    wobble.appendChild(wobli);\
  \}\
  setInterval("wobbler()", speed);\
\}\}\
\
function wobbler() \{\
  for (var i=0; i<wobtxt.length; i++) document.getElementById("wobb"+i).style.top=Math.round(height*Math.sin(i+wobcnt))+"px"\
  wobcnt++;\
\}\
// ]]>}