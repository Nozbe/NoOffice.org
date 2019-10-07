# NoOffice.org

New NoOffice.org web site for openly writing the ultimate book about remote working out in the open!

## Licensed under Creative-Commons license

See [license.md](https://github.com/Nozbe/NoOffice.org/tree/master/license.md) for details.

## Written on GitHub in Markdown

The contents of the book are in the [/book folder](https://github.com/Nozbe/NoOffice.org/tree/master/book/)

To create a new chapter file follow these simple steps:

1. Simply create a blank text file "example.md" in the "book" folder.
2. Add two things in to the front matter (between "---" signs):
  * "layout" and just set it to "chapter"
  * "part" set to the part of the book
  * "title" of the chapter you're writing
3. Once you've saved this file, please add it as well to the [Table of Contents file: toc.yml](https://github.com/Nozbe/NoOffice.org/tree/master/_data/toc.yml) under appropriate book part and chapter, for example:
  * `- title: TITLE`
  * `subtitle: SUBTITLE`
  * `url: /book/example/`
4. (optional and default) You can add "a mini chapter-only table of contents" if the chapter very long by pasting these two lines of code right after the front matter of the page:
  * `* TOC`
  * `{:toc}`

Here's a [simple template](https://github.com/Nozbe/NoOffice.org/tree/master/book/_template.md) for minimal code and maximum content:

```
---
layout: chapter
part: PART
title: TITLE
---

* TOC (optional)
{:toc}

## SUBTITLE

CONTENT
```
