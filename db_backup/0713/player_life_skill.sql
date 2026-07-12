create table player_life_skill
(
    player_id   bigint           not null,
    skill_type  varchar(30)      not null,
    skill_level int    default 1 not null,
    skill_exp   bigint default 0 not null,
    primary key (player_id, skill_type),
    constraint fk_player_life_skill_player
        foreign key (player_id) references player (player_id)
            on delete cascade,
    constraint chk_player_life_skill_exp
        check (`skill_exp` >= 0),
    constraint chk_player_life_skill_level
        check (`skill_level` >= 1)
)
    collate = utf8mb3_unicode_ci;

