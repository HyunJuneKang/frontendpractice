package com.shinhan.frontendpractice.controller;

import com.shinhan.frontendpractice.dto.SkillActionDTO;
import com.shinhan.frontendpractice.service.SkillActionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
@RequiredArgsConstructor
public class SkillActionController {
    private final SkillActionService skillActionService;

    @GetMapping
    public List<SkillActionDTO> selectAll() {
        return skillActionService.selectAllService();
    }

    @GetMapping("/{skillType}")
    public List<SkillActionDTO> selectBySkillType(@PathVariable String skillType) {
        return skillActionService.selectBySkillTypeService(skillType);
    }
}