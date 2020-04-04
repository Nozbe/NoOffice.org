---
part: toc
layout: page
title: "No Office - Table of Contents"
book: book
---

Title: {{ site.data.book.title }}

{% assign kniga = site.data.book }}

Title 2: {{ kniga.title }}

Title 3: {{ site.data.[page.book].title }}

{% include book.html %}

This is the 2020 version of the Table of Contents of the #NoOffice book.

**Last update: April 4, 2020**

{% include book_toc.html %}