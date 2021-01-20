class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description, default: ''
      t.date :duedate
      t.string :category, default: 'unclassified'
      t.boolean :completed, default: false
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
