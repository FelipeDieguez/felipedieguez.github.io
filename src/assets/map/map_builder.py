import folium
import json

with open('portfolio.json', 'r', encoding='utf-8') as arquivo:
  data = json.load(arquivo)

map_1 = folium.Map(location=[-15.857114225923164, -47.87313174137835], zoom_start=4)

language = "en"

for data_item in data["projects"]:
    latitude = data_item["locate"].split(",")[0]
    longitude = data_item["locate"].split(",")[1]
    city = data_item["city"]
    area = data_item["area"]
    categories_list = data_item["categories"]

    if language == "pt":
      categories = ", ".join(categories_list)
      if area == 0:
        area = "Não informado"
      html = (
          "<i>Cidade: {}</i><br>"
          "<i>Tipo de Projeto: {}</i><br>"
          "<i>Metragem: {} m²</i>"
      ).format(city, categories, area)
    elif language == "en":
      #Translate to English
      for i, category in enumerate(categories_list):
        if category == "Concreto Armado":
          categories_list[i] = "Reinforced Concrete Structure"
        elif category == "Estrutura Metálica":
          categories_list[i] = "Steel Structure"
        elif category == "Alvenaria Estrutural":
          categories_list[i] = "Load Bearing Masonry Structure"
      categories = ", ".join(categories_list)
      if area == 0:
        area = "Not specified"
      html = (
          "<i>City: {}</i><br>"
          "<i>Project Type: {}</i><br>"
          "<i>Footage: {} m²</i>"
      ).format(city, categories, area)

    popup = folium.Popup(html, max_width=400, min_width=300)

    folium.Marker([latitude, longitude],
    popup=popup,
    icon=folium.Icon(color="blue", icon_color="white", icon='info-sign')).add_to(map_1)

if language == "pt":
  map_1.save("projects-pt.html")
elif language == "en":
  map_1.save("projects-en.html")
print("SALVO")
