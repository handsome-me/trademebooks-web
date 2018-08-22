package com.chosensolutions.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "schools")
public class School {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private String id;

    @Column(name = "school_name")
    private String name;

    @Column
    private String shortName;

    @Column
    private String code;

}
