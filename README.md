# barelyusable
BarelyUsable.com stuff

Idea
----
- colaborative blog with guest writers
- fairly niche, however should target UI/UX designers
- should not be too negative, but instructional instead
  - every post should have a section on how company decided
    to implement a feature
  - what's the problem with this approach
  - how it could be engineered better
- main topic
  - usability engineering
  - UI/UX
  - design of nowadays things
- Reason for being:
  - noticing problems with usability in front of the computer, but not only
  - trying to understand if other users also face similar problems
  - getting better at UI/UX design
  - part of frustration, part of it is trying to really deep dive into usability of engineering problems.


Blurbs
------

(2) 1-line introduction to my website about usability 

Barely Usable is a usability engineering website, where the design and
construction of real-life and Internet products are analyzed and criticized.

(3) 1-paragraph introduction to my website about usability

Barely Usable was created in 2015 based on the belief that the design and construction of usable products is extremely difficult and that the only way to learn usability engineering is to look, notice, and criticize usability problems and suggest possible solutions. The domain of usability has been well known for years, yet the awareness of its importance has been scarce.  Barely Usable is meant to be a website where enthusiasts of user interface, user experience and human-computer interaction can collaborate on coming up with new and better solutions, making the world easier to use. We hope that gathering every resource together will help you develop the level of sensitivity necessary for creating usable objects. Barely Usable is brought to you by the founding team of Barvoy Inc.  

Readership goals
----------------

For the first year 2015:
- 25 articles
- 100 followers via e-mail
- 50 followers via Twitter
- 50 followers via Facebook
- 50 followers via Pinterest
- 50 followers via ...

To investigate
--------------
Office hours for Skype?

Structure of this directory
---------------------------

barelyusable/
	
	Jekyll content

Generated by
--------------

	jekyll new barelyusable
	git add
	git branch gh-pages

	bundle install

Gemfile
-------
	source 'https://rubygems.org'

	require 'json'
	require 'open-uri'
	versions = JSON.parse(open('https://pages.github.com/versions.json').read)

	gem 'github-pages', versions['github-pages']


Schedules
---------

                             2015

      January               February               March
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
             1  2  3   1  2  3  4  5  6  7   1  2  3  4  5  6  7
 4  5  6  7  8  9 10   8  9 10 11 12 13 14   8  9 10 11 12 13 14
11 12 13 14 15 16 17  15 16 17 18 19 20 21  15 16 17 18 19 20 21
18 19 20 21 22 23 24  22 23 24 25 26 27 28  22 23 24 25 26 27 28
25 26 27 28 29 30 31                        29 30 31
                                            
       April                  May                   June
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
          1  2  3  4                  1  2      1  2  3  4  5  6
 5  6  7  8  9 10 11   3- 4  5  6  7  8  9   7- 8  9 10 11 12 13
12 13 14 15 16 17 18  10-11 12 13 14 15 16  14-15 16 17 18 19 20
19 20 21 22 23 24 25  17-18 19 20 21 22 23  21-22 23 24 25 26 27
26-27 28 29 30        24-25 26 27 28 29 30  28-29 30
                      31                    

9 posts

        July                 August              September
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
          1  2  3  4                     1         1  2  3  4  5
 5- 6  7  8  9 10 11   2- 3  4  5  6  7  8   6- 7  8  9 10 11 12
12-13 14 15 16 17 18   9-10 11 12 13 14 15  13-14 15 16 17 18 19
19-20 21 22 23 24 25  16-17 18 19 20 21 22  20-21 22 23 24 25 26
26-27 28 29 30 31     23-24 25 26 27 28 29  27-28 29 30
                      30-31

13 posts

      October               November              December
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
             1  2  3   1- 2  3  4  5  6  7         1  2  3  4  5
 4- 5  6  7  8  9 10   8- 9 10 11 12 13 14   6- 7  8  9 10 11 12
11-12 13 14 15 16 17  15-16 17 18 19 20 21  13-14 15 16 17 18 19
18-19 20 21 22 23 24  22-23 24 25 26 27 28  20-21 22 23 24 25 26
25-26 27 28 29 30 31  29-30                 27-28 29 30 31

13 posts


FONTS
-----
font-family:'NewBaskervilleW01-Itali';
font-family:'NewBaskervilleW01-Roman';
font-family:'NewBaskervilleW01-SemiB_693023';
font-family:'NewBaskervilleW01-SemiB_693026';
font-family:'NewBaskervilleW01-Bold';
font-family:'NewBaskervilleW01-BoldI';
font-family:'NewBaskervilleW01-Black_693005';
font-family:'NewBaskervilleW01-Black_693008';
font-family:'Bembo Book W01 Bold';
font-family:'Bembo Book W01';
font-family:'Bembo Book W01 Italic';
font-family:'BemboBookW01-BoldIt';
font-family:'Bookman Old Style W01';
font-family:'Bookman Old Style W10';
font-family:'BookmanOldStyleW01-Ital';
font-family:'BookmanOldStyleW01-Bold_691970';
font-family:'BookmanOldStyleW01-Bold_691973';
font-family:'BookmanOldStyleW10-Ital';

SITEMAP / ROBOTS
----------------
http://davidensinger.com/2013/11/building-a-better-sitemap-xml-with-jekyll/

http://pixelcog.com/blog/2013/jekyll-from-scratch-core-architecture/

