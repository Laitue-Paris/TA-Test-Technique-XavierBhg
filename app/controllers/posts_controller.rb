class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update]

  def show
    @comment = Comment.new
    @comments = @post.comments
    @react = React.new
  end

  def update
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end
end
