class University < ApplicationRecord
  validates_presence_of :name

  def student_info
    "#{self.name} has #{self.number_students} students"
  end
end
