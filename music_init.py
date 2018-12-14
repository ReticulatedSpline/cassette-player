# -*- coding: utf-8 -*-

from os import listdir
from os.path import isfile, join
mypath = "resources/music"
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
file = open("manifest.dat","w")
for filename in onlyfiles:
    file.write(str(filename) + "\n")
