Rails.application.routes.draw do
  root 'pages#index'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  
  resources :users, only: [:create, :show, :index] 
  resources :tasks, only: [:create, :show, :index, :destroy, :update]
  

  get '*path', to:'pages#index', vias: :all
end