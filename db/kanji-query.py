import random
from flask import Flask
from flask_pymongo import pymongo
from dotenv import load_dotenv
from bson.objectid import ObjectId
import json
import os
load_dotenv()

AURI = os.getenv("ATLAS_URI")

app = Flask(__name__)
client = pymongo.MongoClient(AURI)

# Database
Db = client.get_database('kanji')
# Table
KanjiDB = Db.kanji

@app.route('/find/', methods=['GET'])
def findOne():
    num = random.randrange(1, 2134)
    kanji = KanjiDB.find_one({"number" : num})
    kanji['_id'] = str(ObjectId()) # convert ObjectId() into string
    return kanji

if __name__ == '__main__':
    app.run(port=10000)