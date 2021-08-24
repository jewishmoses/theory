from django.shortcuts import render

import os
import json
import random


def home(request):
    return render(request, 'home.html')


def question(request):

    pwd = os.path.dirname(__file__)
    file = open(pwd + '/db.json', 'r')
    data = json.load(file)
    item = random.choice(data)

    return render(request, 'question.html', {'item': item})
