package com.shinhan.frontendpractice.interceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class GameSessionInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(
            HttpServletRequest request,
            HttpServletResponse response,
            Object handler ) throws Exception {

        HttpSession session = request.getSession(false);

        boolean hasPlayer = session != null && session.getAttribute("currentPlayerId") != null;

        if (hasPlayer) {
            return true;
        }

        String uri = request.getRequestURI();

        if (uri.startsWith("/games/")) {
            response.sendError(
                    HttpServletResponse.SC_UNAUTHORIZED,
                    "선택된 플레이어가 없습니다."
            );
        } else {
            response.sendRedirect("/");
        }

        return false;
    }
}