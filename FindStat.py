# -*- coding: utf-8 -*-
"""
Created on Sun Apr 11 17:53:03 2021

@author: sanch
"""

import pandas as pd;
import json


def changeString(name):
        name = name.replace(" ", "+")
        return name


def main(Disaster, stateName):
    
    file =('US_FIPS_Codes.xls')
    state_df = pd.read_excel(file, header=1)


    state_df = (state_df[state_df['State'].str.match(stateName)])
    stateFIPS = str(state_df.iloc[0]['FIPS State'])

    disasterCode = changeString(Disaster)
    stateCode = changeString(stateName).upper()

    url  = 'https://www.ncdc.noaa.gov/stormevents/csv?eventType=%28C%29+{}&beginDate_mm=11&beginDate_dd=01&beginDate_yyyy=2019&endDate_mm=11&endDate_dd=30&endDate_yyyy=2020&county=ALL&hailfilter=0.00&tornfilter=0&windfilter=000&sort=DT&submitbutton=Search&statefips={}%2C{}'.format(disasterCode, stateFIPS, stateCode)
    weather_df = pd.read_csv(url, usecols =["CZ_NAME_STR", "DEATHS_DIRECT", "INJURIES_DIRECT"])

    deaths = weather_df['DEATHS_DIRECT'].sum()
    injuries = weather_df['INJURIES_DIRECT'].sum()

    if len(stateFIPS) < 2:
        stateFIPS = "0" + stateFIPS[0:]

    host = "https://api.census.gov/data/2019/pep/charagegroups?get=POP&for=state:{}".format(stateFIPS)
    df = pd.read_json(host)
    state_pop = int(df.iloc[1][0]);
    print("population: ", state_pop)

    chance_death = (deaths / state_pop) * 100
    chance_injure = (injuries / state_pop) * 100
    
    report = json.dumps([chance_death, chance_injure])
    
    return report
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    












