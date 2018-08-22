package com.chosensolutions.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AccountController {

    @RequestMapping("/account/edit")
    public String accountEditPage() {
        return "account/account.edit";
    }
    
}