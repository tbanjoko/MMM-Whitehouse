#!/usr/bin/python3
from bs4 import BeautifulSoup                                             
import requests                                                           

#Python3 Parser by Tami Banjoko
url=requests.get("https://www.whitehouse.gov/presidential-actions/")      
src=url.content                                                           
soup = BeautifulSoup(src, 'lxml')
for h2_tag in soup.findAll('h2'):
    a_tag = h2_tag.find('a')
    print(a_tag.string)

