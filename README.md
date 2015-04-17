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
 5  6  7  8  9 10 11   3  4  5  6  7  8  9   7  8  9 10 11 12 13
12 13 14 15 16 17 18  10 11 12 13 14 15 16  14 15 16 17 18 19 20
19 20 21 22 23 24 25  17 18 19 20 21 22 23  21 22 23 24 25 26 27
26-27 28 29 30        24 25 26 27 28 29 30  28 29 30
                      31                    
        July                 August              September
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
          1  2  3  4                     1         1  2  3  4  5
 5  6  7  8  9 10 11   2  3  4  5  6  7  8   6  7  8  9 10 11 12
12 13 14 15 16 17 18   9 10 11 12 13 14 15  13 14 15 16 17 18 19
19 20 21 22 23 24 25  16 17 18 19 20 21 22  20 21 22 23 24 25 26
26 27 28 29 30 31     23 24 25 26 27 28 29  27 28 29 30
                      30 31                 
      October               November              December
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
             1  2  3   1  2  3  4  5  6  7         1  2  3  4  5
 4  5  6  7  8  9 10   8  9 10 11 12 13 14   6  7  8  9 10 11 12
11 12 13 14 15 16 17  15 16 17 18 19 20 21  13 14 15 16 17 18 19
18 19 20 21 22 23 24  22 23 24 25 26 27 28  20 21 22 23 24 25 26
25 26 27 28 29 30 31  29 30                 27 28 29 30 31
                                            
