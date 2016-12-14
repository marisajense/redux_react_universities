class CreateUniversities < ActiveRecord::Migration[5.0]
  def change
    create_table :universities do |t|
      t.string :name, null: false
      t.string :year_built
      t.boolean :private, default: false
      t.integer :number_students
      t.boolean :accredited, default: true

      t.timestamps
    end
  end
end
