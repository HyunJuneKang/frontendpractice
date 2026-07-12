create table player
(
    player_id                  bigint auto_increment
        primary key,
    level                      int           default 1    not null,
    current_hp                 int           default 50   not null,
    max_hp                     int           default 50   not null,
    min_damage                 int           default 1    not null,
    max_damage                 int           default 25   not null,
    attack_interval_ms         int           default 1000 not null,
    accuracy                   int           default 1    not null,
    critical_chance            decimal(5, 2) default 5.00 not null,
    critical_damage_multiplier decimal(5, 2) default 1.50 not null,
    defense                    int           default 1    not null,
    dodge                      int           default 1    not null,
    constraint chk_player_accuracy
        check (`accuracy` >= 0),
    constraint chk_player_attack_interval
        check (`attack_interval_ms` > 0),
    constraint chk_player_critical_chance
        check (`critical_chance` >= 0 and `critical_chance` <= 100),
    constraint chk_player_critical_damage
        check (`critical_damage_multiplier` >= 1),
    constraint chk_player_damage
        check (`min_damage` >= 0 and `max_damage` >= `min_damage`),
    constraint chk_player_defense
        check (`defense` >= 0),
    constraint chk_player_dodge
        check (`dodge` >= 0),
    constraint chk_player_hp
        check (`max_hp` > 0 and `current_hp` >= 0 and `current_hp` <= `max_hp`),
    constraint chk_player_level
        check (`level` >= 1)
)
    collate = utf8mb3_unicode_ci;

INSERT INTO frontendpractice.player (player_id, level, current_hp, max_hp, min_damage, max_damage, attack_interval_ms, accuracy, critical_chance, critical_damage_multiplier, defense, dodge) VALUES (1, 1, 100, 100, 1, 25, 4000, 1, 5.00, 1.00, 1, 0);
