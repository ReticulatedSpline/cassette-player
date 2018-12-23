# -*- coding: utf-8 -*-
import os, sys
from os import listdir
from os.path import isfile, join
from mutagen.id3 import ID3

print("Generating song list...")

manifest = open("manifest.js","w")
artists = []
titles = []
files = []
count = 0

# Get file paths, artists, and titles
path = sys.path[0] + "/resources/music"
for file in listdir(path):
    count += 1
    mp3file = path + "/" + file
    tags = ID3(str(mp3file))

    files.append("\t\"" + str(mp3file) + "\",\n")
    titles.append("\t\"" + str(tags["TIT2"].text[0]) + "\",\n")
    artists.append("\t\"" + str(tags['TPE1'].text[0]) + "\",\n")

manifest.write("var song_files = [\n")
for file in files:
    manifest.write(file)
manifest.write("]\n\n")

manifest.write("var song_titles = [\n")
for title in titles:
    manifest.write(title)
manifest.write("]\n\n")

manifest.write("var song_artists = [\n")
for artist in artists:
    manifest.write(artist)
manifest.write("]\n\n")
print("Done!")
