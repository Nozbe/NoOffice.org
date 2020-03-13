# NoOffice.org

New NoOffice.org web site for openly writing the ultimate book about remote working out in the open!

## Licensed under Creative-Commons license

See [license.md](https://github.com/Nozbe/NoOffice.org/tree/master/license.md) for details.

## Written on GitHub in Markdown

The contents of the book are in the [/book folder](https://github.com/Nozbe/NoOffice.org/tree/master/book/)

Each chapter is created with these simple steps:

1. A text file "chapter_name.md" in the "book" folder.
2. Three things in to the front matter (between "---" signs):
  * "part" set to the part of the book
  * "title" of the chapter
  * "subtitle" of the chapter
3. Once a chapter is created, it's added to the [Table of Contents file: book.yml](https://github.com/Nozbe/NoOffice.org/tree/master/_data/book.yml) under appropriate book part and chapter, for example:
  * `- url: chapter_name`
  * `status: draft` *(can be "draft" or "ready")*
  * `chname: Chapter 3` *(chapter number or intro or outro)*
4. (optional and default) A "mini chapter-only table of contents" if the chapter is very long by pasting these two lines of code right after the front matter of the page:
  * `* TOC`
  * `{:toc}`

Here's a [simple template](https://github.com/Nozbe/NoOffice.org/tree/master/book/_template.md) for minimal code and maximum content:

```
---
part: PART
title: TITLE
subtitle: SUBTITLE
---

* TOC (optional)
{:toc}

## SECTION 1

CONTENT
```

## Where's the ready-to-read book located?

[NoOffice.org site](https://NoOffice.org) auto generated through Jekyll from this repository. The book [Table of Contents are here](https://NoOffice.org/book)

## How to contribute?

Create pull requests on anyting - any chapter, anything in this repository and I'll be reviewing them.

[I've decided to blog a daily diary of my contribution to the book](https://NoOffice.org/tag/diary)

## How can we translate the book to Spanish, Polish, German, Italian... or any other lanugage?

This is coming soon - [send me an email](mailto:michael@nozbe.com) if you want to help translate and I'll set it up here. As I write the first chapters I'll start preparing guidelines for translating.

