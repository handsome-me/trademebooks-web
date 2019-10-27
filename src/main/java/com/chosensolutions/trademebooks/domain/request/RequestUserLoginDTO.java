package com.chosensolutions.trademebooks.domain.request;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
public class RequestUserLoginDTO {

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;

}
