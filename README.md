# Tabbable Extension for Fancytree
This is a small extension for https://github.com/mar10/fancytree that adds a tabindex attribute to the main node span.

I just needed to add the ability to tab through the Fancytree nodes (not the titles) and be able to bind various events to the main node span.

The files within 'demo' are for example only and, when you open 'demo/index.html' in a browser on your local server, will show:
<ol>
<li>using the 'tabbable' extension (and how easy Fancytree extensions are to write)</li>
<li>binding 'enter key' events to the main node span - opening parents or selecting children (spacebar still selects parent as well)</li>
<li>showing a list of selected items in another div tag and deselecting those items on click</li>
</ol>
