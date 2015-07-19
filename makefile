# Automation for barelyusable.com
t:
	jekyll serve --host 0.0.0.0 &
	sleep 5
	open http://127.0.0.1:4000
b:
	jekyll build
