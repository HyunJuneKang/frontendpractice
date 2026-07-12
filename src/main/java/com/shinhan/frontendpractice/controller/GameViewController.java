package com.shinhan.frontendpractice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.SessionAttribute;

@Controller
public class GameViewController {

    @GetMapping("/game")
    public String gamePage( @SessionAttribute( value = "currentPlayerId",  required = false ) Long playerId ) {
        if (playerId == null) {
            return "redirect:/";
        }
        return "game";
    }
}