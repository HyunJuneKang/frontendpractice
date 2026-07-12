create table player_inventory
(
    player_id bigint           not null,
    item_id   bigint           not null,
    quantity  bigint default 0 not null,
    primary key (player_id, item_id),
    constraint fk_player_inventory_item
        foreign key (item_id) references item (item_id),
    constraint fk_player_inventory_player
        foreign key (player_id) references player (player_id)
)
    collate = utf8mb3_unicode_ci;

