class Message < ApplicationRecord
  validates :content, presence: true, unless: :image?
  # validates :user_id, presence: true
  # validates :group_id, presence: true
end
