import requests
from bs4 import BeautifulSoup as BS #NEEDS TO BE INCLUDED IN ENVIRONMENT LATER IN HTML


def getdata(url):
    r = requests.get(url)
    return r.text

def getWeather(country, city):
    address = "https://www.timeanddate.com/weather/" + country + "/" + city
    htmldata = getdata(address)
    soup = BS(htmldata, 'html.parser')

    #getting temperature
    s = soup.find('div', class_='h2')
    temperature_text = s.text
    temperature = int(temperature_text[:-2]) #integer value of temperature in celcius
    
    s = soup.find_all('p')
    
    #getting physical temperature
    physical_temp = (s[1].text)[s[1].text.find(":")+2:s[1].text.find("Forecast")-2]
    physical_temp = int(physical_temp)

    #getting weather status
    weather = (s[0].text)[:-1].lower()
    # print(weather)


    # print(temperature, physical_temp, weather)
    return temperature, physical_temp, weather




# getWeather("canada", "toronto")