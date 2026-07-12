create table combat_skill
(
    combat_skill_id bigint                     not null
        primary key,
    description     varchar(50) charset latin1 null,
    required_level  int           default 1    not null,
    cooldown_ms     int           default 0    not null,
    damage_ratio    decimal(6, 2) default 1.00 not null,
    constraint chk_combat_skill_cooldown_ms
        check (`cooldown_ms` >= 0),
    constraint chk_combat_skill_damage_ratio
        check (`damage_ratio` >= 0),
    constraint chk_combat_skill_required_level
        check (`required_level` >= 1)
)
    collate = utf8mb3_unicode_ci;

