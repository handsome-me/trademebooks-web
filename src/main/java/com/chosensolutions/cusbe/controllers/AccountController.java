package com.chosensolutions.cusbe.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

@Controller
public class AccountController {

    @RequestMapping("/account")
    public String accountEditPage() {
        return "account/account.edit";
    }

    @RequestMapping("/user")
    public Principal user(Principal principal) {
        return principal;
    }


}