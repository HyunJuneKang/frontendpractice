package com.shinhan.frontendpractice.controller;

import com.shinhan.frontendpractice.dto.PlayerDTO;
import com.shinhan.frontendpractice.service.PlayerService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/players")
@RequiredArgsConstructor
public class PlayerController {
    private final PlayerService playerService;
    //플레이어 생성 -> 세션 생성
    @PostMapping
    public PlayerDTO createPlayer(HttpSession session){
        PlayerDTO player = playerService.createPlayer();
        session.setAttribute("currentPlayerId", player.getPlayerId());
        return player;
    }
    //플레이어 모두 조회
    @GetMapping("/list")
    public List<PlayerDTO> getPlayers(){
        return playerService.findAllPlayers();
    }
    //플레이어 조회 -> 세션 생성
    @PostMapping("/{id}/select")
    public PlayerDTO selectPlayer(
            @PathVariable Long id,
            HttpSession session) {
        PlayerDTO player = playerService.findPlayerById(id);
        session.setAttribute("currentPlayerId", player.getPlayerId());
        return player;
    }
}
