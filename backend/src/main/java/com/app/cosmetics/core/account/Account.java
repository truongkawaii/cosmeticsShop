package com.app.cosmetics.core.account;

import com.app.cosmetics.core.base.BaseEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
@Getter
@Setter
public class Account extends BaseEntity {
    @Column(unique = true)
    private String username;

    private String password;

    @Email
    @Column(unique = true)
    private String email;

    @NotBlank
    private String firstName;

    private String lastName;

    private String address;

    private String avatar;
}
