package com.shinhan.frontendpractice.service;

import com.shinhan.frontendpractice.dto.SkillActionDTO;
import com.shinhan.frontendpractice.mapper.SkillActionMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SkillActionService {
    private final SkillActionMapper skillActionMapper;

    public List<SkillActionDTO> selectAllService() {
        return skillActionMapper.selectAll();
    }

    public List<SkillActionDTO> selectBySkillTypeService(String skillType) {
        return skillActionMapper.selectBySkillType(skillType);
    }
}
