Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    resources :universities
  end

# NO ROUTES BELOW THIS
  get '*unmatched_route', to: 'home#index'

end
