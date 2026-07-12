package com.shinhan.frontendpractice.mapper;

import com.shinhan.frontendpractice.dto.PlayerDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PlayerMapper {
    int insertPlayer(PlayerDTO player);
    PlayerDTO selectPlayerById(Long playerId);
    List<PlayerDTO> selectAllPlayers();
}
