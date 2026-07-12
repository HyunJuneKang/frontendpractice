create table player_combat_skill
(
    player_id       bigint not null,
    combat_skill_id bigint not null,
    skill_level     int    not null,
    skill_exp       bigint not null,
    primary key (player_id, combat_skill_id),
    constraint fk_player_combat_skill_player
        foreign key (player_id) references player (player_id)
            on delete cascade,
    constraint fk_player_combat_skill_skill
        foreign key (combat_skill_id) references combat_skill (combat_skill_id),
    constraint chk_player_combat_skill_exp
        check (`skill_exp` >= 0),
    constraint chk_player_combat_skill_level
        check (`skill_level` >= 1)
)
    collate = utf8mb3_unicode_ci;

