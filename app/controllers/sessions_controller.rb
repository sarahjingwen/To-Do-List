class SessionsController < ApplicationController

	#This handles the user login 
	def create
		@user = User.find_by(username: session_params[:username])

		if @user && @user.authenticate(session_params[:password])
			login!
			render json: { logged_in: true, user: UserSerializer.new(@user). serializable_hash}
		else
			render json: { status: 401, errors: ['No such user, please try again']}
		end
	end

	def is_logged_in?
		if logged_in? && current_user
			render json: { logged_in: true, user: UserSerializer.new(current_user). serializable_hash}
		else
			render json: { status: 200, logged_in: false}
		end
	end

	# This handles user log out.
	def destroy
		logout!
		render json: {status:200, logged_in:false}
	end

	private

	def session_params
		params.require(:user).permit(:username, :password)
	end
end
