package com.shinhan.frontendpractice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlayerDTO {

    private Long playerId;
    private Integer level;

    private Integer minDamage;
    private Integer maxDamage;

    private Integer currentHp;
    private Integer maxHp;

    private Integer attackIntervalMs;
    private Integer accuracy;

    private Double criticalChance;
    private Double criticalDamageMultiplier;

    private Integer defense;
    private Double dodge;
}