---
layout: page
title: The definitive guide to working remotely!
---

My name is Michael Sliwinski and I'll be openly working on my upcoming book *"No Office - work is not a place to go, it's a thing that you do"* on this web site. [Read more about this project and how you can contribute](/about/)

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
