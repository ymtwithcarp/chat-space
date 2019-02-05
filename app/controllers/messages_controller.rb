class MessagesController < ApplicationController
  def index
    @message = Message.new
  end
  def create
    message = Message.create(messsage_params)
    redirect_to "message/index"
  end

  private
  def message_params
    params.require(:message).permit(content:, image:)
  end
end
