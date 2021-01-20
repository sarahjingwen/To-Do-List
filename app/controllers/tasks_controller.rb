class TasksController < ApplicationController
	before_action :authenticate

	def index
		tasks = current_user.tasks

		render json: TaskSerializer.new(tasks).serializable_hash
	end

	def show
		task = current_user.tasks.find_by(id: params[:id])

		render json: TaskSerializer.new(task).serializable_hash
	end

	def create
		task = current_user.tasks.new(task_params)

		if task.save
			render json: TaskSerializer.new(task).serializable_hash
		else
			render json: {error: task.errors.messages}, status: 422
		end
	end

	def update
		task = current_user.tasks.find_by(id: params[:id])

		if task
			if task.update(task_params)
				render json: TaskSerializer.new(task).serializable_hash
			else
				render json: { error: task.errors.messages }, status: 422
			end
		else
			render json: { error: "Task not found" }, status: 500
		end
	end

	def destroy
		task = current_user.tasks.find_by(id: params[:id])
		if task
			if task.destroy
				head :no_content
			else
				render json: { error: task.errors.messages }, status: 422
			end
		else
			render json: { error: "Task not found" }, status: 500
		end
	end

	def complete
		task = current_user.tasks.find_by(id: params[:id])
		if task
			task.completed = true
		else
			render json: { error: "Task not found" }, status: 500
		end
	end

	private
	
	def task_params
		params.require(:task).permit(:title, :description, :duedate, :category, :user_id, :completed)
	end
end