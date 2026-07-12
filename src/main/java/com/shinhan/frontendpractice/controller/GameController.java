package com.shinhan.frontendpractice.controller;

import com.shinhan.frontendpractice.dto.PlayerDTO;
import com.shinhan.frontendpractice.service.PlayerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

@RestController
@RequiredArgsConstructor
@RequestMapping("/games")
public class GameController {

    private final PlayerService playerService;

    @GetMapping("/current")
    public PlayerDTO loadCurrentGame(@SessionAttribute(value = "currentPlayerId", required = false ) Long playerId ) {
        if (playerId == null) {
            throw new IllegalStateException(
                    "선택된 플레이어가 없습니다."
            );
        }
        return playerService.findPlayerById(playerId);
    }
}