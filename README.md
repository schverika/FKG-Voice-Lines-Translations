# FKG-Voice-Lines-Translations
Repository for the community-made translations for the game Flower Knight Girl, we are trying to compile and/or translate all the voice lines in-game. We need all possible help for this, feel free to bring us your hand.

Link to JP wiki character list: http://xn--eckq7fg8cygsa1a1je.xn--wiki-4i9hs14f.com/index.php?%E5%9B%B3%E9%91%91

Open the section under "図鑑" click on waifu, open the ボイス section to find voice lines (directions courtesy of Schverika's Discord post 11/30/17)

If you want to do seasonal lines, "scroll down to the 期間限定ボイス subsection with year stamps" (also Schverika)

=== Using jq to selectively read JSON

jq: https://stedolan.github.io/jq/

Setup: download that, rename it to "jq.exe", put it in a suitable folder, add that folder to your PATH environment variable.

After that, you can do things like this to quickly look up something specific:

``
cd Flower\ Knights
jq '.translations."Lily Rubellum" | keys' Lily\ Rubellum.json
jq '.translations."Lily Rubellum"."Winter 3"' Lily\ Rubellum.json
``