package com.shinhan.frontendpractice.service;

import com.shinhan.frontendpractice.dto.PlayerDTO;
import com.shinhan.frontendpractice.mapper.PlayerMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PlayerService {

    private final PlayerMapper playerMapper;
    public PlayerDTO createPlayer() {
        PlayerDTO player = PlayerDTO.builder()
                .level(1)
                .maxHp(100)
                .currentHp(100)
                .maxDamage(25)
                .minDamage(1)
                .attackIntervalMs(4000)
                .accuracy(1)
                .criticalChance(5D)
                .criticalDamageMultiplier(1.00)
                .defense(1)
                .dodge(0.0)
                .build();
        playerMapper.insertPlayer(player);

        return player;
    }

    public PlayerDTO findPlayerById(Long playerId) {
        return playerMapper.selectPlayerById(playerId);
    }

    public List<PlayerDTO> findAllPlayers() {
        return playerMapper.selectAllPlayers();
    }
}
