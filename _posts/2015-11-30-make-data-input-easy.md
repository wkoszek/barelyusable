---
layout: post
title:	'Make data input easy'
date:   2015-11-30
categories: usability
author: Wojciech Koszek
authpage: http://www.koszek.com/
email:	wojciech@koszek.com
---


One of the things good usable design is all about is making data input
seamless. If I want to perform a simple action online but I’m asked
about too much information, it’s quite likely going to discourage me and
I’ll abandon the website. Example from Lost and Found section of Redwood
City Police department:

![](/images/2015-11-30-make-data-input-easy/image03.png)

Will color of my eyes impact whether my black jacket will be found?
Compare it with Caltrain’s lost and found form, where the number of
fields is about right:

![](/images/2015-11-30-make-data-input-easy/image01.png)

The last two text areas are redundant, but we can see a progress.

While entering the data important is to be liberal about how user puts
the content in. Below I show a dialog from TPLink router website. In the
router there’s a field called “MAC” address, which is quite technical,
but all it is is a 6 pieces of data formated like this:
“aa:bb:cc:dd:ee:ff”. All networking programs show data in this format.
TPLink website however wants the data to be dash-separated. So
non-standard format, meaning copy & paste from other programs doesn’t
work. Frustrating is that original data was cleared after I clicked “OK”
on the pop-up.

![](/images/2015-11-30-make-data-input-easy/image05.png)

One needs to re-type everything by hand, instead of just correcting the
format. The proper way to go about it would be to let the user copy and
paste it, and try to take the best effort to validate the data. If the
format was correct the first time, just accept it. If there were doubts,
show what was read and how the website interpreted it and ask for
confirmation.

Have you ever noticed frustrating data input dialogs? Would like to hear
about them!
