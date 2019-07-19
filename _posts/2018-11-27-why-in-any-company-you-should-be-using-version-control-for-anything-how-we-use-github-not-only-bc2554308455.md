---
tags: [essay]
title: "Why in any company you should be using version control for anything — how we use Github not only for code, but also for writing!"
---

At [Nozbe][n] among all the [apps](https://sliwinski.com/apps/) we use to run our company, we also take advantage of Github’s implementation of Git - the version control system - because when many people work on code, things can quickly fall through the cracks if you’re not using a version control system.
 
![Why in any company you should be using version control for anything - how we use Github not only for code, but also for writing!](/img/github.jpg)

*Originally posted on [my personal blog](https://sliwinski.com/github)*

<!--More-->

Git in a software company is nothing new, but recently we started **using Git for more things** - especially for writing content... and now everyone on our team knows how to do it! And thanks to the [Working Copy app](https://workingcopyapp.com) I can work like this on my iPad Pro, too. Here’s the setup and the inspiration:

### How we started working with Git for writing... our main Nozbe page

When we decided to redesign our [Nozbe web page][n] a year ago, we wanted not only a faster and more responsive web site, but also a place where many people could quickly edit things and not overwrite each others’ changes... so we went with [Hugo](https://gohugo.io) which is being published to our servers directly from a Github repository.

This way we get all the benefits of using Git:

- many people can work on the site content at once
- we can create pull requests (to experiment with different versions of the site)
- we can add and correct translations easily (our site supports 11 languages!)
- we can write in [Markdown](https://daringfireball.net/projects/markdown/) and publish as HTML which makes working on texts easy! (Actually, I’m writing this blog post in Markdown to later publish it as HTML, too...)

### We all had to learn Git and Github

The downside of all this was that everyone in our company had to learn how to use Git and Github if they wanted to contribute to our site. And this can get very technical and very tricky. Yes, it was a learning curve in the beginning and we had to write internal manuals for folks so that configuring this locally would be as painless as possible.

I had to also figure out how to configure this on my iPad Pro and thanks to the Working Copy app it was possible - now that’s a real Pro app right here.

### We went further with Github... and applied the same principles to our help page

Again, our [Nozbe help page](http://nozbe.help) needs to be edited frequently to stay up-to-date and we need to be able to do it in many languages. After trying different help page solutions we finally settled on building our own, again using the same technologies we used for our main web site - Hugo and Github.

As everyone on our team has already figured out how to write in Markdown, how to commit and push things to Github... it was pretty straightforward and the team is really happy we went with this approach :-)

### Now we’ve also started using Github for drafting texts in our Marketing department! Before we were using Dropbox...

Up until now we used to draft texts and blog posts by putting them in a shared Dropbox folder and it worked fine. Everyone had access and they could use any app they wanted to edit the texts written in Markdown.

But...

It was hard do track changes. To see who’s changed what in each text... and to make sure nobody was working on the same document at the same time...

This unfortunately created some strange habits of creating copies of texts, additional drafts... a mess.

### But there’s a solution - and it came from [Federico Viticci](https://www.macstories.net/)

Please check out [Federico’s article where he gets into details](https://www.macstories.net/ios/my-markdown-writing-and-collaboration-workflow-powered-by-working-copy-3-6-icloud-drive-and-github/), but apparently, the Working Copy app has this great feature that you can sync an iCloud folder to it and later push it to a remote repository... so this is exactly what I did! And the sync works both ways, so when someone changes a file remotely and I sync the repository in Working Copy, it’ll automatically be visible on my iCloud Drive!

So this is what I did:

- I copied all of our current marketing texts to my [IA Writer](https://ia.net/writer) folder on iCloud as this is the app I’m using for editing texts
- I then opened a synced folder in Working Copy and pointed it to this iCloud folder
- I then created a new “Marketing” repository on Github and invited my team there, and added it as a remote repository in Working Copy to that iCloud folder...
- Done! Now we can collaborate on texts using Github and I can edit these texts directly using my favorite writing app on the iPad!

Thanks Federico for this tip and thanks Working Copy for being an amazing Github client which is constantly updated to use the latest and greatest iOS APIs.

### Git and version control is a way to go!

Yes, you should use Git. And not only in an [all remote team](https://nozbe.com/about) like ours, but I think in any team when people are working on different computers and want to get things done together!

I’m so happy that in my team everyone embraced this and now we’re updating our sites and writing texts in the most collaborative way possible.

[n]: https://nozbe.com/
[tp]: https://thepodcast.fm


<!--
2018-11-27-why-in-any-company-you-should-be-using-version-control-for-anything-how-we-use-github-not-only-bc2554308455.md
-->