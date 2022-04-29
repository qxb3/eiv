# eiv (eruda in via)

A simple script to get
<a href="https://github.com/liriliri/eruda">eruda</a>
working with 
<a href="https://github.com/tuyafeng/Via">via browser</a>
with an easy to use plugin loader

# How to use?

<ul>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#loading-a-plugin">Loading a plugin</a></li>
</ul>

## Installation

<ul>
  <li>
    First of all download via browser
    <a href="https://play.google.com/store/apps/details?id=mark.via.gp&hl=en&gl=US&referrer=utm_source=google&utm_medium=organic&utm_term=google+play+store+via+browser&pcampaignid=APPU_1_u8trYs-sE_HQ2roP_q6HiAQ">here</a>
  </li>

  <li>
    Then download the <strong>script.js</strong> on
    <a href="https://github.com/qxb3/eiv/releases">releases</a>
  </li>

  <li>
    Copy the script you just downloaded then open via browser and go to<br>
    <strong>Settings > Scripts > Click the + sign > Add script</strong><br>
    Then paste the script that you just download in the code part
  </li>
</ul>

## Loading a plugin

Please visit
<a href="https://github.com/liriliri/eruda#plugins">plugins list</a>
to see the available plugins<br> and just add the plugins you want inside the **loadPlugins()** function
```js
...
loadPlugins(["fps", "code", "dom"])
...
```

# Previews

<p>
  <img src="/previews/console.png" width="100" />
  <img src="/previews/dom.png" width="100" />
  <img src="/previews/fps.png" width="100" />
</p>


# Contributing

Feel free the make changes to the code and make a pr :>
