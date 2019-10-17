---
layout: page
title: Blog of NoOffice.org
---

## Latest entry:

<div class="posts">
{% for post in site.posts limit:1 %}
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


## All the rest of blog entries:

<div class="posts">
{% for post in site.posts offset:1 %}
<div class="post">
	<h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
	<div class="date">
	{{ post.date | date: "%B %e, %Y" }}
	</div>
</div>
{% endfor %}
</div>
