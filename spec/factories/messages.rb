FactoryBot.define do
  factory :message do
    group_id {1}
    user_id  {1}
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/images/no_image.jpg")}
  end
end