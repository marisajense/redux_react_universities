10.times do
  University.create(name: Faker::University.name,
                    number_students: Faker::Number.between(50, 5000),
                    private: [true, false].sample,
                    accredited: [true, false].sample,
                    year_built: Faker::Date.between(20.years.ago, Date.today))
end

puts "Universities Seeded!"
