package com.chosensolutions.cusbe.config;

import com.chosensolutions.cusbe.services.user.UserService;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private UserService userDetailsService;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public SecurityConfig(UserService userDetailsService, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userDetailsService = userDetailsService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(userDetailsService)
                .passwordEncoder(bCryptPasswordEncoder);

        auth
                .inMemoryAuthentication()
                .withUser("yichen")
                .password("{noop}yichen")
                .roles("USER");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // JS and CSS
        http
                .authorizeRequests()
                .antMatchers("/webjars/**", "/js/**", "/css/**", "/images/**")
                .permitAll();

        // Public pages that anyone can view
        http
                .authorizeRequests()
                .antMatchers("/landing", "/about", "/terms", "/api/**", "/api/v2/**")
                .permitAll()
        .anyRequest().authenticated().and().addFilter(getAuthenticationFilter());


        http.csrf().disable();
    }

    // change the default URL from /login to /api/auth/login
    // https://www.udemy.com/restful-web-service-with-spring-boot-jpa-and-mysql/learn/lecture/10210344#overview
    public AuthenticationFilter getAuthenticationFilter() throws Exception {
        final AuthenticationFilter filter = new AuthenticationFilter(authenticationManager());
        filter.setFilterProcessesUrl("/api/auth/login");
        return filter;
    }

}