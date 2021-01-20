class TaskSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :description, :duedate, :category, :completed, :user_id
end