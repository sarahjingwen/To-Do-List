class UsersController < ApplicationController

	def index
        @users = User.all
           if @users
              render json: UserSerializer.new(@users).serializable_hash
          else
              render json: {status: 500, errors: ['No users found']}
         end
    end

	#This action shows the user his/her page
	def show
		@user = User.find(params[:id])
		if @user
			render json: UserSerializer.new(@user). serializable_hash
		else
			render json: {status: 500, errors: ['User not found']}
		end
	end

	# This action handles creating a new account
	def create
		@user = User.new(user_params)
		if @user.save
			login!
			render json: {logged_in: true, user: UserSerializer.new(@user).serializable_hash}
        else
        	render json: {
                status: 500,
                errors: @user.errors.full_messages
            }
        end
	end

	private

	def user_params
		params.require(:user).permit(:username, :email, :password, :password_confirmation)
	end
end