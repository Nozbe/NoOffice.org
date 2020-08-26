---
layout: page
title: "#NoOffice - the definitive guide to working in a modern way!"
---

My name is Michael Sliwinski and I'm writing a book: *"No Office - work is not a place to go, it's a thing that you do"*. [Read more about this project and how you can contribute](/about/)

## Progress raport:

The book is originally written in English, and being translated by [#NoOffice community](/about/#contributors).

{% include langs.html %}

## Latest updates:

<div class="posts">
{% for post in site.posts limit:3 %}
<div class="post">
	<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
	<div class="date">
	{{ post.date | date: "%B %e, %Y" }}
	</div>
	<div class="entry">
	{{ post.excerpt }}
	</div>
	<a href="{{ post.url }}">Read more...</a>
</div>
{% endfor %}
</div>

Want to browse the past? [Check out all the blog archives](/blog/)
