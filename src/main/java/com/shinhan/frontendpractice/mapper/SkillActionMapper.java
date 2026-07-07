package com.shinhan.frontendpractice.mapper;

import com.shinhan.frontendpractice.dto.SkillActionDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SkillActionMapper {
    List<SkillActionDTO> selectAll();
    List<SkillActionDTO> selectBySkillType(String skillType);
}