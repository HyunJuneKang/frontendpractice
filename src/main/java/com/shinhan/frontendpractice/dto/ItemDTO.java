package com.shinhan.frontendpractice.dto;

import lombok.Getter;
import lombok.Setter;
@Setter@Getter
public class ItemDTO {
    private Long itemId;
    private String itemName;
    private String itemType;
    private String description;
    private Long sellPrice;
}
