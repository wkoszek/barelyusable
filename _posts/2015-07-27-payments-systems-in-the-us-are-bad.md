---
title:	'Payment Systems in the US Are Bad'
tags:	article
read:	2015-07-28
published: true
ads:
- 
---

<br>
<br>
<br>
I come from Poland, where the banking system is really good. My first
experience with the US was that the banking system is very old and very
cryptic. I feel like Poland came late to the game of e-commerce and
electronic payments, and we just learned from other countries and got
things right.

Let’s take, for example, the US version of Citibank’s website. If you’re
on it, the panel on top has the “Payments & Transfers” tab:

![](/images/2015-07-27-usability_payments/image18.png)

And if you click on it, on the left side, you’ll get this monster:

![](/images/2015-07-27-usability_payments/image16.png)

The number of options is staggering. “Why?” you may say. “It looks
normal to me.” You might also add: “I think you’re just complaining. It
looks fairly OK.”

I don’t think so. This is something that is intimidating, and I’m sure
many people struggle to accomplish simple things such as transferring
money from account to account. For example, each of the menu options has
many submenus:

![](/images/2015-07-27-usability_payments/image10.png)

One more option:

![](/images/2015-07-27-usability_payments/image12.png)

And one more:

![](/images/2015-07-27-usability_payments/image11.png)

And one more:

![](/images/2015-07-27-usability_payments/image27.png)

And one more:

![](/images/2015-07-27-usability_payments/image28.png)

![](/images/2015-07-27-usability_payments/image22.png)

And one more:

![](/images/2015-07-27-usability_payments/image33.png)

Don’t bother with counting. I counted it for you. There are 36 options
in total. Now what’s pretty interesting is that most of these options
rename and obfuscate the simple fact: they’re all about transferring
money. Looks like also there’s an unnecessary distinction between
“payments” and “bills.”

When I pay, I transfer my money. For example, if I want to pay my
roommate \$10 for paper towels, I transfer the money from my wallet to
his wallet. When I pay the bill for electricity, I transfer my money
from my wallet to PG&E. You can see the pattern.

For usability reasons, the word “transfer” might be complex, as not all
people feel comfortable with its sounds and meaning. But the concept
remains the same regardless of the word you use. One could imagine using
“pay,” “send,” or “move.” Usability tests would show which is most
appropriate.

And it would be so much easier to just have 1 payment option.

Payments in Poland are very simple: you have your universal bank account
number. And the other entity also has a bank number. These bank numbers
are unique and unified among all private persons and businesses, so you
don’t have to think much about how to transfer.

Payment in Poland looks like this:

![](/images/2015-07-27-usability_payments/image15.png)

“Nr rachunek” is, as you can imagine, “Account Number.” So, for example,
your mother and family will know your account number and have it saved
in their portal. They can send you money within Poland at no cost
between most banks. For buying merchandise: people on Allegro (a Polish
clone of Ebay) will publish on their profiles their bank account number
and bank name.

In the old days, you had to paste it by hand, but nowadays, it’s all
automated, and Allegro will log you in to your bank and present
something like this:

![](/images/2015-07-27-usability_payments/image23.png)

As you can see, the web application’s dialog, just by looking at the
account number, can figure out which bank it is. You can cross-check
with the website to make sure, but you don’t have to – it’s quite likely
right.

And you’re done.

It would be very interesting to see how startups from the mobile arena
do in Poland. I suspect that a large part of the success of e-payments
startups in the US is because e-banking is pretty bad. But I guess time
will tell if it gets any better. We can only hope that Asian and African
countries will be able to observe how all these e-payments systems in
Europe and US addressed security and usability issues and will solve the
problems in the best known way. Is it possible?

Let’s sketch it out. I think a good start would be with security. In
Poland, I get this:

![](/images/2015-07-27-usability_payments/image09.png)

Basically my bank knows I have a long password, but they don’t want it
all. They want only the selected letters. Why? Well, if somebody was to
intercept the letters that I’ve typed on the keyboard, they would only
get a part of my password. And if I refresh the page, it will ask for a
different set of letters.

I feel it’s fairly safe, yet I hate it. I remember what the password was
but never number the letters as I spell them out in my head, so actually
logging in is hard. I feel like Venmo has this solved better:

![](/images/2015-07-27-usability_payments/image17.png)

And once you enter the right e-mail and password, you still get this:

![](/images/2015-07-27-usability_payments/image31.png)

So not only would one need to know my password but also have my phone to
log in. I wish it was pushed a bit more and that I could use Google
Authenticator or Duo Security and enter a token from an app, but it’s
better than nothing.

Finally, we land on the essence of payment:

![](/images/2015-07-27-usability_payments/image32.png)

I think payments are as simple as that. You can send money out or take
money in. That’s all.

Why not just “pay” money for a bill (Citbank’s eBills), “pay” your
friend, or “pay” yourself (internal transfer).

These options need not be exposed all at once. For example, if I click
“Pay,” the next choice could be: “Bill,” “A Friend/Family,” “Myself.”
Clicking on Bill would show me saved services I get billed for monthly.
A Friend/Family would show people whom I’ve interacted with in the past.
And Myself would make sense in case I had more than one account.

Is Citibank the only bad bank?

No, it’s not. Bank of America is equally bad. Recently, some changes to
the website have been made. It looks great, but:

![](/images/2015-07-27-usability_payments/image06.png)

Unfortunately, it broke the support for my password management. So now
if I want to use LastPass, I cannot. So we struggle, struggle, struggle,
and get into the portal.

Yes, it’s slightly better:

![](/images/2015-07-27-usability_payments/image19.png)

But still too complex:

![](/images/2015-07-27-usability_payments/image35.png)

It’s so complex that we end up with the “Help me choose transfer”
option. Why not present a user with a link to “Transfer” and then
provide choices of payment. And maybe the system could act smart. For
example, you can imagine a huge dialog saying:

Transfer to: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

And if you paste a cell phone number, it would recognize the network and
maybe even show your friend’s name and photo. If you paste the Bank of
America number, I’m sure it can be quickly look it up so that some
general information would be provided for verification. And, well, if
the pasted bank account number isn’t Bank of America’s, then I guess
it’s another’s bank number.

I feel like a good exercise for the reader and myself would be to
develop a paper prototype of the perfect banking system. Something that
you, myself, and our grandmothers could use.
