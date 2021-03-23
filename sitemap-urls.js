javascript: void(d = document);
void(el = d.getElementsByTagName('loc'));
out = '';
for (i = 0; i < el.length; i++)
{
	void(out = out + '<head><title>Sitemap URLs - Quick Export</title><link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"><body style="font-family: Nunito, sans-serif;"></body><a href=' + el[i].innerHTML + ' target="_blank">' + el[i].innerHTML + '</a> |-| <a href="https://search.google.com/test/mobile-friendly?url=' + el[i].innerHTML + '" target="_blank">Mobile Test</a> |-| <a href="https://developers.google.com/speed/pagespeed/insights/?url=' + el[i].innerHTML + '" target="_blank">Speed Test</a><br><hr>\r\r')
};
d.outerHTML = el.length + ' link on the ' + window.location.href + ' | <a href="https://twitter.com/mertazizoglu" target="_blank">@mertazizoglu</a>' + '<br><hr><hr>' + out;