create table item
(
    item_id     bigint auto_increment
        primary key,
    item_name   varchar(100)     not null,
    item_type   varchar(30)      not null,
    description varchar(500)     null,
    sell_price  bigint default 0 not null,
    constraint chk_item_sell_price
        check (`sell_price` >= 0)
)
    collate = utf8mb3_unicode_ci;

INSERT INTO frontendpractice.item (item_id, item_name, item_type, description, sell_price) VALUES (51, '참나무 원목', 'MATERIAL', '참나무를 베어 얻은 원목이다.', 10);
INSERT INTO frontendpractice.item (item_id, item_name, item_type, description, sell_price) VALUES (52, '야자나무 원목', 'MATERIAL', '야자나무를 베어 얻은 원목이다.', 20);
INSERT INTO frontendpractice.item (item_id, item_name, item_type, description, sell_price) VALUES (53, '트리 원목', 'MATERIAL', '트리를 베어 얻은 원목이다.', 35);
INSERT INTO frontendpractice.item (item_id, item_name, item_type, description, sell_price) VALUES (54, '침엽수 원목', 'MATERIAL', '침엽수를 베어 얻은 원목이다.', 50);
INSERT INTO frontendpractice.item (item_id, item_name, item_type, description, sell_price) VALUES (61, '강 물고기', 'MATERIAL', '강에서 낚은 평범한 물고기이다.', 10);
INSERT INTO frontendpractice.item (item_id, item_name, item_type, description, sell_price) VALUES (62, '연못 물고기', 'MATERIAL', '연못에서 낚은 물고기이다.', 18);
INSERT INTO frontendpractice.item (item_id, item_name, item_type, description, sell_price) VALUES (63, '바다 물고기', 'MATERIAL', '바다에서 낚은 물고기이다.', 35);
INSERT INTO frontendpractice.item (item_id, item_name, item_type, description, sell_price) VALUES (64, '심해어', 'MATERIAL', '심해에서 낚은 희귀한 물고기이다.', 70);
INSERT INTO frontendpractice.item (item_id, item_name, item_type, description, sell_price) VALUES (71, '돌', 'MATERIAL', '채광을 통해 얻은 평범한 돌이다.', 10);
INSERT INTO frontendpractice.item (item_id, item_name, item_type, description, sell_price) VALUES (72, '구리 광석', 'MATERIAL', '채광을 통해 얻은 구리 광석이다.', 18);
INSERT INTO frontendpractice.item (item_id, item_name, item_type, description, sell_price) VALUES (73, '철 광석', 'MATERIAL', '채광을 통해 얻은 철 광석이다.', 35);
INSERT INTO frontendpractice.item (item_id, item_name, item_type, description, sell_price) VALUES (74, '금 광석', 'MATERIAL', '채광을 통해 얻은 귀한 금 광석이다.', 70);
INSERT INTO frontendpractice.item (item_id, item_name, item_type, description, sell_price) VALUES (81, '구운 생선', 'FOOD', '생선을 구워 만든 음식이다.', 15);
INSERT INTO frontendpractice.item (item_id, item_name, item_type, description, sell_price) VALUES (82, '새우 요리', 'FOOD', '새우를 이용해 만든 음식이다.', 30);
INSERT INTO frontendpractice.item (item_id, item_name, item_type, description, sell_price) VALUES (83, '스테이크', 'FOOD', '고기를 구워 만든 스테이크이다.', 55);
INSERT INTO frontendpractice.item (item_id, item_name, item_type, description, sell_price) VALUES (84, '특제 요리', 'FOOD', '여러 재료를 사용해 만든 특별한 요리이다.', 100);
