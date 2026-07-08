package com.shinhan.frontendpractice.dto;
import lombok.Data;

@Data
public class SkillActionDTO {
    private Long actionId;
    private String skillType;
    private String actionName;
    private Integer requiredLevel;
    private Integer requiredTimeMs;
    private Integer gainExp;
    private Long gainItemId;
    private Integer gainItemAmount;
}