## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
*userの認証機能にはdeviseを使用するため、deviseで生成されるカラムは省略

### Association
- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index :true|

### Association
- has_many :users_groups
- has_many :messages
- has_many :users, through: :users_groups

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|text|text|
|image|string|

### Association
- belongs_to :group
- belongs_to :user