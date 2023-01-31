package com.isf6.backend.domain.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class UserLive {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "useLive_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "liveRoom_id")
    private LiveRoom liveRoom;
}