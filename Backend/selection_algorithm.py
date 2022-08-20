import json

#loading json files
def load_json(name):
    return json.load(open(name))




def main():

    #loading data files
    accessories = load_json('accessories.json')
    bottoms = load_json('bottoms.json')
    jackets = load_json('jackets.json')
    overalls = load_json('overalls.json')
    tops = load_json('tops.json')


