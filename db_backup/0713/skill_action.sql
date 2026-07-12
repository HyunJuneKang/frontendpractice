create table skill_action
(
    action_id        bigint auto_increment
        primary key,
    skill_type       varchar(30)  not null,
    action_name      varchar(100) not null,
    required_level   int          not null,
    required_time_ms int          null,
    gain_exp         int          not null,
    gain_item_id     bigint       not null,
    gain_item_amount int          not null
)
    collate = utf8mb4_unicode_ci;

INSERT INTO frontendpractice.skill_action (action_id, skill_type, action_name, required_level, required_time_ms, gain_exp, gain_item_id, gain_item_amount) VALUES (1, 'woodcutting', '참나무베기', 1, 3000, 10, 51, 1);
INSERT INTO frontendpractice.skill_action (action_id, skill_type, action_name, required_level, required_time_ms, gain_exp, gain_item_id, gain_item_amount) VALUES (2, 'woodcutting', '야자수베기', 10, 3000, 20, 52, 1);
INSERT INTO frontendpractice.skill_action (action_id, skill_type, action_name, required_level, required_time_ms, gain_exp, gain_item_id, gain_item_amount) VALUES (3, 'woodcutting', '트리베기', 20, 3000, 30, 53, 1);
INSERT INTO frontendpractice.skill_action (action_id, skill_type, action_name, required_level, required_time_ms, gain_exp, gain_item_id, gain_item_amount) VALUES (4, 'woodcutting', '침엽수베기', 30, 3000, 40, 54, 1);
INSERT INTO frontendpractice.skill_action (action_id, skill_type, action_name, required_level, required_time_ms, gain_exp, gain_item_id, gain_item_amount) VALUES (11, 'fishing', '강낚시', 1, 3000, 10, 61, 1);
INSERT INTO frontendpractice.skill_action (action_id, skill_type, action_name, required_level, required_time_ms, gain_exp, gain_item_id, gain_item_amount) VALUES (12, 'fishing', '연못낚시', 5, 3000, 18, 62, 1);
INSERT INTO frontendpractice.skill_action (action_id, skill_type, action_name, required_level, required_time_ms, gain_exp, gain_item_id, gain_item_amount) VALUES (13, 'fishing', '바다낚시', 12, 3000, 35, 63, 1);
INSERT INTO frontendpractice.skill_action (action_id, skill_type, action_name, required_level, required_time_ms, gain_exp, gain_item_id, gain_item_amount) VALUES (14, 'fishing', '심해낚시', 25, 3000, 70, 64, 1);
INSERT INTO frontendpractice.skill_action (action_id, skill_type, action_name, required_level, required_time_ms, gain_exp, gain_item_id, gain_item_amount) VALUES (21, 'mining', '돌 채광', 1, 3000, 10, 71, 1);
INSERT INTO frontendpractice.skill_action (action_id, skill_type, action_name, required_level, required_time_ms, gain_exp, gain_item_id, gain_item_amount) VALUES (22, 'mining', '구리 채광', 5, 3000, 18, 72, 1);
INSERT INTO frontendpractice.skill_action (action_id, skill_type, action_name, required_level, required_time_ms, gain_exp, gain_item_id, gain_item_amount) VALUES (23, 'mining', '철 채광', 12, 3000, 35, 73, 1);
INSERT INTO frontendpractice.skill_action (action_id, skill_type, action_name, required_level, required_time_ms, gain_exp, gain_item_id, gain_item_amount) VALUES (24, 'mining', '금 채광', 25, 3000, 70, 74, 1);
INSERT INTO frontendpractice.skill_action (action_id, skill_type, action_name, required_level, required_time_ms, gain_exp, gain_item_id, gain_item_amount) VALUES (31, 'cooking', '생선 굽기', 1, 3000, 10, 81, 1);
INSERT INTO frontendpractice.skill_action (action_id, skill_type, action_name, required_level, required_time_ms, gain_exp, gain_item_id, gain_item_amount) VALUES (32, 'cooking', '새우 요리', 5, 3000, 18, 82, 1);
INSERT INTO frontendpractice.skill_action (action_id, skill_type, action_name, required_level, required_time_ms, gain_exp, gain_item_id, gain_item_amount) VALUES (33, 'cooking', '스테이크 굽기', 12, 3000, 35, 83, 1);
INSERT INTO frontendpractice.skill_action (action_id, skill_type, action_name, required_level, required_time_ms, gain_exp, gain_item_id, gain_item_amount) VALUES (34, 'cooking', '특제 요리', 25, 3000, 70, 84, 1);
