json.extract! api_university, :id, :name, :year_built, :number_students, :private, :accredited
json.url api_university_url(api_university, format: :json)
