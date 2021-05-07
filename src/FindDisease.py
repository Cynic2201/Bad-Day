# -*- coding: utf-8 -*-
"""
Created on Sat May  1 19:12:23 2021

@author: sanch
"""

# -*- coding: utf-8 -*-
"""
Created on Sun Mar 28 15:18:12 2021

@author: sanch
"""
import pandas as pd
import sys

file =('US_FIPS_Codes.xls')
state_df = pd.read_excel(file, header=1)

returnstring = ""
disease = sys.argv[1]
stateName = sys.argv[2]

data = [
        ['septicemia_a40_a41', 'Sepsis'],
        ['malignant_neoplasms_c00_c97', 'Cancer'],
        ['diabetes_mellitus_e10_e14', 'Diabetes'],
        ['alzheimer_disease_g30', 'Alzheimer'],
        ['influenza_and_pneumonia_j09_j18', 'Flu'],
        ['chronic_lower_respiratory', 'CLRD'],
        ['nephritis_nephrotic_syndrome', 'Kidney Disease'],
        ['diseases_of_heart_i00_i09', 'Heart Disease'],
        ['cerebrovascular_diseases', 'Stroke'],
        ['covid_19_u071_underlying_cause_of_death', 'Covid']
        ];

disease_df = pd.DataFrame(data, columns = ['columns', 'Name'])

state_df = (state_df[state_df['State'].str.match(stateName)])
stateFIPS = str(state_df.iloc[0]['FIPS State'])

if len(stateFIPS) < 2:
    stateFIPS = "0" + stateFIPS[0:]

stateName = stateName.replace(" ", "+")

url = "https://data.cdc.gov/resource/muzy-jte6.csv?jurisdiction_of_occurrence={}&mmwryear=2020".format(stateName);
data_df = pd.read_csv(url, usecols=list(disease_df['columns']))
#print(disease_df)

host = "https://api.census.gov/data/2019/pep/charagegroups?get=POP&for=state:{}".format(stateFIPS)
df = pd.read_json(host)
state_pop = int(df.iloc[1][0]);

for (columnName, columnData) in data_df.iteritems():
    a = columnData.values.sum()
    stat = str((a / state_pop) * 100)
    stat += ", "
    returnstring += stat
    
print(returnstring)

