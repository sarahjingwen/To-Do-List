class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :username

  has_many :tasks
end
